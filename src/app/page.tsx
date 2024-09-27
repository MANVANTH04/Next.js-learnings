import Dashboard from './pages/dashboard';
import Link from 'next/link';

export default function Home() {
  return (
    <>
    <header>
      
      <Link href="/dashboard">Dashboard</Link>
    </header>

    </>
  );
}
