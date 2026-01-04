import React from 'react';
import { motion } from 'framer-motion';
import { Users, TrendingUp, FileText, BarChart3 } from 'lucide-react';

const StatsPreview: React.FC = () => {
  const stats = [
    {
      label: 'Total Resumes',
      value: '2,451',
      icon: Users,
      trend: '+12%',
      trendColor: 'text-green-500',
    },
    {
      label: 'New This Week',
      value: '156',
      icon: FileText,
      trend: '+8%',
      trendColor: 'text-green-500',
    },
    {
      label: 'Match Rate',
      value: '89%',
      icon: TrendingUp,
      trend: '+3%',
      trendColor: 'text-green-500',
    },
  ];

  return (
    <section id="features" className="py-20 px-6 bg-white dark:bg-slate-800">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Overview Dashboard
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Welcome back! Here's what's happening with your talent pool today.
          </p>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card p-8 hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`bg-primary-100 dark:bg-primary-900/30 p-3 rounded-lg`}>
                  <stat.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <span className={`text-sm font-semibold ${stat.trendColor}`}>
                  {stat.trend}
                </span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {stat.value}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Analytics Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="card p-8"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Analytics Dashboard Visualization
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Track your recruitment metrics and performance
              </p>
            </div>
            <div className="hidden sm:block">
              <BarChart3 className="w-8 h-8 text-primary-600 dark:text-primary-400" />
            </div>
          </div>

          {/* Simple Chart Visualization */}
          <div className="bg-gray-50 dark:bg-slate-700/50 rounded-xl p-6">
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-700 dark:text-gray-300 font-medium">JavaScript</span>
                  <span className="text-gray-500 dark:text-gray-400">1,245 candidates</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-slate-600 rounded-full h-3">
                  <div className="bg-primary-500 h-3 rounded-full transition-all duration-1000" style={{ width: '85%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-700 dark:text-gray-300 font-medium">Python</span>
                  <span className="text-gray-500 dark:text-gray-400">987 candidates</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-slate-600 rounded-full h-3">
                  <div className="bg-primary-500 h-3 rounded-full transition-all duration-1000" style={{ width: '72%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-700 dark:text-gray-300 font-medium">React</span>
                  <span className="text-gray-500 dark:text-gray-400">856 candidates</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-slate-600 rounded-full h-3">
                  <div className="bg-primary-500 h-3 rounded-full transition-all duration-1000" style={{ width: '65%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-700 dark:text-gray-300 font-medium">AWS</span>
                  <span className="text-gray-500 dark:text-gray-400">634 candidates</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-slate-600 rounded-full h-3">
                  <div className="bg-primary-500 h-3 rounded-full transition-all duration-1000" style={{ width: '48%' }} />
                </div>
              </div>
            </div>
          </div>

          {/* View Dashboard Button */}
          <div className="mt-8 text-center">
            <button
              className="btn-secondary w-full sm:w-auto"
              disabled
              title="Dashboard coming soon"
            >
              View Full Dashboard
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsPreview;
