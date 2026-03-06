import React, { useState, useContext } from 'react';
import axios from 'axios';
import AuthContext from '../context/AuthContext';

const Friends = () => {
    const { user, fetchUser } = useContext(AuthContext);
    const [friendCode, setFriendCode] = useState('');
    const [addFriendMsg, setAddFriendMsg] = useState('');

    const handleAddFriend = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/users/add-friend', { friendCode });
            setAddFriendMsg({ type: 'success', text: res.data.message });
            setFriendCode('');
            fetchUser(); // Refresh user context
        } catch (error) {
            setAddFriendMsg({ type: 'error', text: error.response?.data?.message || 'Error adding friend' });
        }
    };

    return (
        <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Friends & Connections</h2>

            {/* Your Friend Code Card */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 relative overflow-hidden group shadow-sm">
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                    <span className="material-symbols-outlined text-8xl text-secondary">share</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Your Friend Code</h3>
                <p className="text-slate-500 text-sm mb-4">Share this code with your classmates so they can see your name on the leaderboard instead of an anonymous alias.</p>
                
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex items-center justify-between">
                    <code className="text-2xl font-mono font-bold text-primary tracking-widest">{user?.friendCode}</code>
                    <button 
                        onClick={() => {
                            navigator.clipboard.writeText(user?.friendCode);
                            // Optional: Show toast
                        }}
                        className="p-2 hover:bg-slate-200 rounded-lg text-slate-500 hover:text-slate-700 transition-colors"
                        title="Copy to clipboard"
                    >
                        <span className="material-symbols-outlined">content_copy</span>
                    </button>
                </div>
            </div>

            {/* Add Friend Card */}
            <div className="bg-white border border-slate-200 bg-gradient-to-br from-white to-primary/5 rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined">person_add</span>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-slate-900">Add a Friend</h3>
                        <p className="text-slate-500 text-xs">Enter a friend's code to reveal their identity</p>
                    </div>
                </div>

                <form onSubmit={handleAddFriend} className="flex gap-3">
                    <input 
                        type="text" 
                        value={friendCode}
                        onChange={(e) => setFriendCode(e.target.value)}
                        placeholder="Enter 8-character code (e.g. A1B2C3D4)"
                        className="flex-1 bg-slate-50 border border-slate-200 hover:border-primary/50 hover:bg-white rounded-xl px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-primary/50 focus:bg-white focus:ring-1 focus:ring-primary/50 transition-all font-mono uppercase"
                    />
                    <button type="submit" className="bg-primary hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-bold transition-all active:scale-95 shadow-lg shadow-primary/20">
                        Add
                    </button>
                </form>

                {addFriendMsg.text && (
                    <div className={`mt-4 p-3 rounded-xl border flex items-center gap-2 ${addFriendMsg.type === 'success' ? 'bg-green-500/10 border-green-500/20 text-green-600' : 'bg-red-500/10 border-red-500/20 text-red-600'}`}>
                        <span className="material-symbols-outlined text-lg">
                            {addFriendMsg.type === 'success' ? 'check_circle' : 'error'}
                        </span>
                        <p className="text-sm">{addFriendMsg.text}</p>
                    </div>
                )}
            </div>

            {/* Friends List (Placeholder - Backend support needed for full list) */}
             <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Your Circle</h3>
                {user?.friends && user.friends.length > 0 ? (
                    <div className="text-slate-500 text-sm">
                        You have added <span className="text-slate-900 font-bold">{user.friends.length}</span> friends. Check the leaderboard to see them!
                    </div>
                ) : (
                    <div className="text-center py-8 text-slate-400">
                        <span className="material-symbols-outlined text-4xl mb-2 opacity-30">groups</span>
                        <p>No friends added yet.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Friends;
