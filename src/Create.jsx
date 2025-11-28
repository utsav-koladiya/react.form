import axios from "axios";
import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom";



const Create = () => {
  const [value, setValues] = useState({
    id: "",
    name: "",
    phone: "",
    email: "",
    duration: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:9001/students", value)
      .then(()=>{
        alert("Data Added Successfully...")
        navigate("/")
      })
      .catch((err)=>{console.log(err)})
  };
return (
  <>
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">

      <div className="w-full max-w-lg bg-white shadow-2xl rounded-3xl p-8">

        <h1 className="text-3xl font-bold text-center text-indigo-600 mb-8">
          Insert New Employee Record
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* ID */}
          <div className="flex flex-col">
            <label className="font-semibold text-gray-700 mb-1">
              Employee ID
            </label>
            <input
              className="border border-gray-300 px-3 py-2 rounded-xl focus:ring-2 focus:ring-indigo-400 outline-none"
              placeholder="Enter ID"
              type="number"
              required
              onChange={(e) => setValues({ ...value, id: e.target.value })}
            />
          </div>

          {/* Name */}
          <div className="flex flex-col">
            <label className="font-semibold text-gray-700 mb-1">
              Full Name
            </label>
            <input
              className="border border-gray-300 px-3 py-2 rounded-xl focus:ring-2 focus:ring-indigo-400 outline-none"
              placeholder="Enter Full Name"
              type="text"
              required
              onChange={(e) => setValues({ ...value, name: e.target.value })}
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="font-semibold text-gray-700 mb-1">
              Email Address
            </label>
            <input
              className="border border-gray-300 px-3 py-2 rounded-xl focus:ring-2 focus:ring-indigo-400 outline-none"
              placeholder="Enter Email"
              type="email"
              required
              onChange={(e) => setValues({ ...value, email: e.target.value })}
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col">
            <label className="font-semibold text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              className="border border-gray-300 px-3 py-2 rounded-xl focus:ring-2 focus:ring-indigo-400 outline-none"
              placeholder="Enter Phone Number"
              type="number"
              required
              onChange={(e) => setValues({ ...value, phone: e.target.value })}
            />
          </div>

          {/* Duration */}
          <div className="flex flex-col">
            <label className="font-semibold text-gray-700 mb-1">
              Duration
            </label>
            <input
              className="border border-gray-300 px-3 py-2 rounded-xl focus:ring-2 focus:ring-indigo-400 outline-none"
              placeholder="Enter Duration"
              type="text"
              required
              onChange={(e) => setValues({ ...value, duration: e.target.value })}
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-between pt-4">
            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-2 rounded-2xl shadow hover:bg-green-800 transition"
            >
              Submit
            </button>

            <Link
              to={"/"}
              className="bg-gray-500 text-white px-6 py-2 rounded-2xl shadow hover:bg-gray-700 transition"
            >
              Back
            </Link>
          </div>
        </form>
      </div>

    </div>
  </>
);

};

export default Create;
