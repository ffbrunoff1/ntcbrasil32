import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary/10 to-accent/10 flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Strengthening Foundations,
              <span className="gradient-text"> Building the Future</span>
              <br />
              with Geotextil!
            </h1>

            <p className="text-xl text-gray-600">
              Discover innovative geotextile solutions that enhance ground
              stability, prevent erosion, and revolutionize your construction
              projects.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#contact"
                className="btn-primary flex items-center gap-2 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.a
                href="#products"
                className="btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/1753832433906_ubjyqj3dsl_geotextil_1.jpg"
                alt="Geotextil Application"
                className="w-full h-auto rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
