"use client";
import { HiOutlineTrash } from "react-icons/hi";
import {useRouter} from 'next/navigation';
export default function Removebtn({ id }) {
  const router = useRouter();

  const removeTopic = async () => {
    const confirmation = confirm("Are you sure you want to delete this topic?");
    if (confirmation) {
      try {
        const res = await fetch(`http://localhost:3000/api/topics?id=${id}`, {
          method: "DELETE",
        })
        if (res.ok) {
          router.refresh();
        }
      } catch (error) {
        console.log("something wrong with deleting:", error)
      }
    }
  }
  return (


    <button onClick={removeTopic}><HiOutlineTrash className="text-red-500" size={24} /></button>
  );
}

