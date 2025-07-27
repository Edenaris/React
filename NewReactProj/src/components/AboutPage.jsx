import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
    const handleBackClick = () => {
        
        console.log('Navigate back to home');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
           
            <div className="container mx-auto px-6 py-8">
                <Link 
                    to={'/'}
                    className='bg-white hover:bg-gray-50 text-gray-700 px-6 py-3 rounded-lg shadow-sm border border-gray-200 font-medium transition-all duration-200 hover:shadow-md inline-flex items-center gap-2'
                >
                    ← return
                </Link>
            </div>

          
            <div className="container mx-auto px-6 py-16">
                <div className="max-w-4xl mx-auto">
                  
                    <div className="text-center mb-16">
                        <h1 className="text-5xl font-bold text-gray-800 mb-6">About Us</h1>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            We're passionate about creating amazing experiences and delivering exceptional value to our customers.
                        </p>
                    </div>

                    
                    <div className="grid md:grid-cols-2 gap-12 mb-16">
                        <div className="bg-white rounded-2xl p-8 shadow-lg">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
                            <p className="text-gray-600 leading-relaxed">
                                To revolutionize the way people interact with technology, making it more accessible, 
                                intuitive, and meaningful for everyone around the world.
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl p-8 shadow-lg">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Values</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Innovation, integrity, and customer satisfaction drive everything we do. 
                                We believe in building lasting relationships through quality and trust.
                            </p>
                        </div>
                    </div>

                   
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-800 mb-8">Meet Our Team</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[1, 2, 3].map((member) => (
                                <div key={member} className="bg-white rounded-2xl p-6 shadow-lg">
                                    <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                                    <h4 className="text-xl font-semibold text-gray-800 mb-2">Team Member {member}</h4>
                                    <p className="text-gray-600 mb-4">Position Title</p>
                                    <p className="text-sm text-gray-500">
                                        Passionate professional with years of experience in creating amazing solutions.
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    
                    <div className="bg-white rounded-2xl p-8 shadow-lg">
                        <div className="grid md:grid-cols-4 gap-8 text-center">
                            <div>
                                <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                                <div className="text-gray-600">Happy Customers</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
                                <div className="text-gray-600">Projects Completed</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-purple-600 mb-2">5+</div>
                                <div className="text-gray-600">Years Experience</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
                                <div className="text-gray-600">Support Available</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;