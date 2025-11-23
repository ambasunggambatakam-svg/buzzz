import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Plus, Edit, Trash2, Save, X, Mic, MessageSquare } from 'lucide-react';
import { supabase } from '../../lib/supabase';

interface LeaderboardVoice {
  id: string;
  rank: number;
  username: string;
  avatar: string;
  total_hours: number;
  total_days: number;
  badge: string;
}

interface LeaderboardChat {
  id: string;
  rank: number;
  username: string;
  avatar: string;
  total_messages: number;
  total_days: number;
  badge: string;
}

type TabType = 'voice' | 'chat';

const LeaderboardManager: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('voice');
  const [voiceItems, setVoiceItems] = useState<LeaderboardVoice[]>([]);
  const [chatItems, setChatItems] = useState<LeaderboardChat[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingItem, setEditingItem] = useState<any>(null);
  const [formData, setFormData] = useState<any>({
    rank: 1,
    username: '',
    avatar: '',
    total_hours: 0,
    total_days: 0,
    total_messages: 0,
    badge: ''
  });
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchItems();
  }, [activeTab]);

  const fetchItems = async () => {
    setLoading(true);
    try {
      const table = activeTab === 'voice' ? 'leaderboard_voice' : 'leaderboard_chat';
      const { data, error } = await supabase
        .from(table)
        .select('*')
        .order('rank', { ascending: true });

      if (error) throw error;

      if (activeTab === 'voice') {
        setVoiceItems(data || []);
      } else {
        setChatItems(data || []);
      }
    } catch (error) {
      console.error('Error fetching leaderboard:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const table = activeTab === 'voice' ? 'leaderboard_voice' : 'leaderboard_chat';

      if (editingItem) {
        const { error } = await supabase
          .from(table)
          .update(formData)
          .eq('id', editingItem.id);

        if (error) throw error;
      } else {
        const { error } = await supabase
          .from(table)
          .insert([formData]);

        if (error) throw error;
      }

      await fetchItems();
      resetForm();
    } catch (error) {
      console.error('Error saving leaderboard item:', error);
      alert('Failed to save item');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this entry?')) return;

    setLoading(true);
    try {
      const table = activeTab === 'voice' ? 'leaderboard_voice' : 'leaderboard_chat';
      const { error } = await supabase
        .from(table)
        .delete()
        .eq('id', id);

      if (error) throw error;
      await fetchItems();
    } catch (error) {
      console.error('Error deleting leaderboard item:', error);
      alert('Failed to delete item');
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (item: any) => {
    setEditingItem(item);
    setFormData(item);
    setShowForm(true);
  };

  const resetForm = () => {
    setFormData({
      rank: 1,
      username: '',
      avatar: '',
      total_hours: 0,
      total_days: 0,
      total_messages: 0,
      badge: ''
    });
    setEditingItem(null);
    setShowForm(false);
  };

  const currentItems = activeTab === 'voice' ? voiceItems : chatItems;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex space-x-2">
          <motion.button
            onClick={() => {
              setActiveTab('voice');
              resetForm();
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-3 rounded-2xl flex items-center space-x-2 ${
              activeTab === 'voice'
                ? 'liquid-button text-white'
                : 'glass-card text-gray-300'
            }`}
          >
            <Mic className="h-5 w-5" />
            <span>Voice</span>
          </motion.button>
          <motion.button
            onClick={() => {
              setActiveTab('chat');
              resetForm();
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-3 rounded-2xl flex items-center space-x-2 ${
              activeTab === 'chat'
                ? 'liquid-button text-white'
                : 'glass-card text-gray-300'
            }`}
          >
            <MessageSquare className="h-5 w-5" />
            <span>Chat</span>
          </motion.button>
        </div>
        <motion.button
          onClick={() => setShowForm(!showForm)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="liquid-button px-6 py-3 rounded-2xl flex items-center space-x-2"
        >
          {showForm ? <X className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
          <span>{showForm ? 'Cancel' : 'Add New'}</span>
        </motion.button>
      </div>

      {showForm && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass p-6 rounded-3xl"
        >
          <h3 className="text-xl font-bold text-white mb-4">
            {editingItem ? 'Edit Entry' : 'Add New Entry'}
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-300 mb-2">Rank</label>
                <input
                  type="number"
                  min="1"
                  value={formData.rank}
                  onChange={(e) => setFormData({ ...formData, rank: parseInt(e.target.value) })}
                  className="w-full px-4 py-3 glass-card rounded-2xl text-white"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Username</label>
                <input
                  type="text"
                  value={formData.username}
                  onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                  className="w-full px-4 py-3 glass-card rounded-2xl text-white"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Avatar URL</label>
              <input
                type="url"
                value={formData.avatar}
                onChange={(e) => setFormData({ ...formData, avatar: e.target.value })}
                className="w-full px-4 py-3 glass-card rounded-2xl text-white"
                required
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {activeTab === 'voice' ? (
                <div>
                  <label className="block text-gray-300 mb-2">Total Hours</label>
                  <input
                    type="number"
                    step="0.01"
                    value={formData.total_hours}
                    onChange={(e) => setFormData({ ...formData, total_hours: parseFloat(e.target.value) })}
                    className="w-full px-4 py-3 glass-card rounded-2xl text-white"
                    required
                  />
                </div>
              ) : (
                <div>
                  <label className="block text-gray-300 mb-2">Total Messages</label>
                  <input
                    type="number"
                    value={formData.total_messages}
                    onChange={(e) => setFormData({ ...formData, total_messages: parseInt(e.target.value) })}
                    className="w-full px-4 py-3 glass-card rounded-2xl text-white"
                    required
                  />
                </div>
              )}
              <div>
                <label className="block text-gray-300 mb-2">Total Days</label>
                <input
                  type="number"
                  value={formData.total_days}
                  onChange={(e) => setFormData({ ...formData, total_days: parseInt(e.target.value) })}
                  className="w-full px-4 py-3 glass-card rounded-2xl text-white"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Badge</label>
              <input
                type="text"
                value={formData.badge}
                onChange={(e) => setFormData({ ...formData, badge: e.target.value })}
                className="w-full px-4 py-3 glass-card rounded-2xl text-white"
                placeholder="Voice Champion"
                required
              />
            </div>
            <div className="flex space-x-3">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 liquid-button py-3 rounded-2xl flex items-center justify-center space-x-2"
                disabled={loading}
              >
                <Save className="h-5 w-5" />
                <span>{loading ? 'Saving...' : 'Save'}</span>
              </motion.button>
              <motion.button
                type="button"
                onClick={resetForm}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 glass-card rounded-2xl text-white"
              >
                Cancel
              </motion.button>
            </div>
          </form>
        </motion.div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentItems.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-card rounded-3xl p-6"
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="relative">
                <img
                  src={item.avatar}
                  alt={item.username}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="absolute -top-1 -right-1 bg-yellow-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                  {item.rank}
                </div>
              </div>
              <div>
                <h3 className="text-white font-bold">{item.username}</h3>
                <p className="text-gray-400 text-sm">{item.badge}</p>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              {activeTab === 'voice' ? (
                <>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Total Hours:</span>
                    <span className="text-white font-semibold">{item.total_hours}</span>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Total Messages:</span>
                    <span className="text-white font-semibold">{item.total_messages}</span>
                  </div>
                </>
              )}
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Total Days:</span>
                <span className="text-white font-semibold">{item.total_days}</span>
              </div>
            </div>
            <div className="flex space-x-2">
              <motion.button
                onClick={() => handleEdit(item)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 bg-blue-500/20 hover:bg-blue-500/30 text-blue-200 py-2 rounded-xl flex items-center justify-center space-x-2"
              >
                <Edit className="h-4 w-4" />
                <span>Edit</span>
              </motion.button>
              <motion.button
                onClick={() => handleDelete(item.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 bg-red-500/20 hover:bg-red-500/30 text-red-200 py-2 rounded-xl flex items-center justify-center space-x-2"
              >
                <Trash2 className="h-4 w-4" />
                <span>Delete</span>
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default LeaderboardManager;
