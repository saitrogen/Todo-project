import Link from 'next/link';
export default function Navbar() {
  return (
    <nav className='flex justify-between items-center px-8 py-4 bg-cyan-800 rounded-md shadow-2xl'>
      <Link href='/' className='text-white font-bold'>Saitrogen</Link>
      <Link href='/addTopuic'  className='text-white font-bold bg-slate-400 p-2 rounded'>Add Topic</Link>
    </nav>)
}