import { Box, Button, Modal } from "@mui/material";
import { useState } from "react";
import BarCodeScanner from "./barCodeScanner";

const ModalAddProduct = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [barCodeValue, setBarCodeValue] = useState("");

  return (
    <>
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <BarCodeScanner
            barCodeSuccessCalback={(c: any) => {
              setBarCodeValue(c);
              console.log(c);
            }}
            barCodeErrorCallback={(c: any) => {
              // setBarCodeValue(c);
              console.log(c);
            }}
          />
        </Box>
      </Modal>
      <p>{barCodeValue && barCodeValue.length === 13 ? `Seu código de barras é: ${barCodeValue}` : `:///`}</p>
      <Button variant="contained" onClick={() => setModalOpen(true)}>
        Adicionar mais produtos
      </Button>
    </>
  );
};

export default ModalAddProduct;

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
