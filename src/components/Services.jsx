import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

export default function Services() {
  const benefits = [
    'Enhanced soil stability',
    'Improved drainage performance',
    'Erosion control',
    'Extended infrastructure lifespan',
    'Cost-effective solution',
    'Easy installation process',
  ];

  return (
    <section id="products" className="section-padding">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">
            Our Premium{' '}
            <span className="gradient-text">Geotextil Solutions</span>
          </h2>
          <p className="text-lg text-gray-600">
            Discover our high-performance geotextile products designed to meet
            the demanding requirements of modern construction projects.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-semibold mb-4">
              Professional Grade Geotextiles
            </h3>
            <p className="text-gray-600 mb-8">
              Geotextiles are versatile materials used to enhance ground
              stability, prevent erosion, and facilitate drainage in
              construction and landscaping projects. Made from durable synthetic
              fibers, they provide excellent filtration and separation,
              extending the lifespan of roads, pathways, and retaining walls.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <CheckCircle className="text-primary w-5 h-5" />
                  <span>{benefit}</span>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#contact"
              className="btn-primary inline-block mt-8"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Request Quote
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/1753832433906_ubjyqj3dsl_geotextil_1.jpg"
              alt="Geotextil Product"
              className="rounded-2xl shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
