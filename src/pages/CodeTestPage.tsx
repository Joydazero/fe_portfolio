import { useState } from 'react';
import Editor from '@monaco-editor/react';
import { Play, RotateCcw, Terminal, Trash2, Code2, Copy, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const CodeTestPage = () => {
    const [code, setCode] = useState<string | undefined>(
        '// Write your JavaScript code here\n\nfunction solution(n) {\n  let result = 0;\n  for (let i = 1; i <= n; i++) {\n    result += i;\n  }\n  return result;\n}\n\nconsole.log("result:", solution(0));\n\n// Try changing n to see different results\n// result is explicitly returned to show in the console'
    );
    const [output, setOutput] = useState<string[]>([]);
    const [isRunning, setIsRunning] = useState(false);
    const [isCopied, setIsCopied] = useState(false);

    const copyToClipboard = async () => {
        if (!code) return;
        try {
            await navigator.clipboard.writeText(code);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy code: ', err);
        }
    };

    const downloadFile = (extension: 'txt' | 'md') => {
        if (!code) return;
        const blob = new Blob([code], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `solution.${extension}`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    };

    const runCode = () => {
        setIsRunning(true);
        const logs: string[] = [];

        // Original console.log
        const originalLog = console.log;

        // Override console.log to capture output
        console.log = (...args) => {
            logs.push(args.map(arg => {
                if (typeof arg === 'object') {
                    try {
                        return JSON.stringify(arg, null, 2);
                    } catch (e) {
                        return String(arg);
                    }
                }
                return String(arg);
            }).join(' '));
            originalLog(...args);
        };

        try {
            // Create a function from the code and execute it
            // Wrap in async function to support top-level await if needed,
            // but for simple competitive programming, synchronous is standard.
            const result = new Function(code || '')();
            if (result !== undefined) {
                logs.push(`> Return value: ${typeof result === 'object' ? JSON.stringify(result, null, 2) : result}`);
            }
        } catch (error: any) {
            logs.push(`Error: ${error.message}`);
        } finally {
            // Restore original console.log
            console.log = originalLog;
            setOutput(logs);
            setIsRunning(false);
        }
    };

    const clearOutput = () => setOutput([]);
    const resetCode = () => setCode('// Write your JavaScript code here\n\nfunction solution(n) {\n  let result = 0;\n  for (let i = 1; i <= n; i++) {\n    result += i;\n  }\n  return result;\n}\n\nconsole.log("Sum from 1 to 10:", solution(10));');

    return (
        <div className="min-h-[calc(100vh-64px)] bg-neutral-50 p-4 md:p-8">
            <div className="mx-auto max-w-7xl animate-in fade-in slide-in-from-bottom-4 duration-700">
                {/* Header section with glassmorphism feel */}
                <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="space-y-1">
                        <div className="flex items-center gap-2">
                            <div className="p-2 bg-blue-600 rounded-lg text-white">
                                <Code2 size={24} />
                            </div>
                            <h1 className="text-3xl font-bold tracking-tight text-neutral-900 font-sans">
                                Coding Test <span className="text-blue-600">IDE</span>
                            </h1>
                        </div>
                        <p className="text-neutral-500 font-medium ml-12">
                            Experiment with JavaScript algorithms in a real-time environment.
                        </p>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="flex bg-white rounded-xl border border-neutral-200 p-1 shadow-sm">
                            <motion.button
                                whileHover={{ backgroundColor: '#f5f5f5' }}
                                whileTap={{ scale: 0.95 }}
                                onClick={copyToClipboard}
                                className="p-2 rounded-lg text-neutral-600 transition-colors relative"
                                title="Copy to clipboard"
                            >
                                <AnimatePresence mode="wait">
                                    {isCopied ? (
                                        <motion.div
                                            key="check"
                                            initial={{ opacity: 0, scale: 0.5 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.5 }}
                                        >
                                            <Check size={18} className="text-emerald-500" />
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="copy"
                                            initial={{ opacity: 0, scale: 0.5 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.5 }}
                                        >
                                            <Copy size={18} />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.button>
                            <div className="w-[1px] bg-neutral-200 my-1 mx-1" />
                            <div className="flex bg-neutral-50 px-1 items-center gap-0.5 rounded-lg border border-neutral-100 mr-1">
                                <motion.button
                                    whileHover={{ backgroundColor: '#ffffff', color: '#000' }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => downloadFile('txt')}
                                    className="px-2 py-1 rounded-md text-[10px] font-bold text-neutral-500 transition-all"
                                    title="Download as TXT"
                                >
                                    TXT
                                </motion.button>
                                <div className="w-[1px] h-3 bg-neutral-200" />
                                <motion.button
                                    whileHover={{ backgroundColor: '#ffffff', color: '#000' }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => downloadFile('md')}
                                    className="px-2 py-1 rounded-md text-[10px] font-bold text-neutral-500 transition-all"
                                    title="Download as MD"
                                >
                                    MD
                                </motion.button>
                            </div>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={resetCode}
                            className="hidden md:flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-neutral-200 text-neutral-600 font-semibold hover:bg-neutral-50 transition-all shadow-sm"
                        >
                            <RotateCcw size={18} />
                            Reset
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={runCode}
                            disabled={isRunning}
                            className={`flex items-center gap-2 px-8 py-2.5 rounded-xl bg-neutral-900 text-white font-bold hover:bg-neutral-800 transition-all shadow-md ${isRunning ? 'opacity-70 cursor-wait' : ''
                                }`}
                        >
                            <Play size={18} fill="white" />
                            {isRunning ? 'Run' : 'Run Code'}
                        </motion.button>
                    </div>
                </div>

                {/* Main Editor/Results Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 h-[calc(100vh-280px)] min-h-[600px]">
                    {/* Editor - Takes up 3 columns */}
                    <div className="lg:col-span-3 flex flex-col bg-white rounded-2xl shadow-xl shadow-neutral-200/50 border border-neutral-200 overflow-hidden ring-1 ring-black/[0.05]">
                        <div className="bg-neutral-50 px-4 py-3 border-b border-neutral-200 flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-400" />
                                    <div className="w-3 h-3 rounded-full bg-amber-400" />
                                    <div className="w-3 h-3 rounded-full bg-emerald-400" />
                                </div>
                                <div className="h-4 w-[1px] bg-neutral-300 mx-2" />
                                <span className="text-xs font-bold text-neutral-500 uppercase tracking-widest font-mono">
                                    solution.js
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded cursor-default uppercase">
                                    JavaScript
                                </span>
                            </div>
                        </div>

                        <div className="flex-1 relative">
                            <Editor
                                height="100%"
                                defaultLanguage="javascript"
                                value={code}
                                onChange={(value) => setCode(value)}
                                theme="vs-dark"
                                options={{
                                    fontSize: 15,
                                    minimap: { enabled: false },
                                    scrollBeyondLastLine: false,
                                    automaticLayout: true,
                                    padding: { top: 20, bottom: 20 },
                                    fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                                    fontLigatures: true,
                                    cursorBlinking: 'smooth',
                                    smoothScrolling: true,
                                    lineNumbersMinChars: 3,
                                }}
                                loading={<div className="flex items-center justify-center h-full text-neutral-400">Loading Editor...</div>}
                            />
                        </div>
                    </div>

                    {/* Console Output - Takes up 2 columns */}
                    <div className="lg:col-span-2 flex flex-col bg-[#0d0d0d] rounded-2xl shadow-2xl overflow-hidden group">
                        <div className="bg-[#1a1a1a] px-4 py-3 flex items-center justify-between border-b border-white/[0.05]">
                            <div className="flex items-center gap-2 text-white/70">
                                <Terminal size={16} className="text-emerald-500" />
                                <span className="text-xs font-bold uppercase tracking-widest font-mono">
                                    Output Console
                                </span>
                            </div>
                            <button
                                onClick={clearOutput}
                                className="text-white/30 hover:text-white transition-colors p-1.5 hover:bg-white/5 rounded-lg"
                                title="Clear console"
                            >
                                <Trash2 size={16} />
                            </button>
                        </div>

                        <div className="flex-1 p-6 font-mono text-sm overflow-y-auto custom-scrollbar bg-gradient-to-b from-[#0d0d0d] to-[#121212]">
                            <AnimatePresence mode="popLayout" initial={false}>
                                {output.length > 0 ? (
                                    output.map((log, index) => (
                                        <motion.div
                                            key={`${index}-${log.substring(0, 20)}`}
                                            initial={{ opacity: 0, x: -8 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            className={`mb-3 py-1 px-3 rounded-lg border-l-2 ${log.startsWith('Error:')
                                                ? 'bg-red-500/10 border-red-500/50 text-red-300'
                                                : log.startsWith('> Return value:')
                                                    ? 'bg-emerald-500/10 border-emerald-500/50 text-emerald-300 font-bold'
                                                    : 'bg-white/5 border-white/10 text-neutral-300'
                                                }`}
                                        >
                                            <span className="opacity-40 mr-2 text-[10px] select-none">[{index + 1}]</span>
                                            {log}
                                        </motion.div>
                                    ))
                                ) : (
                                    <div className="flex flex-col items-center justify-center h-full gap-4 text-white/20">
                                        <div className="p-4 rounded-full bg-white/5 border border-white/5">
                                            <Terminal size={32} />
                                        </div>
                                        <p className="italic text-sm">Console is empty. Run your code to see output.</p>
                                    </div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Status Bar */}
                        <div className="bg-[#1a1a1a] px-4 py-2 border-t border-white/[0.05] flex items-center justify-between">
                            <span className="text-[10px] font-bold text-white/30 uppercase tracking-tighter">
                                {output.length} line(s) printed
                            </span>
                            <div className="flex items-center gap-1.5">
                                <div className={`w-1.5 h-1.5 rounded-full ${isRunning ? 'bg-amber-500 animate-pulse' : 'bg-emerald-500'}`} />
                                <span className="text-[10px] font-bold text-white/30 uppercase">
                                    {isRunning ? 'Running' : 'Ready'}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.02);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.2);
        }
      `}</style>
        </div>
    );
};

export default CodeTestPage;
