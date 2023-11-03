import { Html5Qrcode } from "html5-qrcode";
import { Html5QrcodeError, QrcodeResult } from "html5-qrcode/esm/core";
import { useEffect, useRef } from "react";

// const qrcodeRegionId = "html5qr-code-full-region";

interface BarcodeScannerProps {
  onResult: (result: QrcodeResult) => void;
  onError: (error: Html5QrcodeError) => void;
}
export const BarcodeScanner = ({ onResult, onError }: BarcodeScannerProps) => {
  const previewRef = useRef<HTMLDivElement>(null);

  const memoizedResultHandler = useRef(onResult);
  const memoizedErrorHandler = useRef(onError);

  useEffect(() => {
    memoizedResultHandler.current = onResult;
  }, [onResult]);

  useEffect(() => {
    memoizedErrorHandler.current = onError;
  }, [onError]);

  useEffect(() => {
    if (!previewRef.current) return;
    const html5QrcodeScanner = new Html5Qrcode(previewRef.current.id);
    const didStart = html5QrcodeScanner
      .start(
        { facingMode: "environment"  },
        { fps: 10 },
        (_, { result }) => {
          memoizedResultHandler.current(result);
        },
        (_, error) => {
          memoizedErrorHandler.current(error);
        }
      )
      .then(() => true);
    return () => {
      didStart
        .then(() => html5QrcodeScanner.stop())
        .catch(() => {
          console.log("Error stopping scanner");
        });
    };
  }, [previewRef, memoizedResultHandler, memoizedErrorHandler]);

  return <div id="preview" ref={previewRef} />;
};

export default BarcodeScanner;
