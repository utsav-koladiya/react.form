import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const Update = () => {

 const navigate =  useNavigate();
  let [value, setValues] = useState({
     id: "",
    name: "",
    phone: "",
    email: "",
    duration: "",
  });

 let {id} = useParams();

  useEffect(()=>{
         axios.get("http://localhost:9001/students/"+id)
            .then((res)=>setValues(res.data))
            .catch((err)=>console.log(err))
    }, [])


    const handleSubmit = (e) =>{
        e.preventDefault();

        axios.put("http://localhost:9001/students/"+id,value )
        .then(()=>{
          alert('data updated...')
          navigate("/")
        })
        .catch((err)=>{
          console.log(err);
        })
    }

 return (
  <>
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-lg bg-white shadow-2xl rounded-3xl p-8">

        <h1 className="text-3xl font-bold text-center mb-6 text-indigo-600">
          Update Student Record
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* ID */}
          <div className="flex flex-col">
            <label className="font-semibold text-gray-700 mb-1">Student ID</label>
            <input
              className="border border-gray-300 px-3 py-2 rounded-xl bg-gray-100 cursor-not-allowed"
              disabled
              value={value.id}
              type="number"
            />
          </div>

          {/* Name */}
          <div className="flex flex-col">
            <label className="font-semibold text-gray-700 mb-1">Full Name</label>
            <input
              className="border border-gray-300 px-3 py-2 rounded-xl focus:ring-2 focus:ring-indigo-400 outline-none"
              value={value.name}
              onChange={(e) => setValues({ ...value, name: e.target.value })}
              type="text"
              required
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="font-semibold text-gray-700 mb-1">Email</label>
            <input
              className="border border-gray-300 px-3 py-2 rounded-xl focus:ring-2 focus:ring-indigo-400 outline-none"
              value={value.email}
              onChange={(e) => setValues({ ...value, email: e.target.value })}
              type="email"
              required
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col">
            <label className="font-semibold text-gray-700 mb-1">Phone Number</label>
            <input
              className="border border-gray-300 px-3 py-2 rounded-xl focus:ring-2 focus:ring-indigo-400 outline-none"
              value={value.phone}
              onChange={(e) => setValues({ ...value, phone: e.target.value })}
              type="number"
              required
            />
          </div>

          {/* Duration */}
          <div className="flex flex-col">
            <label className="font-semibold text-gray-700 mb-1">Duration</label>
            <input
              className="border border-gray-300 px-3 py-2 rounded-xl focus:ring-2 focus:ring-indigo-400 outline-none"
              value={value.duration}
              onChange={(e) => setValues({ ...value, duration: e.target.value })}
              type="text"
              required
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-between pt-4">
            <button
              type="submit"
              className="bg-indigo-600 text-white px-6 py-2 rounded-2xl shadow hover:bg-indigo-800 transition"
            >
              Update
            </button>

            <Link
              to={"/"}
              className="bg-gray-400 text-white px-6 py-2 rounded-2xl shadow hover:bg-gray-600 transition"
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

export default Update;