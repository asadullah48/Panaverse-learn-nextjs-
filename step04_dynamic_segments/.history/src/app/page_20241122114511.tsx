import Link from 'next/link';

export default function Home() {
  return (
    <div>
          Hello World from Panaverse DAO!
          <br/>
          <Link href="/asadullah">Go to Asadullah Shafique page</Link>
          <br/>
          <Link href="/ahmed">Go to Ahmed Shafique page</Link>
          <br/>
          <Link href="/hamza">Go to Hamza Shafique page</Link>
          <br/>
          <br/>
          <Link href="/hajirah">Go to Hijarah Shafique page</Link>
          <br/>
          <br/>
          <Link href="/zunairah">Go to Zunairah Shafique page</Link>
          <br/>
          
          
          You can also create a dynamic page by entering this URL in the browser: http://localhost:3000/xyz
    </div>
  )
}