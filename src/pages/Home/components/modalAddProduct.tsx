import { Box, Modal, Typography } from "@mui/material";
import { QrcodeResult } from "html5-qrcode/esm/core";
import { useEffect, useState } from "react";
import { ProductDataGetResult } from "../../../models/product";
import { AddProductsSteps } from "../../../shared/enum/addProcutsSteps";
import BarcodeScanner from "./barCodeScanner";
import ProductDetails from "./productDetails";
import SuccessScreen from "./successScreen";
import ProductService from "../../../shared/api/productService";

interface ModalAddProductProps {
  modalOpen: boolean;
  setModalOpen: (value: boolean) => void;
}
const ModalAddProduct = ({ modalOpen, setModalOpen }: ModalAddProductProps) => {
  const [step, setStep] = useState(AddProductsSteps.BarcodeScan);
  const [barcode, setBarcode] = useState("");
  const [productData, setProductData] = useState<ProductDataGetResult | null>(null);

  const [isLoadingProduct, setIsLoadingProduct] = useState(false);

  const handleSuccessScan = async (result: QrcodeResult) => {
    if (!isLoadingProduct) {
      setIsLoadingProduct(true);
      const product = await ProductService.getProductByBarcode(result.text);
      setProductData(product);
      setBarcode(result.text);
      setStep(AddProductsSteps.ProductDetails);
      setIsLoadingProduct(false);
    }
  };


  return (
    <>
      <Modal
        open={modalOpen}
        onClose={() => {
          setModalOpen(false)
          if (!productData) setStep(AddProductsSteps.BarcodeScan)
        }}
      >
        <>
          {step === AddProductsSteps.BarcodeScan && (
            <Box sx={modalStyle}>
              <Typography variant="h6" pb={2}>
                Leitor de Código de Barras
              </Typography>
              <BarcodeScanner
                onResult={handleSuccessScan}
                onError={(result) => setBarcode(result.errorMessage)}
              />
            </Box>
          )}
          {step === AddProductsSteps.ProductDetails && barcode.length > 0 && <ProductDetails barcode={barcode} setProductData={setProductData} productData={productData} setStep={setStep} />}
          {step === AddProductsSteps.SuccessScreen && <SuccessScreen />}
        </>
      </Modal>
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
  p: 2.5,
  borderRadius: "10px",
  boxShadow: "10px 17px 20px 8px rgba(0,0,0,0.25)",
};
