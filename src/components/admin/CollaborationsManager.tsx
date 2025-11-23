import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Plus, Edit, Trash2, Save, X } from 'lucide-react';
import { supabase } from '../../lib/supabase';

interface Collaboration {
  id: string;
  name: string;
  image: string;
  subscribers: string;
  status: string;
  description: string;
  platform: string;
  verified: boolean;
  gradient: string;
}

const CollaborationsManager: React.FC = () => {
  const [items, setItems] = useState<Collaboration[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingItem, setEditingItem] = useState<Collaboration | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    subscribers: '',
    status: '',
    description: '',
    platform: 'YouTube',
    verified: true,
    gradient: 'from-purple-500 to-pink-500'
  });
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const { data, error } = await supabase
        .from('collaborations')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setItems(data || []);
    } catch (error) {
      console.error('Error fetching collaborations:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (editingItem) {
        const { error } = await supabase
          .from('collaborations')
          .update(formData)
          .eq('id', editingItem.id);

        if (error) throw error;
      } else {
        const { error } = await supabase
          .from('collaborations')
          .insert([formData]);

        if (error) throw error;
      }

      await fetchItems();
      resetForm();
    } catch (error) {
      console.error('Error saving collaboration:', error);
      alert('Failed to save item');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this collaboration?')) return;

    setLoading(true);
    try {
      const { error } = await supabase
        .from('collaborations')
        .delete()
        .eq('id', id);

      if (error) throw error;
      await fetchItems();
    } catch (error) {
      console.error('Error deleting collaboration:', error);
      alert('Failed to delete item');
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (item: Collaboration) => {
    setEditingItem(item);
    setFormData({
      name: item.name,
      image: item.image,
      subscribers: item.subscribers,
      status: item.status,
      description: item.description,
      platform: item.platform,
      verified: item.verified,
      gradient: item.gradient
    });
    setShowForm(true);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      image: '',
      subscribers: '',
      status: '',
      description: '',
      platform: 'YouTube',
      verified: true,
      gradient: 'from-purple-500 to-pink-500'
    });
    setEditingItem(null);
    setShowForm(false);
  };

  if (loading && items.length === 0) {
    return <div className="text-white text-center">Loading...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Collaborations</h2>
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
            {editingItem ? 'Edit Collaboration' : 'Add New Collaboration'}
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 glass-card rounded-2xl text-white"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Subscribers</label>
                <input
                  type="text"
                  value={formData.subscribers}
                  onChange={(e) => setFormData({ ...formData, subscribers: e.target.value })}
                  className="w-full px-4 py-3 glass-card rounded-2xl text-white"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Image URL</label>
              <input
                type="url"
                value={formData.image}
                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                className="w-full px-4 py-3 glass-card rounded-2xl text-white"
                required
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-300 mb-2">Status</label>
                <input
                  type="text"
                  value={formData.status}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                  className="w-full px-4 py-3 glass-card rounded-2xl text-white"
                  placeholder="Content Creator"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Platform</label>
                <select
                  value={formData.platform}
                  onChange={(e) => setFormData({ ...formData, platform: e.target.value })}
                  className="w-full px-4 py-3 glass-card rounded-2xl text-white"
                >
                  <option value="YouTube">YouTube</option>
                  <option value="Twitch">Twitch</option>
                  <option value="Instagram">Instagram</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Description</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full px-4 py-3 glass-card rounded-2xl text-white"
                rows={3}
                required
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-300 mb-2">Gradient</label>
                <input
                  type="text"
                  value={formData.gradient}
                  onChange={(e) => setFormData({ ...formData, gradient: e.target.value })}
                  className="w-full px-4 py-3 glass-card rounded-2xl text-white"
                  placeholder="from-purple-500 to-pink-500"
                />
              </div>
              <div>
                <label className="flex items-center space-x-2 text-gray-300 mb-2">
                  <input
                    type="checkbox"
                    checked={formData.verified}
                    onChange={(e) => setFormData({ ...formData, verified: e.target.checked })}
                    className="w-5 h-5"
                  />
                  <span>Verified</span>
                </label>
              </div>
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
        {items.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-card rounded-3xl p-6"
          >
            <div className="flex items-center space-x-4 mb-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="text-white font-bold">{item.name}</h3>
                <p className="text-gray-400 text-sm">{item.subscribers}</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-2">{item.status}</p>
            <p className="text-gray-400 text-sm mb-4 line-clamp-2">{item.description}</p>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-gray-400 text-sm">{item.platform}</span>
              {item.verified && (
                <span className="text-blue-400 text-sm">Verified</span>
              )}
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

export default CollaborationsManager;
