# دليل الميزات الجديدة - ETS Website

## 🎨 نظرة عامة

تم تطوير الموقع بالكامل ليصبح أكثر احترافية وجاذبية، مع التركيز على:
- **التناسق البصري** بين جميع الأقسام
- **الانيميشنز المتقدمة** باستخدام Three.js و Framer Motion
- **التأثيرات البرمجية** التي تعكس طبيعة الشركة التقنية
- **تجربة مستخدم سلسة** مع scroll interactions

---

## 📦 المكونات الجديدة

### 1. TypingCode Component

**المسار**: `/components/TypingCode.tsx`

مكون يعرض النصوص بتأثير الكتابة التدريجية مع code brackets `<>`.

#### Props:
```typescript
interface TypingCodeProps {
  text: string;           // النص المراد عرضه
  delay?: number;         // التأخير قبل البدء (ms)
  speed?: number;         // سرعة الكتابة (ms/حرف)
  className?: string;     // CSS classes
  showCursor?: boolean;   // إظهار/إخفاء cursor
}
```

#### مثال الاستخدام:
```tsx
import TypingCode from '@/components/TypingCode';

<TypingCode
  text="Welcome to ETS"
  delay={500}
  speed={80}
  className="text-white font-bold"
  showCursor={true}
/>
```

#### الناتج:
```
<Welcome to ETS|/>
```

---

### 2. SectionDivider Component

**المسار**: `/components/SectionDivider.tsx`

فواصل بصرية متنوعة بين الأقسام.

#### Props:
```typescript
interface SectionDividerProps {
  variant?: "line" | "dots" | "gradient" | "code";
  animate?: boolean;
}
```

#### الأنواع:

1. **Line**: خط بسيط بتأثير scale
```tsx
<SectionDivider variant="line" />
```

2. **Dots**: 5 نقاط متحركة
```tsx
<SectionDivider variant="dots" />
```

3. **Gradient**: خط متدرج متحرك (افتراضي)
```tsx
<SectionDivider variant="gradient" />
```

4. **Code**: خط موجي متحرك (canvas)
```tsx
<SectionDivider variant="code" />
```

---

### 3. ParallaxSection Component

**المسار**: `/components/ParallaxSection.tsx`

مكون لإضافة تأثيرات parallax على أي عنصر.

#### Props:
```typescript
interface ParallaxSectionProps {
  children: ReactNode;
  speed?: number;         // سرعة الحركة (0-1)
  direction?: "up" | "down" | "left" | "right";
  className?: string;
}
```

#### مثال:
```tsx
import ParallaxSection from '@/components/ParallaxSection';

<ParallaxSection speed={0.5} direction="up">
  <div className="my-content">
    Content will move with parallax effect
  </div>
</ParallaxSection>
```

---

## 🎬 الانيميشنز CSS الجديدة

### استخدام الانيميشنز:

#### 1. Float Animation
```tsx
<div className="animate-float">
  يطفو للأعلى والأسفل مع دوران خفيف
</div>
```

#### 2. Glitch Effect
```tsx
<div className="glitch">
  تأثير glitch تقني
</div>
```

#### 3. Pulse Glow
```tsx
<button className="pulse-glow">
  توهج نابض
</button>
```

#### 4. Scan Line
```tsx
<div className="scan-line">
  خط مسح متحرك عبر العنصر
</div>
```

#### 5. Blink Cursor
```tsx
<span className="blink">|</span>
```

### الانيميشنز المتاحة:
- `animate-float` - حركة طفو
- `glitch` - تأثير glitch
- `pulse-glow` - توهج نابض
- `scan-line` - خط مسح
- `blink` - وميض

---

## 🎨 نظام الألوان

### الألوان الرئيسية:

```css
/* Primary Colors */
--primary-red: #eb1f28;
--secondary-red: #ff4757;

/* Background Colors */
--bg-black: #000000;
--bg-slate-950: rgb(2 6 23);
--bg-slate-900: rgb(15 23 42);
--bg-white: #ffffff;

/* Text Colors */
--text-white: #ffffff;
--text-slate-900: rgb(15 23 42);
--text-slate-400: rgb(148 163 184);
--text-slate-600: rgb(71 85 105);
```

