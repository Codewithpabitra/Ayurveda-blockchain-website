import React, { useState } from "react";
import api from "../../api/axios.js";

const HarvestForm = () =>  {
  const [formData, setFormData] = useState({
    farmerId: "",
    species: "",
    gps: "",
    notes: "",
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "photo") {
      setFormData({ ...formData, photo: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  // Create a FormData object
  const data = new FormData();
  data.append("farmerId", formData.farmerId);
  data.append("species", formData.species);
  data.append("gps", formData.gps);
  data.append("notes", formData.notes);
  if (formData.photo) {
    data.append("photo", formData.photo); // Append the file
  }

  try {
    const response = await api.post("/harvest", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    console.log("Server Response:", response.data);
    alert("Harvest registered successfully!");
    // Optionally reset the form
    setFormData({
      farmerId: "",
      species: "",
      gps: "",
      notes: "",
      photo: null,
    });
  } catch (error) {
    console.error("Error submitting form:", error);
    alert("Failed to register harvest. Try again!");
  }
};

  return (
    <div className="flex justify-center items-center min-h-screen my-20 ">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-md w-full max-w-md flex flex-col gap-3"
      >
        <div className="container flex flex-col gap-1 mb-10">
            <h2 className="text-2xl font-bold mb-4 text-center bg-gradient-to-r from-green-400 via-lime-400 to-yellow-400 bg-clip-text text-transparent">
                Register New Harvest 
            </h2>
            <p className="text-sm text-gray-400 ">Enter details about your herbal crop for blockchain registration</p>
        </div>

        {/* Farmer ID */}
        <label className="block mb-2">
          Farmer ID
          <input
            type="text"
            name="farmerId"
            value={formData.farmerId}
            onChange={handleChange}
            className="w-full border p-2 rounded mt-1"
            placeholder="Enter Farmer ID"
            required
          />
        </label>

        {/* Species */}
        <label className="block mb-2">
          Species
          <input
            type="text"
            name="species"
            value={formData.species}
            onChange={handleChange}
            className="w-full border p-2 rounded mt-1"
            placeholder="Enter Species"
            required
          />
        </label>

        {/* GPS Location */}
        <label className="block mb-2">
          GPS Location
          <input
            type="text"
            name="gps"
            value={formData.gps}
            onChange={handleChange}
            className="w-full border p-2 rounded mt-1"
            placeholder="Enter GPS Location"
            required
          />
        </label>

        {/* Additional Notes */}
        <label className="block mb-2">
          Additional Notes
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            className="w-full border p-2 rounded mt-1"
            placeholder="Enter any notes"
          />
        </label>

        {/* Photo Upload */}
        <label className="block mb-4 ">
          Add Photo
          <input
            type="file"
            name="photo"
            onChange={handleChange}
            className="w-full mt-1 bg-gray-400 text-black rounded-md px-4 py-2 cursor-pointer hover:bg-gray-500 transition:colors duration-300 "
            accept="image/*"
          />
        </label>

        <button
          type="submit"
          className="w-full bg-green-500 text-white p-2 rounded-md hover:bg-green-600 transition duration-300 cursor-pointer "
        >
          Register Harvest
        </button>
      </form>
    </div>
  );
}


export default HarvestForm ;