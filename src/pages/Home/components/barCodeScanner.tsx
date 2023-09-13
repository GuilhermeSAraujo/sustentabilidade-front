// file = Html5QrcodePlugin.jsx
import { Html5QrcodeScanner } from "html5-qrcode";
import { useEffect } from "react";

const qrcodeRegionId = "html5qr-code-full-region";

// Creates the configuration object for Html5QrcodeScanner.
const createConfig = () => {
  return {
    fps: 10,
    qrbox: 250,
    disableFlip: false,
    useBarCodeDetectorIfSupported: true
  };
};
interface BarCodeScannerProps {
  barCodeSuccessCalback: (input: string) => void;
  barCodeErrorCallback: (input: any) => void;
}

const BarCodeScanner = ({
  barCodeSuccessCalback,
  barCodeErrorCallback,
}: BarCodeScannerProps) => {

  useEffect(() => {
    // when component mounts
    const config = createConfig();

		const handleSuccess = (decodedText: string) => {
			barCodeSuccessCalback(decodedText);
			html5QrcodeScanner.clear();
		}

    const html5QrcodeScanner = new Html5QrcodeScanner(
      qrcodeRegionId,
      config,
      undefined
    );
    html5QrcodeScanner.render(
      handleSuccess,
      barCodeErrorCallback
    );

	

    const openCameraButton = document.getElementById("html5-qrcode-button-camera-permission");
    const submitImagemLink = document.getElementById("html5-qrcode-anchor-scan-type-change");
    if(openCameraButton && submitImagemLink){
      openCameraButton.className = "MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeSmall MuiButton-containedSizeSmall MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeSmall MuiButton-containedSizeSmall css-1ra7jo2-MuiButtonBase-root-MuiButton-root";
      openCameraButton.textContent = "Abrir a câmera";
      openCameraButton.style.marginBottom = '5%';

      submitImagemLink.textContent = "Scanear através de imagem";
    }
    // cleanup function when component will unmount
    return () => {
      html5QrcodeScanner.clear().catch((error) => {
        console.error("Failed to clear html5QrcodeScanner. ", error);
      });
    };
  }, []);

  return <div id={qrcodeRegionId} />;
};

export default BarCodeScanner;
