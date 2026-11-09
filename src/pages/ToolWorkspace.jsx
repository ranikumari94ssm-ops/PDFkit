import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { toolsData } from '../data/toolsData';

function ToolWorkspace() {
  const { id } = useParams();
  const [selectedFiles, setSelectedFiles] = useState([]);

  // Find tool by id
  const tool = toolsData.find((item) => item.id === id);

  if (!tool) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <div className="text-5xl mb-4">🔍</div>
        <h2 className="text-2xl font-bold text-gray-800">Tool Not Found</h2>
        <p className="text-gray-500 mt-2">The requested tool doesn't exist.</p>
        <Link
          to="/"
          className="inline-block mt-6 px-6 py-2.5 bg-purple-600 hover:bg-purple-700 text-white font-medium 
          rounded-xl shadow-xs transition-all"
        >
          Back to All Tools
        </Link>
      </div>
    );
  }

  const handleFileChange = (e) => {
    if (e.target.files) {
      setSelectedFiles(Array.from(e.target.files));
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer.files) {
      setSelectedFiles(Array.from(e.dataTransfer.files));
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const removeFile = (index) => {
    setSelectedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      
      {/* Top Navigation Breadcrumb */}
      <div className="mb-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-purple-600 transition-colors"
        >
          <span>←</span> Back to All Tools
        </Link>
      </div>

      {/* Tool Header */}
      <div className="text-center mb-10">
        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl text-2xl font-bold mb-4 shadow-xs ${tool.badgeColor}`}>
          {tool.iconText}
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
          {tool.title}
        </h1>
        <p className="mt-3 text-gray-600 max-w-lg mx-auto text-sm sm:text-base leading-relaxed">
          {tool.description}
        </p>
      </div>

      {/* Upload Dropzone */}
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        className="border-2 border-dashed border-purple-200 hover:border-purple-400 bg-purple-50/40 hover:bg-purple-50/70 rounded-3xl p-10 sm:p-14 text-center transition-all duration-200"
      >
        <div className="w-16 h-16 bg-white shadow-xs rounded-2xl mx-auto flex items-center justify-center text-3xl mb-4 text-purple-600">
          📂
        </div>
        
        <h3 className="text-lg font-semibold text-gray-800">
          Choose files or drag & drop here
        </h3>
        <p className="text-xs text-gray-500 mt-1">
          Select the files you want to use with {tool.title}
        </p>

        <label className="inline-block mt-6">
          <input
            type="file"
            multiple
            onChange={handleFileChange}
            className="hidden"
          />
          <span className="px-8 py-3.5 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-xl shadow-md transition-all cursor-pointer inline-block">
            Select Files
          </span>
        </label>
      </div>

      {/* Selected Files List */}
      {selectedFiles.length > 0 && (
        <div className="mt-8 bg-white rounded-2xl border border-gray-100 shadow-xs p-6">
          <h4 className="font-semibold text-gray-900 mb-4 text-sm uppercase tracking-wider">
            Selected Files ({selectedFiles.length})
          </h4>
          <ul className="space-y-3">
            {selectedFiles.map((file, idx) => (
              <li
                key={idx}
                className="flex items-center justify-between p-3.5 bg-slate-50 rounded-xl text-sm"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span className="text-lg">📄</span>
                  <span className="font-medium text-gray-800 truncate">
                    {file.name}
                  </span>
                  <span className="text-xs text-gray-400 shrink-0">
                    ({(file.size / 1024).toFixed(1)} KB)
                  </span>
                </div>
                <button
                  onClick={() => removeFile(idx)}
                  className="text-gray-400 hover:text-red-500 text-sm font-bold px-2 py-1 transition-colors"
                  title="Remove file"
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex justify-end">
            <button className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-xl shadow-md transition-all">
              Start {tool.title}
            </button>
          </div>
        </div>
      )}

    </div>
  );
}

export default ToolWorkspace;
