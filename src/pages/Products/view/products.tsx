import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  image: string,
  name: string,
  expirationDate: Date,
  registrationDate: Date,
) {
  return { image, name, expirationDate, registrationDate };
}

const rows = [
  createData('Frozen yoghurt', "Garrafa de agua", new Date("2015-03-25"), new Date()),
  createData('Ice cream sandwich', "Pão de forma", new Date("2015-03-25"), new Date()),
  createData('Eclair', "Suco de uva", new Date("2015-03-25"), new Date()),
  createData('Cupcake', "Bala", new Date("2015-03-25"), new Date()),
  createData('Gingerbread', "Sucrilhos", new Date("2015-03-25"), new Date()),
];

export default function Products() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Imagem produto</TableCell>
            <TableCell align="right">Nome</TableCell>
            <TableCell align="right">Data de Vencimento&nbsp;(g)</TableCell>
            <TableCell align="right">Data de Cadastro&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.image}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.image}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.expirationDate.toLocaleDateString()}</TableCell>
              <TableCell align="right">{row.registrationDate.toLocaleDateString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
