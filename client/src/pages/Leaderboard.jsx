import React, { useState, useEffect, useContext, useRef } from 'react';
import axios from 'axios';
import AuthContext from '../context/AuthContext';

const Leaderboard = () => {
    const { user } = useContext(AuthContext);
    const [leaderboard, setLeaderboard] = useState([]);
    const [viewMode, setViewMode] = useState('branch'); // 'branch' or 'specialization'
    const myRowRef = useRef(null);
    
    // Filters - derived from user context + viewMode
    const [filters, setFilters] = useState({
        degree: '',
        branch: '',
        specialization: '',
        batch: '',
        college: ''
    });

    useEffect(() => {
        if (user) {
            setFilters({
                degree: user.degree,
                branch: user.branch,
                specialization: viewMode === 'specialization' ? user.specialization : '',
                batch: user.batch,
                college: user.college
            });
        }
    }, [user, viewMode]);

    useEffect(() => {
        if (user && filters.batch) { // Ensure user data is loaded
          fetchLeaderboard();
        }
    }, [filters, user]);

    const fetchLeaderboard = async () => {
        try {
            // Filter out empty values
            const activeFilters = Object.fromEntries(
                Object.entries(filters).filter(([_, v]) => v !== '' && v != null)
            );
            const params = new URLSearchParams(activeFilters).toString();
            const res = await axios.get(`/api/users/leaderboard?${params}`);
            setLeaderboard(res.data);
        } catch (error) {
            console.error("Error fetching leaderboard", error);
        }
    };

    const scrollToMe = () => {
        if (myRowRef.current) {
            myRowRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
            
            // Optional: Flash effect
            myRowRef.current.classList.add('bg-primary/20');
            setTimeout(() => {
                myRowRef.current.classList.remove('bg-primary/20');
            }, 2000);
        }
    };

    return (
        <div className="space-y-6">
            <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                <div className="px-6 py-4 border-b border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex flex-col gap-1">
                        <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary">leaderboard</span>
                            {filters.college ? filters.college.split(',')[0] : 'College'} Leaderboard
                        </h3>
                        <p className="text-xs text-slate-500 font-medium">
                            {user?.degree} • {user?.batch} Batch
                        </p>
                    </div>

                        {/* Filters Toolbar */}
                    <div className="flex bg-slate-100 p-1 rounded-xl md:ml-auto">
                        <button 
                            onClick={() => setViewMode('branch')}
                            className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${viewMode === 'branch' ? 'bg-white text-primary shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                        >
                            Overall {user?.branch}
                        </button>
                        <button 
                            onClick={() => setViewMode('specialization')}
                            className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${viewMode === 'specialization' ? 'bg-white text-primary shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                        >
                             {user?.specialization || 'Specialization'} Only
                        </button>
                    </div>

                    {leaderboard.some(s => s.isMe) && (
                        <button 
                            onClick={scrollToMe}
                            className="flex items-center gap-2 px-4 py-2 bg-primary text-white text-xs font-bold rounded-xl shadow-lg shadow-primary/20 hover:scale-105 transition-all"
                        >
                            <span className="material-symbols-outlined text-sm">my_location</span>
                            Find Me
                        </button>
                    )}
                </div>

                    {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider border-b border-slate-200">
                                <th className="px-6 py-4 font-medium">Rank</th>
                                <th className="px-6 py-4 font-medium">Student</th>
                                <th className="px-6 py-4 font-medium">CGPA</th>
                                <th className="px-6 py-4 font-medium">Batch</th>
                                <th className="px-6 py-4 font-medium">Branch</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {leaderboard.map((student) => (
                                <tr 
                                    key={student._id} 
                                    ref={student.isMe ? myRowRef : null}
                                    className={`hover:bg-slate-50 transition-colors group ${student.isMe ? 'bg-primary/5' : ''}`}
                                >
                                    <td className="px-6 py-4">
                                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm
                                            ${student.rank === 1 ? 'bg-yellow-100 text-yellow-600' : 
                                                student.rank === 2 ? 'bg-slate-200 text-slate-600' :
                                                student.rank === 3 ? 'bg-orange-100 text-orange-600' : 'bg-slate-100 text-slate-600'
                                            }`}>
                                            {student.rank === 1 ? '🥇' : student.rank === 2 ? '🥈' : student.rank === 3 ? '🥉' : student.rank}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold
                                                ${student.isMe || student.isFriend ? 'bg-gradient-to-br from-primary to-secondary text-white' : 'bg-slate-200 text-slate-500'}
                                            `}>
                                                {student.name.charAt(0).toUpperCase()}
                                            </div>
                                            <div className="flex flex-col">
                                                <span className={`font-medium ${student.isMe || student.isFriend ? 'text-slate-900' : 'text-slate-500 italic'}`}>
                                                    {student.name}
                                                </span>
                                                {(student.isMe || student.isFriend) && (
                                                    <span className="text-[10px] font-bold text-primary">
                                                        {student.isMe ? 'YOU' : 'FRIEND'}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="text-slate-900 font-bold">{student.cgpa}</span>
                                    </td>
                                    <td className="px-6 py-4 text-slate-500 text-sm">{student.batch || '-'}</td>
                                    <td className="px-6 py-4">
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary/10 text-secondary border border-secondary/20">
                                            {student.branch}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                            {leaderboard.length === 0 && (
                                <tr>
                                    <td colSpan="6" className="px-6 py-8 text-center text-slate-500">No students found for this selection.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Leaderboard;
