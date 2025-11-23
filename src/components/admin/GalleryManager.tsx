import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Plus, Edit, Trash2, Save, X } from 'lucide-react';
import { supabase } from '../../lib/supabase';

interface GalleryItem {
  id: string;
  src: string;
  title: string;
  category: string;
  description: string;
}

const GalleryManager: React.FC = () => {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingItem, setEditingItem] = useState<GalleryItem | null>(null);
  const [formData, setFormData] = useState({
    src: '',
    title: '',
    category: 'moments',
    description: ''
  });
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const { data, error } = await supabase
        .from('gallery_items')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setItems(data || []);
    } catch (error) {
      console.error('Error fetching gallery items:', error);
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
          .from('gallery_items')
          .update(formData)
          .eq('id', editingItem.id);

        if (error) throw error;
      } else {
        const { error } = await supabase
          .from('gallery_items')
          .insert([formData]);

        if (error) throw error;
      }

      await fetchItems();
      resetForm();
    } catch (error) {
      console.error('Error saving gallery item:', error);
      alert('Failed to save item');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this item?')) return;

    setLoading(true);
    try {
      const { error } = await supabase
        .from('gallery_items')
        .delete()
        .eq('id', id);

      if (error) throw error;
      await fetchItems();
    } catch (error) {
      console.error('Error deleting gallery item:', error);
      alert('Failed to delete item');
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (item: GalleryItem) => {
    setEditingItem(item);
    setFormData({
      src: item.src,
      title: item.title,
      category: item.category,
      description: item.description
    });
    setShowForm(true);
  };

  const resetForm = () => {
    setFormData({
      src: '',
      title: '',
      category: 'moments',
      description: ''
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
        <h2 className="text-2xl font-bold text-white">Gallery Items</h2>
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
            {editingItem ? 'Edit Item' : 'Add New Item'}
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-300 mb-2">Image URL</label>
              <input
                type="url"
                value={formData.src}
                onChange={(e) => setFormData({ ...formData, src: e.target.value })}
                className="w-full px-4 py-3 glass-card rounded-2xl text-white"
                required
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Title</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-4 py-3 glass-card rounded-2xl text-white"
                required
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Category</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-4 py-3 glass-card rounded-2xl text-white"
              >
                <option value="all">All</option>
                <option value="events">Events</option>
                <option value="community">Community</option>
                <option value="moments">Moments</option>
              </select>
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
            className="glass-card rounded-3xl overflow-hidden group"
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="text-white font-semibold mb-1">{item.title}</h3>
              <p className="text-gray-400 text-sm mb-2">{item.category}</p>
              <p className="text-gray-300 text-sm mb-4 line-clamp-2">{item.description}</p>
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
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default GalleryManager;
