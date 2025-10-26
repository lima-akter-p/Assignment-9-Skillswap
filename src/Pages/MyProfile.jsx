import React, { useContext } from 'react';
import { useNavigate } from 'react-router';
import { AuthContex } from '../Provider/AuthContex';


const MyProfile = () => {
    const { user, userLoading, logOut } = useContext(AuthContex);
  const navigate = useNavigate();

  if (userLoading) return;
    
        const { displayName, email, photoURL, emailVerified, providerData } = user;

   return (
    <div className=" flex items-center justify-center bg-gray-100 p-6">
      <title>Profile | Game Verse</title>
      <div className="max-w-lg w-full bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Cover / Header */}
        <div className="bg-linear-to-r from-blue-600 to-indigo-600 h-32 relative">
          <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
            <img
              src={
                photoURL ||
                "https://cdn-icons-png.flaticon.com/512/8791/8791434.png"
              }
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
            />
          </div>
        </div>

        {/* Profile Info */}
        <div className="pt-20 pb-10 px-6 text-center">
          <h2 className="text-2xl font-semibold text-gray-800">
            {displayName || "Anonymous User"}
          </h2>
          <p className="text-gray-500 mt-1">{email}</p>

          <div className="mt-6 space-y-3">
            <div className="bg-gray-100 p-3 rounded-lg flex justify-between">
              <span className="font-medium text-gray-700">Account Status:</span>
              <span className="text-green-600 font-semibold">
                {emailVerified ? "Verified" : "Not verified"}
              </span>
            </div>
            <div className="bg-gray-100 p-3 rounded-lg flex justify-between">
              <span className="font-medium text-gray-700">Provider:</span>
              <span className="text-gray-600">
                {providerData?.[0]?.providerId || "Email/Password"}
              </span>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => navigate("/edit-profile")}
              className="btn bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
            >
              Edit Profile
            </button>
            <button
              onClick={logOut}
              className="btn bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
      
    
};

export default MyProfile;