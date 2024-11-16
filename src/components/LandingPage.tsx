import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, LayoutDashboard, Clock, Users, Check, Star, ArrowRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Product Manager',
    company: 'TechCorp',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
    content: 'TaskMaster has transformed how our team manages projects. The intuitive interface and powerful features have boosted our productivity significantly.',
  },
  {
    name: 'Michael Chen',
    role: 'Team Lead',
    company: 'InnovateLabs',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
    content: 'The best task management solution we\'ve used. It\'s helped us stay organized and meet deadlines consistently.',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Freelancer',
    company: 'Self-employed',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
    content: 'As a freelancer, keeping track of multiple projects is crucial. TaskMaster makes it effortless to manage everything in one place.',
  }
];

const stats = [
  { value: '10K+', label: 'Active Users' },
  { value: '50K+', label: 'Tasks Completed' },
  { value: '99.9%', label: 'Uptime' },
  { value: '24/7', label: 'Support' },
];

const pricingPlans = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    features: [
      'Up to 5 projects',
      'Basic task management',
      'Calendar view',
      'Mobile app access',
    ],
    gradient: 'gradient-green',
  },
  {
    name: 'Pro',
    price: '$12',
    period: 'per month',
    features: [
      'Unlimited projects',
      'Advanced analytics',
      'Team collaboration',
      'Priority support',
      'Custom workflows',
      'API access',
    ],
    gradient: 'gradient-blue',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'per month',
    features: [
      'Everything in Pro',
      'Enterprise SSO',
      'Advanced security',
      'Custom integration',
      'Dedicated support',
      'SLA guarantee',
    ],
    gradient: 'gradient-orange',
  },
];

export const LandingPage = () => {
  return (
    <div className="min-h-screen bg-[#1a1e2e]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-[#242837] border-b border-gray-800 z-50">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <LayoutDashboard className="w-8 h-8 text-blue-500" />
            <span className="text-xl font-bold text-white">TaskMaster</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
            <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Testimonials</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Link
              to="/login"
              className="px-4 py-2 text-gray-300 hover:text-white transition-colors"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="px-4 py-2 gradient-blue text-white rounded-lg hover:opacity-90 transition-opacity"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-white mb-6">
                Manage Tasks
                <span className="block text-blue-500 mt-2">Effortlessly</span>
              </h1>
              <p className="text-xl text-gray-400 mb-8">
                Stay organized and boost your productivity with our intuitive task management platform.
              </p>
              <Link
                to="/register"
                className="inline-flex items-center px-6 py-3 gradient-blue text-white rounded-lg hover:opacity-90 transition-opacity text-lg"
              >
                Get Started Free
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
            
            <div className="relative">
              <div className="w-full h-[400px] rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80"
                  alt="Dashboard Preview"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1e2e] to-transparent opacity-50"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-[#242837]" id="features">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Powerful Features</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Everything you need to manage tasks effectively and boost team productivity
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-dark rounded-xl p-6">
              <div className="w-12 h-12 gradient-blue rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Task Management</h3>
              <p className="text-gray-400">
                Create, organize, and track your tasks with ease. Set priorities and deadlines.
              </p>
            </div>

            <div className="card-dark rounded-xl p-6">
              <div className="w-12 h-12 gradient-green rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Time Tracking</h3>
              <p className="text-gray-400">
                Monitor time spent on tasks and improve your productivity with detailed insights.
              </p>
            </div>

            <div className="card-dark rounded-xl p-6">
              <div className="w-12 h-12 gradient-orange rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Team Collaboration</h3>
              <p className="text-gray-400">
                Work together seamlessly with your team. Share tasks and track progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-[#1a1e2e]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-[#242837]" id="pricing">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Choose the perfect plan for your needs. No hidden fees.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`card-dark rounded-xl p-6 ${
                  plan.popular ? 'border-2 border-blue-500' : ''
                }`}
              >
                {plan.popular && (
                  <div className="text-blue-500 text-sm font-medium mb-4">Most Popular</div>
                )}
                <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400">/{plan.period}</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <Check className="w-5 h-5 text-blue-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/register"
                  className={`w-full flex justify-center py-2 px-4 rounded-lg hover:opacity-90 transition-opacity ${plan.gradient} text-white`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-[#1a1e2e]" id="testimonials">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">What Our Users Say</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our customers have to say.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card-dark rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="text-white font-medium">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300">{testimonial.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#242837]">
        <div className="container mx-auto px-6">
          <div className="card-dark rounded-xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Join thousands of teams who are already using TaskMaster to improve their productivity.
            </p>
            <div className="flex justify-center space-x-4">
              <Link
                to="/register"
                className="px-8 py-3 gradient-blue text-white rounded-lg hover:opacity-90 transition-opacity"
              >
                Start Free Trial
              </Link>
              <Link
                to="/contact"
                className="px-8 py-3 border border-gray-700 text-gray-300 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[#1a1e2e] border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <LayoutDashboard className="w-6 h-6 text-blue-500" />
              <span className="text-lg font-bold text-white">TaskMaster</span>
            </div>
            <div className="text-gray-400 text-sm">
              © 2024 TaskMaster. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};