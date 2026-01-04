import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Upload, FileText, CheckCircle } from 'lucide-react';

const UploadSection: React.FC = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadMode, setUploadMode] = useState<'single' | 'batch'>('single');
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);
  const [isUploading, setIsUploading] = useState(false);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDragIn = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
      setIsDragging(true);
    }
  }, []);

  const handleDragOut = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFiles(e.dataTransfer.files);
    }
  }, []);

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFiles(e.target.files);
    }
  };

  const handleFiles = (files: FileList) => {
    const fileArray = Array.from(files);
    const fileNames = fileArray.map(file => file.name);
    
    setIsUploading(true);
    
    // Simulate upload delay
    setTimeout(() => {
      setUploadedFiles(prev => [...prev, ...fileNames]);
      setIsUploading(false);
    }, 1500);
  };

  return (
    <section id="upload" className="py-20 px-6 bg-gray-50 dark:bg-slate-800/50">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Upload Resume
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            {uploadMode === 'single' ? 'Single upload supported' : 'Batch upload supported'}
          </p>
        </motion.div>

        {/* Upload Mode Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center mb-8"
        >
          <div className="bg-gray-200 dark:bg-slate-700 rounded-lg p-1 flex gap-1">
            <button
              onClick={() => setUploadMode('single')}
              className={`px-6 py-2 rounded-md transition-all duration-200 ${
                uploadMode === 'single'
                  ? 'bg-white dark:bg-slate-600 text-gray-900 dark:text-white shadow-md'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              SINGLE
            </button>
            <button
              onClick={() => setUploadMode('batch')}
              className={`px-6 py-2 rounded-md transition-all duration-200 ${
                uploadMode === 'batch'
                  ? 'bg-white dark:bg-slate-600 text-gray-900 dark:text-white shadow-md'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              BATCH
            </button>
          </div>
        </motion.div>

        {/* Drag & Drop Zone */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div
            className={`border-3 border-dashed rounded-2xl p-12 text-center transition-all duration-300 ${
              isDragging
                ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20 scale-[1.02]'
                : 'border-gray-300 dark:border-slate-600 hover:border-primary-400 dark:hover:border-primary-500 bg-white dark:bg-slate-800'
            }`}
            onDragEnter={handleDragIn}
            onDragLeave={handleDragOut}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <input
              type="file"
              id="file-upload"
              className="hidden"
              accept=".pdf,.doc,.docx"
              multiple={uploadMode === 'batch'}
              onChange={handleFileInput}
            />
            
            <label
              htmlFor="file-upload"
              className="cursor-pointer flex flex-col items-center"
            >
              <Upload
                className={`w-16 h-16 mb-6 transition-colors duration-300 ${
                  isDragging
                    ? 'text-primary-500 animate-bounce'
                    : 'text-primary-400'
                }`}
              />
              <p className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Drag & Drop Resumes Here
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                or click to browse from your device
              </p>
              
              <button className="btn-primary">
                Browse Files
              </button>
            </label>

            {/* File format icons */}
            <div className="flex justify-center gap-8 mt-8 pt-8 border-t border-gray-200 dark:border-slate-700">
              <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                <FileText className="w-5 h-5" />
                <span className="text-sm font-medium">PDF</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                <FileText className="w-5 h-5" />
                <span className="text-sm font-medium">DOCX</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                <FileText className="w-5 h-5" />
                <span className="text-sm font-medium">DOC</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Upload Status */}
        {(uploadedFiles.length > 0 || isUploading) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 space-y-3"
          >
            {isUploading && (
              <div className="bg-white dark:bg-slate-800 rounded-lg p-4 flex items-center space-x-3">
                <div className="animate-spin rounded-full h-5 w-5 border-2 border-primary-500 border-t-transparent" />
                <span className="text-gray-700 dark:text-gray-300">Uploading...</span>
              </div>
            )}
            
            {uploadedFiles.map((fileName, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white dark:bg-slate-800 rounded-lg p-4 flex items-center justify-between"
              >
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-300">{fileName}</span>
                </div>
                <span className="text-sm text-green-500 font-medium">Uploaded</span>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default UploadSection;
