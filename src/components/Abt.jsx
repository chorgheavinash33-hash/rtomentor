'use client'

import React, { useState } from 'react';
import { 
  BookOpen, 
  Target, 
  Users, 
  Award, 
  CheckCircle, 
  Clock, 
  TrendingUp,
  Shield,
  Lightbulb,
  Heart,
  Star,
  ArrowRight,
  FileText,
  Brain,
  Zap,
  Globe,
  ChevronDown,
  ChevronUp,
  BarChart3,
  PenTool,
  Smartphone,
  Car,
  Bike,
  Truck
} from 'lucide-react';

export default function About() {
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  const keyFeatures = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: 'Comprehensive Question Bank',
      description: 'Over 5,000+ questions covering all vehicle categories, updated regularly with latest RTO patterns',
      highlights: ['State-wise variations', 'Latest traffic rules', 'Regional language support'],
      bgColor: 'bg-gradient-to-br from-blue-800/30 to-indigo-800/30',
      iconColor: 'text-blue-400'
    },
    {
      icon: <PenTool className="w-8 h-8" />,
      title: 'Mock Examinations',
      description: 'Realistic exam simulations that mirror actual RTO test conditions and timing',
      highlights: ['Timed practice sessions', 'Instant scoring', 'Detailed explanations'],
      bgColor: 'bg-gradient-to-br from-purple-800/30 to-violet-800/30',
      iconColor: 'text-purple-400'
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Traffic Symbol Preparation',
      description: 'Interactive learning modules for all Indian traffic signs and road markings',
      highlights: ['Visual learning', 'Symbol recognition', 'Meaning explanations'],
      bgColor: 'bg-gradient-to-br from-green-800/30 to-emerald-800/30',
      iconColor: 'text-green-400'
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Performance Analytics',
      description: 'Track your progress with detailed insights and personalized improvement suggestions',
      highlights: ['Score tracking', 'Weak area identification', 'Progress reports'],
      bgColor: 'bg-gradient-to-br from-orange-800/30 to-amber-800/30',
      iconColor: 'text-orange-400'
    }
  ];

  const benefits = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Save Time',
      description: 'Reduce RTO visits and preparation time with our streamlined approach',
      color: 'text-blue-400'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Higher Success Rate',
      description: 'Students using our platform show 95% first-attempt pass rate',
      color: 'text-green-400'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Updated Content',
      description: 'Always current with latest traffic rules and RTO exam patterns',
      color: 'text-purple-400'
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: 'Mobile Friendly',
      description: 'Practice anywhere, anytime with our responsive design',
      color: 'text-orange-400'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'All States Covered',
      description: 'Comprehensive coverage for all Indian states and union territories',
      color: 'text-cyan-400'
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'User-Friendly',
      description: 'Intuitive interface designed for learners of all technical levels',
      color: 'text-pink-400'
    }
  ];

  const stats = [
    { number: '50,000+', label: 'Happy Users', icon: <Users className="w-8 h-8" /> },
    { number: '95%', label: 'Success Rate', icon: <Award className="w-8 h-8" /> },
    { number: '28', label: 'States Covered', icon: <Globe className="w-8 h-8" /> },
    { number: '5,000+', label: 'Practice Questions', icon: <BookOpen className="w-8 h-8" /> }
  ];

  const vehicleTypes = [
    {
      icon: <Bike className="w-6 h-6" />,
      title: 'Two-Wheeler',
      description: 'Scooters, motorcycles, and mopeds',
      color: 'text-green-400'
    },
    {
      icon: <Car className="w-6 h-6" />,
      title: 'Four-Wheeler',
      description: 'Cars, jeeps, and light motor vehicles',
      color: 'text-blue-400'
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: 'Commercial',
      description: 'Heavy vehicles, buses, and trucks',
      color: 'text-orange-400'
    }
  ];

  const faqs = [
    {
      question: 'How does RTO Mentor help with learner\'s license preparation?',
      answer: 'RTO Mentor provides comprehensive preparation through mock tests, question banks, traffic symbol training, and personalized performance analytics. Our platform covers all vehicle categories and is updated with the latest RTO exam patterns.'
    },
    {
      question: 'Are the questions in your question bank authentic?',
      answer: 'Yes, our question bank is curated from official RTO sources and real exam patterns. We regularly update our content to match current traffic rules and exam formats across different states.'
    },
    {
      question: 'Do you cover all Indian states?',
      answer: 'Absolutely! RTO Mentor covers all 28 states and 8 union territories of India, with state-specific variations in traffic rules and exam patterns included in our preparation materials.'
    },
    {
      question: 'Can I access the platform on my mobile phone?',
      answer: 'Yes, RTO Mentor is fully mobile-responsive. You can practice tests, study traffic symbols, and track your progress from any device - smartphone, tablet, or computer.'
    },
    {
      question: 'What is your success rate?',
      answer: 'Our users achieve a 95% first-attempt pass rate, which is significantly higher than the national average. This is due to our comprehensive preparation approach and realistic mock testing environment.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-slate-900">
      {/* Hero Section */}
      <section className="pt-30 pb-16 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">RTO Mentor</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Empowering millions of Indians to obtain their learner's license with confidence through 
              comprehensive preparation, expert guidance, and cutting-edge technology.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-700/50 to-gray-800/50 border border-gray-600 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
                <div className="text-blue-400 mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Project Overview
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              A comprehensive digital platform designed to simplify the learner's license preparation process across India
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-xl p-8">
                <Target className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-gray-300 leading-relaxed">
                  To democratize access to quality learner's license preparation by providing comprehensive, 
                  affordable, and accessible learning resources that help every Indian pass their RTO test 
                  on the first attempt.
                </p>
              </div>

              <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-xl p-8">
                <Lightbulb className="w-12 h-12 text-green-400 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">Innovation Focus</h3>
                <p className="text-gray-300 leading-relaxed">
                  Leveraging technology to create an intuitive, engaging learning experience that adapts 
                  to individual learning styles and provides real-time feedback for continuous improvement.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-700/30 to-gray-800/30 border border-gray-600 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">What We Offer</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">State-wise question banks with 5,000+ questions</span>
                </div>
                <div className="flex items-center space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">Realistic mock examinations with instant results</span>
                </div>
                <div className="flex items-center space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">Interactive traffic symbol learning modules</span>
                </div>
                <div className="flex items-center space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">Personalized performance analytics and insights</span>
                </div>
                <div className="flex items-center space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">Expert guidance and 24/7 support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Key Features
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Everything you need to ace your learner's license exam in one comprehensive platform
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {keyFeatures.map((feature, index) => (
              <div key={index} className={`${feature.bgColor} border border-gray-700 rounded-2xl p-8 hover:shadow-xl transition-all duration-300`}>
                <div className="flex items-start space-x-6">
                  <div className={`${feature.iconColor} flex-shrink-0`}>
                    {feature.icon}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    <div className="space-y-2">
                      {feature.highlights.map((highlight, hIndex) => (
                        <div key={hIndex} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                          <span className="text-gray-300 text-sm">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Purpose & Objectives */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Purpose & Objectives
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Addressing the challenges faced by learner's license aspirants across India
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-red-800/30 to-pink-800/30 border border-red-700/50 rounded-xl p-8 text-center">
              <Zap className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Reduce Failure Rates</h3>
              <p className="text-gray-300">
                Address the high failure rates in RTO exams by providing comprehensive preparation that covers all aspects of the test.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-800/30 to-cyan-800/30 border border-blue-700/50 rounded-xl p-8 text-center">
              <Shield className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Ensure Road Safety</h3>
              <p className="text-gray-300">
                Promote better understanding of traffic rules and road safety practices to create responsible drivers.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-800/30 to-emerald-800/30 border border-green-700/50 rounded-xl p-8 text-center">
              <Globe className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Universal Access</h3>
              <p className="text-gray-300">
                Make quality preparation resources accessible to everyone, regardless of location or economic background.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Categories */}
      <section className="py-16 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Vehicle Categories Covered
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Comprehensive preparation for all vehicle types and license categories
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {vehicleTypes.map((vehicle, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-700/50 to-gray-800/50 border border-gray-600 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300">
                <div className={`${vehicle.color} mb-4 flex justify-center`}>
                  {vehicle.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{vehicle.title}</h3>
                <p className="text-gray-300">{vehicle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose RTO Mentor?
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Discover the advantages that make us the preferred choice for learner's license preparation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-700/30 to-gray-800/30 border border-gray-600 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className={`${benefit.color} flex-shrink-0 mt-1`}>
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-300">
              Get answers to common questions about RTO Mentor
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-700/30 to-gray-800/30 border border-gray-600 rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-700/20 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                  {expandedFAQ === index ? (
                    <ChevronUp className="w-6 h-6 text-blue-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-blue-400 flex-shrink-0" />
                  )}
                </button>
                {expandedFAQ === index && (
                  <div className="px-8 pb-6">
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of successful learners who have passed their RTO exam on the first attempt with RTO Mentor.
            </p>
            <button className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-colors duration-200 shadow-lg">
              Start Practicing Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 border-t border-gray-700 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-xl font-bold mb-2">RTO Mentor</h3>
          <p className="text-gray-400 max-w-2xl mx-auto mb-4 text-sm">
            Your trusted partner for learner's license preparation and RTO process guidance across India.
          </p>
          <div className="border-t border-gray-800 pt-4">
            <p className="text-gray-500 text-sm">
              © 2025 RTO Mentor. Making RTO processes simple and accessible for everyone.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}