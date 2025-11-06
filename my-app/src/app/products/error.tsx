"use client";

type ErrorProps = {
  error: Error;
  reset: () => void;
};
export default function Error({ error, reset }: ErrorProps) {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-red-50 text-center">
      <h2 className="text-2xl font-bold text-red-600 mb-2">
        Алдаа гарлаа
      </h2>
      <p className="text-gray-700 mb-4">{error.message}</p>
      <button
        onClick={() => reset()}
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
      >
        Дахин оролдоно уу
      </button>
    </div>
  );
}

