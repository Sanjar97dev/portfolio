import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ResumeManager = () => {
  const [experience, setExperience] = useState([]); // Stores experience list
  const [newExperience, setNewExperience] = useState({
    img: "",
    company: '',
    position: '',
    startDate: '',
    endDate: '',
    description: ''
  }); // Stores new experience entry

  // Fetch existing experience data when component loads
  useEffect(() => {
    fetchExperience();
  }, []);

  // Fetch experience data from the server
  const fetchExperience = async () => {
    try {
      const response = await axios.get('http://localhost:5000/experience');
      setExperience(response.data);
    } catch (error) {
      console.error("Error fetching experience data:", error);
    }
  };

  // Add new experience and display it at the top of the list
  const addExperience = async () => {
    try {
      const response = await axios.post('http://localhost:5000/experience', newExperience);
      // Add the new experience at the top of the list
      setExperience([response.data, ...experience]);
      // Clear the input fields after adding
      setNewExperience({ company: '', position: '', startDate: '', endDate: '', description: '', img: '' });
    } catch (error) {
      console.error("Error adding experience:", error);
    }
  };

  // Delete experience from the list
  const deleteExperience = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/experience/${id}`);
      // Remove the deleted item from the experience list
      setExperience(experience.filter(item => item.id !== id));
    } catch (error) {
      console.error("Error deleting experience:", error);
    }
  };

  // Handle input changes for the new experience form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewExperience({ ...newExperience, [name]: value });
  };

  // Handle image upload and set the file URL
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewExperience((prevState) => ({
          ...prevState,
          img: reader.result // Set image URL
        }));
      };
      reader.readAsDataURL(file); // Convert file to base64
    }
  };

  return (
    <div className="flex flex-col items-center p-4 bg-gray-100 min-h-screen">
      {/* Heading with Image */}
      <div className="flex items-center mb-4">
        <img
          src="https://via.placeholder.com/50"  // Add your image URL here
          alt="Experience Icon"
          className="w-12 h-12 rounded-full mr-2"
        />
        <h1 className="text-2xl font-bold">Experience Manager</h1>
      </div>

      {/* Form to Add New Experience */}
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md mb-6">
        <h2 className="text-xl font-semibold mb-4">Add New Experience</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            addExperience();
          }}
          className="space-y-4"
        >
          {/* Input fields for new experience */}
          <input
            type="text"
            name="company"
            placeholder="Company"
            value={newExperience.company}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
            required
          />
          <input
            type="text"
            name="position"
            placeholder="Position"
            value={newExperience.position}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
            required
          />
          <input
            type="date"
            name="startDate"
            value={newExperience.startDate}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
            required
          />
          <input
            type="date"
            name="endDate"
            value={newExperience.endDate}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
            required
          />
          <textarea
            name="description"
            placeholder="Description"
            value={newExperience.description}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
            required
          />
          {/* File input for image upload */}
          <input
            type="file"
            name="img"
            accept="image/*"
            onChange={handleImageUpload}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
          />
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700"
          >
            Add Experience
          </button>
        </form>
      </div>

      {/* Experience List */}
      <div className="bg-white shadow-xl rounded-lg p-6 w-full max-w-md mx-auto mt-6">
  <h2 className="text-2xl font-semibold text-center text-indigo-700 mb-6">Experience List</h2>
  <ul className="space-y-6">
    {experience.map((item) => (
      <li key={item.id} className="bg-gradient-to-r from-indigo-50 via-indigo-100 to-indigo-200 p-4 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
        {/* Image with hover effect */}
        {item.img && (
          <img
            src={item.img}
            alt="Experience"
            className="w-20 h-20 mb-4 rounded-full mx-auto border-4 border-indigo-600 shadow-md"
          />
        )}
        <h3 className="font-bold text-xl text-indigo-900">{item.company} - {item.position}</h3>
        <p className="text-sm text-gray-600">{item.startDate} to {item.endDate}</p>
        <p className="text-gray-800 mt-2">{item.description}</p>
        <button
          onClick={() => deleteExperience(item.id)}
          className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none transition-colors"
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
</div>

    </div>
  );
};

export default ResumeManager;
