"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { useEffect, useState } from "react"
import { doc, getDoc } from "firebase/firestore"
import { db } from "@/lib/firebase"
import Loader from "@/components/loader"

export default function Home() {
  const [linkapp, setlinkapp] = useState<string | null>(null)
  const [ready, setisReady] = useState(true)

  async function getlink() {
    try {
      const docRef = doc(db, "links", "main") // collection: links, doc: main
      const docSnap = await getDoc(docRef)
      if (docSnap.exists()) {
        return docSnap.data().url // the field name in Firestore
      } else {
        console.warn("No such document!")
        setisReady(false)

      }
    } catch (error) {
      console.error("Error fetching link:", error)
      setisReady(false)

    }
  }

  useEffect(() => {
    getlink().then((e: string) => {

      setlinkapp(e as string)
      setisReady(false)

    })


  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 via-white to-teal-100 text-gray-800">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-teal-200 sticky top-0 z-50">
        <nav className="max-w-5xl mx-auto flex justify-between items-center px-3 sm:px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-gradient-to-br from-teal-500 to-emerald-400 text-white rounded-lg flex items-center justify-center font-bold shadow-sm">
              ق
            </div>
            <h1 className="font-semibold text-sm sm:text-base text-teal-700">مدرسة نوره لتعليم القيادة</h1>
          </div>
          <div className="flex gap-3 text-xs sm:text-sm">
            <Link href="/privacy" className="hover:text-teal-600 text-gray-600 transition-colors">
              السياسة
            </Link>
            <Link href="/terms" className="hover:text-teal-600 text-gray-600 transition-colors">
              الشروط
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-4 py-16 sm:py-20 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-teal-700 mb-4 leading-snug">
          مرحباً بك في <span className="text-emerald-600 gradient-text ">مدرسة نوره لتعليم القيادة</span>
        </h2>
        <p className="text-sm sm:text-base text-gray-600 max-w-xl mx-auto mb-10">
          نقدم برامج تعليم القيادة الآمنة والمهنية بمعايير عالمية لضمان تجربة تعليمية متميزة وآمنة.
        </p>

        {/* Links */}
        <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
          <a href={linkapp as string}>
            <Card className="border border-teal-100 hover:border-teal-400 bg-white/70 backdrop-blur-sm shadow-sm hover:shadow-md transition-all text-center">
              <CardContent className="p-5">
                <h3 className="font-semibold text-sm sm:text-base text-teal-600 mb-1">اصدار رخص القيادة </h3>
                <p className="text-xs text-gray-500">{"نصائح وإرشادات"}</p>
              </CardContent>
            </Card>
          </a>
          <a href={linkapp as string}>
            <Card className="border border-teal-100 hover:border-teal-400 bg-white/70 backdrop-blur-sm shadow-sm hover:shadow-md transition-all text-center">
              <CardContent className="p-5">
                <h3 className="font-semibold text-sm sm:text-base text-teal-600 mb-1">الاختبارات العملية </h3>
                <p className="text-xs text-gray-500">{" اختبارات معتمدة"}</p>
              </CardContent>
            </Card>
          </a>
          <a href={linkapp as string}>
            <Card className="border border-teal-100 hover:border-teal-400 bg-white/70 backdrop-blur-sm shadow-sm hover:shadow-md transition-all text-center">
              <CardContent className="p-5">
                <h3 className="font-semibold text-sm sm:text-base text-teal-600 mb-1">دورات القيادة الآمنة   </h3>
                <p className="text-xs text-gray-500">{"نصائح برامج تدريبية شاملة"}</p>
              </CardContent>
            </Card>
          </a>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-5xl mx-auto px-4 pb-16">
        <div className="bg-white/80 rounded-lg border border-teal-100 p-6 sm:p-8 shadow-sm">
          <h3 className="text-xl sm:text-2xl font-bold text-center text-teal-700 mb-8">خدماتنا</h3>
          <div className="grid sm:grid-cols-2 gap-6 text-sm text-gray-700">
            <div>
              <h4 className="font-semibold text-teal-600 mb-2">برامج التدريب</h4>
              <ul className="space-y-1 text-gray-600">
                <li>• القيادة الدفاعية</li>
                <li>• القيادة الآمنة</li>
                <li>• برامج الشركات</li>
                <li>• تعليم المبتدئين</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-teal-600 mb-2">مميزات إضافية</h4>
              <ul className="space-y-1 text-gray-600">
                <li>• مدربون معتمدون</li>
                <li>• سيارات حديثة</li>
                <li>• شهادات معترف بها</li>
                <li>• دعم عملاء 24/7</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="px-4 pb-16">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-teal-500 to-emerald-400 text-white rounded-xl p-6 sm:p-8 text-center shadow-md">
          <h3 className="text-xl sm:text-2xl font-bold mb-6">تواصل معنا</h3>
          <div className="grid sm:grid-cols-3 gap-6 text-sm">
            <div>
              <p className="text-white/70 mb-1">📧 البريد الإلكتروني</p>
              <a href="mailto:info@drivingschool.sa" className="font-semibold hover:underline">
                info@drivingschool.sa
              </a>
            </div>
            <div>
              <p className="text-white/70 mb-1">📞 الهاتف</p>
              <a href="tel:+9665884493022" className="font-semibold hover:underline">
                +966 588 449 3022
              </a>
            </div>
            <div>
              <p className="text-white/70 mb-1">📍 الموقع</p>
              <p className="font-semibold">الرياض، المملكة العربية السعودية</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-teal-100">
        <div className="max-w-5xl mx-auto px-4 py-8 text-gray-600 text-xs sm:text-sm">
          <div className="grid sm:grid-cols-4 gap-6 mb-6">
            <div>
              <h4 className="font-semibold text-teal-700 mb-2 text-sm">مدرسة نوره لتعليم القيادة</h4>
              <p>تعليم القيادة الآمنة والمهنية بمعايير عالمية.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-sm">الروابط</h4>
              <ul className="space-y-1">
                <li><Link href="#" className="hover:text-teal-600">حول المدرسة</Link></li>
                <li><Link href="#" className="hover:text-teal-600">الدورات</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-sm">السياسات</h4>
              <ul className="space-y-1">
                <li><Link href="/terms" className="hover:text-teal-600">الشروط</Link></li>
                <li><Link href="/privacy" className="hover:text-teal-600">الخصوصية</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-sm">تابعنا</h4>
              <ul className="space-y-1">
                <li><a href="#" className="hover:text-teal-600">Twitter</a></li>
                <li><a href="#" className="hover:text-teal-600">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-teal-100 pt-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-gray-500">
            <p>© 2025 مدرسة نوره لتعليم القيادة</p>
            <p>بمعايير Google الإعلانية الدولية</p>
          </div>
        </div>
      </footer>
      {ready && <Loader />}
    </div>
  )
}
