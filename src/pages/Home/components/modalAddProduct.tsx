import { Box, Button, Modal } from "@mui/material";
import { useState } from "react";
import BarCodeScanner from "./barCodeScanner";

const ModalAddProduct = () => {
  const [modalOpen, setModalOpen] = useState(false);
  
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
              // setBarCodeValue(c);
              console.log(c);
            }}
            barCodeErrorCallback={(c: any) => {
              console.log(c);
            }}
          />
        </Box>
      </Modal>
      {/* <p>{barCodeValue}</p> */}
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
  p: 4,
  borderRadius: "10px",
  boxShadow: "10px 17px 20px 8px rgba(0,0,0,0.25)",
};
