export default function Loading() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-50">
      <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-400 border-t-transparent mb-4"></div>
      <p className="text-blue-600 font-medium text-lg">Уншиж байна.</p>
    </div>
  );
}
