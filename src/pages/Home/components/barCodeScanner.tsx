import { useMediaQuery } from "@mui/material";
import { Html5Qrcode } from "html5-qrcode";
import { Html5QrcodeError, QrcodeResult } from "html5-qrcode/esm/core";
import { useEffect, useRef, useState } from "react";

interface BarcodeScannerProps {
  onResult: (result: QrcodeResult) => void;
  onError: (error: Html5QrcodeError) => void;
}

export const BarcodeScanner = ({ onResult, onError }: BarcodeScannerProps) => {
  const isMobile = useMediaQuery("(max-width: 600px)");

  const previewRef = useRef<HTMLDivElement>(null);

  const memoizedResultHandler = useRef(onResult);
  const memoizedErrorHandler = useRef(onError);

  const [isScannerStarted, setIsScannerStarted] = useState(false);

  useEffect(() => {
    memoizedResultHandler.current = onResult;
  }, [onResult]);

  useEffect(() => {
    memoizedErrorHandler.current = onError;
  }, [onError]);

  const getRearCameraDeviceId = async () => {
    const devices = await navigator.mediaDevices.enumerateDevices();
    const videoDevices = devices.filter(
      (device) => device.kind === "videoinput"
    );

    const rearCamera = videoDevices.find((device) =>
      /rear|back|environment/i.test(device.label)
    );

    if (!rearCamera) return undefined;

    // Se houver mais de uma câmera traseira, tente encontrar a câmera que não seja ultra-wide.
    if (videoDevices.length > 1) {
      const nonUltraWideRearCamera = videoDevices.find(
        (device) =>
          /rear|back|environment/i.test(device.label) &&
          !/ultra[-\s]?wide/i.test(device.label)
      );
      return nonUltraWideRearCamera?.deviceId || rearCamera.deviceId;
    }

    return rearCamera.deviceId;
  };

  const getCameraConfig = async () => {
    const rearCameraDeviceId = await getRearCameraDeviceId();
  
    if (rearCameraDeviceId) {
      return { deviceId: { exact: rearCameraDeviceId } };
    }
  
    return { facingMode: isMobile ? "environment" : "user" };
  };

  useEffect(() => {
    if (!previewRef.current) return;

    const html5QrcodeScanner = new Html5Qrcode(previewRef.current.id);

    const startScanner = async () => {
      if (!previewRef.current) return;
    
      const cameraConfig = await getCameraConfig();
    
      try {
        await html5QrcodeScanner.start(
          cameraConfig,
          { fps: 10 },
          (_, { result }) => {
            memoizedResultHandler.current(result);
          },
          (_, error) => {
            memoizedErrorHandler.current(error);
          }
        );
        setIsScannerStarted(true);
      } catch (error) {
        console.error("Error starting scanner", error);
      }
    };

    startScanner();

    return () => {
      if (isScannerStarted) {
        html5QrcodeScanner
          .stop()
          .catch(() => {
            console.error("Error stopping scanner");
          });
      }
    };
  }, [previewRef, memoizedResultHandler, memoizedErrorHandler]);

  return <div id="preview" ref={previewRef} />;
};

export default BarcodeScanner;