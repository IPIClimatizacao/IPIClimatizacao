import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';

export const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefone',
      value: '(11) 99999-9999',
      link: 'tel:+5521970232953',
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'Igor.esteves17@gmail.com',
      link: 'mailto:Igor.esteves17@gmail.com',
    },
    {
      icon: MapPin,
      title: 'Endereço',
      value: 'São Paulo - SP',
      link: '#',
    },
    {
      icon: Clock,
      title: 'Horário',
      value: 'Seg - Sáb: 8h às 18h',
      link: '#',
    },
  ];

  const handleWhatsApp = () => {
    const message = 'Olá! Gostaria de mais informações sobre os serviços da IPI Climatização.';
    const whatsappUrl = `https://wa.me/5521970232953?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-card to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Entre em <span className="text-gradient">Contato</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Estamos prontos para atender você e oferecer as melhores soluções em climatização
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info Cards */}
            <div className="space-y-6">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="hover:shadow-glow transition-all duration-300 hover:scale-105 cursor-pointer group">
                      <CardHeader>
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Icon className="w-6 h-6 text-primary-foreground" />
                          </div>
                          <div>
                            <CardTitle className="text-lg">{item.title}</CardTitle>
                            <CardDescription className="text-base">
                              {item.link !== '#' ? (
                                <a
                                  href={item.link}
                                  className="hover:text-accent transition-colors"
                                >
                                  {item.value}
                                </a>
                              ) : (
                                item.value
                              )}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            {/* WhatsApp CTA Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center"
            >
              <Card className="w-full frost-effect border-2 border-primary/30">
                <CardContent className="p-8 text-center space-y-6">
                  <div className="flex justify-center">
                    <motion.div
                      className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <MessageCircle className="w-12 h-12 text-primary-foreground" />
                    </motion.div>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Atendimento Rápido</h3>
                    <p className="text-muted-foreground">
                      Fale conosco pelo WhatsApp e receba atendimento personalizado em minutos
                    </p>
                  </div>

                  <Button
                    variant="glow"
                    size="lg"
                    onClick={handleWhatsApp}
                    className="w-full"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Abrir WhatsApp
                  </Button>

                  <div className="pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      Resposta em até <span className="text-accent font-semibold">15 minutos</span>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};