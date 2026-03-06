import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-white border-t border-slate-200 py-8 px-6 mt-auto">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
                    <p className="text-slate-400 font-bold text-sm">© {new Date().getFullYear()} Gradevo. All rights reserved.</p>
                    <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-slate-200"></div>
                    <a
                        href="http://khushangsingh.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-primary font-bold text-sm transition-colors flex items-center gap-1.5"
                    >
                        <span className="material-symbols-outlined text-sm">account_circle</span>
                        Developer
                    </a>
                </div>

                <div className="flex items-center gap-6">
                    <a href="#" className="text-slate-400 hover:text-slate-900 font-bold text-sm transition-colors">Privacy</a>
                    <a href="#" className="text-slate-400 hover:text-slate-900 font-bold text-sm transition-colors">Terms</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
