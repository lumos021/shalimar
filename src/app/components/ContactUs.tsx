import React from 'react';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';

export const ContactUs: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[#0a3d23] mb-12">Contact Us</h2>
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2 space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-[#0a3d23] flex items-center gap-3">
                <MapPin className="text-[#b48c5a]" /> Our Office Address
              </h3>
              <p className="text-gray-600 mt-2 pl-9">
                Palm Court Bldg M, 501/B, 5th Floor, New Link Road, Beside Coregaon Sports Complex, Malad West, Mumbai, Maharashtra 400064
              </p>
            </div>
             <div>
              <h3 className="text-xl font-semibold text-[#0a3d23] flex items-center gap-3">
                <Mail className="text-[#b48c5a]" /> General Enquiries
              </h3>
              <p className="text-gray-600 mt-2 pl-9">websupport@justdial.com</p>
            </div>
             <div>
              <h3 className="text-xl font-semibold text-[#0a3d23] flex items-center gap-3">
                <Phone className="text-[#b48c5a]" /> Call Us
              </h3>
              <p className="text-gray-600 mt-2 pl-9">+91-8888888888</p>
            </div>
             <div>
              <h3 className="text-xl font-semibold text-[#0a3d23] flex items-center gap-3">
                <Clock className="text-[#b48c5a]" /> Our Timing
              </h3>
              <p className="text-gray-600 mt-2 pl-9">Mon - Sun : 10:00 AM - 07:00 PM</p>
            </div>
          </div>
          <div className="md:w-1/2">
            <form className="space-y-4">
              <input type="text" placeholder="YOUR NAME" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#b48c5a] focus:border-[#b48c5a]"/>
              <input type="email" placeholder="YOUR EMAIL" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#b48c5a] focus:border-[#b48c5a]"/>
              <input type="text" placeholder="YOUR CONTACT NO." className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#b48c5a] focus:border-[#b48c5a]"/>
              <textarea placeholder="YOUR MESSAGE" rows={5} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#b48c5a] focus:border-[#b48c5a]"></textarea>
              <button type="submit" className="bg-[#b48c5a] text-white font-bold py-3 px-8 rounded-lg hover:bg-[#a57b4f]">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};