"use client";

import { insertData } from "@/app/actions";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      HOME
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-md"
        onClick={async () => {
          await insertData();
        }}
      >
        hoge
      </button>
    </main>
  );
}
