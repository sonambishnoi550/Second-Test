
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex justify-center min-h-screen items-center gap-6 py-10">
        <Link href={"/question-1/dashboard"} className="text-black p-3 border border-black whitespace-nowrap rounded-lg bg-green-600">
          Question-1
        </Link>
        <Link href={"/question-2/dashboard"} className="text-black p-3 border border-black whitespace-nowrap rounded-lg bg-green-600">
          Question-2
        </Link>
      </div>
    </>
  );
}