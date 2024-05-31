import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-cente">
      <Image
        placeholder="blur"
        src="/assets/images/404_animation.gif"
        height={700}
        width={700}
        alt="404 Not Found"
        unoptimized
      />
      <div className="max-w-md p-8 bg-white rounded-lg">
        <h1 className="text-4xl text-red-500 font-bold mb-4">Oops!</h1>
        <p className="text-gray-700 mb-4 font-bold">
          Page Not Found. Please try again later.
        </p>
        <Link href="/">
          <button className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
            Go Home
          </button>
        </Link>
      </div>
    </div>
  );
}
