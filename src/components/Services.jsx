'use client'

import React, { useState } from 'react';
import { 
  Car, 
  Bike, 
  Truck, 
  FileText, 
  CheckCircle, 
  Clock, 
  User, 
  MapPin, 
  Camera, 
  AlertCircle,
  ChevronDown,
  ChevronUp,
  BookOpen,
  Award,
  Users,
  Phone,
  Mail,
  MessageCircle
} from 'lucide-react';

export default function Services() {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const eligibilityCriteria = [
    {
      id: 'non-gear',
      icon: <Bike className="w-8 h-8" />,
      title: 'Non-Gear Two-Wheelers',
      subtitle: 'Scooters below 50cc',
      minAge: '16 years',
      requirements: [
        'Written consent letter (Form 1A) from parent or guardian required',
        'Must understand traffic signs and basic road rules',
        'No prior license needed'
      ],
      bgColor: 'bg-gradient-to-br from-green-800/30 to-emerald-800/30',
      iconColor: 'text-green-400',
      ageColor: 'text-green-300'
    },
    {
      id: 'gear-lmv',
      icon: <Car className="w-8 h-8" />,
      title: 'Gear Two-Wheelers & LMV',
      subtitle: 'Light Motor Vehicles',
      minAge: '18 years',
      requirements: [
        'No prior license required',
        'Basic knowledge of Indian road safety signs expected',
        'Must pass written test on traffic regulations'
      ],
      bgColor: 'bg-gradient-to-br from-purple-800/30 to-violet-800/30',
      iconColor: 'text-purple-400',
      ageColor: 'text-purple-300'
    },
    {
      id: 'commercial',
      icon: <Truck className="w-8 h-8" />,
      title: 'Commercial/Transport Vehicles',
      subtitle: 'Heavy vehicles, buses, trucks',
      minAge: '20 years',
      requirements: [
        'Must have valid LMV license for at least 1 year',
        'Educational qualification: 8th standard pass (state-dependent)',
        'Medical fitness certificate (Form 1A) from registered practitioner'
      ],
      bgColor: 'bg-gradient-to-br from-orange-800/30 to-amber-800/30',
      iconColor: 'text-orange-400',
      ageColor: 'text-orange-300'
    }
  ];

  const documentCategories = [
    {
      title: 'Proof of Age',
      icon: <Clock className="w-6 h-6" />,
      iconColor: 'text-blue-400',
      bgColor: 'bg-blue-900/20',
      documents: [
        'Birth Certificate (issued by municipality or panchayat)',
        'PAN Card',
        'Passport',
        '10th Class Marksheet (if date of birth is mentioned)',
        'School Leaving Certificate'
      ]
    },
    {
      title: 'Proof of Address',
      icon: <MapPin className="w-6 h-6" />,
      iconColor: 'text-purple-400',
      bgColor: 'bg-purple-900/20',
      documents: [
        'Aadhar Card',
        'Voter ID Card',
        'Passport',
        'Electricity or Telephone Bill (recent, within 3 months)',
        'Rent Agreement (if staying in rented house)',
        'Ration Card'
      ]
    },
    {
      title: 'Photographs',
      icon: <Camera className="w-6 h-6" />,
      iconColor: 'text-green-400',
      bgColor: 'bg-green-900/20',
      documents: [
        'Two recent passport-size color photographs',
        'Some states may require only one photograph',
        'Ensure photos meet RTO specifications'
      ]
    },
    {
      title: 'Application Forms',
      icon: <FileText className="w-6 h-6" />,
      iconColor: 'text-orange-400',
      bgColor: 'bg-orange-900/20',
      documents: [
        'Form 1: Self-declaration of physical fitness (mandatory)',
        'Form 2: Application for Learner\'s License',
        'Form 1A: Medical Certificate (if over 40 or commercial license)',
        'Parental consent form (for applicants aged 16-18)'
      ]
    }
  ];

  const services = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: 'Mock Tests & Practice',
      description: 'Comprehensive practice tests covering all vehicle categories and RTO exam patterns',
      features: ['State-wise question banks', 'Timed practice sessions', 'Performance analytics']
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'License Guidance',
      description: 'Step-by-step guidance for learner\'s license application and preparation',
      features: ['Document checklist', 'Application process', 'Eligibility verification']
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Expert Support',
      description: '24/7 support from driving experts and RTO process specialists',
      features: ['Live chat support', 'Expert consultations', 'Query resolution']
    }
  ];

  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone Support',
      description: 'Call us for immediate assistance',
      contact: '+91 9876543210',
      bgColor: 'bg-blue-900/20',
      iconColor: 'text-blue-400'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Support',
      description: 'Send us your queries via email',
      contact: 'support@rtomentor.com',
      bgColor: 'bg-green-900/20',
      iconColor: 'text-green-400'
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: 'Live Chat',
      description: 'Chat with our experts in real-time',
      contact: 'Available 24/7',
      bgColor: 'bg-purple-900/20',
      iconColor: 'text-purple-400'
    }
  ];

  return (
    <div className="min-h-screen pt-10 bg-gradient-to-br from-gray-900 via-gray-800 to-slate-900">
      {/* Eligibility Criteria Section */}
<section className="pt-20 pb-16 bg-gradient-to-b from-gray-900 to-gray-800">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-8">
  <h2 className="text-3xl p-4 md:text-4xl font-bold bg-gradient-to-r from-red-500 via-yellow-400 to-green-400 bg-clip-text text-transparent mb-3">
  Eligibility Criteria for Learner's License
</h2>
      <p className="text-lg text-gray-300 max-w-3xl mx-auto">
        Age and knowledge-based requirements vary by vehicle type. Choose your vehicle category to see specific requirements.
      </p>
    </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {eligibilityCriteria.map((criteria) => (
              <div key={criteria.id} className={`${criteria.bgColor} border border-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300`}>
                <div className="text-center mb-6">
                  <div className={`${criteria.iconColor} mb-4 flex justify-center`}>
                    {criteria.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {criteria.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">
                    {criteria.subtitle}
                  </p>
                  <div className={`inline-flex items-center px-4 py-2 rounded-full bg-gray-700/50 border border-gray-600 shadow-sm`}>
                    <User className={`w-4 h-4 ${criteria.iconColor} mr-2`} />
                    <span className={`font-semibold ${criteria.ageColor}`}>
                      Min Age: {criteria.minAge}
                    </span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-white mb-3">Requirements:</h4>
                  {criteria.requirements.map((req, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-300 text-sm leading-relaxed">{req}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 bg-gradient-to-r from-amber-600 to-yellow-600 rounded-2xl p-8 text-white text-center shadow-lg">
      <AlertCircle className="w-12 h-12 mx-auto mb-4 text-black/80" />
      <h3 className="text-2xl font-bold mb-4">Important Note</h3>
      <p className="text-lg opacity-90 max-w-3xl mx-auto">
        Requirements may vary slightly between states. For commercial vehicles, some states may waive educational qualifications. 
        Always verify with your local RTO for specific requirements.
      </p>
    </div>
  </div>
      </section>

      {/* Documents Required Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              📄 Documents Required
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Essential documents for your learner's license application. You can submit these online via Parivahan portal or at your local RTO office.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {documentCategories.map((category, index) => (
              <div key={index} className="bg-gray-700/50 border border-gray-600 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className={`${category.bgColor} p-6 text-center border-b border-gray-600`}>
                  <div className={`${category.iconColor} mb-3 flex justify-center`}>
                    {category.icon}
                  </div>
                  <h3 className="font-bold text-white">{category.title}</h3>
                </div>
                
                <div className="p-6">
                  <div className="space-y-3">
                    {category.documents.map((doc, docIndex) => (
                      <div key={docIndex} className="flex items-start space-x-3 group">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0 group-hover:bg-blue-300 transition-colors duration-200"></div>
                        <p className="text-gray-300 text-sm leading-relaxed">{doc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Information */}
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="bg-blue-900/20 border border-blue-700/30 rounded-xl p-8">
              <h3 className="text-xl font-bold text-blue-300 mb-4 flex items-center">
                <FileText className="w-6 h-6 mr-3" />
                Online Application
              </h3>
              <p className="text-blue-200 mb-4">
                You can apply online through the official Parivahan portal (parivahan.gov.in) for a more convenient experience.
              </p>
              <ul className="space-y-2 text-blue-200">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-blue-400" />
                  Upload documents digitally
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-blue-400" />
                  Schedule test slot online
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-blue-400" />
                  Track application status
                </li>
              </ul>
            </div>

            <div className="bg-amber-900/20 border border-amber-700/30 rounded-xl p-8">
              <h3 className="text-xl font-bold text-amber-300 mb-4 flex items-center">
                <AlertCircle className="w-6 h-6 mr-3" />
                Special Requirements
              </h3>
              <div className="space-y-3 text-amber-200">
                <p className="font-semibold">For applicants under 18:</p>
                <p className="text-sm">Parental consent form must be signed by parent/guardian</p>
                
                <p className="font-semibold mt-4">For applicants over 40:</p>
                <p className="text-sm">Medical Certificate (Form 1A) is mandatory</p>
                
                <p className="font-semibold mt-4">For commercial licenses:</p>
                <p className="text-sm">Medical fitness certificate from registered practitioner required</p>
              </div>
            </div>
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