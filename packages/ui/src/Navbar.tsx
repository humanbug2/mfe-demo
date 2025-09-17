"use client";

import Link from "next/link";

export function Navbar() {
  return (
    <nav style={{ padding: "1rem", borderBottom: "1px solid #ddd" }}>
      <Link href="https://mfe-home-tawny.vercel.app/">Home</Link> |{" "}
      <Link href="https://mfe-login-zeta.vercel.app/">Login</Link> |{" "}
      <Link href="https://mfe-admin.vercel.app/">Admin</Link>
    </nav>
  );
}
