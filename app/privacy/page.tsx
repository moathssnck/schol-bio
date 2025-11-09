import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function PrivacyPage() {
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
          <h1 className="text-4xl font-bold text-primary mb-4">سياسة الخصوصية</h1>
          <p className="text-muted-foreground">آخر تحديث: نوفمبر 2025</p>
        </div>

        <div className="bg-card rounded-lg border border-border p-8 space-y-8">
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">1. مقدمة</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              تلتزم المدرسة السعودية للقيادة بحماية خصوصيتك وأمان بيانات المتدربين. توضح سياسة الخصوصية هذه كيفية قمنا
              بجمع واستخدام وحماية معلوماتك الشخصية.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">2. البيانات المجمعة</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">نجمع المعلومات التالية:</p>
            <ul className="space-y-2 text-muted-foreground mb-4 ml-4">
              <li>• البيانات الشخصية: الاسم والبريد الإلكتروني ورقم الهاتف</li>
              <li>• بيانات التسجيل: تاريخ الميلاد والرقم القومي رخصة القيادة</li>
              <li>• بيانات الالتحاق: البرامج المختارة والتواريخ والرسوم</li>
              <li>• بيانات الأداء: درجات الاختبارات والحضور والشهادات</li>
              <li>• بيانات الجهاز: نوع المتصفح والعنوان IP عند الوصول للموقع</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">3. استخدام البيانات</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">نستخدم بياناتك الشخصية للأغراض التالية:</p>
            <ul className="space-y-2 text-muted-foreground mb-4 ml-4">
              <li>• معالجة طلبات الالتحاق والتسجيل في البرامج</li>
              <li>• توفير الخدمات التدريبية والتواصل معك</li>
              <li>• إرسال التحديثات والأخبار والعروض الخاصة</li>
              <li>• تحسين تجربة المستخدم والخدمات المقدمة</li>
              <li>• الامتثال للمتطلبات القانونية والنظامية</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">4. حماية البيانات</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">نطبق إجراءات أمان قوية لحماية بياناتك:</p>
            <ul className="space-y-2 text-muted-foreground mb-4 ml-4">
              <li>• تشفير البيانات أثناء الإرسال والتخزين</li>
              <li>• استخدام جدران الحماية والأنظمة الأمنية المتقدمة</li>
              <li>• تقييد الوصول إلى البيانات للموظفين المصرح لهم فقط</li>
              <li>• إجراء تدقيقات أمنية منتظمة</li>
              <li>• الامتثال لمعايير الأمان الدولية</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">5. مشاركة البيانات</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              لا نشارك بياناتك الشخصية مع أطراف ثالثة إلا في الحالات التالية:
            </p>
            <ul className="space-y-2 text-muted-foreground mb-4 ml-4">
              <li>• عند الضرورة لتنفيذ الخدمات (معالجات الدفع والشركاء الموثوقين)</li>
              <li>• عند الضرورة القانونية أو الامتثال للقوانين</li>
              <li>• مع موافقتك الصريحة والكتابية</li>
              <li>• مع الجهات الحكومية المختصة عند الطلب</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">6. حقوقك</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">لديك الحقوق التالية بخصوص بياناتك:</p>
            <ul className="space-y-2 text-muted-foreground mb-4 ml-4">
              <li>• الحق في الوصول إلى بياناتك الشخصية</li>
              <li>• الحق في تصحيح البيانات غير الدقيقة</li>
              <li>• الحق في حذف بياناتك في ظروف معينة</li>
              <li>• الحق في الاعتراض على معالجة بياناتك</li>
              <li>• الحق في نقل بياناتك إلى خدمة أخرى</li>
            </ul>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">7. ملفات تعريف الارتباط</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              يستخدم موقعنا ملفات تعريف الارتباط لتحسين تجربة المستخدم. تساعد هذه الملفات على تذكر تفضيلاتك وتحليل
              الأداء. يمكنك التحكم في ملفات تعريف الارتباط من خلال إعدادات متصفحك.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">8. الاحتفاظ بالبيانات</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              نحتفظ ببيانات المتدربين طالما لزم الأمر لتقديم الخدمات والامتثال للالتزامات القانونية. عند الانتهاء من
              البرنامج، نحتفظ بالشهادات والسجلات الأكاديمية لمدة 7 سنوات على الأقل.
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">9. الروابط الخارجية</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              قد يحتوي موقعنا على روابط لمواقع خارجية. لا نتحمل مسؤولية عن سياسات الخصوصية في تلك المواقع. نوصيك بقراءة
              سياسة الخصوصية الخاصة بأي موقع خارجي تزوره.
            </p>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">10. تغييرات السياسة</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              قد تقوم المدرسة بتحديث سياسة الخصوصية من وقت لآخر. سيتم إخطارك بأي تغييرات جوهرية عبر البريد الإلكتروني أو
              من خلال الموقع.
            </p>
          </section>

          {/* Section 11 */}
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">11. الامتثال للقوانين</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              تتبع سياسة الخصوصية هذه قوانين المملكة العربية السعودية وتشريعات حماية البيانات الدولية، بما فيها اللوائح
              العامة لحماية البيانات (GDPR) حيث ينطبق ذلك.
            </p>
          </section>

          {/* Contact Section */}
          <section className="border-t border-border pt-8">
            <h2 className="text-2xl font-bold text-primary mb-4">التواصل بشأن الخصوصية</h2>
            <p className="text-muted-foreground mb-4">
              إذا كان لديك أي أسئلة أو مخاوف بشأن خصوصيتك أو سياستنا، يرجى التواصل معنا:
            </p>
            <div className="bg-secondary/50 rounded p-4 space-y-2">
              <p className="text-muted-foreground">
                <span className="font-semibold">البريد الإلكتروني:</span> privacy@drivingyschool.sa
              </p>
              <p className="text-muted-foreground">
                <span className="font-semibold">الهاتف:</span> +966 11 2345 678
              </p>
              <p className="text-muted-foreground">
                <span className="font-semibold">العنوان:</span> الرياض، المملكة العربية السعودية
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
                    <Link href="/privacy" className="text-muted-foreground hover:text-primary transition font-semibold">
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
            <p>&copy; 2025 المدرسة السعودية للقيادة. جميع الحقوق محفوظة.</p>
            <p>تم إنشاؤه بمعايير Google الإعلانية الدولية</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
