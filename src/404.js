import Link from "next/link";

export default function Notfound() {
  return (
    <main>
      <h1>Sorry, can't find this page 🥺</h1>

      <Link href='/'>Go back to home page</Link>
    </main>
  );
}
