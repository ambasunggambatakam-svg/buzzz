import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LogOut, Image, Users, Trophy, Menu, X } from 'lucide-react';
import { useAdminAuth } from '../../context/AdminAuthContext';
import { useNavigate } from 'react-router-dom';
import GalleryManager from '../../components/admin/GalleryManager';
import CollaborationsManager from '../../components/admin/CollaborationsManager';
import LeaderboardManager from '../../components/admin/LeaderboardManager';

type Tab = 'gallery' | 'collaborations' | 'leaderboard';

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('gallery');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { logout } = useAdminAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/admin/login');
  };

  const tabs = [
    { id: 'gallery' as Tab, label: 'Gallery', icon: <Image className="h-5 w-5" /> },
    { id: 'collaborations' as Tab, label: 'Collaborations', icon: <Users className="h-5 w-5" /> },
    { id: 'leaderboard' as Tab, label: 'Leaderboard', icon: <Trophy className="h-5 w-5" /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900">
      <div className="flex">
        {/* Sidebar */}
        <motion.div
          initial={false}
          animate={{ width: sidebarOpen ? 280 : 0 }}
          className="glass border-r border-white/10 h-screen sticky top-0 overflow-hidden"
        >
          <div className="p-6">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center animate-blob-morph">
                <img
                  src="https://ik.imagekit.io/psdoxljjy/logo-removebg-preview.png?updatedAt=1748393788409"
                  alt="Logo"
                  className="h-8 w-8"
                />
              </div>
              <div>
                <h2 className="text-white font-bold text-lg">Admin Panel</h2>
                <p className="text-gray-400 text-sm">Kaze Serenity</p>
              </div>
            </div>

            <nav className="space-y-2">
              {tabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  whileHover={{ x: 5 }}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-2xl transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'liquid-button text-white'
                      : 'text-gray-300 hover:bg-white/10'
                  }`}
                >
                  {tab.icon}
                  <span className="font-medium">{tab.label}</span>
                </motion.button>
              ))}
            </nav>

            <motion.button
              onClick={handleLogout}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full mt-8 flex items-center space-x-3 px-4 py-3 rounded-2xl bg-red-500/20 hover:bg-red-500/30 text-red-200 transition-all duration-300"
            >
              <LogOut className="h-5 w-5" />
              <span className="font-medium">Logout</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Header */}
          <div className="glass border-b border-white/10 p-4 sticky top-0 z-10">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                  className="p-2 glass-card rounded-xl text-white hover:bg-white/10"
                >
                  {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
                <h1 className="text-2xl font-bold text-white">
                  {tabs.find(t => t.id === activeTab)?.label}
                </h1>
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="p-6">
            {activeTab === 'gallery' && <GalleryManager />}
            {activeTab === 'collaborations' && <CollaborationsManager />}
            {activeTab === 'leaderboard' && <LeaderboardManager />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
