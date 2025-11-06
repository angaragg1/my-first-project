import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-b from-blue-100 to-blue-50 px-4 text-center">
      <h1 className="text-5xl font-extrabold text-blue-800 mb-6 drop-shadow-lg">
         Сайн байцгаана уу!
      </h1>
      <p className="text-lg text-gray-700 mb-8 max-w-md">
        Хэрэгжүүлсэн төслийг хармаар байвал дараах товчийг дарна уу.
      </p>
      <Link
        href="/products"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold shadow-md hover:bg-blue-700 transition"
      >
        Төслийг үзэх 
      </Link>
    </div>
  );
}

