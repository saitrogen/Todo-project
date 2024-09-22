"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function EditTopicForm({ id, title, description }) {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const router = useRouter();
  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:3001/api/topics/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ newTitle, newDescription }),
      })
      if (res.ok) {
        alert("Topic updated successfully");
        router.push("/");
        router.refresh();
      }
    } catch (error) {
      console.log("something wrong with editing:", error)
      alert("An error occurred. Please try again later.");
    }

  }
  return (

    <form onSubmit={handleSubmit} action="" className="flex gap-3 flex-col">
      <input
        onChange={(e) => setNewTitle(e.target.value)}
        value={newTitle}
        type="text"
        className="border border-slate-300 rounded px-4 py-2 
        placeholder:text-slate-400 text-slate-800"
        placeholder="Topic title" />
      <input
        onChange={(e) => setNewDescription(e.target.value)}
        value={newDescription}
        type="text"
        className="border border-slate-300 rounded placeholder:text-slate-400 text-slate-800 px-4 py-2"
        placeholder="Topic description" />
      <button type="submit" className=" rounded px-4 py-2 text-white font-bold w-fit bg-green-600">Update Topic</button>
    </form>

  );
}