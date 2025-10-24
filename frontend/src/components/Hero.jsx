import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { RotatingIcon } from './RotatingIcon';
import { Thermometer, Wind, Wrench } from 'lucide-react';

export const Hero = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-accent/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-foreground">Conforto Térmico</span>
                <br />
                <span className="text-gradient">Premium</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl"
            >
              Especialistas em instalação, manutenção e venda de sistemas de climatização. 
              Soluções completas para seu conforto com tecnologia de ponta.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button size="xl" variant="glow" onClick={() => scrollToSection('#budget')}>
                Simular Orçamento
              </Button>
              <Button size="xl" variant="frost" onClick={() => scrollToSection('#services')}>
                Nossos Serviços
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="grid grid-cols-3 gap-6 pt-8"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient">500+</div>
                <div className="text-sm text-muted-foreground">Clientes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient">10+</div>
                <div className="text-sm text-muted-foreground">Anos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient">24/7</div>
                <div className="text-sm text-muted-foreground">Suporte</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Animated Icon */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center relative"
          >
            <div className="relative">
              <RotatingIcon size={300} />
              
              {/* Floating badges */}
              <motion.div
                className="absolute -left-12 top-1/4 frost-effect p-4 rounded-xl"
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Thermometer className="w-8 h-8 text-accent" />
              </motion.div>
              
              <motion.div
                className="absolute -right-12 top-1/3 frost-effect p-4 rounded-xl"
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              >
                <Wind className="w-8 h-8 text-secondary" />
              </motion.div>
              
              <motion.div
                className="absolute left-1/4 -bottom-8 frost-effect p-4 rounded-xl"
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
              >
                <Wrench className="w-8 h-8 text-primary" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-32">
        <svg
          className="absolute bottom-0 w-full h-full"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0,50 C240,80 480,20 720,50 C960,80 1200,20 1440,50 L1440,100 L0,100 Z"
            fill="hsl(var(--card))"
            opacity="0.3"
          />
        </svg>
      </div>
    </section>
  );
};