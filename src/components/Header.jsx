import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <a href="/" className="flex items-center">
            <img
              src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/logo_1753832441687_0.png"
              alt="NTC Brasil"
              className="h-12"
            />
          </a>

          <nav className="hidden md:flex space-x-8">
            {navItems.map(item => (
              <a
                key={item.name}
                href={item.href}
                className={`text-lg font-medium transition-colors duration-300 ${
                  scrolled
                    ? 'text-gray-800 hover:text-primary'
                    : 'text-white hover:text-primary'
                }`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-800"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            className="md:hidden bg-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="px-4 pt-2 pb-4 space-y-4">
              {navItems.map(item => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-gray-800 hover:text-primary text-lg font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
