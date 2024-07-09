// pages/404.js
import Link from "next/link"
// import Link from "next/link";

const Custom404 = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800">You Not Allowed to Access</h1>
        <p className="text-2xl text-gray-600 mb-4">Only admin Accessable</p>
        <Link href="/" className="text-blue-500 hover:underline">
          < >Go back to home</>
        </Link>
      </div>
    </div>
  );
};

export default Custom404;
