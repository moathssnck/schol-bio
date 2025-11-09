import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      {/* Header Navigation */}
      <header className="bg-background border-b border-border sticky top-0 z-50">
        <nav className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-bold">
              ق
            </div>
            <h1 className="font-bold text-lg text-primary">مدرسة نوره لتعليم القيادة</h1>
          </div>
          <div className="flex gap-4 items-center">
            <Link
              href="/"
              className="text-sm text-muted-foreground hover:text-primary transition flex items-center gap-2"
            >
              <ChevronLeft className="w-4 h-4" />
              العودة
            </Link>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-16">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">الشروط والأحكام</h1>
          <p className="text-muted-foreground">آخر تحديث: نوفمبر 2025</p>
        </div>

        <div className="bg-card rounded-lg border border-border p-8 space-y-8">
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">1. قبول الشروط</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              بالانضمام إلى مدرسة نوره لتعليم القيادة واستخدام خدماتنا، فإنك توافق على الامتثال لجميع الشروط والأحكام
              المذكورة هنا. إذا كنت لا توافق على أي من هذه الشروط، فيرجى عدم استخدام خدماتنا.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">2. الخدمات المقدمة</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              نقدم برامج تعليم القيادة الآمنة والمهنية بما في ذلك:
            </p>
            <ul className="space-y-2 text-muted-foreground mb-4 ml-4">
              <li>• دورات القيادة الدفاعية المعتمدة</li>
              <li>• برامج تدريب السلامة على الطرق</li>
              <li>• اختبارات عملية موثقة</li>
              <li>• استشارات السلامة المتخصصة</li>
              <li>• برامج تدريب للشركات والمؤسسات</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">3. شروط الالتزام</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">يوافق المتدرب على:</p>
            <ul className="space-y-2 text-muted-foreground mb-4 ml-4">
              <li>• الالتزام بالحضور في الأوقات المحددة</li>
              <li>• اتباع جميع تعليمات المدربين والسلامة</li>
              <li>• الامتثال للقوانين والنظم المرورية السعودية</li>
              <li>• عدم التصرف بطريقة غير آمنة أو مسيئة</li>
              <li>• الالتزام بقواعد السلوك الأخلاقي</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">4. الرسوم والدفع</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              تكون الرسوم محددة مسبقاً وتدفع قبل بدء الخدمة. لا تُرجع الرسوم إلا في حالات محددة وفقاً لسياستنا. يتعين على
              المتدربين سداد الرسوم كاملة قبل الحصول على الشهادة.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">5. الإلغاء والاسترجاع</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">في حالة الرغبة في الإلغاء:</p>
            <ul className="space-y-2 text-muted-foreground mb-4 ml-4">
              <li>• الإلغاء قبل 7 أيام: استرجاع 100% من الرسوم</li>
              <li>• الإلغاء قبل 3 أيام: استرجاع 50% من الرسوم</li>
              <li>• الإلغاء قبل 24 ساعة: لا استرجاع</li>
              <li>• يجب إخطار المدرسة كتابياً بطلب الإلغاء</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">6. المسؤولية والتأمين</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              المتدربون مسؤولون عن سلوكهم وأفعالهم أثناء البرامج التدريبية. جميع السيارات مؤمنة بالكامل وفقاً للقوانين
              السعودية. لا تتحمل المدرسة مسؤولية الأضرار الشخصية أو الإصابات الناجمة عن إهمال المتدرب.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">7. الملكية الفكرية</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              جميع المواد التعليمية والمحتوى المقدم من قبل المدرسة محمية بحقوق الملكية الفكرية. لا يُسمح باستخدام أو نسخ
              هذا المحتوى دون إذن كتابي مسبق.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">8. الشهادات</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              الشهادات الصادرة من المدرسة معترف بها وموثقة وفقاً للمعايير الدولية. تُصدر الشهادات فقط بعد إكمال البرنامج
              بنجاح واجتياز الاختبارات المطلوبة.
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">9. تعديل الشروط</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              تحتفظ المدرسة بالحق في تعديل هذه الشروط والأحكام في أي وقت. سيتم إخطار المتدربين بأي تغييرات جوهرية قبل
              تطبيقها.
            </p>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">10. القانون الحاكم</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              تحكم هذه الشروط والأحكام قوانين المملكة العربية السعودية، وتخضع لاختصاص المحاكم السعودية المختصة.
            </p>
          </section>

          {/* Contact Section */}
          <section className="border-t border-border pt-8">
            <h2 className="text-2xl font-bold text-primary mb-4">التواصل</h2>
            <p className="text-muted-foreground mb-4">
              إذا كانت لديك أي استفسارات حول هذه الشروط والأحكام، يرجى التواصل معنا:
            </p>
            <div className="bg-secondary/50 rounded p-4 space-y-2">
              <p className="text-muted-foreground">
                <span className="font-semibold">البريد الإلكتروني:</span> info@drivingyschool.sa
              </p>
              <p className="text-muted-foreground">
                <span className="font-semibold">الهاتف:</span> +966 11 2345 678
              </p>
              <p className="text-muted-foreground">
                <span className="font-semibold">الموقع:</span> الرياض، المملكة العربية السعودية
              </p>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-foreground/5 border-t border-border mt-16">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="border-b border-border pb-8 mb-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h4 className="font-bold text-primary mb-4">مدرسة نوره لتعليم القيادة</h4>
                <p className="text-sm text-muted-foreground">تعليم القيادة الآمنة والمهنية بمعايير عالمية</p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">الروابط السريعة</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/" className="text-muted-foreground hover:text-primary transition">
                      الرئيسية
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-muted-foreground hover:text-primary transition">
                      الدورات
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-muted-foreground hover:text-primary transition">
                      البرامج
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">السياسات</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/terms" className="text-muted-foreground hover:text-primary transition font-semibold">
                      الشروط والأحكام
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy" className="text-muted-foreground hover:text-primary transition">
                      سياسة الخصوصية
                    </Link>
                  </li>
                  <li>
                    <Link href="/ads-policy" className="text-muted-foreground hover:text-primary transition">
                      سياسة الإعلانات
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">تابعنا</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#" className="text-muted-foreground hover:text-primary transition">
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-muted-foreground hover:text-primary transition">
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-muted-foreground hover:text-primary transition">
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>&copy; 2025 مدرسة نوره لتعليم القيادة. جميع الحقوق محفوظة.</p>
            <p>تم إنشاؤه بمعايير Google الإعلانية الدولية</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
