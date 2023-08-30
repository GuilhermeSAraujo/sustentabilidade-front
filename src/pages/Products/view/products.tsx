import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/material';

const produtos = [
  {
    image: "https://www.jprembalagemsp.com.br/imagens/embalagem/embalagem-para-arroz-5kg-no-jardim-monte-kemel.jpg",
    name: 'Guilherme',
    expirationDate: new Date(),
    registrationDate: new Date(),
  },
  {
    image: "https://www.jprembalagemsp.com.br/imagens/embalagem/embalagem-para-arroz-5kg-no-jardim-monte-kemel.jpg",
    name: 'Gabriel',
    expirationDate: new Date(),
    registrationDate: new Date(),
  },
  {
    image: "https://www.jprembalagemsp.com.br/imagens/embalagem/embalagem-para-arroz-5kg-no-jardim-monte-kemel.jpg",
    name: 'Roberta',
    expirationDate: new Date(),
    registrationDate: new Date(),
  },
  {
    image: "https://www.jprembalagemsp.com.br/imagens/embalagem/embalagem-para-arroz-5kg-no-jardim-monte-kemel.jpg",
    name: 'Elvis',
    expirationDate: new Date(),
    registrationDate: new Date(),
  },
];

export default function Products() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650, backgroundColor: 'beige' }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Imagem produto</TableCell>
            <TableCell align="right">Nome</TableCell>
            <TableCell align="right">Data de Vencimento</TableCell>
            <TableCell align="right">Data de Cadastro</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {produtos.map((produto, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Box component='img' src={produto.image} sx={{ maxWidth: '15%', borderRadius: '15px'}} />
              </TableCell>
              <TableCell align="right">{produto.name}</TableCell>
              <TableCell align="right">{produto.expirationDate.toLocaleDateString()}</TableCell>
              <TableCell align="right">{produto.registrationDate.toLocaleDateString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
