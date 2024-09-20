import Link from "next/link";

export default function Home() {
  return (
    <main style={{display: 'flex', flexDirection: 'column', alignItems: "center", justifyContent: "center"}}>
      <h1 className="text-3xl"> CPRG 306: Web Development 2 - Assignments</h1>
      <Link href="./week-2/">Week2 Assignments</Link>
      <Link href="./week-3/">Week3 Assignments</Link>
    </main>
  );
}
