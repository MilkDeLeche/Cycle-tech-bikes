import React, { useState } from 'react';
import Navigation from '../components/Navigation';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-center">Contact Us</h1>
            <p className="text-noir-600 mb-12 text-center max-w-2xl mx-auto">
              Have questions about our bikes, services, or want to schedule a visit? We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-display font-bold mb-6">Get in Touch</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-2">Visit Our Shop</h3>
                    <p className="text-noir-600">VG67+F9 Matamoros</p>
                    <p className="text-noir-600">Tamaulipas, Mexico</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-2">Contact Information</h3>
                    <p className="text-noir-600">
                      <a href="tel:+1234567890" className="hover:text-noir-900">+1 (234) 567-890</a>
                    </p>
                    <p className="text-noir-600">
                      <a href="mailto:info@cycle-tech.com" className="hover:text-noir-900">info@cycle-tech.com</a>
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-2">Business Hours</h3>
                    <p className="text-noir-600">Monday - Friday: 9:00 AM - 7:00 PM</p>
                    <p className="text-noir-600">Saturday: 10:00 AM - 6:00 PM</p>
                    <p className="text-noir-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-display font-bold mb-6">Send Us a Message</h2>
                
                {submitSuccess && (
                  <div className="bg-green-50 text-green-800 p-4 rounded-md mb-6">
                    Thank you for your message! We'll get back to you soon.
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-noir-700 mb-1">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-noir-300 rounded-md focus:outline-none focus:ring-2 focus:ring-noir-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-noir-700 mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-noir-300 rounded-md focus:outline-none focus:ring-2 focus:ring-noir-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-noir-700 mb-1">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-noir-300 rounded-md focus:outline-none focus:ring-2 focus:ring-noir-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-noir-700 mb-1">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-2 border border-noir-300 rounded-md focus:outline-none focus:ring-2 focus:ring-noir-500"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-noir-900 text-white py-3 px-6 rounded-md hover:bg-noir-800 transition-colors disabled:opacity-50"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>

            {/* Shop Location Map */}
            <div className="mb-16">
              <h2 className="text-3xl font-display font-bold mb-6 text-center">Visit Our Shop</h2>
              <div className="rounded-lg overflow-hidden shadow-lg h-[400px]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3631.902442442139!2d-97.50368368498985!3d25.526233983377754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8665a3a0c3c3c3c3%3A0x3c3c3c3c3c3c3c3c!2sVG67%2BF9%20Matamoros%2C%20Tamaulipas%2C%20Mexico!5e0!3m2!1sen!2sus!4v1635167261304!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Shop Location"
                ></iframe>
              </div>
              <div className="mt-4 text-center">
                <p className="text-noir-600 mb-2">VG67+F9 Matamoros, Tamaulipas, Mexico</p>
                <p className="text-noir-600">Open Monday-Saturday: 9am-6pm</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact; 