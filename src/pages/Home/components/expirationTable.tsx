import {
  Box,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { IUsersProducts } from "../../../models/product";

interface ExpirationTableProps {
  products: IUsersProducts;
};

const ExpirationTable = ({ products }: ExpirationTableProps) => {
  return (
    <Grid container px={3} justifyContent="center">
      <Grid item xs={12} md={7}>
        <Box
          display="flex"
          sx={{ boxShadow: "0px 7px 15px 3px rgba(0,0,0,0.25)" }}
        >
          <TableContainer component={Paper}>
            <Table sx={{ maxWidth: 900 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell colSpan={2}>
                    <Typography variant="body2" fontWeight={600}>
                      Atualmente você possui produtos que expiram:
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    Em até 1 semana
                  </TableCell>
                  <TableCell align="left" sx={{ backgroundColor: products.expiresWithinWeek.length > 0 ? "#ffb2ae" : "#c8ebc8" }}>
                    <span style={{ fontWeight: "bold" }}>{products.expiresWithinWeek.length}</span> produtos
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    Entre 7 à 15 dias
                  </TableCell>
                  <TableCell align="left">
                    <span style={{ fontWeight: "bold" }}>{products.expiresBetweenOneAndTwoWeeks.length}</span> produto
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    Em mais de 15 dias
                  </TableCell>
                  <TableCell align="left">
                    <span style={{ fontWeight: "bold" }}>{products.expiresMoreThanTwoWeeks.length}</span> produtos
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ExpirationTable;
