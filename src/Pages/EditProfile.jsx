import React, { useContext, useState } from 'react';
import { AuthContex } from '../Provider/AuthContex';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

const EditProfile = () => {
    const { user, updateUser } = useContext(AuthContex);
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();

    const updatedInfo = {
      displayName: name,
      photoURL: photoURL,
    };

    updateUser(updatedInfo)
      .then(() => {
        toast.success("Profile updated successfully!");
        navigate("/profile");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="flex items-center justify-center bg-gray-200 p-6">
      <title>Edit profile | Game Verse</title>
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Edit Profile
        </h2>

        {/* Profile Preview */}
        <div className="flex justify-center mb-6">
          <img
            src={
              photoURL ||
              "https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
            }
            alt="Profile Preview"
            className="w-28 h-28 rounded-full border-4 border-gray-200 shadow-md object-cover"
          />
        </div>

        {/* Form */}
        <form onSubmit={handleUpdate} className="space-y-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="font-medium text-gray-700">
              Full Name
            </label>
            <input
              id="name"
              required
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
              className="input input-bordered w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="photo" className="font-medium text-gray-700">
              Photo URL
            </label>
            <input
              id="photo"
              type="text"
              required
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              placeholder="Enter your profile photo URL"
              className="input input-bordered w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="btn bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 rounded-lg"
            >
              Save Changes
            </button>
          </div>
        </form>

        <div className="flex justify-center mt-4">
          <button
            onClick={() => navigate("/profile")}
            className="text-sm text-gray-600 hover:text-blue-600 underline"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
 
};

export default EditProfile;