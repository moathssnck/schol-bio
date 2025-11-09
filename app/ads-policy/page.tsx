import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function AdsPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      {/* Header Navigation */}
      <header className="bg-background border-b border-border sticky top-0 z-50">
        <nav className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-bold">
              ق
            </div>
            <h1 className="font-bold text-lg text-primary">المدرسة السعودية للقيادة</h1>
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
          <h1 className="text-4xl font-bold text-primary mb-4">سياسة إعلانات Google</h1>
          <p className="text-muted-foreground">آخر تحديث: نوفمبر 2025</p>
        </div>

        <div className="bg-card rounded-lg border border-border p-8 space-y-8">
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">1. نظرة عامة</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              المدرسة السعودية للقيادة تستخدم Google AdSense و Google Analytics لتحسين خدماتنا والإعلانات المخصصة. توضح
              هذه السياسة كيفية نستخدم تقنيات Google وكيفية يمكنك التحكم في الإعلانات المخصصة.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">2. Google AdSense</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              موقعنا يستخدم Google AdSense لعرض الإعلانات ذات الصلة. Google AdSense:
            </p>
            <ul className="space-y-2 text-muted-foreground mb-4 ml-4">
              <li>• يستخدم ملفات تعريف الارتباط لتحسين أداء الإعلانات</li>
              <li>• يتتبع سلوكك للإعلانات ذات الصلة</li>
              <li>• يقدم إعلانات بناءً على اهتماماتك</li>
              <li>• يحترم خيارات عدم التتبع والمتصفحات الخاصة</li>
              <li>• يتوافق مع معايير Google الإعلانية</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">3. Google Analytics</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              نستخدم Google Analytics لفهم كيف يتفاعل الزوار مع موقعنا. هذا يساعدنا على:
            </p>
            <ul className="space-y-2 text-muted-foreground mb-4 ml-4">
              <li>• تحليل حركة المرور على الموقع</li>
              <li>• فهم سلوك المستخدمين والتفضيلات</li>
              <li>• تحسين جودة المحتوى والخدمات</li>
              <li>• تتبع الحملات الإعلانية والأداء</li>
              <li>• تحسين تجربة المستخدم العامة</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">4. ملفات تعريف الارتباط والتتبع</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              يستخدم الموقع ملفات تعريف الارتباط من Google و معلنين آخرين لتتبع الإعلانات والأداء. قد تتضمن:
            </p>
            <ul className="space-y-2 text-muted-foreground mb-4 ml-4">
              <li>• ملفات تعريف الارتباط الخاصة بـ Google AdSense</li>
              <li>• ملفات تعريف الارتباط التابعة لجهات خارجية</li>
              <li>• بكسلات التتبع وعلامات إعادة التسويق</li>
              <li>• معرّفات الجهاز والعنوان IP</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">5. الإعلانات المخصصة</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Google و معلنونا يستخدمون بياناتك لعرض إعلانات مخصصة بناءً على:
            </p>
            <ul className="space-y-2 text-muted-foreground mb-4 ml-4">
              <li>• السلوك السابق على الويب والتطبيقات</li>
              <li>• الاهتمامات والتفضيلات المتصورة</li>
              <li>• الموقع الجغرافي التقريبي</li>
              <li>• نوع الجهاز ونظام التشغيل</li>
              <li>• وقت الزيارة والأنشطة الأخرى</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">6. التحكم في الإعلانات</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">لديك خيارات للتحكم في الإعلانات المخصصة:</p>
            <ul className="space-y-2 text-muted-foreground mb-4 ml-4">
              <li>• إدارة إعدادات الإعلانات في Google Account</li>
              <li>• اختيار عدم التتبع من خلال متصفحك</li>
              <li>• تثبيت مانع الإعلانات أو مانع التتبع</li>
              <li>• مسح ملفات تعريف الارتباط بانتظام</li>
              <li>• استخدام النسخة الخاصة من المتصفح</li>
            </ul>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">7. معايير الإعلانات</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">نلتزم بمعايير Google الإعلانية الصارمة:</p>
            <ul className="space-y-2 text-muted-foreground mb-4 ml-4">
              <li>• عدم السماح بالإعلانات المتطفلة</li>
              <li>• عدم السماح بمحتوى مسيء أو خاطئ</li>
              <li>• عدم السماح بمعلومات شخصية حساسة</li>
              <li>• الامتثال لسياسات حماية البيانات</li>
              <li>• عدم استهداف الأطفال بشكل غير مناسب</li>
            </ul>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">8. البيانات المشتركة مع Google</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              عند استخدام موقعنا، تتم مشاركة المعلومات التالية مع Google:
            </p>
            <ul className="space-y-2 text-muted-foreground mb-4 ml-4">
              <li>• معرّف الجهاز والعنوان IP</li>
              <li>• نوع المتصفح ونظام التشغيل</li>
              <li>• صفحات الموقع التي تزورها</li>
              <li>• وقت والمدة التي تقضيها على الموقع</li>
              <li>• بيانات الإحالة والبحث</li>
            </ul>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">9. الامتثال للقوانين</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">نلتزم بجميع القوانين ذات الصلة بما فيها:</p>
            <ul className="space-y-2 text-muted-foreground mb-4 ml-4">
              <li>• اللائحة العامة لحماية البيانات (GDPR)</li>
              <li>• قانون حماية البيانات الشخصية السعودي</li>
              <li>• قوانين الخصوصية الدولية</li>
              <li>• سياسات معايير الإعلانات الأخلاقية</li>
              <li>• متطلبات موافقة المستخدم</li>
            </ul>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">10. تقارير الإعلانات</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">إذا كانت لديك مشاكل مع إعلان معين، يمكنك:</p>
            <ul className="space-y-2 text-muted-foreground mb-4 ml-4">
              <li>• الإبلاغ عن الإعلان من خلال خيار "الإبلاغ عن الإعلان"</li>
              <li>• التواصل معنا مباشرة بالمخاوف</li>
              <li>• استخدام أداة إدارة الإعلانات من Google</li>
              <li>• طلب مراجعة من فريق Google</li>
            </ul>
          </section>

          {/* Section 11 */}
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">11. التغييرات على السياسة</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              قد نقوم بتحديث هذه السياسة عند تغيير ممارسات الإعلانات لدينا أو بناءً على متطلبات Google الجديدة. سيتم نشر
              التحديثات على هذه الصفحة.
            </p>
          </section>

          {/* Section 12 */}
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">12. الدعم والمساعدة</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              لمزيد من المعلومات عن Google AdSense و Google Analytics، تفضل بزيارة:
            </p>
            <ul className="space-y-2 text-muted-foreground mb-4 ml-4">
              <li>
                • Google AdSense:{" "}
                <a href="https://support.google.com/adsense" className="text-primary hover:underline">
                  support.google.com/adsense
                </a>
              </li>
              <li>
                • Google Analytics:{" "}
                <a href="https://support.google.com/analytics" className="text-primary hover:underline">
                  support.google.com/analytics
                </a>
              </li>
              <li>
                • إعدادات الإعلانات:{" "}
                <a href="https://myaccount.google.com/about-ads" className="text-primary hover:underline">
                  myaccount.google.com/about-ads
                </a>
              </li>
            </ul>
          </section>

          {/* Contact Section */}
          <section className="border-t border-border pt-8">
            <h2 className="text-2xl font-bold text-primary mb-4">الاتصال</h2>
            <p className="text-muted-foreground mb-4">للاستفسارات حول سياسة الإعلانات لدينا:</p>
            <div className="bg-secondary/50 rounded p-4 space-y-2">
              <p className="text-muted-foreground">
                <span className="font-semibold">البريد الإلكتروني:</span> ads@drivingyschool.sa
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
                <h4 className="font-bold text-primary mb-4">المدرسة السعودية للقيادة</h4>
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
                    <Link href="/terms" className="text-muted-foreground hover:text-primary transition">
                      الشروط والأحكام
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy" className="text-muted-foreground hover:text-primary transition">
                      سياسة الخصوصية
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/ads-policy"
                      className="text-muted-foreground hover:text-primary transition font-semibold"
                    >
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
            <p>&copy; 2025 المدرسة السعودية للقيادة. جميع الحقوق محفوظة.</p>
            <p>تم إنشاؤه بمعايير Google الإعلانية الدولية</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
