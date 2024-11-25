import Link from 'next/link';

export default function Home() {
  return (
    <div>
          Hello World from Panaverse DAO!
          <br/>
          <Link href="/asadullah">Go to Asadullah page</Link>
          <br/> 
          <Link href="/hajirah">Go to Hijarah page</Link>
          <br/>
          <Link href="/zunairah">Go to Zunairah page</Link>
          <br/>
          <Link href="/ahmed">Go to Ahmed page</Link>
          <br/>
          <Link href="/hamza">Go to Hamza page</Link>
          <br/>
          <Link href="/musfirah">Go to Musfirah page</Link>
          <br/>  
          You can also create a dynamic page by entering this URL in the browser: http://localhost:3000/xyz
    </div>
  )
}