import React, { useState, useRef, useEffect } from 'react';

const CustomSelect = ({ name, value, onChange, options = [], disabled = false, placeholder = 'Select...' }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState('');
    const containerRef = useRef(null);
    const searchRef = useRef(null);

    const filtered = options.filter(opt =>
        opt.toLowerCase().includes(search.toLowerCase())
    );

    useEffect(() => {
        const handler = (e) => {
            if (containerRef.current && !containerRef.current.contains(e.target)) {
                setIsOpen(false);
                setSearch('');
            }
        };
        document.addEventListener('mousedown', handler);
        return () => document.removeEventListener('mousedown', handler);
    }, []);

    useEffect(() => {
        if (isOpen && searchRef.current) searchRef.current.focus();
    }, [isOpen]);

    const handleSelect = (opt) => {
        onChange({ target: { name, value: opt } });
        setIsOpen(false);
        setSearch('');
    };

    return (
        <div ref={containerRef} className="relative w-full">

            {/* ── Trigger button ── */}
            <button
                type="button"
                onClick={() => { if (!disabled) setIsOpen(p => !p); }}
                disabled={disabled}
                className={`
                    w-full h-[46px] flex items-center justify-between gap-2 rounded-xl px-4
                    bg-slate-50 border text-sm font-medium transition-all
                    ${disabled
                        ? 'opacity-50 cursor-not-allowed border-slate-200 text-slate-400'
                        : isOpen
                            ? 'border-primary/60 bg-white ring-1 ring-primary/40 text-slate-900'
                            : 'border-slate-200 text-slate-700 hover:border-primary/50 hover:bg-white'}
                `}
            >
                <span className="truncate leading-none">{value || placeholder}</span>
                <span className={`material-symbols-outlined leading-none text-[18px] shrink-0 text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                    keyboard_arrow_down
                </span>
            </button>

            {/* ── Dropdown panel ── */}
            {isOpen && (
                <div className="absolute z-50 bottom-full mb-1.5 left-0 w-full rounded-2xl bg-white border border-slate-200 shadow-xl shadow-slate-900/10 overflow-hidden">

                    {/* Search bar */}
                    <div className="px-2 pt-2 pb-1.5">
                        <div className={`
                            flex items-center gap-2 h-9 px-3 rounded-xl bg-slate-50 border border-slate-200
                            focus-within:border-primary/50 focus-within:ring-1 focus-within:ring-primary/30 transition-all
                        `}>
                            <span className="material-symbols-outlined leading-none text-[16px] text-slate-400 shrink-0">search</span>
                            <input
                                ref={searchRef}
                                type="text"
                                value={search}
                                onChange={e => setSearch(e.target.value)}
                                placeholder="Search..."
                                className="flex-1 min-w-0 bg-transparent text-sm text-slate-700 placeholder:text-slate-400 outline-none leading-none"
                            />
                            {search && (
                                <button
                                    type="button"
                                    onMouseDown={e => { e.preventDefault(); setSearch(''); }}
                                    className="shrink-0 text-slate-400 hover:text-slate-600 flex items-center"
                                >
                                    <span className="material-symbols-outlined leading-none text-[16px]">close</span>
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-slate-100 mx-2" />

                    {/* Options */}
                    <ul className="max-h-44 overflow-y-auto py-1 scrollbar-thin">
                        {filtered.length === 0 ? (
                            search ? (
                                <li>
                                    <button
                                        type="button"
                                        onClick={() => handleSelect(search)}
                                        className="w-full flex items-center gap-2 px-4 py-3 text-sm font-bold text-primary hover:bg-primary/5 transition-colors text-left"
                                    >
                                        <span className="material-symbols-outlined text-[18px]">add_circle</span>
                                        Add "{search}"
                                    </button>
                                </li>
                            ) : (
                                <li className="px-4 py-3 text-sm text-slate-400 text-center">No results found</li>
                            )
                        ) : (
                            <>
                                {filtered.map(opt => (
                                    <li key={opt}>
                                        <button
                                            type="button"
                                            onClick={() => handleSelect(opt)}
                                            className={`
                                                w-full flex items-center justify-between gap-2
                                                px-4 py-2.5 text-sm font-medium transition-colors text-left
                                                ${opt === value
                                                    ? 'bg-primary/10 text-primary'
                                                    : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'}
                                            `}
                                        >
                                            <span className="leading-snug">{opt}</span>
                                            {opt === value && (
                                                <span className="material-symbols-outlined leading-none text-[16px] text-primary shrink-0">check</span>
                                            )}
                                        </button>
                                    </li>
                                ))}
                            </>
                        )}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default CustomSelect;

