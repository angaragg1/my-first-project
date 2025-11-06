import ProductTable from "./ProductTable";

export default async function ProductsPage() {
  try {

    await new Promise((resolve) => setTimeout(resolve, 2000)); //delay fetching to show loading.tsx page 

    const res = await fetch("https://dummyjson.com/products?limit=100"); //{cache: "no-store",}

    if (!res.ok) {
      throw new Error("Бүтээгдэхүүнийг татаж авахад алдаа гарлаа.");
    }

    const data = await res.json();

    if (!data.products) {
      throw new Error("Ямар ч бүтээгдэхүүн байхгүй байна.");
    }

    return (
      <div className="flex justify-center items-start min-h-screen bg-gray-50 px-4 pt-8">
        <div className="w-full max-w-2xl">
          <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
            Бүтээгдэхүүний жагсаалт
          </h1>
          <ProductTable products={data.products} />
        </div>
    </div>
    );
  } catch (error) {
    throw error;
  }
}

