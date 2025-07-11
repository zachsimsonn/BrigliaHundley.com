import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Phone, Mail, MapPin, Clock, Send, Download } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const Contact = ({ data, editableContent }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    practiceArea: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Mock form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message Sent!",
      description: "We'll contact you within 24 hours.",
      duration: 5000,
    });
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      practiceArea: ''
    });
    
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      value: data.business.phone,
      action: () => window.location.href = `tel:${data.business.phone}`
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: data.business.email,
      action: () => window.location.href = `mailto:${data.business.email}`
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Address",
      value: data.business.address,
      action: () => window.open(`https://maps.app.goo.gl/Dqo1syhK2exWUfBM6`)
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Hours",
      value: "Mon-Fri: 9AM-5PM",
      action: null
    }
  ];

  return (
    <section id="contact" className="py-24 bg-white relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Contact Us
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-900 to-blue-700 rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ready to discuss your legal needs? Contact our experienced team today for a free consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Schedule Your Free Consultation
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full"
                    placeholder="(703) 555-0123"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Practice Area
                  </label>
                  <select
                    name="practiceArea"
                    value={formData.practiceArea}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select a practice area</option>
                    {data.practiceAreas.map((area, index) => (
                      <option key={index} value={area.title}>{area.title}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full"
                  placeholder="Please describe your legal needs..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-900 hover:bg-blue-800 text-white py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </div>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h3>
              <p className="text-gray-600 mb-8">
                Located in Tysons Corner, our experienced legal team serves clients throughout Northern Virginia, including Fairfax County, Arlington County, Prince William County, and surrounding areas. Contact us today to schedule your free consultation.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="grid gap-4">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-lg p-6 shadow-sm border border-gray-200 transition-all duration-300 ${
                    info.action ? 'cursor-pointer hover:shadow-md hover:border-blue-300' : ''
                  }`}
                  onClick={info.action}
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-blue-50 rounded-lg text-blue-900">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                      <p className="text-gray-600">{info.value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Free Guide Download - REMOVED */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;