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
    Typography
} from "@mui/material";

const ExpirationTable = () => {
  return (
    <Grid container px={3} justifyContent='center'>
      <Grid item xs={12} md={6}>
        <Box
          display="flex"
          sx={{ boxShadow: "0px 7px 15px 3px rgba(0,0,0,0.25)" }}
        >
          <TableContainer component={Paper}>
            <Table sx={{ maxWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Typography variant="body2" fontWeight={600}>
                      Atualmente você possui
                    </Typography>
                  </TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {/* {rows.map((row) => ( */}
                <TableRow
                  key={0}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    Próximo do vencimento
                  </TableCell>
                  <TableCell align="left" sx={{ backgroundColor: "#ffb2ae" }}>
                    <span style={{fontWeight: 'bold'}} >3</span> produtos
                  </TableCell>
                  {/* <TableCell align="left">{row.fat}</TableCell>
                    <TableCell align="left">{row.carbs}</TableCell>
                    <TableCell align="left">{row.protein}</TableCell> */}
                </TableRow>
                <TableRow
                  key={1}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    Médio do vencimento
                  </TableCell>
                  <TableCell align="left"><span style={{fontWeight: 'bold'}} >1</span> produto</TableCell>
                  {/* <TableCell align="left">{row.fat}</TableCell>
                    <TableCell align="left">{row.carbs}</TableCell>
                    <TableCell align="left">{row.protein}</TableCell> */}
                </TableRow>
                <TableRow
                  key={2}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    Distante do vencimento
                  </TableCell>
                  <TableCell align="left"><span style={{fontWeight: 'bold'}} >5</span> produtos</TableCell>
                  {/* <TableCell align="left">{row.fat}</TableCell>
                    <TableCell align="left">{row.carbs}</TableCell>
                    <TableCell align="left">{row.protein}</TableCell> */}
                </TableRow>
                {/* ))} */}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ExpirationTable;
