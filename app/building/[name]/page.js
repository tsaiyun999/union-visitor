import { buildings } from "../../../data/buildings";
import Link from "next/link";
export default function Building({ params }) {
  const { name } = params;
  const building = buildings.find(b => b.name === decodeURIComponent(name));

  if (!building) return (
    <div className="p-10 text-center text-red-500 font-semibold">
      找不到此建築物
    </div>
  );

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">{building.name}</h1>
      
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-gray-100 p-3 rounded">
          <p className="font-semibold text-gray-700">描述</p>
          <p>{building.description}</p>
        </div>
        <div className="bg-gray-100 p-3 rounded">
          <p className="font-semibold text-gray-700">校區</p>
          <p>{building.campus}</p>
        </div>
        <div className="bg-gray-100 p-3 rounded">
          <p className="font-semibold text-gray-700">建築</p>
          <p>{building.building || "—"}</p>
        </div>
        <div className="bg-gray-100 p-3 rounded">
          <p className="font-semibold text-gray-700">樓層</p>
          <p>{building.floor || "—"}</p>
        </div>
      </div>

      <Link
        href="/"
        className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        返回首頁
      </Link>
    </div>
  );
}
