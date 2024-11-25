import Link from 'next/link';

export default function Home() {
  return (
    <div>
          Hello World from Panaverse DAO!
          <br/>
          <Link href="/asadullah">Go to Asadullah page</Link>
          <br/>
          <Link href="/zia">Go to Zia page</Link>
          <br/>
          <Link href="/hira">Go to Hira page</Link>
          <br/>
          <br/>
          <Link href="/hira">Go to Hira page</Link>
          <br/>
          You can also create a dynamic page by entering this URL in the browser: http://localhost:3000/xyz
    </div>
  )
}