### استخدام التدرجات:

```tsx
// Red gradient
className="bg-gradient-to-r from-[#eb1f28] via-[#ff4757] to-[#eb1f28]"

// Dark gradient
className="bg-gradient-to-br from-black via-slate-950 to-black"

// White overlay
className="bg-gradient-to-b from-white/80 via-white/70 to-white/90"
```

---

## 🌟 الأقسام المحدثة

### 1. PortfolioPreview (خلفية بيضاء)

**التحديثات:**
- ✅ خلفية بيضاء نقية
- ✅ Three.js animations خفيفة (opacity: 0.05-0.1)
- ✅ Code brackets عائمة
- ✅ Grid lines
- ✅ TypingCode في العنوان
- ✅ Shadow effects للcards

**الألوان المستخدمة:**
```tsx
// Text
text-slate-900    // العناوين
text-slate-600    // الوصف

// Borders
border-slate-200
border-[#eb1f28]/30

// Shadows
shadow-lg
hover:shadow-2xl
hover:shadow-[#eb1f28]/20
```

### 2. ServicesPreview

**التحديثات:**
- ✅ TypingCode في العنوان
- ✅ Three.js particles محسّنة
- ✅ Geometric shapes متحركة

### 3. HeroSection

**التحديثات:**
- ✅ TypingCode في badge
- ✅ Three.js blob animation
- ✅ Floating cubes

---

## 📱 التصميم المتجاوب

### Breakpoints:

```css
/* Mobile First */
sm: 640px   /* Small devices */
md: 768px   /* Tablets */
lg: 1024px  /* Laptops */
xl: 1280px  /* Desktops */
2xl: 1536px /* Large screens */
```

### مثال الاستخدام:
```tsx
className="
  text-xs sm:text-sm md:text-base lg:text-lg
  px-4 sm:px-6 lg:px-8
  grid-cols-1 md:grid-cols-2 lg:grid-cols-3
"
```

---

## 🎯 أفضل الممارسات

### 1. استخدام TypingCode

✅ **صحيح** - للعناوين والنصوص المهمة:
```tsx
<TypingCode text="Our Services" delay={200} speed={70} />
```

❌ **خاطئ** - لكل النصوص:
```tsx
// لا تستخدمه في كل مكان، سيصبح مزعجاً
<TypingCode text="Lorem ipsum dolor..." />
```

### 2. استخدام SectionDividers

✅ **صحيح** - تنويع الأنواع:
```tsx
<SectionDivider variant="gradient" />
<ServicesSection />
<SectionDivider variant="line" />
<AboutSection />
<SectionDivider variant="dots" />
```

❌ **خاطئ** - نفس النوع:
```tsx
// رتيب وممل
<SectionDivider variant="line" />
<SectionDivider variant="line" />
<SectionDivider variant="line" />
```

### 3. الخلفيات

✅ **صحيح** - تناوب:
```tsx
<Section className="bg-black" />      // أسود
<Section className="bg-white" />      // أبيض
<Section className="bg-slate-950" />  // أسود
```

❌ **خاطئ** - كلها نفس اللون:
```tsx
<Section className="bg-black" />
<Section className="bg-black" />
<Section className="bg-black" />
```

---

## 🔧 التخصيص

### تعديل ألوان TypingCode:

```tsx
<TypingCode
  text="Custom Text"
  className="text-blue-500 font-bold text-lg"
/>
```

### تعديل سرعة الانيميشنز:

```css
/* في globals.css */
.animate-float {
  animation: float 3s ease-in-out infinite; /* أسرع */
}
```

### إضافة Three.js customization:

```tsx
// في أي section
const material = new THREE.MeshPhongMaterial({
  color: 0xYOURCOLOR,      // لونك
  opacity: 0.3,            // الشفافية
  emissive: 0xYOURCOLOR,  // التوهج
  emissiveIntensity: 0.4,  // شدة التوهج
});
```

