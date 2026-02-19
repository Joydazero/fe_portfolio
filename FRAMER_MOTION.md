# 🎬 Framer Motion (`motion.div`) 가이드

`framer-motion` 라이브러리는 React에서 애니메이션을 아주 쉽고 강력하게 구현할 수 있도록 도와주는 도구입니다. 그중에서도 `<motion.div>`는 가장 많이 쓰이는 핵심 컴포넌트입니다.

---

## 1. `<motion.div>`란 무엇인가요?

일반적인 `<div>` 태그에 **에니메이션 기능이 추가된 강화 버전**입니다. 스타일 시트(CSS)를 복잡하게 만지지 않아도, 태그의 속성(props) 만으로 부드러운 움직임을 만들 수 있습니다.

---

## 2. 주요 속성 (Props) 설명

가장 자주 사용되는 핵심 속성 5가지를 소개합니다.

### ① `initial` (초기 상태)
애니메이션이 시작되기 전, 요소가 처음 화면에 나타날 때의 상태입니다.
*   예: `initial={{ opacity: 0, y: 20 }}` (투명하고 아래로 20px 내려가 있는 상태)

### ② `animate` (목표 상태)
요소가 최종적으로 도달해야 할 상태입니다. `initial`에서 `animate`로 값이 부드럽게 변합니다.
*   예: `animate={{ opacity: 1, y: 0 }}` (불투명해지며 원래 위치로 이동)

### ③ `transition` (애니메이션 설정)
얼마나 빨리 움직일지, 어떤 느낌(튕김 등)으로 움직일지 정합니다.
*   예: `transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}` (0.5초 동안, 0.2초 대기 후 부드럽게)

### ④ `whileHover` & `whileTap` (상태 반응)
마우스를 올렸을 때(Hover)나 클릭할 때(Tap)의 반응을 정의합니다.
*   예: `whileHover={{ scale: 1.1 }}` (마우스 올리면 1.1배 커짐)

### ⑤ `whileInView` & `viewport` (스크롤 감지)
요소가 화면(스크롤) 안으로 들어왔을 때 애니메이션을 실행합니다.
*   예: `whileInView={{ opacity: 1 }}` (화면에 보이면 나타남)
*   예: `viewport={{ once: true }}` (딱 한 번만 실행)

---

## 3. 실전 사용 코드 예시

가장 흔히 쓰이는 **"아래서 위로 슥 나타나는 효과"**입니다.

```tsx
import { motion } from 'framer-motion';

function MyComponent() {
  return (
    <motion.div
      // 1. 처음엔 투명하고 아래에 있음
      initial={{ opacity: 0, y: 50 }}
      
      // 2. 화면에 들어오면 불투명해지고 제자리로 감
      whileInView={{ opacity: 1, y: 0 }}
      
      // 3. 다시 스크롤해도 반복되지 않게 설정
      viewport={{ once: true }}
      
      // 4. 0.8초 동안 실행
      transition={{ duration: 0.8 }}
      
      // 5. 마우스 올리면 살짝 커지게
      whileHover={{ scale: 1.05 }}
      
      className="p-10 bg-black text-white rounded-2xl"
    >
      안녕하세요! 저는 움직이는 박스입니다.
    </motion.div>
  );
}
```

---

## 4. 왜 `<motion.div>`를 쓰나요?

1.  **간결함**: CSS `@keyframes`를 쓰지 않고 태그 안에서 바로 로직을 볼 수 있습니다.
2.  **부드러움**: 단순한 선형 움직임이 아니라 실제 물리 엔진 느낌의 자연스러운 스프링(Spring) 애니메이션을 기본으로 제공합니다.
3.  **성능**: GPU 가속을 활용하여 매우 부드럽게 작동합니다.
4.  **복잡한 로직**: `LayoutID` 등을 쓰면 서로 다른 컴포넌트 사이의 부드러운 전환 효과도 쉽게 만들 수 있습니다. (예: 메뉴 언더라인 이동)

---

### 💡 팁
더 복잡한 애니메이션을 원한다면 공식 문서의 [Framer Motion Examples](https://www.framer.com/motion/)를 참고해 보세요! 하지만 프로젝트에서 제가 쓴 정도만 마스터해도 충분히 멋진 포트폴리오를 만들 수 있습니다.
