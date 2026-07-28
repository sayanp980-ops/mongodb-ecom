"use client";
import { useState } from "react";

export default function RegisterPage() {
    const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
async function handleSubmit(e) {
    e.preventDefault();

const res = await fetch("/api/register", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
     name,
     email,
      password
     }),
});
const data = await res.json();

alert(data.message);
}

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-3xl font-bold text-center mb-6">
          Register
        </h1>

       <form onSubmit={handleSubmit} className="space-y-4">
        <input
  type="text"
  placeholder="Full Name"
  value={name}
  onChange={(e) => setName(e.target.value)}
  className="w-full border p-3 rounded"
/>
   <input
  type="email"
  placeholder="Email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  className="w-full border p-3 rounded"
/>
        <input
  type="password"
  placeholder="Password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  className="w-full border p-3 rounded"
/>

          <button
  type="submit"
  className="w-full bg-green-600 text-white p-3 rounded"
>
            Register
          </button>
        </form>
      </div>
    </div>
  );
}