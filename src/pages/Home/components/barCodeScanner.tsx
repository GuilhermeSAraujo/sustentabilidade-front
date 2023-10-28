import Quagga from "quagga";
import { useEffect, useState } from "react";
const BarcodeScanner = () => {

    const [isInitialised, setIsInitialised] = useState(false);
    const onDetected = (obj : unknown) => {
        window.alert(obj);
    };
    useEffect(() => {
      Quagga.init(
        {
          inputStream: {
            type: "LiveStream",
            constraints: {
              width: 640,
              height: 320,
              facingMode: "environment",
            },
            // area: { // defines rectangle of the detection/localization area
            //   top: "10%",    // top offset
            //   right: "10%",  // right offset
            //   left: "10%",   // left offset
            //   bottom: "10%"  // bottom offset
            // },
          },
          locator: {
            halfSample: true,
            patchSize: "large", // x-small, small, medium, large, x-large
            debug: {
              showCanvas: true,
              showPatches: false,
              showFoundPatches: false,
              showSkeleton: false,
              showLabels: false,
              showPatchLabels: false,
              showRemainingPatchLabels: false,
              boxFromPatches: {
                showTransformed: true,
                showTransformedBox: true,
                showBB: true,
              },
            },
          },
          numOfWorkers: 4,
          decoder: {
            readers: ["code_128_reader"],
            debug: {
              drawBoundingBox: true,
              showFrequency: true,
              drawScanline: true,
              showPattern: true,
            },
          },
          locate: true,
        },
        (err : unknown) => {
          if (err) {
            console.log(err);
            return;
          }
          Quagga.start();
          setIsInitialised(true);
        }
      );
   
      Quagga.onDetected((result : unknown) => {
        onDetected(result);
      });
   
      return () => {
        Quagga.offDetected((result: unknown) => {
          onDetected(result);
        });
      };
    }, [onDetected]);
   
    return isInitialised ? (
      <div id="interactive" className="viewport" />
    ) : null;
};

export default BarcodeScanner;