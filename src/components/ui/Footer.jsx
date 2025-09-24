import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Leaf, 
  Mail, 
  Phone, 
  MapPin,
  Twitter,
  Linkedin,
  Github,
  ExternalLink
} from 'lucide-react';

const footerLinks = {
  product: [
    { name: 'Solution', path: '/solution' },
    { name: 'Features', path: '/features' },
    { name: 'Lab Portal', path: '/lab-portal' },
    { name: 'Farmer Portal', path: '/farmer-portal' },
  ],
  company: [
    { name: 'About Us', path: '/about' },
    { name: 'Background', path: '/background' },
    { name: 'Contact', path: '/' },
  ],
  
};

const socialLinks = [
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'GitHub', icon: Github, href: '#' },
];

const Footer = () => {
  return (
    <footer className="conatiner mx-auto mt-20  ">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* LOGO part  */}
          <div className="flex flex-col justify-start items-start">
            <div className="flex items-center space-x-2 mb-4">
             
                <Link to='/' className='p-1 rounded-lg bg-gradient-to-br from-green-500 to-green-400 text-white font-bold'> 
                  <img style={{height: '40px'}} className="rounded-lg " src="../public/favicon.ico" alt="website-LOGO" />
                 </Link>

                <span className="font-bold text-xl text-green-700">HerbTrace</span>
            </div>
            <p className="text-gray-500 mb-6 leading-relaxed text-start">
              Revolutionizing Ayurvedic herb traceability with blockchain technology, 
              ensuring transparency from farm to formulation.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="p-2 rounded-lg  text-gray-600 hover:text-green-600 hover:scale-130 transition-all duration-300"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Product part */}
          <div className='flex flex-col justify-start items-start'>
            <h3 className="font-semibold text-white mb-4">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-500 hover:text-green-600 transition-colors duration-300 flex items-center group"
                  >
                    {link.name}
                    <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company part */}
          <div className='flex flex-col justify-start items-start'>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-500 hover:text-green-600 transition-colors duration-300 flex items-center group"
                  >
                    {link.name}
                    <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* conatct part */}
          <div>
            <h3 className="font-semibold text-white mb-4 flex flex-col justify-start items-start">Contact</h3>
            <div className="space-y-3 text-gray-500">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-green-600" />
                <span className="text-sm">contact@herbtrace.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-green-600" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-green-600" />
                <span className="text-sm">Kolkata, India </span>
              </div>
            </div>
          </div>

        </div>

        
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-gray-500 text-sm">© 2025 HerbTrace. All rights reserved.</p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
