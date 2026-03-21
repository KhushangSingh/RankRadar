import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import AuthContext from '../context/AuthContext';

const Friends = () => {
    const { user, fetchUser } = useContext(AuthContext);
    const [friendCode, setFriendCode] = useState('');
    const [addFriendMsg, setAddFriendMsg] = useState({ type: '', text: '' });
    const [friendsList, setFriendsList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user?.college) {
            fetchFriendsData();
        }
    }, [user]);

    const fetchFriendsData = async () => {
        try {
            setLoading(true);
            // Fetch entire college to get correct global ranks
            const res = await axios.get(`/api/users/leaderboard?college=${user.college}`);
            // Filter only friends
            const friendsOnly = res.data.filter(student => student.isFriend);
            setFriendsList(friendsOnly);
        } catch (error) {
            console.error("Error fetching friends data", error);
        } finally {
            setLoading(false);
        }
    };

    const handleAddFriend = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/users/add-friend', { friendCode });
            setAddFriendMsg({ type: 'success', text: res.data.message });
            setFriendCode('');
            await fetchUser(); // Refresh user context
            fetchFriendsData(); // Refresh friends list data
        } catch (error) {
            setAddFriendMsg({ type: 'error', text: error.response?.data?.message || 'Error adding friend' });
        }
    };

    return (
        <div className="max-w-4xl mx-auto space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Friends & Connections</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Your Friend Code Card */}
                <div className="bg-white border border-slate-200 rounded-xl p-5 relative overflow-hidden group shadow-sm flex flex-col justify-between">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <span className="material-symbols-outlined text-6xl text-secondary">share</span>
                    </div>
                    <div>
                        <h3 className="text-base font-bold text-slate-900 mb-1">Your Friend Code</h3>
                        <p className="text-slate-500 text-xs mb-4 max-w-[85%]">Share this code with classmates to connect.</p>
                    </div>
                    <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 flex items-center justify-between">
                        <code className="text-xl font-mono font-bold text-primary tracking-widest">{user?.friendCode}</code>
                        <button 
                            onClick={() => navigator.clipboard.writeText(user?.friendCode)}
                            className="p-1.5 hover:bg-slate-200 rounded-md text-slate-500 hover:text-slate-700 transition-colors"
                            title="Copy to clipboard"
                        >
                            <span className="material-symbols-outlined text-sm">content_copy</span>
                        </button>
                    </div>
                </div>

                {/* Add Friend Card */}
                <div className="bg-white border border-slate-200 bg-gradient-to-br from-white to-primary/5 rounded-xl p-5 shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                            <span className="material-symbols-outlined text-sm">person_add</span>
                        </div>
                        <div>
                            <h3 className="text-base font-bold text-slate-900">Add a Friend</h3>
                            <p className="text-slate-500 text-[10px]">Enter a code to reveal their identity</p>
                        </div>
                    </div>

                    <form onSubmit={handleAddFriend} className="flex gap-2">
                        <input 
                            type="text" 
                            value={friendCode}
                            onChange={(e) => setFriendCode(e.target.value)}
                            placeholder="8-char code"
                            className="flex-1 bg-slate-50 border border-slate-200 hover:border-primary/50 hover:bg-white rounded-lg px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-primary/50 focus:bg-white focus:ring-1 focus:ring-primary/50 transition-all font-mono uppercase"
                        />
                        <button type="submit" className="bg-primary hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-bold transition-all active:scale-95 shadow-sm">
                            Add
                        </button>
                    </form>

                    {addFriendMsg.text && (
                        <div className={`mt-3 p-2 rounded-lg border flex items-center gap-1.5 ${addFriendMsg.type === 'success' ? 'bg-green-500/10 border-green-500/20 text-green-600' : 'bg-red-500/10 border-red-500/20 text-red-600'}`}>
                            <span className="material-symbols-outlined text-sm">
                                {addFriendMsg.type === 'success' ? 'check_circle' : 'error'}
                            </span>
                            <p className="text-xs">{addFriendMsg.text}</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Friends List */}
            <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-sm">group</span>
                    Your Circle
                </h3>
                
                {loading ? (
                    <div className="flex items-center justify-center py-8">
                        <span className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin"></span>
                    </div>
                ) : friendsList.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                        {friendsList.map(friend => (
                            <div key={friend._id} className="border border-slate-100 bg-slate-50 rounded-lg p-3 flex items-center gap-3 hover:bg-white hover:border-slate-200 hover:shadow-sm transition-all cursor-default">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center font-bold shadow-sm shrink-0">
                                    {friend.name.charAt(0).toUpperCase()}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h4 className="text-sm font-bold text-slate-900 truncate">{friend.name}</h4>
                                    <p className="text-[10px] text-slate-500 truncate mt-0.5">{friend.degree} • {friend.branch}</p>
                                </div>
                                <div className="text-right shrink-0">
                                    <div className="text-[10px] font-bold text-slate-400 uppercase">Rank</div>
                                    <div className="text-sm font-black text-primary">#{friend.rank}</div>
                                </div>
                                <div className="text-right shrink-0 border-l border-slate-200 pl-3">
                                    <div className="text-[10px] font-bold text-slate-400 uppercase">CGPA</div>
                                    <div className="text-sm font-black text-slate-900">{friend.cgpa}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-6 text-slate-400">
                        <span className="material-symbols-outlined text-3xl mb-1 opacity-30">person_off</span>
                        <p className="text-sm">No friends added yet. Start sharing your code!</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Friends;
