# 🎓 Coding Test IDE 페이지 상세 설명서 (해석 및 출처 포함)

이 문서는 `CodeTestPage.tsx`에서 사용된 각 기술적 구성 요소들이 **어디에 소속되어 있는지(Library/API)**와 **어떤 역할을 하는지**를 상세 주석과 함께 설명합니다. 또한 모든 코드 라인에 대해 친절한 **자연어 해석**을 덧붙였습니다.

---

## 📄 CodeTestPage.tsx 코드 해설

```tsx
/* [소속: React 라이브러리] 
   - useState: 컴포넌트 내부에서 변경되는 데이터를 관리하는 Hook */
// [해석] React에서 제공하는 '기억 상자(State)' 기능을 가져옵니다.
import { useState } from 'react';

/* [소속: @monaco-editor/react 라이브러리] 
   - Editor: VS Code의 핵심 에디터(Monaco)를 React용으로 구현한 컴포넌트 */
// [해석] VS Code와 똑같은 코드 입력창을 화면에 그려주는 도구를 가져옵니다.
import Editor from '@monaco-editor/react';

/* [소속: lucide-react 라이브러리] 
   - 다양한 UI 아이콘들을 React 컴포넌트 형태로 제공 */
// [해석] 재생 버튼, 쓰레기통, 복사 아이콘 등 예쁜 그림 버튼들을 가져옵니다.
import { Play, RotateCcw, Terminal, Trash2, Code2, Download, Copy, Check, FileText } from 'lucide-react';

/* [소속: framer-motion 라이브러리] 
   - motion: HTML 엘리먼트에 애니메이션 기능을 부여하는 래퍼 컴포넌트
   - AnimatePresence: 하위 요소가 사라지거나(Exit) 나타날 때의 애니메이션을 감지 */
// [해석] 화면 요소들이 부드럽게 움직이거나 나타나게 만드는 마법 도구들을 가져옵니다.
import { motion, AnimatePresence } from 'framer-motion';

const CodeTestPage = () => {
    /* [메서드 소속: React] 
       - 컴포넌트의 상태(State) 변수를 선언 */
    // [해석] 아래의 네 줄은 이 페이지가 기억해야 할 중요한 정보들을 선언하는 과정입니다.
    
    // [해석] 사용자가 에디터에 타이핑한 코드 본문을 기억합니다. (기본 예제 코드 포함)
    const [code, setCode] = useState<string | undefined>('...'); 
    
    // [해석] 코드 실행 결과(로그)들을 차곡차곡 쌓아둘 리스트를 만듭니다.
    const [output, setOutput] = useState<string[]>([]);
    
    // [해석] 지금 코드가 돌아가고 있는 중인지(로딩 중) 여부를 기억합니다.
    const [isRunning, setIsRunning] = useState(false);
    
    // [해석] '복사 완료!' 표시를 보여줄지 말지 결정하기 위해 상태를 기억합니다.
    const [isCopied, setIsCopied] = useState(false);

    /**
     * 클립보드 복사 메서드
     * [출처: Web API - Navigator]
     * - navigator.clipboard: 브라우저가 제공하는 시스템 클립보드 접근 인터페이스
     */
    // [해석] 작성한 코드를 컴퓨터의 클립보드(Ctrl+C)에 저장하는 기능입니다.
    const copyToClipboard = async () => {
        if (!code) return; // [해석] 만약 복사할 코드가 없다면 그냥 무시합니다.
        try {
            // [소속: navigator.clipboard] 시스템 클립보드에 문자열을 쓰는 비동기 메서드
            // [해석] 브라우저한테 "이 코드를 클립보드에 담아줘!"라고 공식적으로 부탁합니다.
            await navigator.clipboard.writeText(code); 
            
            // [해석] 복사가 잘 되었으니 화면에 체크 표시를 띄우도록 상태를 바꿉니다.
            setIsCopied(true);
            
            // [소속: JavaScript Global] 일정 시간 후 함수를 실행하는 타이머 함수
            // [해석] 2초(2000ms)가 지나면 다시 원래 복사 아이콘으로 되돌립니다.
            setTimeout(() => setIsCopied(false), 2000); 
        } catch (err) {
            // [해석] 혹시라도 복사 중에 에러가 나면 개발자 도구에 알립니다.
            console.error('Failed to copy code: ', err);
        }
    };

    /**
     * 파일 다운로드 메서드
     * [출처: Web API - File & URL]
     * - Blob: 데이터의 불변한 생(raw) 데이터를 표현하는 객체
     * - URL.createObjectURL: 해당 데이터를 가리키는 고유한 URL 생성
     */
    // [해석] 에디터 내용을 .txt나 .md 파일로 만들어서 내 컴퓨터로 내려받는 기능입니다.
    const downloadFile = (extension: 'txt' | 'md') => {
        if (!code) return;
        
        // [소속: Web API / Blob] 문자열 데이터를 텍스트 파일 데이터로 변환
        // [해석] 그냥 글자 덩어리였던 코드를 실제 파일로 인식될 수 있는 '데이터 뭉치'로 만듭니다.
        const blob = new Blob([code], { type: 'text/plain' });
        
        // [소속: Web API / URL] 브라우저 메모리에 저장된 blob 데이터에 접근할 수 있는 임시 경로 생성
        // [해석] 이 데이터 뭉치를 다운로드할 수 있도록 브라우저 내부에 가짜 주소(URL)를 하나 생성합니다.
        const url = URL.createObjectURL(blob);
        
        /* [소속: DOM API (Document)] 
           - 동적으로 a(앵커) 태그를 만들어 다운로드 트리거 */
        // [해석] 사용자가 클릭하지 않아도 뒤에서 몰래 '다운로드용 링크' 버튼을 하나 만듭니다.
        const link = document.createElement('a');
        
        // [해석] 방금 만든 가짜 주소를 링크에 연결합니다.
        link.href = url;
        
        // [해석] 이 링크를 누르면 파일이 어떤 이름(ex: solution.txt)으로 저장될지 정합니다.
        link.download = `solution.${extension}`;
        
        // [소속: document.body] DOM 트리에 추가
        // [해석] 만든 링크를 잠시 화면 구석에 붙입니다. (클릭이 가능해야 하니까요)
        document.body.appendChild(link); 
        
        // [해석] 링크를 자동으로 '딸깍' 클릭해서 다운로드를 시작합니다.
        link.click(); 
        
        // [해석] 다운로드가 시작되었으니 방금 만든 가짜 링크는 다시 떼어냅니다.
        document.body.removeChild(link); 
        
        // [소속: Web API / URL] 더 이상 필요 없는 임시 URL을 제거하여 메모리 누수 방지
        // [해석] 아까 만든 가짜 주소를 삭제해서 컴퓨터 메모리를 깨끗하게 정리합니다.
        URL.revokeObjectURL(url);
    };

    /**
     * 코드 실행 메서드
     * [출처: JavaScript Engine (V8/JavaScriptCore)]
     * - new Function(): 문자열을 기반으로 실행 가능한 함수 객체를 생성
     */
    // [해석] 작성한 자바스크립트 코드를 실제로 돌려보고 그 결과를 보여주는 기능입니다.
    const runCode = () => {
        // [해석] 실행 버튼을 누르는 순간 '실행 중' 상태로 바꾸고, 이전 로그들을 담을 준비를 합니다.
        setIsRunning(true);
        const logs: string[] = [];
        
        /* [소속: JavaScript Global / console] 
           - 브라우저의 기본 로깅 객체 정보를 변수에 백업 */
        // [해석] 브라우저가 원래 가지고 있던 진짜 console.log 기능을 잠시 변수에 따로 모셔둡니다.
        const originalLog = console.log;

        /* [커스텀 오버라이딩] 
           - 기본 console.log가 우리가 만든 logs 배열에 데이터를 넣도록 재정의 */
        // [해석] 이제부터 사용자가 console.log를 쓰면, 우리가 만든 '결과창 리스트'에 글자가 담기도록 기능을 가로챕니다.
        console.log = (...args) => {
            logs.push(args.map(arg => {
                if (typeof arg === 'object') {
                    try {
                        // [소속: JavaScript Global / JSON] 객체를 문자열로 변환
                        // [해석] 로그에 찍힌 게 복잡한 객체라면, 보기 좋게 예쁜 글자(JSON)로 바꿉니다.
                        return JSON.stringify(arg, null, 2); 
                    } catch (e) {
                        return String(arg); 
                    }
                }
                // [소속: Global 객체] 데이터를 문자열로 변환하는 생성자
                // [해석] 숫자인지 글자인지 상관없이 모두 '글자' 형태로 바꿔서 리스트에 넣습니다.
                return String(arg);
            }).join(' ')); 
            
            // [해석] 가로채기는 하되, 원래 브라우저 콘솔에도 똑같이 결과가 나오도록 전달해줍니다.
            originalLog(...args); 
        };

        try {
            /* [소속: JavaScript 핵심 문법] 
               - 생성된 익명 함수를 즉시 실행 ( () )
               - eval()보다 안전하고 효율적임 */
            // [해석] 에디터에 적힌 글자들을 실제 자바스크립트 명령어로 인식시켜서 실행합니다!
            const result = new Function(code || '')();
            
            // [해석] 만약 함수가 뭔가를 'return' 했다면 그 결과값도 로그 마지막에 추가합니다.
            if (result !== undefined) {
                logs.push(`> Return value: ${typeof result === 'object' ? JSON.stringify(result, null, 2) : result}`);
            }
        } catch (error: any) {
            // [해석] 코드가 틀려서 에러가 나면, 당황하지 않고 에러 내용을 로그에 빨간색으로 띄울 준비를 합니다.
            logs.push(`Error: ${error.message}`);
        } finally {
            // [복구] 코드 실행이 끝나면 가로챘던 콘솔 기능을 원래대로 돌려놓음
            // [해석] 실행이 다 끝났으니, 가로챘던 console.log 기능을 원래 브라우저 주인에게 돌려줍니다.
            console.log = originalLog;
            
            // [해석] 모은 모든 로그들을 화면에 보여주는 'output' 칸에 업데이트합니다.
            setOutput(logs);
            
            // [해석] 이제 실행이 끝났으니 '실행 중' 상태를 끕니다.
            setIsRunning(false);
        }
    };

    return (
        /* [소속: Tailwind CSS] 
           - utility-first CSS 클래스들을 조합하여 스타일링 */
        // [해석] 전체 화면을 구성하는 가장 바깥쪽 그릇입니다. 배경색과 여백을 줍니다.
        <div className="min-h-screen bg-neutral-50 p-8">
            
            {/* [소속: framer-motion] motion.div는 애니메이션 속성을 부여받음 */}
            {/* [해석] 화면이 처음 열릴 때 투명도가 0에서 1로 변하며 스르륵 나타나게 합니다. */}
            <motion.div 
               initial={{ opacity: 0 }} 
               animate={{ opacity: 1 }}
               className="..."
            >
                {/* [소속: @monaco-editor/react] 
                    - 고성능 코드 에디터 인터페이스 */}
                {/* [해석] 실제 VS Code와 똑같이 생긴 코드 입력 칸을 소환합니다. */}
                <Editor 
                   theme="vs-dark" // [해석] 어두운 밤에 어울리는 다크 테마입니다.
                   options={{ // [해석] 글자 크기나 미니맵 등 세세한 설정을 조절합니다.
                       fontSize: 15,
                       minimap: { enabled: false }
                   }}
                />
            </motion.div>
        </div>
    );
};
```

