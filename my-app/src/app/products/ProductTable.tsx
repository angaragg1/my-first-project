"use client";

import { useState, useMemo } from "react";

type Product = {
  id: number;
  title: string;
  brand: string;
  price: number;
  rating: number;
  thumbnail: string;
};

type ProductTableProps = {
  products: Product[];
};

export default function ProductTable({ products }: ProductTableProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;

  const filteredProducts = useMemo(() => {
    return products.filter((p) =>
      p.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [products, searchTerm]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const displayedProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* хайх хэсэг */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Бүтээгдэхүүн хайх"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setPage(1);
          }}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
        />
      </div>
      {/* хүснэгт */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 rounded-lg text-sm">
          <thead className="bg-blue-100 text-gray-700">
            <tr>
              <th className="px-4 py-2 text-left">Дугаар</th>
              <th className="px-4 py-2 text-left">Зураг</th>
              <th className="px-4 py-2 text-left">Нэр</th>
              <th className="px-4 py-2 text-left">Брэнд</th>
              <th className="px-4 py-2 text-left">Үнэ</th>
              <th className="px-4 py-2 text-left">Үнэлгээ</th>
            </tr>
          </thead>
          <tbody>
            {displayedProducts.length > 0 ? (
              displayedProducts.map((p) => (
                <tr
                  key={p.id}
                  className="border-t hover:bg-gray-50 transition"
                >
                  <td className="px-4 py-2">{p.id}</td>
                  <td className="px-4 py-2">
                    <img
                      src={p.thumbnail}
                      alt={p.title}
                      className="h-12 w-12 object-cover rounded-lg"
                    />
                  </td>
                  <td className="px-4 py-2 font-medium text-gray-800">{p.title}</td>
                  <td className="px-4 py-2">{p.brand}</td>
                  <td className="px-4 py-2 font-semibold text-blue-600">
                    ${p.price.toFixed(2)}
                  </td>
                  <td className="px-4 py-2">⭐ {p.rating}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={6}
                  className="text-center py-6 text-gray-500 italic"
                >
                  Бүтээгдэхүүн олдсонгүй
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Хуудаслалт */}
      <div className="flex justify-center items-center gap-3 mt-6">
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className={`px-3 py-1 rounded-lg border ${
            page === 1
              ? "text-gray-400 border-gray-200 cursor-not-allowed"
              : "border-blue-500 text-blue-600 hover:bg-blue-50"
          }`}
        >
          Өмнөх
        </button>
        <span className="text-gray-600 font-medium">
          Нийт {totalPages} хуудасний {page} дахь хуудас
        </span>
        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
          className={`px-3 py-1 rounded-lg border ${
            page === totalPages
              ? "text-gray-400 border-gray-200 cursor-not-allowed"
              : "border-blue-500 text-blue-600 hover:bg-blue-50"
          }`}
        >
          Дараах
        </button>
      </div>
    </div>
  );
}
