import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';
import { Box } from '@mui/material';
import { Stack } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

//doc: https://mui.com/components/tables/

const Todolist = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [value, setValue] = React.useState('');
    const [value2, setValue2] = React.useState('');
    const [row, setRow] = React.useState(Math.round(value / value2));
    function createData(monat, betrag, gesamt) {
        return { monat, betrag, gesamt};
    }

    const calcLogic = function (value, value2) {
        setRow(Math.round(value / value2));
    };

    // const months = () => {
    //     let monat = [];
    //     for (let i = 1; i <= 12; i++) { logic for months } editing data for months that are uneven
    //         monat.push(i);
    //     }
    //     return monat;
    // };

    function assignValue() {
        setRow(value2);
    }

    // const Input = (event) => {
    //       if (event.key === 'Enter') {
    //         handleClose()
    //       }
    // }

    // https://stackoverflow.com/questions/31272207/to-call-onchange-event-after-pressing-enter-key


    function modalClick() {
        assignValue();
        handleClose();
    }


    const rows = [
        createData(row, Math.round(value / value2)), //Divides input trough month
    ];


   function handleKeyPress(e) {
        if (e.key === 'Enter') {
          handleClose()
        }
    }

    //Ineficient, but works / dont forget that Textfield has to be in focus
    function handleKeyPress2(e) {
        if (e.key === 'Enter') {
          handleOpen()
        }
    }
 

    return (
        <div>
            <h1> Calculator </h1>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <TextField placeholder="10€" onChange={event => setValue(event.target.value)} onKeyUp={handleKeyPress2} label="Betrag:" type="number" value={value} />
                <Button onClick={handleOpen} margin="normal">
                    Ok
                </Button>
            </Grid>

            <Modal open={open} onClose={handleClose} onKeyUp={handleKeyPress} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <TextField onChange={event => setValue2(event.target.value)} label="Monate" type="number" required="true" value={value2} />
                    <Stack spacing={2} direction="row">
                        <Button id="margin-normal" variant="contained" onClick={handleClose}>
                            Abbrechen
                        </Button>
                        <Button variant="text" onClick={event => modalClick() }> 
                        {/* setRow(event.target.value2) */}
                            Ok
                        </Button>
                    </Stack>
                </Box>
            </Modal>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }}>
                    <TableHead>
                        <TableRow>
                            <TableCell align="right">Gesamt Betrag</TableCell>
                            <TableCell align="right">Monate</TableCell>
                            <TableCell align="right">Betrag / Monat</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody >
                        {rows.map(row => (
                            <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                {/* <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell> */}
                                <TableCell align="right">{value}€</TableCell>
                                <TableCell align="right">{value2}</TableCell>
                                <TableCell align="right">{row.betrag}€</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <p>
                {' '}
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid consectetur ea est ex, exercitationem hic iusto
                molestias non, numquam quas quis quod ratione rem, tempora tempore totam unde voluptas.
            </p>
            <p>
                {' '}
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid consectetur ea est ex, exercitationem hic iusto
                molestias non, numquam quas quis quod ratione rem, tempora tempore totam unde voluptas.
            </p>
        </div>
    );
};

export default Todolist;
