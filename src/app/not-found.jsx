import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center bg-white p-10 rounded-xl shadow-md">
        <h2 className="text-3xl font-bold text-red-600 mb-4">404 - Not Found</h2>
        <p className="text-gray-700 mb-6">Sorry, the page you are looking for does not exist.</p>
        <Link
          href="/"
          className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
