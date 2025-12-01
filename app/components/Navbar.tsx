import Link from "next/link";

export default function Navbar() {

  return (
    <div className="p-2 flex justify-center">
      <nav className="container flex justify-between p-4">
      <ul>
        <li>
          <a href="/">Logistic</a>
        </li>
      </ul>
      <ul className="flex justify-between gap-4">
          <li>
            <Link href="/product">ini halaman product</Link>
          </li>
      </ul>
    </nav>
    </div>
  )
}