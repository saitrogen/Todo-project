import Link from "next/link";
import Removebtn from "./Removebtn";

export default function TopicsList() {
  return (
    <div className="mt-7">
      <div>
        <h2></h2>
        <div></div>
      </div>
      <div>
        <Removebtn/>
        <Link href='/editTopic/123'>Edit</Link>
      </div>
    </div>
  )
}