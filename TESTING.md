# 🧪 프론트엔드 테스트 가이드 (Testing Guide)

이 프로젝트는 최신 프론트엔드 개발 표준에 맞춘 **자동화된 테스트 환경**이 구축되어 있습니다. 처음 접하더라도 쉽게 이해하고 따라 할 수 있도록 정리해 드립니다.

---

## 1. 테스트 도구 한눈에 보기

우리가 설치한 도구들은 각자 맡은 역할이 있습니다.

| 도구 | 역할 | 쉽게 말하면? |
| :--- | :--- | :--- |
| **Vitest** | 테스트 엔진 | 테스트 코드를 실행하고 결과를 알려주는 심판 |
| **React Testing Library (RTL)** | 컴포넌트 도우미 | 가상 환경에 컴포넌트를 그리고 버튼을 클릭해보는 팔 |
| **jsdom** | 가상 브라우저 | 실험실 안에 만든 가상의 윈도우/크롬 브라우저 |
| **Husky & lint-staged** | 자동 파수꾼 | `git commit` 할 때 자동으로 테스트를 돌려주는 감시자 |

---

## 2. 테스트 실행 방법 (명령어)

터미널(Terminal)에 다음 명령어를 입력하여 테스트를 실행할 수 있습니다.

### ✅ 모든 테스트 실행
가장 기본적인 실행 방법입니다.
```bash
npm test
```

### ✅ 시각적 모드 (추천 ⭐)
브라우저 창이 열리며 테스트 과정을 예쁜 화면으로 볼 수 있습니다. 디버깅할 때 매우 편리합니다.
```bash
npm run test:ui
```

### ✅ 린트와 테스트 함께 실행
코드 스타일(Lint)과 테스트를 동시에 체크합니다.
```bash
npm run lint
```

---

## 3. 테스트 코드 작성하는 법 (쉽게 따라하기)

작성된 `src/pages/MainPage.test.tsx` 파일을 예시로 단계별로 설명해 드릴게요.

### 1단계: 필요한 도구 가져오기
```tsx
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import MainPage from './MainPage';
```

### 2단계: 테스트 그룹 만들기 (`describe`)
관련된 테스트들을 하나의 상자(`describe`)에 담습니다.
```tsx
describe('MainPage 테스트', () => {
  // 여기에 테스트들을 넣습니다.
});
```

### 3단계: 개별 테스트 작성 (`it`)
하나의 기능이나 화면 요소를 확인합니다.
```tsx
it('화면에 로고 텍스트가 보이는가?', () => {
  // 1. 컴포넌트를 가상 브라우저에 그립니다.
  render(<MainPage />);

  // 2. 'CRAFTING'이라는 글자가 있는지 찾습니다.
  const element = screen.getByText(/CRAFTING/i);

  // 3. 기대하는 결과가 맞는지 확인합니다 (단언)
  expect(element).toBeInTheDocument(); // "문서 안에 있어야 한다!"
});
```

---

## 4. 자동화 시스템 (Husky)

"테스트 코드를 짜놓고 안 돌리면 어떡하죠?" 라는 걱정을 덜어주는 시스템입니다.

1.  사용자가 `git add .` 후 `git commit -m "내용"`을 입력합니다.
2.  **Husky**가 커밋 직전에 가로챕니다.
3.  **lint-staged**가 실행되어 **내가 수정한 파일**만 골라냅니다.
4.  그 파일들에 대해 **에러는 없는지(Lint)**, **테스트는 통과하는지(Test)** 확인합니다.
5.  **실패하면?** 커밋이 거절됩니다. 코드를 고쳐야만 커밋할 수 있습니다. (버그 방지!)

---

## 5. 자주 쓰는 테스트 문법 (Cheat Sheet)

테스트를 작성할 때 "이런 것도 되나?" 싶을 때 참고하세요.

*   `render(<Component />)` : 컴포넌트를 테스트 환경에 띄움
*   `screen.getByRole('button')` : 버튼 요소를 찾음
*   `screen.getByPlaceholderText('...')` : 입력창(input)을 찾음
*   `fireEvent.click(element)` : 요소를 클릭함
*   `expect(element).toBeInTheDocument()` : 화면에 존재하는지 확인
*   `expect(element).toHaveClass('active')` : 특정 CSS 클래스가 있는지 확인

---

### 💡 마지막 한마디
테스트 코드가 처음엔 번거로워 보일 수 있지만, 나중에 프로젝트가 커졌을 때 **"이걸 고쳐도 다른 게 안 깨질까?"** 하는 불안감을 없애주는 최고의 보험입니다. 

천천히 `MainPage.test.tsx` 파일을 복사해서 다른 페이지 테스트도 만들어 보세요!
