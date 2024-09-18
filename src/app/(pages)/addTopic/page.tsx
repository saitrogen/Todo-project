"use client";

import { useState } from "react";
import {useRouter} from 'next/navigation';
export default function AddTopic() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();
  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if (!title || !description){
      alert("Please fill in all fields");
      return;
    } 
    try {
      const res = await fetch("http://localhost:3000/api/topics/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      })

      if (res.ok) {
        router.push("/");
        router.refresh();

      }else{
        throw new Error("failed to add topic");
      }
    } catch (error) {
      console.log("something wrong:", error)
      
    }
    
  }

  return (

    <form onSubmit={handleSubmit} action="" className="flex gap-3 flex-col">
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        type="text"
        className="border border-slate-300 rounded px-4 py-2 placeholder:text-slate-400 text-slate-800"
        placeholder="Topic title" />
      <input
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        type="text"
        className="border border-slate-300  placeholder:text-slate-400 text-slate-800 rounded px-4 py-2"
        placeholder="Topic discription" />
      <button type="submit" className=" rounded px-4 py-2 text-white font-bold w-fit bg-green-600">Add Topic</button>
    </form>

  );
}