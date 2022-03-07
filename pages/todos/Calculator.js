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

const Todolist = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [value, setValue] = React.useState('');
    const [value2, setValue2] = React.useState('');
    const [row, setRow] = React.useState(Math.round(value / value2));
    function createData(monat, betrag, aktiv) {
        return { monat, betrag, aktiv };
    }

    const rows = [
        createData(row, Math.round(value / value2)),
        createData('2', value),
        createData('3', value),
        createData('4', value),
        createData('5', value),
    ];

    return (
        <div>
            <h1> Calculator </h1>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <TextField onChange={event => setValue(event.target.value)} label="Betrag:" type="number" value={value} />
                <Button onClick={handleOpen} margin="normal">
                    Ok
                </Button>
            </Grid>
            <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <TextField onChange={event => setValue2(event.target.value)} label="Monate" type="number" value={value2} />
                    <Stack spacing={2} direction="row">
                        <Button id="margin-normal" variant="contained" onClick={handleClose}>
                            Abbrechen
                        </Button>
                        <Button variant="text" onClick={event => setRow(event.target.row)}>
                            Ok
                        </Button>
                    </Stack>
                </Box>
            </Modal>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }}>
                    <TableHead>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell align="right">Monat</TableCell>
                            <TableCell align="right">Betrag</TableCell>
                            <TableCell align="right">Aktiv</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(row => (
                            <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.monat}</TableCell>
                                <TableCell align="right">{row.betrag}</TableCell>
                                <TableCell align="right">{row.aktiv}</TableCell>
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
