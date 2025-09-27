'use client'

import React, { useState } from 'react';
import { 
  Search, 
  Grid, 
  List, 
  Navigation,
  ArrowLeft,
  CheckCircle,
  Info,
  Eye
} from 'lucide-react';

const roadSymbols = [
  {
    id: 1,
    name: "Stop Sign",
    image: "🛑",
    category: "Regulatory Signs",
    meaning: "Come to a complete stop",
    description: "This octagonal red sign with white text means you must bring your vehicle to a complete stop at the marked line or before entering the intersection.",
    color: "Red & White"
  },
  {
    id: 2,
    name: "Speed Limit",
    image: "🔴",
    category: "Regulatory Signs", 
    meaning: "Maximum speed allowed",
    description: "Circular sign with red border indicating the maximum speed limit for that area. Speed must not exceed the number shown.",
    color: "Red & White"
  },
  {
    id: 3,
    name: "No Entry",
    image: "⛔",
    category: "Prohibitory Signs",
    meaning: "Entry prohibited",
    description: "Red circular sign with white horizontal bar. Vehicles are not allowed to enter from this direction.",
    color: "Red & White"
  },
  {
    id: 4,
    name: "School Zone",
    image: "🏫",
    category: "Warning Signs",
    meaning: "School area ahead",
    description: "Yellow diamond-shaped sign warning drivers about school zone. Reduce speed and be alert for children.",
    color: "Yellow & Black"
  },
  {
    id: 5,
    name: "Hospital",
    image: "🏥",
    category: "Informatory Signs",
    meaning: "Hospital nearby",
    description: "Blue rectangular sign indicating hospital or medical facility ahead. Maintain silence zone.",
    color: "Blue & White"
  },
  {
    id: 6,
    name: "Pedestrian Crossing",
    image: "🚶",
    category: "Warning Signs",
    meaning: "Pedestrian crossing ahead",
    description: "Yellow triangle sign warning about pedestrian crossing. Slow down and give way to pedestrians.",
    color: "Yellow & Black"
  },
  {
    id: 7,
    name: "Turn Left",
    image: "⬅️",
    category: "Mandatory Signs",
    meaning: "Compulsory left turn",
    description: "Blue circular sign with white arrow indicating mandatory left turn. No other direction allowed.",
    color: "Blue & White"
  },
  {
    id: 8,
    name: "Parking",
    image: "🅿️",
    category: "Informatory Signs",
    meaning: "Parking area",
    description: "Blue square sign indicating designated parking area. Park only in marked spaces.",
    color: "Blue & White"
  },
  {
    id: 9,
    name: "Curve Ahead",
    image: "↪️",
    category: "Warning Signs",
    meaning: "Sharp curve ahead",
    description: "Yellow triangle with black arrow showing curve direction. Reduce speed before the curve.",
    color: "Yellow & Black"
  },
  {
    id: 10,
    name: "No Parking",
    image: "🚫",
    category: "Prohibitory Signs",
    meaning: "Parking prohibited",
    description: "Red circle with diagonal line over parking symbol. Parking is strictly prohibited in this area.",
    color: "Red & White"
  },
  {
    id: 11,
    name: "Fuel Station",
    image: "⛽",
    category: "Informatory Signs",
    meaning: "Petrol pump ahead",
    description: "Blue rectangular sign indicating fuel station ahead. Plan your refueling stops accordingly.",
    color: "Blue & White"
  },
  {
    id: 12,
    name: "Roundabout",
    image: "🔄",
    category: "Warning Signs",
    meaning: "Roundabout ahead",
    description: "Yellow triangle indicating roundabout ahead. Follow traffic flow in counterclockwise direction.",
    color: "Yellow & Black"
  },
  {
    id: 13,
    name: "Traffic Light",
    image: "🚦",
    category: "Warning Signs",
    meaning: "Traffic signal ahead",
    description: "Yellow triangle warning about traffic lights ahead. Be prepared to stop if signal turns red.",
    color: "Yellow & Black"
  },
  {
    id: 14,
    name: "Horn Prohibited",
    image: "🔇",
    category: "Prohibitory Signs",
    meaning: "No horn zone",
    description: "Red circular sign prohibiting use of horn. Maintain silence, usually near hospitals or schools.",
    color: "Red & White"
  },
  {
    id: 15,
    name: "One Way",
    image: "➡️",
    category: "Mandatory Signs",
    meaning: "One way traffic",
    description: "Blue rectangular sign with white arrow showing single direction traffic flow.",
    color: "Blue & White"
  },
  {
    id: 16,
    name: "Road Work",
    image: "🚧",
    category: "Warning Signs",
    meaning: "Construction ahead",
    description: "Yellow triangle warning about road construction or maintenance work ahead. Drive carefully.",
    color: "Yellow & Black"
  }
];

