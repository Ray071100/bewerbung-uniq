"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav>
      <ul>
        <li>
          <Link href="/" className={pathname === "/" ? "active" : ""}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/cv" className={pathname === "/cv" ? "active" : ""}>
            Lebenslauf
          </Link>
        </li>
      </ul>
    </nav>
  );
}
