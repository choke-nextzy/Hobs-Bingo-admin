import { useEffect, useRef, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import { useNavigate } from "react-router-dom";
import { IQRCodeScanner } from "../interfaces/QRCode";
import { QrScanner } from "@yudiel/react-qr-scanner";

const QRCodeScanner: React.FC<IQRCodeScanner> = ({ sendToPath }) => {
  const [scannedData, setScannedData] = useState<string | null>(null);

  const navigate = useNavigate();
  useEffect(() => {
    if (scannedData != null) {
      navigate(`/profile?data=${scannedData}`);
    }
  }, [scannedData]);

  return (
    <div>
      <QrScanner
        onDecode={(result) => setScannedData(result)}
        onError={(error) => console.log(error?.message)}
      />
      <p>{scannedData}</p>
    </div>
  );
};

export default QRCodeScanner;
