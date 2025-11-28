import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'



const Home = () => {

    let [value, setValue] = useState([])

    useEffect(() => {
        axios.get("http://localhost:9001/students")
            .then((res) => setValue(res.data))
            .catch((err) => console.log(err))
    }, [])
    const handleDelete = (id) => {
        axios.delete("http://localhost:9001/students/" + id)
            .then(() => {
                alert("Data removed");
                setValue(value.filter(item => item.id !== id));
            })
            .catch((err) => console.log(err));
    };

return (
  <>
    <div className="min-h-screen bg-gray-100 py-10 px-4">

      <h1 className="text-center text-4xl font-bold text-indigo-600 mb-10">
        Employee Details
      </h1>

      <div className="max-w-6xl mx-auto flex justify-end mb-6">
        <Link
          to={"/create"}
          className="bg-indigo-600 px-5 py-2 rounded-xl text-white shadow hover:bg-indigo-800 transition"
        >
          + Insert New Employee Record
        </Link>
      </div>

      <div className="max-w-6xl mx-auto bg-white shadow-2xl rounded-3xl p-6 overflow-hidden">

        <table className="w-full table-auto text-lg">
          <thead>
            <tr className="bg-indigo-50 border-b">
              <th className="py-3">Employee ID</th>
              <th className="py-3">Name</th>
              <th className="py-3">Email</th>
              <th className="py-3">Mobile Number</th>
              <th className="py-3">Duration</th>
              <th className="py-3">Actions</th>
            </tr>
          </thead>

          <tbody>
            {value && value.map((d, i) => (
              <tr
                key={i}
                className="border-b hover:bg-gray-100 transition"
              >
                <td className="py-4 px-2 text-center">{d.id}</td>
                <td className="text-center">{d.name}</td>
                <td className="text-center">{d.email}</td>
                <td className="text-center">{d.phone}</td>
                <td className="text-center">{d.duration}</td>

                <td className="flex justify-center gap-4 py-3">

                  
                  <button
                    onClick={() => handleDelete(d.id)}
                    className="bg-red-500 text-white px-4 py-1 rounded-lg shadow hover:bg-red-700 transition"
                  >
                    Delete
                  </button>

                  
                  <Link
                    to={`/update/${d.id}`}
                    className="bg-yellow-500 text-white px-4 py-1 rounded-lg shadow hover:bg-yellow-700 transition"
                  >
                    Update
                  </Link>

                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  </>
);

}

export default Home
