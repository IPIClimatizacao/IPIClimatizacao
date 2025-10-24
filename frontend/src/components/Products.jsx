import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Wind, Thermometer, Zap, Star } from 'lucide-react';
import { toast } from 'sonner';

export const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 1,
      name: 'Split 9000 BTUs',
      brand: 'Premium Line',
      price: 'R$ 1.899',
      rating: 4.8,
      features: ['Inverter', 'Filtro antibactéria', 'Controle remoto', 'Modo sleep'],
      power: '9000 BTUs',
      category: 'Residencial',
    },
    {
      id: 2,
      name: 'Split 12000 BTUs',
      brand: 'Premium Line',
      price: 'R$ 2.299',
      rating: 4.9,
      features: ['Inverter', 'Wi-Fi integrado', 'Filtro HEPA', 'Modo turbo'],
      power: '12000 BTUs',
      category: 'Residencial',
    },
    {
      id: 3,
      name: 'Split 18000 BTUs',
      brand: 'Professional',
      price: 'R$ 3.499',
      rating: 4.7,
      features: ['Inverter', 'Wi-Fi integrado', 'Modo econômico', 'Timer 24h'],
      power: '18000 BTUs',
      category: 'Comercial',
    },
    {
      id: 4,
      name: 'Split 24000 BTUs',
      brand: 'Professional',
      price: 'R$ 4.899',
      rating: 4.9,
      features: ['Inverter', 'Filtro antibactéria', 'Controle por app', 'Modo silencioso'],
      power: '24000 BTUs',
      category: 'Comercial',
    },
    {
      id: 5,
      name: 'Cassete 36000 BTUs',
      brand: 'Industrial',
      price: 'R$ 7.999',
      rating: 5.0,
      features: ['Inverter', '4 vias', 'Controle remoto', 'Alta eficiência'],
      power: '36000 BTUs',
      category: 'Industrial',
    },
    {
      id: 6,
      name: 'VRF Multi Split',
      brand: 'Industrial',
      price: 'Sob Consulta',
      rating: 5.0,
      features: ['Sistema modular', 'Controle centralizado', 'Alta eficiência', 'Múltiplas zonas'],
      power: 'Variável',
      category: 'Industrial',
    },
  ];

  const handleWhatsAppContact = (product) => {
    const message = `Olá! Gostaria de mais informações sobre o ${product.name} - ${product.brand}`;
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    toast.success('Redirecionando para o WhatsApp...');
  };

  return (
    <section id="products" className="py-24 bg-gradient-to-b from-card to-background">
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
            Nossos <span className="text-gradient">Produtos</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Equipamentos de alta qualidade das melhores marcas do mercado
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col hover:shadow-glow transition-all duration-300 hover:scale-105 cursor-pointer group">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Wind className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div className="flex items-center space-x-1 bg-accent/20 px-3 py-1 rounded-full">
                      <Star className="w-4 h-4 text-accent fill-accent" />
                      <span className="text-sm font-semibold">{product.rating}</span>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-accent font-medium uppercase">{product.brand}</p>
                    <CardTitle className="text-xl">{product.name}</CardTitle>
                    <CardDescription>{product.category}</CardDescription>
                  </div>
                </CardHeader>
                
                <CardContent className="flex-grow">
                  <div className="flex items-center gap-2 mb-4 text-sm">
                    <Thermometer className="w-4 h-4 text-accent" />
                    <span className="font-semibold">{product.power}</span>
                    <Zap className="w-4 h-4 text-accent ml-2" />
                    <span className="text-muted-foreground">Inverter</span>
                  </div>
                  
                  <ul className="space-y-2">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                
                <CardFooter className="flex flex-col gap-3 mt-auto">
                  <div className="w-full flex items-end justify-between">
                    <div>
                      <p className="text-xs text-muted-foreground">A partir de</p>
                      <p className="text-2xl font-bold text-gradient">{product.price}</p>
                    </div>
                  </div>
                  <Button 
                    variant="glow" 
                    className="w-full"
                    onClick={() => handleWhatsAppContact(product)}
                  >
                    Consultar Preço
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};