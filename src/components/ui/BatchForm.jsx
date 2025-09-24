import React, { useState } from 'react';
import { FaPlusSquare } from 'react-icons/fa';
import { MdQrCode2 } from 'react-icons/md';
import api from '../../api/axios.js';

const BatchForm = () => {
  const [formData, setFormData] = useState({
    batchNumber: '',
    productName: '',
    quantity: '',
    expiryDate: ''
  });

  const [qrCodeUrl, setQrCodeUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setQrCodeUrl(null);

    try {
      // posting data 
      const response = await api.post('/create-batch', formData);

      // expected QR code URL 
      if (response.data && response.data.qrCodeUrl) {
        setQrCodeUrl(response.data.qrCodeUrl);
      } else {
        alert('QR code not returned not generated , try again');
      }
    } catch (error) {
      console.error('API Error:', error);
      alert('An error occurred while creating the batch.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 p-6 max-w-6xl mx-auto">
      {/* FORM SECTION */}
      <div className="bg-white shadow-lg rounded-lg p-6 w-full lg:w-1/2">
        <h2 className="text-2xl font-bold mb-1 flex items-center gap-2 text-green-600">
          <FaPlusSquare /> Create New Batch
        </h2>
        <p className="text-sm text-gray-500 mb-4">Package verified herbal products into consumer-ready batches</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Batch Number</label>
            <input
              type="text"
              name="batchNumber"
              value={formData.batchNumber}
              onChange={handleChange}
              placeholder="e.g., TUR-2024-001"
              className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-green-300"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Product Name</label>
            <input
              type="text"
              name="productName"
              value={formData.productName}
              onChange={handleChange}
              placeholder="e.g., Organic Turmeric Capsules"
              className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-green-300"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Quantity</label>
            <input
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              placeholder="1000 units"
              className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-green-300"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Expiry Date</label>
            <input
              type="date"
              name="expiryDate"
              value={formData.expiryDate}
              onChange={handleChange}
              className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-green-300"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded transition"
          >
            {loading ? 'Processing...' : 'Create Batch & Generate QR'}
          </button>
        </form>
      </div>

      {/* QR CODE SECTION */}
      <div className="bg-white shadow-lg rounded-lg p-6 w-full lg:w-1/2 flex flex-col items-center justify-center text-center">
        <h2 className="text-xl font-semibold text-gray-700 mb-4 flex items-center gap-2">
          <MdQrCode2 size={24} /> Generated QR Code
        </h2>

        {qrCodeUrl ? (
          <img src={qrCodeUrl} alt="QR Code" className="w-48 h-48 object-contain border" />
        ) : (
          <p className="text-gray-400">QR code will appear here after submission.</p>
        )}
      </div>
    </div>
  );
};

export default BatchForm;

