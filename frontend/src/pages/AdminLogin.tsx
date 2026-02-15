import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/Axios";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await api.post("/auth/login", { email, password });

      if (res.data.success) {
        navigate("/admin/dashboard");
      }
    } catch (err) {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-600 to-green-800">

      <div className="bg-white w-full max-w-md p-8 rounded-xl shadow-xl">

        <h2 className="text-3xl font-bold text-center mb-6">
          Admin Login
        </h2>

        <div className="space-y-4">

          <input
            type="email"
            placeholder="Admin Email"
            className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
            onChange={e => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
            onChange={e => setPassword(e.target.value)}
          />

          <button
            onClick={handleLogin}
            className="w-full bg-green-700 text-white py-3 rounded-lg font-semibold hover:bg-green-800 transition"
          >
            Login
          </button>

        </div>

        <p className="text-center text-sm text-gray-500 mt-6">
          Real Estate Admin Panel
        </p>

      </div>
    </div>
  );
}