---

## 🚀 الأداء

### نصائح للأداء:

1. **Three.js Cleanup**
```tsx
useEffect(() => {
  // setup code...

  return () => {
    // ALWAYS cleanup
    renderer.dispose();
    geometry.dispose();
    material.dispose();
  };
}, []);
```

2. **Debounce Scroll Events**
```tsx
const handleScroll = debounce(() => {
  // scroll logic
}, 100);
```

3. **Lazy Load Heavy Components**
```tsx
const HeavyComponent = dynamic(() => import('./Heavy'), {
  ssr: false,
  loading: () => <Loading />
});
```

---

## 📊 الإحصائيات

### حجم الملفات:
- TypingCode: ~1.5KB
- SectionDivider: ~2KB
- ParallaxSection: ~1KB
- CSS animations: ~5KB

### الأداء:
- Build time: ~12s
- First load: optimized
- Animation FPS: 60fps
- Three.js: GPU accelerated

---

## 🐛 استكشاف الأخطاء

### مشكلة: TypingCode لا يظهر

**الحل:**
```tsx
// تأكد من إضافة delay كافٍ
<TypingCode text="..." delay={500} />

// تأكد من className صحيح
<TypingCode text="..." className="text-white" />
```

### مشكلة: Three.js بطيء

**الحل:**
```tsx
// قلل عدد الparticles
const particlesCount = 100; // بدلاً من 500

// قلل الopacity
opacity: 0.1 // بدلاً من 0.5
```

### مشكلة: SectionDivider لا يتحرك

**الحل:**
```tsx
// تأكد من animate={true}
<SectionDivider variant="code" animate={true} />
```

---

## 📚 المراجع

### المكتبات المستخدمة:
- **Framer Motion**: للانيميشنز السلسة
- **Three.js**: للرسومات 3D
- **Tailwind CSS**: للتصميم
- **Next.js 16**: للإطار

### الموارد:
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Three.js Docs](https://threejs.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/)

---

## 🎓 أمثلة متقدمة

### مثال 1: Section مخصص بالكامل

```tsx
import TypingCode from '@/components/TypingCode';
import ParallaxSection from '@/components/ParallaxSection';
import { motion } from 'framer-motion';

const CustomSection = () => {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Three.js Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0" />

      <div className="container mx-auto px-4 relative z-10">
        <ParallaxSection speed={0.3} direction="up">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <TypingCode
              text="Custom Section"
              delay={0}
              speed={60}
              className="text-2xl font-bold text-slate-900"
            />
          </motion.div>
        </ParallaxSection>
      </div>
    </section>
  );
};
```

### مثال 2: Animated Card

```tsx
const AnimatedCard = () => {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.15 }}
      className="
        group p-5 rounded-xl
        bg-white border border-slate-200
        hover:border-[#eb1f28]/50
        shadow-lg hover:shadow-2xl
        hover:shadow-[#eb1f28]/20
        transition-all duration-300
      "
    >
      <h3 className="text-sm font-semibold mb-2">
        <TypingCode text="Card Title" speed={50} />
      </h3>
      <p className="text-xs text-slate-600">
        Card content here...
      </p>

      {/* Bottom line animation */}
      <motion.div
        initial={{ width: 0 }}
        whileHover={{ width: '100%' }}
        className="
          absolute bottom-0 left-0 h-1
          bg-gradient-to-r from-[#eb1f28] to-[#ff4757]
        "
      />
    </motion.div>
  );
};
```

---

## ✨ النصائح الإبداعية

1. **امزج الأساليب**: استخدم TypingCode + ParallaxSection معاً
2. **العب بالألوان**: جرب تدرجات مختلفة
3. **انيميشنز خفيفة**: لا تبالغ، البساطة أفضل
4. **تناسق**: حافظ على نمط موحد
5. **الأداء أولاً**: راقب FPS دائماً

---

**تم إعداده بواسطة Claude Sonnet 4.5** 🚀
