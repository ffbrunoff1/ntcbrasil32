import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/logo_1753832441687_0.png"
              alt="NTC Brasil"
              className="h-12 mb-4"
            />
            <p className="text-gray-400">
              Leading provider of geotextile solutions for construction and
              civil engineering projects.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <p className="text-gray-400">Padre Lebret 801 G05 Bloco 03</p>
            <p className="text-gray-400">+55 44 99104 0774</p>
            <p className="text-gray-400">ffbrunoff@yahoo.com.br</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400"
        >
          <p>
            &copy; {new Date().getFullYear()} NTC Brasil. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
