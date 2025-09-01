"use client";

import { useState } from "react";
import { buildings } from "../data/buildings";
import Link from "next/link";

export default function HomePage() {
  const [query, setQuery] = useState("");
  const filteredBuildings = buildings.filter(b =>
    b.name.includes(query)
  );

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">
        聯合大學建築查詢系統
      </h1>

      {/* 查詢輸入框 */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="輸入建築名稱..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* 查詢結果列表 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {filteredBuildings.map(b => (
          <Link
            key={`${b.campus}-${b.building}-${b.floor}-${b.name}`}
            href={`/building/${encodeURIComponent(b.name)}`}
            className="block p-4 bg-white rounded-lg shadow hover:shadow-lg transition"
          >
            <h2 className="text-lg font-semibold text-gray-800">{b.name}</h2>
            <p className="text-sm text-gray-500">{b.description}</p>
            <p className="text-xs text-gray-400 mt-1">
              {b.campus} {b.building ? `| ${b.building}` : ""} {b.floor ? `| ${b.floor}` : ""}
            </p>
          </Link>
        ))}
      </div>

      {/* 查詢無結果提示 */}
      {query && filteredBuildings.length === 0 && (
        <p className="mt-6 text-center text-red-500 font-semibold">
          找不到建築物
        </p>
      )}
    </div>
  );
}
