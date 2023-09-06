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


    // Suceess callback is required.
    if (!barCodeSuccessCalback) {
      throw "barCodeSuccessCalback is required callback.";
    }

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
