import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Wrench, Package, Settings, Shield, Clock, Award } from 'lucide-react';

export const Services = () => {
  const services = [
    {
      icon: Package,
      title: 'Instalação',
      description: 'Instalação profissional de sistemas de ar condicionado com garantia e qualidade.',
      features: ['Projeto técnico', 'Instalação rápida', 'Garantia estendida'],
    },
    {
      icon: Wrench,
      title: 'Manutenção',
      description: 'Manutenção preventiva e corretiva para máxima eficiência do seu equipamento.',
      features: ['Limpeza completa', 'Check-up técnico', 'Troca de filtros'],
    },
    {
      icon: Settings,
      title: 'Conserto',
      description: 'Diagnóstico preciso e reparo especializado para todos os tipos de equipamentos.',
      features: ['Diagnóstico grátis', 'Peças originais', 'Atendimento rápido'],
    },
  ];

  const differentials = [
    { icon: Shield, title: 'Garantia Total', description: 'Garantia em todos os serviços' },
    { icon: Clock, title: 'Atendimento 24/7', description: 'Suporte sempre disponível' },
    { icon: Award, title: 'Certificação', description: 'Técnicos certificados' },
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-background to-card">
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
            Nossos <span className="text-gradient">Serviços</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Soluções completas em climatização com equipe especializada e equipamentos de última geração
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-glow transition-all duration-300 hover:scale-105 cursor-pointer group">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Differentials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid sm:grid-cols-3 gap-6 mt-12"
        >
          {differentials.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="frost-effect p-6 rounded-xl text-center hover:bg-card/80 transition-all"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/20 mb-4">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};