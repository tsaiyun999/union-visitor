"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 p-6">
      {/* 標題 */}
      <h1 className="text-5xl font-extrabold text-blue-700 mb-4">
        聯合大學訪客問路系統
      </h1>
      <p className="text-lg text-gray-600 mb-10">
        歡迎使用本系統，快速找到你想去的地點！
      </p>

      {/* 功能選單 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-xl">
        <Link
          href="/search"
          className="block p-6 bg-white rounded-2xl shadow hover:shadow-lg transition text-center"
        >
          <h2 className="text-2xl font-semibold text-gray-800">🔍 查詢地點 </h2>
          <p className="text-gray-500 mt-2">輸入地點名稱，快速找到位置</p>
        </Link>

        <Link
          href="/map"
          className="block p-6 bg-white rounded-2xl shadow hover:shadow-lg transition text-center"
        >
          <h2 className="text-2xl font-semibold text-gray-800">🗺️ 校園地圖</h2>
          <p className="text-gray-500 mt-2">瀏覽地圖，直覺找到目的地</p>
        </Link>
      </div>

      {/* 版權或學校資訊 */}
      <footer className="mt-16 text-gray-400 text-sm">
        © {new Date().getFullYear()} 國立聯合大學 | 訪客導覽系統
      </footer>
    </div>
  );
}