const categories = ["All Categories", "Regulatory Signs", "Warning Signs", "Prohibitory Signs", "Informatory Signs", "Mandatory Signs"];

export default function SymbolPreparation() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedSymbol, setSelectedSymbol] = useState(null);
  const [studiedSymbols, setStudiedSymbols] = useState(new Set());

  const filteredSymbols = roadSymbols.filter(symbol => {
    const matchesSearch = symbol.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         symbol.meaning.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All Categories' || symbol.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const markAsStudied = (symbolId) => {
    setStudiedSymbols(prev => {
      const newSet = new Set(prev);
      if (newSet.has(symbolId)) {
        newSet.delete(symbolId);
      } else {
        newSet.add(symbolId);
      }
      return newSet;
    });
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Regulatory Signs': 'bg-red-900/30 text-red-300 border-red-700/50',
      'Warning Signs': 'bg-yellow-900/30 text-yellow-300 border-yellow-700/50',
      'Prohibitory Signs': 'bg-red-900/30 text-red-300 border-red-700/50',
      'Informatory Signs': 'bg-blue-900/30 text-blue-300 border-blue-700/50',
      'Mandatory Signs': 'bg-green-900/30 text-green-300 border-green-700/50'
    };
    return colors[category] || 'bg-gray-900/30 text-gray-300 border-gray-700/50';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-slate-900">
      {/* Header */}
      <header className="bg-black/30 border-b border-gray-700 sticky top-0 z-10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <a
  href="/learning-dashboard"
  className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
>
  <ArrowLeft className="w-5 h-5" />
  <span>Back to Dashboard</span>
</a>
              <div className="h-6 w-px bg-gray-600"></div>
              <div className="flex items-center space-x-3">
                {/* <div className="bg-blue-600 p-2 rounded-lg">
                  <Navigation className="w-6 h-6 text-white" />
                </div> */}
                <div>
                  <h1 className="text-xl font-bold text-white">Symbol Preparation</h1>
                  <p className="text-sm text-gray-400">Learn road signs & symbols</p>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2 bg-green-900/30 border border-green-700/50 px-3 py-1 rounded-full">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span className="text-sm text-green-300 font-medium">
                  {studiedSymbols.size}/{roadSymbols.length} Studied
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Introduction */}
        <div className="mb-8">
          <div className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 border border-blue-500/30 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-3">🚦 Road Symbol Preparation</h2>
            <p className="text-blue-200 text-lg mb-6">
              Master all essential traffic symbols to become a safe and confident driver. 
              Study each symbol carefully and understand its meaning.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-white">{roadSymbols.length}</div>
                <div className="text-sm text-blue-200">Total Symbols</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-white">{categories.length - 1}</div>
                <div className="text-sm text-blue-200">Categories</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-white">{studiedSymbols.size}</div>
                <div className="text-sm text-blue-200">Studied</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-white">
                  {Math.round((studiedSymbols.size / roadSymbols.length) * 100)}%
                </div>
                <div className="text-sm text-blue-200">Complete</div>
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search symbols..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 w-64"
              />
            </div>

            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-400">View:</span>
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'grid' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-400 hover:text-white hover:bg-gray-700'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'list' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-400 hover:text-white hover:bg-gray-700'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
            <div className="text-sm text-gray-400">
              {filteredSymbols.length} symbols found
            </div>
          </div>
        </div>

        {/* Symbols Display */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredSymbols.map(symbol => (
              <div
                key={symbol.id}
                className={`bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-lg border-2 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg cursor-pointer group ${
                  studiedSymbols.has(symbol.id) 
                    ? 'border-green-500/50 bg-green-900/10' 
                    : 'border-gray-700 hover:border-blue-500/50'
                }`}
                onClick={() => setSelectedSymbol(symbol)}
              >
                <div className="text-center mb-4">
                  <div className="text-6xl mb-3 transform group-hover:scale-110 transition-transform duration-200">
                    {symbol.image}
                  </div>
                  <h3 className="font-bold text-white text-lg">{symbol.name}</h3>
                  <p className="text-gray-300 mt-1">{symbol.meaning}</p>
                </div>

                <div className="flex items-center justify-between mb-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getCategoryColor(symbol.category)}`}>
                    {symbol.category}
                  </span>
                  <span className="text-xs text-gray-400">{symbol.color}</span>
                </div>

                <div className="flex items-center justify-between">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedSymbol(symbol);
                    }}
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      markAsStudied(symbol.id);
                    }}
                    className={`p-2 rounded-lg transition-colors ${
                      studiedSymbols.has(symbol.id)
                        ? 'text-green-400 bg-green-900/30 hover:bg-green-800/30'
                        : 'text-gray-400 hover:text-green-400 hover:bg-gray-700'
                    }`}
                  >
                    <CheckCircle className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredSymbols.map(symbol => (
              <div
                key={symbol.id}
                className={`bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-lg border-2 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg cursor-pointer ${
                  studiedSymbols.has(symbol.id) 
                    ? 'border-green-500/50 bg-green-900/10' 
                    : 'border-gray-700 hover:border-blue-500/50'
                }`}
                onClick={() => setSelectedSymbol(symbol)}
              >
                <div className="flex items-start space-x-6">
                  <div className="text-5xl transform hover:scale-110 transition-transform duration-200">
                    {symbol.image}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-xl font-bold text-white">{symbol.name}</h3>
                        <p className="text-blue-400 font-medium">{symbol.meaning}</p>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          markAsStudied(symbol.id);
                        }}
                        className={`p-2 rounded-lg transition-colors ${
                          studiedSymbols.has(symbol.id)
                            ? 'text-green-400 bg-green-900/30 hover:bg-green-800/30'
                            : 'text-gray-400 hover:text-green-400 hover:bg-gray-700'
                        }`}
                      >
                        <CheckCircle className="w-6 h-6" />
                      </button>
                    </div>
                    <p className="text-gray-300 mb-3 leading-relaxed">{symbol.description}</p>
                    <div className="flex items-center space-x-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getCategoryColor(symbol.category)}`}>
                        {symbol.category}
                      </span>
                      <span className="text-sm text-gray-400">Colors: {symbol.color}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Symbol Detail Modal */}
        {selectedSymbol && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="text-center flex-1">
                    <div className="text-8xl mb-4">{selectedSymbol.image}</div>
                    <h2 className="text-3xl font-bold text-white">{selectedSymbol.name}</h2>
                    <p className="text-xl text-blue-400 font-medium mt-2">{selectedSymbol.meaning}</p>
                  </div>
                  <button
                    onClick={() => setSelectedSymbol(null)}
                    className="text-gray-400 hover:text-white p-2 text-2xl"
                  >
                    ✕
                  </button>
                </div>

                <div className="bg-gray-700/30 border border-gray-600 rounded-xl p-6 mb-6">
                  <h3 className="font-bold text-white mb-3 flex items-center">
                    <Info className="w-5 h-5 mr-2 text-blue-400" />
                    Description
                  </h3>
                  <p className="text-gray-300 leading-relaxed">{selectedSymbol.description}</p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-blue-900/20 border border-blue-700/50 rounded-xl p-4">
                    <h4 className="font-bold text-blue-300 mb-2">Category</h4>
                    <p className="text-blue-200">{selectedSymbol.category}</p>
                  </div>
                  <div className="bg-purple-900/20 border border-purple-700/50 rounded-xl p-4">
                    <h4 className="font-bold text-purple-300 mb-2">Colors</h4>
                    <p className="text-purple-200">{selectedSymbol.color}</p>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <button
                    onClick={() => markAsStudied(selectedSymbol.id)}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-bold transition-all duration-200 ${
                      studiedSymbols.has(selectedSymbol.id)
                        ? 'bg-green-600 text-white hover:bg-green-700'
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}
                  >
                    <CheckCircle className="w-5 h-5" />
                    <span>
                      {studiedSymbols.has(selectedSymbol.id) ? 'Mark as Unstudied' : 'Mark as Studied'}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}