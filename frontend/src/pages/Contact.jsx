import React from "react";

const ContactUs = () => {
  return (
    <div className=" mt-20 py-12 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Left Section - Contact Info */}
        <div>
        <h1 className='text-4xl font-bold text-gray-600'>
        Contact<span className='text-orange-600'> US </span>
      </h1>
          <p className="text-lg text-white/90">We’d love to hear from you! Reach out for reservations, inquiries, or just to say hello.</p>
          
          <div className="mt-6 space-y-4">
            <div className="flex items-center gap-4">
              <span className="text-lg font-bold">📞</span>
              <p className="text-lg">+91 98765 43210</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-lg font-bold">✉️</span>
              <p className="text-lg">contact@foodify.com</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-lg font-bold">📍</span>
              <p className="text-lg">123 Foodie Street, Mumbai, India</p>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="mt-6 flex gap-4">
            <a href="#" className="text-white text-xl font-semibold hover:text-gray-200 transition">Facebook</a>
            <a href="#" className="text-white text-xl font-semibold hover:text-gray-200 transition">Instagram</a>
            <a href="#" className="text-white text-xl font-semibold hover:text-gray-200 transition">Twitter</a>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="bg-white text-gray-800 p-6 md:p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4 text-gray-700">Send Us a Message</h3>
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF5733]" required />
            <input type="email" placeholder="Your Email" className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF5733]" required />
            <textarea placeholder="Your Message" rows="4" className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF5733]" required></textarea>
            <button className="w-full bg-[#FF5733] text-white py-3 rounded-md font-semibold hover:bg-[#e04c2b] transition">
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Google Map Section */}
      <div className="mt-12 w-full">
        <iframe
          className="w-full h-64 md:h-96 rounded-lg shadow-md"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.3450882813584!2d72.82583341539653!3d19.076090156961665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9306b8e8ff5%3A0x64c4968859e12c8!2sMumbai%20India!5e0!3m2!1sen!2sin!4v1632228294321!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
