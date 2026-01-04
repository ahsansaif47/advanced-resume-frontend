import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Download, Eye } from 'lucide-react';

// Mock candidate data
const mockCandidates = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@email.com',
    role: 'Senior React Developer',
    experience: '5 years',
    location: 'San Francisco, CA',
    salary: '$120,000 - $150,000',
    skills: ['React', 'TypeScript', 'Node.js', 'AWS'],
    matchScore: 95,
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@email.com',
    role: 'Full Stack Developer',
    experience: '3 years',
    location: 'New York, NY',
    salary: '$100,000 - $130,000',
    skills: ['JavaScript', 'Python', 'PostgreSQL', 'Docker'],
    matchScore: 88,
  },
  {
    id: 3,
    name: 'Mike Johnson',
    email: 'mike.j@email.com',
    role: 'Backend Engineer',
    experience: '4 years',
    location: 'Austin, TX',
    salary: '$110,000 - $140,000',
    skills: ['Python', 'Django', 'Redis', 'AWS'],
    matchScore: 92,
  },
  {
    id: 4,
    name: 'Sarah Williams',
    email: 'sarah.w@email.com',
    role: 'UI/UX Designer',
    experience: '2 years',
    location: 'Seattle, WA',
    salary: '$90,000 - $120,000',
    skills: ['Figma', 'React', 'CSS', 'User Research'],
    matchScore: 85,
  },
  {
    id: 5,
    name: 'David Brown',
    email: 'david.b@email.com',
    role: 'DevOps Engineer',
    experience: '6 years',
    location: 'Chicago, IL',
    salary: '$130,000 - $160,000',
    skills: ['Kubernetes', 'Terraform', 'AWS', 'CI/CD'],
    matchScore: 90,
  },
];

const SearchPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    experience: '',
    location: '',
    salaryRange: '',
  });
  const [showFilters, setShowFilters] = useState(false);

  const filteredCandidates = mockCandidates.filter((candidate) => {
    const matchesSearch =
      candidate.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      candidate.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      candidate.skills.some((skill) =>
        skill.toLowerCase().includes(searchQuery.toLowerCase())
      );

    const matchesExperience =
      !filters.experience || candidate.experience.includes(filters.experience);
    const matchesLocation =
      !filters.location || candidate.location.includes(filters.location);
    const matchesSalary =
      !filters.salaryRange ||
      (filters.salaryRange === '100k+' &&
        parseInt(candidate.salary.replace(/[^0-9]/g, '').split('-')[0]) >= 100000) ||
      (filters.salaryRange === '150k+' &&
        parseInt(candidate.salary.replace(/[^0-9]/g, '').split('-')[0]) >= 150000);

    return matchesSearch && matchesExperience && matchesLocation && matchesSalary;
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 pt-24 pb-12">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Search Candidates
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Find the perfect talent for your team
          </p>
        </motion.div>

        {/* Search Bar and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 mb-6"
        >
          {/* Search Input */}
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by name, role, or skills..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-slate-700 border border-gray-300 dark:border-slate-600 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors"
            >
              <Filter className="w-5 h-5" />
              <span className="hidden md:inline">Filters</span>
            </button>
          </div>

          {/* Advanced Filters */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-gray-200 dark:border-slate-700"
            >
              {/* Experience Level */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Experience Level
                </label>
                <select
                  value={filters.experience}
                  onChange={(e) =>
                    setFilters({ ...filters, experience: e.target.value })
                  }
                  className="w-full px-4 py-2 bg-gray-50 dark:bg-slate-700 border border-gray-300 dark:border-slate-600 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="">All Levels</option>
                  <option value="2">Junior (2+ years)</option>
                  <option value="3">Mid-level (3+ years)</option>
                  <option value="5">Senior (5+ years)</option>
                  <option value="6">Lead (6+ years)</option>
                </select>
              </div>

              {/* Location */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Location
                </label>
                <select
                  value={filters.location}
                  onChange={(e) =>
                    setFilters({ ...filters, location: e.target.value })
                  }
                  className="w-full px-4 py-2 bg-gray-50 dark:bg-slate-700 border border-gray-300 dark:border-slate-600 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="">All Locations</option>
                  <option value="San Francisco">San Francisco</option>
                  <option value="New York">New York</option>
                  <option value="Austin">Austin</option>
                  <option value="Seattle">Seattle</option>
                  <option value="Chicago">Chicago</option>
                </select>
              </div>

              {/* Salary Range */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Salary Range
                </label>
                <select
                  value={filters.salaryRange}
                  onChange={(e) =>
                    setFilters({ ...filters, salaryRange: e.target.value })
                  }
                  className="w-full px-4 py-2 bg-gray-50 dark:bg-slate-700 border border-gray-300 dark:border-slate-600 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="">All Ranges</option>
                  <option value="100k+">$100,000+</option>
                  <option value="150k+">$150,000+</option>
                </select>
              </div>
            </motion.div>
          )}

          {/* Results Count */}
          <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
            Found {filteredCandidates.length} candidates
          </div>
        </motion.div>

        {/* Results Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-slate-700">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Candidate
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Role
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Experience
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Location
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Salary
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Match Score
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredCandidates.map((candidate, index) => (
                  <motion.tr
                    key={candidate.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.05 }}
                    className="border-t border-gray-200 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <div>
                        <div className="font-medium text-gray-900 dark:text-white">
                          {candidate.name}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          {candidate.email}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-700 dark:text-gray-300">
                      {candidate.role}
                    </td>
                    <td className="px-6 py-4 text-gray-700 dark:text-gray-300">
                      {candidate.experience}
                    </td>
                    <td className="px-6 py-4 text-gray-700 dark:text-gray-300">
                      {candidate.location}
                    </td>
                    <td className="px-6 py-4 text-gray-700 dark:text-gray-300">
                      {candidate.salary}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="flex-1 w-24 bg-gray-200 dark:bg-slate-600 rounded-full h-2">
                          <div
                            className="bg-primary-500 h-2 rounded-full"
                            style={{ width: `${candidate.matchScore}%` }}
                          />
                        </div>
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {candidate.matchScore}%
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <button
                          className="p-2 text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/20 rounded-lg transition-colors"
                          title="View Profile"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button
                          className="p-2 text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/20 rounded-lg transition-colors"
                          title="Download Resume"
                        >
                          <Download className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredCandidates.length === 0 && (
            <div className="px-6 py-12 text-center text-gray-600 dark:text-gray-400">
              No candidates found matching your criteria
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default SearchPage;
