import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Calculator, ChevronRight, MessageCircle } from 'lucide-react';
import { toast } from 'sonner';

export const BudgetSimulator = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    serviceType: '',
    roomSize: '',
    quantity: '1',
    name: '',
    phone: '',
  });
  const [estimatedPrice, setEstimatedPrice] = useState(null);

  const serviceTypes = [
    { id: 'installation', label: 'Instalação', basePrice: 500 },
    { id: 'maintenance', label: 'Manutenção', basePrice: 150 },
    { id: 'repair', label: 'Conserto', basePrice: 200 },
  ];

  const roomSizes = [
    { id: 'small', label: 'Até 12m² (9000 BTUs)', multiplier: 1 },
    { id: 'medium', label: '12-20m² (12000 BTUs)', multiplier: 1.3 },
    { id: 'large', label: '20-30m² (18000 BTUs)', multiplier: 1.8 },
    { id: 'xlarge', label: 'Acima de 30m² (24000+ BTUs)', multiplier: 2.5 },
  ];

  const calculateEstimate = () => {
    const service = serviceTypes.find(s => s.id === formData.serviceType);
    const room = roomSizes.find(r => r.id === formData.roomSize);
    
    if (service && room) {
      const basePrice = service.basePrice;
      const sizeMultiplier = room.multiplier;
      const quantity = parseInt(formData.quantity) || 1;
      const total = basePrice * sizeMultiplier * quantity;
      
      setEstimatedPrice(total.toFixed(2));
      setStep(4);
    }
  };

  const handleWhatsApp = () => {
    const service = serviceTypes.find(s => s.id === formData.serviceType);
    const room = roomSizes.find(r => r.id === formData.roomSize);
    
    const message = `Olá! Fiz uma simulação no site e gostaria de um orçamento:

Serviço: ${service?.label}
Tamanho do ambiente: ${room?.label}
Quantidade: ${formData.quantity}
Nome: ${formData.name}
Telefone: ${formData.phone}
Valor estimado: R$ ${estimatedPrice}

Aguardo contato!`;
    
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    toast.success('Redirecionando para o WhatsApp...');
  };

  const resetSimulation = () => {
    setStep(1);
    setFormData({
      serviceType: '',
      roomSize: '',
      quantity: '1',
      name: '',
      phone: '',
    });
    setEstimatedPrice(null);
  };

  return (
    <section id="budget" className="py-24 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Simule seu <span className="text-gradient">Orçamento</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Descubra quanto custa o seu projeto em poucos passos
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <Card className="frost-effect border-2 border-primary/20">
            <CardHeader>
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent mx-auto mb-4">
                <Calculator className="w-8 h-8 text-primary-foreground" />
              </div>
              <CardTitle className="text-2xl text-center">Simulador de Orçamento</CardTitle>
              <CardDescription className="text-center">
                Passo {step} de 4
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Progress Bar */}
              <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary to-accent"
                  initial={{ width: '25%' }}
                  animate={{ width: `${(step / 4) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              <AnimatePresence mode="wait">
                {/* Step 1: Service Type */}
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <h3 className="text-xl font-semibold mb-4">Qual serviço você precisa?</h3>
                    <div className="grid gap-3">
                      {serviceTypes.map((service) => (
                        <button
                          key={service.id}
                          onClick={() => {
                            setFormData({ ...formData, serviceType: service.id });
                            setStep(2);
                          }}
                          className={`p-4 rounded-lg border-2 text-left transition-all ${
                            formData.serviceType === service.id
                              ? 'border-primary bg-primary/10'
                              : 'border-border hover:border-primary/50'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-medium">{service.label}</span>
                            <ChevronRight className="w-5 h-5 text-accent" />
                          </div>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Room Size */}
                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <h3 className="text-xl font-semibold mb-4">Tamanho do ambiente</h3>
                    <div className="grid gap-3">
                      {roomSizes.map((room) => (
                        <button
                          key={room.id}
                          onClick={() => {
                            setFormData({ ...formData, roomSize: room.id });
                            setStep(3);
                          }}
                          className={`p-4 rounded-lg border-2 text-left transition-all ${
                            formData.roomSize === room.id
                              ? 'border-primary bg-primary/10'
                              : 'border-border hover:border-primary/50'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-medium text-sm">{room.label}</span>
                            <ChevronRight className="w-5 h-5 text-accent" />
                          </div>
                        </button>
                      ))}
                    </div>
                    <Button variant="ghost" onClick={() => setStep(1)} className="w-full">
                      Voltar
                    </Button>
                  </motion.div>
                )}

                {/* Step 3: Contact Info */}
                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <h3 className="text-xl font-semibold mb-4">Seus dados</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm text-muted-foreground mb-2 block">
                          Quantidade de aparelhos
                        </label>
                        <Input
                          type="number"
                          min="1"
                          value={formData.quantity}
                          onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                          placeholder="1"
                        />
                      </div>
                      <div>
                        <label className="text-sm text-muted-foreground mb-2 block">Nome</label>
                        <Input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Seu nome"
                        />
                      </div>
                      <div>
                        <label className="text-sm text-muted-foreground mb-2 block">Telefone</label>
                        <Input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="(11) 99999-9999"
                        />
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Button variant="ghost" onClick={() => setStep(2)} className="flex-1">
                        Voltar
                      </Button>
                      <Button
                        variant="glow"
                        onClick={calculateEstimate}
                        className="flex-1"
                        disabled={!formData.name || !formData.phone}
                      >
                        Calcular
                      </Button>
                    </div>
                  </motion.div>
                )}

                {/* Step 4: Result */}
                {step === 4 && estimatedPrice && (
                  <motion.div
                    key="step4"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="space-y-6 text-center"
                  >
                    <div className="py-8">
                      <p className="text-muted-foreground mb-2">Valor estimado</p>
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', duration: 0.5 }}
                        className="text-5xl font-bold text-gradient mb-4"
                      >
                        R$ {estimatedPrice}
                      </motion.div>
                      <p className="text-sm text-muted-foreground">
                        *Valor aproximado. Solicite um orçamento detalhado
                      </p>
                    </div>

                    <div className="space-y-3">
                      <Button
                        variant="glow"
                        size="lg"
                        onClick={handleWhatsApp}
                        className="w-full"
                      >
                        <MessageCircle className="w-5 h-5 mr-2" />
                        Falar no WhatsApp
                      </Button>
                      <Button variant="ghost" onClick={resetSimulation} className="w-full">
                        Nova Simulação
                      </Button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};