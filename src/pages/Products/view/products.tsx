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
import { useProducts } from "../../../hooks/useProducts";
import ProductService from "../../../shared/api/productService";

export default function Products() {
  const { data: products } = useProducts();

  return (
    <Box sx={{ paddingX: 6, paddingY: 3 }}>
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
            </TableRow>
          </TableHead>
          <TableBody>
            {ProductService.concatProducts(products).map((product, index) => (
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
                    src={product.image_url}
                    sx={{
                      display: "inline-block",
                      maxWidth: {xs: "50px", md: '250px'},
                      maxHeight: "150px",
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
                  {product.name}
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
                    <Box mx={1}>{product.quantity}</Box>
                  </Box>
                </TableCell>
                <TableCell
                  align="right"
                  sx={{
                    fontSize: "1.2rem",
                    textAlign: "center",
                    verticalAlign: "middle",
                    backgroundColor: product.days_until_expiry <= 7 ? "#ffb2ae" : 'none'
                  }}
                >
                  {new Date(new Date(product.expire_date).getTime() + new Date().getTimezoneOffset() * 60000).toLocaleDateString("pt-BR")}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
