import React from "react";

export default function Loader() {
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-[9999]">
        <div className="w-12 h-12 border-4 border-t-teal-500 border-teal-200 rounded-full animate-spin" />
        <p className="mt-4 text-teal-700 font-medium">جاري التحميل...</p>
      </div>
    )
  }
  