import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';
import api from '../../api/axios'; 

const ProductVerification = () => {
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [showCamera, setShowCamera] = useState(false);

  const handleVerify = async () => {
    if (!inputValue.trim()) return;

    setLoading(true);
    setResult(null);
    setError(null);

    try {
      const response = await api.post('/verify-data', { code: inputValue });
      setResult(response.data);
    } catch (err) {
      console.error(err);
      setError('Failed to verify product. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleScan = (scannedData) => {
    if (scannedData) {
      setInputValue(scannedData);
      setShowCamera(false);
    }
  };

  const handleError = (err) => {
    console.error('Camera Error:', err);
    setError('Unable to access the camera or scan the QR code.');
    setShowCamera(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center gap-2 my-0">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6">
        <h1 className="text-2xl font-bold text-center mb-2">Product Verification</h1>
        <p className="text-center text-gray-600 mb-6">
          Scan your product's QR code to verify authenticity and trace its journey
        </p>

        <div className="space-y-4">
          <label htmlFor="qrInput" className="block text-gray-700 font-medium">
            Scan QR Code
          </label>
          <input
            id="qrInput"
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter QR code or batch number"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setShowCamera(!showCamera)}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 cursor-pointer "
            >
              📷 {showCamera ? 'Close Camera' : 'Camera Scan'}
            </button>

            <button
              onClick={handleVerify}
              className="flex-1 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:opacity-50 cursor-pointer"
              disabled={loading}
            >
              {loading ? 'Verifying...' : 'Verify Product'}
            </button>
          </div>
        </div>

        {/* Camera scanner */}
        {showCamera && (
          <div className="mt-4 border rounded-md overflow-hidden">
            <QrReader
              constraints={{ facingMode: 'environment' }}
              scanDelay={500}
              onResult={(result, error) => {
                if (!!result) {
                  handleScan(result?.text);
                }
                if (!!error) {
                  console.error(error);
                }
              }}
              containerStyle={{ width: '100%' }}
              videoStyle={{ width: '100%' }}
            />
          </div>
        )}

        {/* Result */}
        {result && (
          <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-md">
            <h2 className="font-semibold text-green-700 mb-2">✅ Product Verified</h2>
            <pre className="text-sm text-gray-800 whitespace-pre-wrap">
              {JSON.stringify(result, null, 2)}
            </pre>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-md">
            <h2 className="font-semibold text-red-700 mb-2">❌ Error</h2>
            <p className="text-sm text-red-600">{error}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductVerification;



