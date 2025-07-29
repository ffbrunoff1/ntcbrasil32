import { motion } from 'framer-motion';
import { Shield, Target, Building } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Shield,
      title: 'Superior Quality',
      description:
        'Our geotextiles meet the highest industry standards for durability and performance.',
    },
    {
      icon: Target,
      title: 'Precision Engineering',
      description:
        'Engineered for optimal soil stabilization and erosion control in various applications.',
    },
    {
      icon: Building,
      title: 'Construction Excellence',
      description:
        'Trusted by leading construction companies for reliable ground improvement solutions.',
    },
  ];

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">
            Why Choose <span className="gradient-text">NTC Brasil</span>
          </h2>
          <p className="text-lg text-gray-600">
            With years of expertise in geotextile solutions, we deliver
            innovative products that set new standards in construction and civil
            engineering projects.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
