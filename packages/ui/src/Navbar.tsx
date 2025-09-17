"use client";

import Link from "next/link";

export function Navbar() {
  return (
    <nav style={{ padding: "1rem", borderBottom: "1px solid #ddd" }}>
      <Link href="/">Home</Link> |{" "}
      <Link href="/login">Login</Link> |{" "}
      <Link href="/admin">Admin</Link>
    </nav>
  );
}
