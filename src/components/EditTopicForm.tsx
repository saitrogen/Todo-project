export default function EditTopicForm() {
  return (
    
      <form action="" className="flex gap-3 flex-col">
        <input 
        type="text"
        className="border border-slate-300 rounded px-4 py-2"
        placeholder="Topic title"  />
        <input 
        type="text" 
        className="border border-slate-300 rounded px-4 py-2"
        placeholder="Topic discription"/>
        <button type="submit" className=" rounded px-4 py-2 text-white font-bold w-fit bg-green-600">Update Topic</button>
      </form>
    
  );
}