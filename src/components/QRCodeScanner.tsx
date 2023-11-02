import  { useEffect, useRef, useState } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';
import { useNavigate } from 'react-router-dom';

const QRCodeScanner = () => {
  const videoRef = useRef(null);
  const qrCodeScanner = useRef<Html5QrcodeScanner | null>(null);
  const [scannedData, setScannedData] = useState<string | null>(null);
  const navigate = useNavigate();
  useEffect(() => {
    const config = { fps: 10, qrbox: { width: 250, height: 250 } };

    qrCodeScanner.current = new Html5QrcodeScanner(
      'qr-code-reader',
      config,
      true
    );

    qrCodeScanner.current.render(
      (result: string) => {
        setScannedData(result);
        qrCodeScanner.current?.clear();
        navigate(`/profile?data=${result}`);
      },
      (error: string) => {
        console.error(`QR code scanning error: ${error}`);
      }
    );

    return () => {
      if (qrCodeScanner.current) {
        qrCodeScanner.current.clear();
      }
    };
  }, [navigate]);

  return (
    <div>
      <h1>QR Code Scanner</h1>
      {scannedData ? (
        <div>
          <p>Scanned QR code data: {scannedData}</p>
        </div>
      ) : (
        <div id="qr-code-reader" ref={videoRef}></div>
      )}
    </div>
  );
};

export default QRCodeScanner;
