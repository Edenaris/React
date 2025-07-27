import React from 'react';

const PricePage = () => {
    const handleBackClick = () => {
        console.log('Navigate back to home');
    };

    const plans = [
        {
            name: "Basic",
            price: "$9",
            period: "/month",
            features: [
                "Up to 5 projects",
                "10GB storage",
                "Email support",
                "Basic analytics",
                "Mobile app access"
            ],
            popular: false
        },
        {
            name: "Pro",
            price: "$29",
            period: "/month",
            features: [
                "Unlimited projects",
                "100GB storage",
                "Priority support",
                "Advanced analytics",
                "Team collaboration",
                "API access"
            ],
            popular: true
        },
        {
            name: "Enterprise",
            price: "$99",
            period: "/month",
            features: [
                "Everything in Pro",
                "Unlimited storage",
                "24/7 phone support",
                "Custom integrations",
                "Dedicated manager",
                "SLA guarantee"
            ],
            popular: false
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
            {/* Header */}
            <div className="container mx-auto px-6 py-8">
                <button
                    onClick={handleBackClick}
                    className="bg-white hover:bg-gray-50 text-gray-700 px-6 py-3 rounded-lg shadow-sm border border-gray-200 font-medium transition-all duration-200 hover:shadow-md inline-flex items-center gap-2"
                >
                    ← return
                </button>
            </div>

           
            <div className="container mx-auto px-6 py-16">
                <div className="max-w-6xl mx-auto">
                    
                    <div className="text-center mb-16">
                        <h1 className="text-5xl font-bold text-gray-800 mb-6">Simple Pricing</h1>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Choose the perfect plan for your needs. No hidden fees, cancel anytime.
                        </p>
                    </div>

                   
                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        {plans.map((plan, index) => (
                            <div 
                                key={index} 
                                className={`relative bg-white rounded-2xl p-8 shadow-lg transition-all duration-300 hover:shadow-xl ${
                                    plan.popular ? 'ring-2 ring-blue-500 scale-105' : 'hover:scale-105'
                                }`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                        <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                                            Most Popular
                                        </span>
                                    </div>
                                )}
                                
                                <div className="text-center mb-8">
                                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{plan.name}</h3>
                                    <div className="flex items-baseline justify-center mb-2">
                                        <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                                        <span className="text-gray-600 ml-2 text-lg">{plan.period}</span>
                                    </div>
                                </div>

                                <ul className="space-y-4 mb-8">
                                    {plan.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-center">
                                            <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                                                <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <span className="text-gray-600">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <button 
                                    className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 ${
                                        plan.popular 
                                            ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl' 
                                            : 'bg-gray-100 hover:bg-gray-200 text-gray-800 hover:shadow-md'
                                    }`}
                                >
                                    Get Started
                                </button>
                            </div>
                        ))}
                    </div>

                    
                    <div className="bg-white rounded-2xl p-8 shadow-lg">
                        <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Frequently Asked Questions</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-6">
                                <div className="p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200">
                                    <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                                        Can I change my plan anytime?
                                    </h4>
                                    <p className="text-gray-600 leading-relaxed">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately and we'll prorate the billing.</p>
                                </div>
                                
                                <div className="p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200">
                                    <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                                        Is there a free trial?
                                    </h4>
                                    <p className="text-gray-600 leading-relaxed">Yes! All plans come with a 14-day free trial. No credit card required to get started.</p>
                                </div>
                            </div>
                            
                            <div className="space-y-6">
                                <div className="p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200">
                                    <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                                        Do you offer refunds?
                                    </h4>
                                    <p className="text-gray-600 leading-relaxed">We offer a 30-day money-back guarantee for all plans. No questions asked, full refund.</p>
                                </div>
                                
                                <div className="p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200">
                                    <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                                        <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                                        What payment methods do you accept?
                                    </h4>
                                    <p className="text-gray-600 leading-relaxed">We accept all major credit cards, PayPal, and bank transfers for Enterprise plans.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="text-center mt-16">
                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
                            <h3 className="text-3xl font-bold mb-4">Ready to get started?</h3>
                            <p className="text-blue-100 mb-8 text-lg">Join thousands of satisfied customers today</p>
                            <div className="space-x-4">
                                <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105">
                                    Start Free Trial
                                </button>
                                <button className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200 transform hover:scale-105">
                                    Contact Sales
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PricePage;