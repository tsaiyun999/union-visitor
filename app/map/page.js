"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function MapPage() {
  const [modalImage, setModalImage] = useState(null);

  const openModal = (src, alt) => setModalImage({ src, alt });
  const closeModal = () => setModalImage(null);

  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">校園地圖</h1>

      {/* 返回首頁按鈕 */}
      <Link
        href="/"
        className="mb-6 px-4 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition"
      >
        返回首頁
      </Link>

      {/* 兩張地圖圖片 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
        <div
          className="border rounded-lg shadow bg-white p-4 cursor-pointer"
          onClick={() => openModal("/images/campus-map1.jpg", "二坪山校區地圖")}
        >
          <Image
            src="/images/campus-map1.jpg"
            alt="二坪山校區地圖"
            width={600}
            height={400}
            className="rounded-lg"
          />
          <p className="text-center mt-2 text-gray-600">二坪山校區地圖</p>
        </div>

        <div
          className="border rounded-lg shadow bg-white p-4 cursor-pointer"
          onClick={() => openModal("/images/campus-map2.jpg", "八甲校區地圖 B")}
        >
          <Image
            src="/images/campus-map2.jpg"
            alt="八甲校區地圖 B"
            width={600}
            height={400}
            className="rounded-lg"
          />
          <p className="text-center mt-2 text-gray-600">八甲校區地圖 B</p>
        </div>
      </div>

      {/* 圖片放大模態 */}
      {modalImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div className="relative">
            <Image
              src={modalImage.src}
              alt={modalImage.alt}
              width={1000}
              height={800}
              className="rounded-lg"
            />
            <button
              className="absolute top-2 right-2 text-white text-2xl font-bold"
              onClick={closeModal}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
