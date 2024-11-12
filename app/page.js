import Link from "next/link";

export default function Home() {
  return (
    <main style={{display: 'flex', flexDirection: 'column', alignItems: "center", justifyContent: "center"}}>
      <h1 className="text-3xl"> CPRG 306: Web Development 2 - Assignments</h1>
      <Link href="./week-2/">Week2 Assignments</Link>
      <Link href="./week-3/">Week3 Assignments</Link>
      <Link href="./week-4/">Week4 Assignments</Link>
      <Link href="./week-5/">Week5 Assignments</Link>
      <Link href="./week-6/">Week6 Assignments</Link>
      <Link href="./week-7/">Week7 Assignments</Link>
      <Link href="./week-8/">Week8 Assignments</Link>
      <Link href="./week-9/">Week9 Assignments</Link>
      <Link href="./week-10/">Week10 Assignments</Link>
    </main>
  );
}
