import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const RefPracticePage: React.FC = () => {
    // 1. useState: 값이 바뀌면 화면을 다시 그립니다.
    const [stateCount, setStateCount] = useState(0);

    // 2. useRef (정보 저장용): 값이 바뀌어도 화면을 다시 그리지 않습니다.
    const refCount = useRef(0);

    // 3. useRef (DOM 접근용): 실제 태그를 붙잡는 지시봉입니다.
    const inputRef = useRef<HTMLInputElement>(null);

    // 4. 컴포넌트가 몇 번 다시 그려졌는지 확인하기 위한 변수
    const renderCount = useRef(0);
    useEffect(() => {
        renderCount.current += 1;
    });

    const handleRefIncrement = () => {
        refCount.current += 1;
        console.log('Ref 값은 증가하지만 화면은 그대로예요! 현재 값:', refCount.current);
        alert(`Ref 값은 ${refCount.current}가 되었지만, 화면의 숫자는 그대로인 것을 확인하세요!`);
    };

    const handleFocus = () => {
        // 지시봉(inputRef)을 타고 가서 실제 input 태그에 focus 명령을 내립니다.
        if (inputRef.current) {
            inputRef.current.focus();
            inputRef.current.style.backgroundColor = '#e0f2fe';
        }
    };

    return (
        <div className="container mx-auto py-20 px-10 max-w-4xl">
            <Link to="/" className="text-gray-400 hover:text-black mb-8 block font-bold">← Back to Home</Link>

            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl font-black mb-10"
            >
                useState vs useRef 실습실 🧪
            </motion.h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* 구역 1: useState 실습 */}
                <div className="p-8 border-2 border-blue-100 rounded-3xl bg-blue-50/30">
                    <h2 className="text-xl font-bold mb-4 text-blue-600 italic underline">1. useState (전광판)</h2>
                    <p className="text-gray-600 mb-6 text-sm">값이 바뀌면 화면을 바로 새로고침합니다.</p>
                    <div className="text-5xl font-black mb-6">{stateCount}</div>
                    <button
                        onClick={() => setStateCount(stateCount + 1)}
                        className="w-full py-4 bg-blue-500 text-white rounded-2xl font-bold hover:bg-blue-600 transition-all"
                    >
                        State 숫자 올리기
                    </button>
                </div>

                {/* 구역 2: useRef (정보 저장) 실습 */}
                <div className="p-8 border-2 border-amber-100 rounded-3xl bg-amber-50/30">
                    <h2 className="text-xl font-bold mb-4 text-amber-600 italic underline">2. useRef (비밀 수첩)</h2>
                    <p className="text-gray-600 mb-6 text-sm">상태는 변하지만 화면은 새로고침하지 않습니다.</p>
                    <div className="text-5xl font-black mb-6 text-gray-300">{refCount.current}</div>
                    <button
                        onClick={handleRefIncrement}
                        className="w-full py-4 bg-amber-500 text-white rounded-2xl font-bold hover:bg-amber-600 transition-all"
                    >
                        Ref 숫자 올리기
                    </button>
                </div>

                {/* 구역 3: useRef (DOM 접근) 실습 */}
                <div className="p-8 border-2 border-emerald-100 rounded-3xl bg-emerald-50/30 md:col-span-2">
                    <h2 className="text-xl font-bold mb-4 text-emerald-600 italic underline">3. useRef (지시봉)</h2>
                    <p className="text-gray-600 mb-6 text-sm">실제 HTML 태그를 직접 붙잡아 명령을 내립니다.</p>
                    <div className="flex gap-4">
                        <input
                            ref={inputRef}
                            type="text"
                            placeholder="여기를 직접 잡아볼게요"
                            className="flex-1 px-6 py-4 rounded-2xl border-2 border-emerald-100 focus:border-emerald-500 outline-none transition-all"
                        />
                        <button
                            onClick={handleFocus}
                            className="px-8 py-4 bg-emerald-500 text-white rounded-2xl font-bold hover:bg-emerald-600 transition-all"
                        >
                            입력창 포커스!
                        </button>
                    </div>
                </div>
            </div>

            {/* 실시간 렌더링 감시자 */}
            <div className="mt-12 p-6 bg-gray-900 text-white rounded-2xl font-mono text-center">
                <span className="text-gray-400">시스템 메시지:</span> 현재 이 페이지는
                <span className="text-yellow-400 font-bold mx-2">{renderCount.current}</span>
                번 다시 그려졌습니다.
            </div>

        </div>
    );
};

export default RefPracticePage;