---

## 📌 메서드 출처 요약표

| 메서드/API | 출처 (Library/Source) | 주요 역할 |
| :--- | :--- | :--- |
| `useState` | **React** | 컴포넌트의 데이터 상태를 기억하고 화면을 갱신함 |
| `Editor` | **@monaco-editor/react** | 고성능 코드 쓰기 환경(IDE)을 제공함 |
| `motion` | **Framer Motion** | 버튼이나 리스트가 나타날 때 부드러운 애니메이션을 담당함 |
| `new Function()` | **JavaScript Built-in** | 문자열(String) 코드를 실제 실행 가능한 함수로 변환함 |
| `Blob` / `URL` | **Web API (Browser)** | 가상의 파일 데이터를 만들고 다운로드 링크를 생성함 |
| `navigator` | **Web API (Browser)** | 시스템 클립보드 복사 등 브라우저 외부 환경과 소통함 |
| `JSON.stringify` | **JavaScript Global** | 복잡한 객체 데이터(Object)를 읽기 쉬운 글자(String)로 바꿈 |

---
**튜터의 팁:** 주석에서 **[해석]** 부분만 따라가셔도 코드가 어떤 흐름으로 동작하는지 금방 이해하실 수 있을 거예요. 기술적인 출처가 궁금할 때는 **[소속]** 주석을 참고해 보세요! 🚀
