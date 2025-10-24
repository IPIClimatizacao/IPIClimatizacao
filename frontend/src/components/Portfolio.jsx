import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const portfolioItems = [
    {
      id: 1,
      title: 'Instalação Residencial',
      description: 'Split 12000 BTUs - São Paulo',
      image: 'https://images.unsplash.com/photo-1631548564797-eb69ae69a176?w=800&q=80',
      category: 'residencial',
    },
    {
      id: 2,
      title: 'Projeto Comercial',
      description: 'Sistema Multi Split - Escritório',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
      category: 'comercial',
    },
    {
      id: 3,
      title: 'Instalação Industrial',
      description: 'Sistema VRF - Fábrica',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80',
      category: 'industrial',
    },
    {
      id: 4,
      title: 'Manutenção Preventiva',
      description: 'Limpeza e Revisão Completa',
      image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&q=80',
      category: 'manutencao',
    },
    {
      id: 5,
      title: 'Residencial Premium',
      description: 'Múltiplas Unidades - Casa',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80',
      category: 'residencial',
    },
    {
      id: 6,
      title: 'Loja Comercial',
      description: 'Climatização Completa',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
      category: 'comercial',
    },
    {
      id: 7,
      title: 'Restaurante',
      description: 'Sistema de Refrigeração',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
      category: 'comercial',
    },
    {
      id: 8,
      title: 'Consultório Médico',
      description: 'Ar Purificado HEPA',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80',
      category: 'comercial',
    },
  ];

  return (
    <section id="portfolio" className="py-24 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Nossos <span className="text-gradient">Trabalhos</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Confira alguns dos projetos que realizamos com excelência e dedicação
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="relative group cursor-pointer overflow-hidden rounded-xl"
              onClick={() => setSelectedImage(item)}
            >
              <div className="aspect-square overflow-hidden bg-muted">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>

              {/* Category Badge */}
              <div className="absolute top-3 right-3 px-3 py-1 bg-accent/90 backdrop-blur-sm rounded-full">
                <span className="text-xs font-medium text-background capitalize">{item.category}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Image Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/95 backdrop-blur-lg"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: 'spring', duration: 0.5 }}
                className="relative max-w-4xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-card hover:bg-muted flex items-center justify-center transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
                
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    className="w-full h-auto"
                  />
                </div>
                
                <div className="mt-6 text-center">
                  <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
                  <p className="text-muted-foreground">{selectedImage.description}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};