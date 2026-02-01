import { useState } from 'react';
import { Link } from 'react-router-dom';
import { spotlightArticles } from '../../data/spotlightArticles';

const categories = [
    'All',
    'Institutional Partnership',
    'Strategic Architecture',
    'Capital & Execution',
    'Continuity & Institutional Memory',
    'Flagship Platform',
    'Strategic Frameworks',
    'Policy Architecture'
];

export default function Spotlight() {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const filteredArticles = selectedCategory === 'All'
        ? spotlightArticles
        : spotlightArticles.filter(article => article.category === selectedCategory);

    return (
        <div className="min-h-screen bg-white">
            {/* Header Section */}
            <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl">
                        <h1 className="text-5xl font-bold mb-6">Spotlight</h1>
                        <h2 className="text-2xl font-semibold mb-4 text-blue-100">AEF Strategic Announcements & Institutional Milestones</h2>
                        <p className="text-lg text-blue-50 leading-relaxed">
                            Spotlight is the official platform for Africa Economic Forum's major partnerships, flagship initiatives, institutional announcements, and strategic thought leadership shaping Africa's role in global realignments.
                        </p>
                    </div>
                </div>
            </section>

            {/* Filters Section */}
            <section className="bg-gray-50 py-8 sticky top-0 z-40 border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center space-x-2 overflow-x-auto pb-2">
                        <span className="text-sm font-semibold text-gray-700 whitespace-nowrap">Filter by:</span>
                        {categories.map(category => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-4 py-2 rounded-md text-sm font-medium whitespace-nowrap transition-colors ${selectedCategory === category
                                    ? 'bg-blue-900 text-white'
                                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Articles Grid */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredArticles.map(article => (
                            <Link
                                key={article.id}
                                to={`/spotlight/${article.slug}`}
                                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-gray-100"
                            >
                                {article.image && (
                                    <img
                                        src={article.image}
                                        alt={article.title}
                                        className="w-full h-48 object-cover"
                                    />
                                )}
                                <div className="p-6">
                                    <div className="mb-3">
                                        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
                                            {article.category}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                                        {article.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                                        {article.summary}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs text-gray-500">{new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                                        <span className="text-blue-600 font-medium text-sm flex items-center">
                                            Read More <i className="ri-arrow-right-line ml-1"></i>
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {filteredArticles.length === 0 && (
                        <div className="text-center py-16">
                            <p className="text-gray-500 text-lg">No articles found in this category.</p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
