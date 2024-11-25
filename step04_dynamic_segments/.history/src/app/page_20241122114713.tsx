import Link from 'next/link';

export default function Home() {
  return (
    <div>
          Hello World from Panaverse DAO!
          <br/>
          <Link href="/asadullah">Go to Asadullah Shafique page</Link>
          <br/> 
          <Link href="/hajirah">Go to Hijarah Shafique page</Link>
          <br/>
          <br/>
          <br/>
          <Link href="/ahmed">Go to Ahmed Shafique page</Link>
          <br/>
          <br/>
          <br/>
          <br/>
          <Link href="/musfirah">Go to Musfirah Shafique page</Link>
          <br/>
          <Link href="/zunairah">Go to Zunairah Shafique page</Link>


          
          You can also create a dynamic page by entering this URL in the browser: http://localhost:3000/xyz
    </div>
  )
}