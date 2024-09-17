import Link from 'next/link';
export default function Navbar() {
  return (
    <nav className='flex justify-between items-center px-8 py-3 bg-cyan-800 rounded-md shadow-2xl mb-'>
      <Link href='/' className='text-white text-3xl  font-bold'>Saitrogen</Link>
      <Link href='/addTopic'  className='text-white font-bold bg-slate-400 text-xl p-3 rounded'>Add Topic</Link>
    </nav>)
}