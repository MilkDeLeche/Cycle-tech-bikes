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
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-center">Contáctanos</h1>
            <p className="text-noir-600 mb-12 text-center max-w-2xl mx-auto">
              ¿Tienes preguntas sobre nuestras bicicletas, servicios o quieres programar una visita? Nos encantaría escuchar de ti. Completa el formulario a continuación y nos pondremos en contacto contigo lo antes posible.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-display font-bold mb-6">Ponte en Contacto</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-2">Visita Nuestra Tienda</h3>
                    <p className="text-noir-600">Matamoros Cycling Shop</p>
                    <p className="text-noir-600">Av Francisco Villa entre Roberto Guerra y Rio Rhin</p>
                    <p className="text-noir-600">Treviño Zapata, 87430 Heroica Matamoros</p>
                    <p className="text-noir-600">Tamaulipas, México</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-2">Información de Contacto</h3>
                    <p className="text-noir-600">
                      <a href="tel:+1234567890" className="hover:text-noir-900">+1 (234) 567-890</a>
                    </p>
                    <p className="text-noir-600">
                      <a href="mailto:info@cycle-tech.com" className="hover:text-noir-900">info@cycle-tech.com</a>
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-2">Horario de Atención</h3>
                    <p className="text-noir-600">Lunes - Viernes: 9:00 AM - 7:00 PM</p>
                    <p className="text-noir-600">Sábado: 10:00 AM - 6:00 PM</p>
                    <p className="text-noir-600">Domingo: Cerrado</p>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-display font-bold mb-6">Envíanos un Mensaje</h2>
                
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-noir-700 mb-1">Nombre</label>
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
                    <label htmlFor="email" className="block text-sm font-medium text-noir-700 mb-1">Correo Electrónico</label>
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
                    <label htmlFor="subject" className="block text-sm font-medium text-noir-700 mb-1">Asunto</label>
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
                    <label htmlFor="message" className="block text-sm font-medium text-noir-700 mb-1">Mensaje</label>
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
                  
                  <a
                    href={`https://wa.me/1234567890?text=Hola, mi nombre es ${encodeURIComponent(formData.name)}. ${encodeURIComponent(formData.message)} (Correo: ${encodeURIComponent(formData.email)}, Asunto: ${encodeURIComponent(formData.subject)})`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-noir-900 text-white py-3 px-6 rounded-md hover:bg-noir-800 transition-colors text-center block"
                  >
                    Enviar Mensaje por WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Shop Location Map */}
            <div className="mt-16">
              <h2 className="text-3xl font-display font-bold mb-6 text-center">Visita Nuestra Tienda</h2>
              <div className="rounded-lg overflow-hidden shadow-lg h-[400px]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3631.902442442139!2d-97.50368368498985!3d25.526233983377754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8665a3a0c3c3c3c3%3A0x3c3c3c3c3c3c3c3c!2sAv+Francisco+Villa+entre+Roberto+Guerra+y+Rio+Rhin%2C+Trevi%C3%B1o+Zapata%2C+87430+Heroica+Matamoros%2C+Tamps.%2C+Mexico!5e0!3m2!1sen!2sus!4v1635167261304!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de la Tienda"
                ></iframe>
              </div>
              <div className="mt-4 text-center">
                <p className="text-noir-600 mb-2">Av Francisco Villa entre Roberto Guerra y Rio Rhin</p>
                <p className="text-noir-600 mb-2">Treviño Zapata, 87430 Heroica Matamoros, Tamaulipas, México</p>
                <p className="text-noir-600">Abierto de Lunes a Sábado: 9am-6pm</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact; 