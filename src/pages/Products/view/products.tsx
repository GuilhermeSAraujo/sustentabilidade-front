import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const produtos = [
  {
    image:
      "https://io.convertiez.com.br/m/trimais/shop/products/images/3843/medium/nuggets-de-frango-seara-turma-da-monica-300-g_3803.jpg",
    name: "Noget Seara",
    quantity: 1,
    expirationDate: new Date(),
    registrationDate: new Date(),
  },
  {
    image:
      "https://debetti.com.br/cdn/shop/files/ketchup-tomato-heinz.jpg?v=1684260840&width=1080",
    name: "Ketchup Heiz",
    quantity: 2,
    expirationDate: new Date(),
    registrationDate: new Date(),
  },
  {
    image:
      "https://www.jprembalagemsp.com.br/imagens/embalagem/embalagem-para-arroz-5kg-no-jardim-monte-kemel.jpg",
    name: "Arroz Tia Jú",
    quantity: 1,
    expirationDate: new Date(),
    registrationDate: new Date(),
  },
  // {
  //   image: "https://www.jprembalagemsp.com.br/imagens/embalagem/embalagem-para-arroz-5kg-no-jardim-monte-kemel.jpg",
  //   name: 'Elvis',
  //   quantity: 4,
  //   expirationDate: new Date(),
  //   registrationDate: new Date(),
  // },
  // {
  //   image: "https://www.jprembalagemsp.com.br/imagens/embalagem/embalagem-para-arroz-5kg-no-jardim-monte-kemel.jpg",
  //   name: 'Jorge',
  //   quantity: 6,
  //   expirationDate: new Date(),
  //   registrationDate: new Date(),
  // },
  // {
  //   image: "https://www.jprembalagemsp.com.br/imagens/embalagem/embalagem-para-arroz-5kg-no-jardim-monte-kemel.jpg",
  //   name: 'Claudia',
  //   quantity: 1,
  //   expirationDate: new Date(),
  //   registrationDate: new Date(),
  // },
  // {
  //   image: "https://www.jprembalagemsp.com.br/imagens/embalagem/embalagem-para-arroz-5kg-no-jardim-monte-kemel.jpg",
  //   name: 'Eliabner',
  //   quantity: 20,
  //   expirationDate: new Date(),
  //   registrationDate: new Date(),
  // },
];

export default function Products() {
  return (
    <Box sx={{ padding: "10px 10px 0 10px" }}>
      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 650, backgroundColor: "beige" }}
          aria-label="simple table"
        >
          <TableHead sx={{ backgroundColor: "#8FBC8F" }}>
            <TableRow>
              <TableCell
                sx={{
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                  textAlign: "center",
                }}
              >
                Imagem produto
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                  textAlign: "center",
                  verticalAlign: "middle",
                }}
              >
                Nome
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                  textAlign: "center",
                  verticalAlign: "middle",
                }}
              >
                Quantidade
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                  textAlign: "center",
                  verticalAlign: "middle",
                }}
              >
                Data de Vencimento
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                  textAlign: "center",
                  verticalAlign: "middle",
                }}
              >
                Data de Cadastro
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {produtos.map((produto, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  component="th"
                  scope="row"
                  sx={{
                    width: "20%",
                    padding: "10px",
                    textAlign: "center",
                    verticalAlign: "middle",
                  }}
                >
                  <Box
                    component="img"
                    src={produto.image}
                    sx={{
                      display: "inline-block",
                      maxWidth: "100px",
                      borderRadius: "15px",
                      margin: "0 auto",
                    }}
                  />
                </TableCell>

                <TableCell
                  align="right"
                  sx={{
                    fontSize: "1.2rem",
                    textAlign: "center",
                    verticalAlign: "middle",
                  }}
                >
                  {produto.name}
                </TableCell>
                <TableCell
                  align="right"
                  sx={{
                    fontSize: "1.2rem",
                    textAlign: "center",
                    verticalAlign: "middle",
                  }}
                >
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Box mx={1}>{produto.quantity}</Box>
                  </Box>
                </TableCell>
                <TableCell
                  align="right"
                  sx={{
                    fontSize: "1.2rem",
                    textAlign: "center",
                    verticalAlign: "middle",
                  }}
                >
                  {produto.expirationDate.toLocaleDateString()}
                </TableCell>
                <TableCell
                  align="right"
                  sx={{
                    fontSize: "1.2rem",
                    textAlign: "center",
                    verticalAlign: "middle",
                  }}
                >
                  {produto.registrationDate.toLocaleDateString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
