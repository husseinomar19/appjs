// components/QRCodeGenerator.js
import React, { useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';

const QRCodeGenerator = () => {
  const [inputLink, setInputLink] = useState('');
  const [showQR, setShowQR] = useState(false);

  const handleGenerateQR = (e) => {
    e.preventDefault();
    if (inputLink) {
      setShowQR(true);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>QR Code Generator</h1>
      <form onSubmit={handleGenerateQR}>
        <input
          type="text"
          placeholder="Voer je link in"
          value={inputLink}
          onChange={(e) => setInputLink(e.target.value)}
          style={{ padding: '10px', width: '300px' }}
        />
        <button type="submit" style={{ padding: '10px', marginLeft: '10px' }}>Genereer QR Code</button>
      </form>
      {showQR && (
        <div style={{ marginTop: '20px' }}>
          <QRCodeCanvas value={inputLink} size={256} />
        </div>
      )}
    </div>
  );
};

export default QRCodeGenerator;
