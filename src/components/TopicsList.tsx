import Link from "next/link";
import Removebtn from "./Removebtn";
import { HiPencilAlt } from "react-icons/hi";


const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3001/api/topics/", { cache: "no-store" });

    if (!res.ok) {
      throw new Error("failed to fetch topics");
    }
    const data = await res.json();
    return { topics: data };

  } catch (error) {
    console.log("error loading topics:", error);
    return { topics: [] }
  }

}




export default async function TopicsList() {

try {
  const { topics } = await getTopics();

 

  return (
    <>
{/* an eslint error is coming */}
// eslint-disable-next-line
      {topics.map((t) => (


        <div key={t._id} className="mt-8 flex justify-between p-4 border border-cyan-950 rounded shadow-lg">
          <div className="">
            <h2 className="text-2xl font-bold text-slate-900 mb-1" >{t.title}</h2>
            <div className="text-slate-700 font-semibold text-md mt-1">{t.description}</div>
          </div>
          <div className="flex items-start gap-2">
            <Removebtn id={t._id} />
            <Link href={`/editTopic/${t._id}`}><HiPencilAlt size={24} className="text-slate-900" />
            </Link>
          </div>
        </div>
      ))}

    </>
  )
} catch (error) {
  console.log("something wrong:", error)
  const { topics } = await getTopics();
  if (!topics || topics.length === 0) {
   
    return <div className="text-slate-900">No topics found</div>;
  }
}
  
};