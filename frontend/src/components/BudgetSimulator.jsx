import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Calculator, MessageCircle } from 'lucide-react';
import { toast } from 'sonner';

export const BudgetSimulator = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    serviceType: '',
    environmentType: '',
    roomSize: '',
    quantity: '1',
    hasInfrastructure: '',
    urgency: '',
    brand: '',
    name: '',
    phone: '',
    address: '',
  });
  const [estimatedPrice, setEstimatedPrice] = useState(null);

  const serviceTypes = [
    { id: 'installation', label: 'Instalação Completa', basePrice: 500, icon: '🔧' },
    { id: 'maintenance', label: 'Manutenção Preventiva', basePrice: 150, icon: '⚙️' },
    { id: 'repair', label: 'Conserto/Reparo', basePrice: 200, icon: '🛠️' },
    { id: 'cleaning', label: 'Limpeza Técnica', basePrice: 120, icon: '✨' },
  ];

  const calculateEstimate = () => {
    // Cálculo simples baseado em alguns fatores
    const basePrice = 500;
    const quantity = parseInt(formData.quantity) || 1;
    const total = basePrice * quantity * 1.5; // Multiplicador base
    
    setEstimatedPrice(total.toFixed(2));
    setStep(3);
  };

  const handleWhatsApp = () => {
    const service = serviceTypes.find(s => s.id === formData.serviceType);
    
    const message = `╔══════════════════════════╗
║   SOLICITAÇÃO DE ORÇAMENTO   ║
╚══════════════════════════╝

📋 *DETALHES DO SERVIÇO*
━━━━━━━━━━━━━━━━━━━━━━━━
▸ Serviço: *${service?.label || 'Não especificado'}*
▸ Tipo de Ambiente: *${formData.environmentType || 'Não especificado'}*
▸ Tamanho/BTUs: *${formData.roomSize || 'Não especificado'}*
▸ Quantidade: *${formData.quantity} unidade(s)*

🔧 *INFRAESTRUTURA*
━━━━━━━━━━━━━━━━━━━━━━━━
▸ ${formData.hasInfrastructure || 'Não especificado'}

⚡ *URGÊNCIA*
━━━━━━━━━━━━━━━━━━━━━━━━
▸ ${formData.urgency || 'Não especificado'}

🏷️ *PREFERÊNCIA DE MARCA*
━━━━━━━━━━━━━━━━━━━━━━━━
▸ ${formData.brand || 'Não especificado'}

👤 *DADOS DO CLIENTE*
━━━━━━━━━━━━━━━━━━━━━━━━
▸ Nome: *${formData.name}*
▸ Telefone: *${formData.phone}*
▸ Endereço: *${formData.address}*

💰 *VALOR ESTIMADO*
━━━━━━━━━━━━━━━━━━━━━━━━
▸ *R$ ${estimatedPrice}*
   (Valor aproximado)

━━━━━━━━━━━━━━━━━━━━━━━━
✅ Aguardo retorno para confirmar o orçamento detalhado!

_Simulação feita pelo site IPI Climatização_`;
    
    const whatsappUrl = `https://wa.me/5521970232953?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    toast.success('Redirecionando para o WhatsApp...');
  };

  const resetSimulation = () => {
    setStep(1);
    setFormData({
      serviceType: '',
      environmentType: '',
      roomSize: '',
      quantity: '1',
      hasInfrastructure: '',
      urgency: '',
      brand: '',
      name: '',
      phone: '',
      address: '',
    });
    setEstimatedPrice(null);
  };

  const totalSteps = 3;

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
                Passo {step} de {totalSteps}
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Progress Bar */}
              <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary to-accent"
                  initial={{ width: '33%' }}
                  animate={{ width: `${(step / totalSteps) * 100}%` }}
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
                          className="p-4 rounded-lg border-2 text-left transition-all hover:scale-[1.02] border-border hover:border-primary/50"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <span className="text-2xl">{service.icon}</span>
                              <span className="font-medium">{service.label}</span>
                            </div>
                            <span className="text-accent">→</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Details Form */}
                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <h3 className="text-xl font-semibold mb-4">Detalhes do serviço</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm text-muted-foreground mb-2 block">
                          Tipo de ambiente
                        </label>
                        <Input
                          type="text"
                          value={formData.environmentType}
                          onChange={(e) => setFormData({ ...formData, environmentType: e.target.value })}
                          placeholder="Ex: Residencial, Comercial, Industrial"
                        />
                      </div>
                      
                      <div>
                        <label className="text-sm text-muted-foreground mb-2 block">
                          Tamanho do ambiente / BTUs necessário
                        </label>
                        <Input
                          type="text"
                          value={formData.roomSize}
                          onChange={(e) => setFormData({ ...formData, roomSize: e.target.value })}
                          placeholder="Ex: 20m² ou 12000 BTUs"
                        />
                      </div>
                      
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
                        <label className="text-sm text-muted-foreground mb-2 block">
                          Já possui infraestrutura/tubulação?
                        </label>
                        <Input
                          type="text"
                          value={formData.hasInfrastructure}
                          onChange={(e) => setFormData({ ...formData, hasInfrastructure: e.target.value })}
                          placeholder="Ex: Sim, Não, Parcial"
                        />
                      </div>
                      
                      <div>
                        <label className="text-sm text-muted-foreground mb-2 block">
                          Urgência do serviço
                        </label>
                        <Input
                          type="text"
                          value={formData.urgency}
                          onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
                          placeholder="Ex: Normal, Urgente, Emergencial"
                        />
                      </div>
                      
                      <div>
                        <label className="text-sm text-muted-foreground mb-2 block">
                          Preferência de marca (opcional)
                        </label>
                        <Input
                          type="text"
                          value={formData.brand}
                          onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                          placeholder="Ex: LG, Samsung, Daikin"
                        />
                      </div>
                      
                      <div>
                        <label className="text-sm text-muted-foreground mb-2 block">
                          Seu nome completo
                        </label>
                        <Input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Seu nome completo"
                        />
                      </div>
                      
                      <div>
                        <label className="text-sm text-muted-foreground mb-2 block">
                          Telefone
                        </label>
                        <Input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="(11) 99999-9999"
                        />
                      </div>
                      
                      <div>
                        <label className="text-sm text-muted-foreground mb-2 block">
                          Endereço completo
                        </label>
                        <Input
                          type="text"
                          value={formData.address}
                          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                          placeholder="Rua, número, bairro, cidade"
                        />
                      </div>
                    </div>
                    
                    <div className="flex gap-3 pt-4">
                      <Button variant="ghost" onClick={() => setStep(1)} className="flex-1">
                        Voltar
                      </Button>
                      <Button
                        variant="glow"
                        onClick={calculateEstimate}
                        className="flex-1"
                        disabled={!formData.name || !formData.phone || !formData.address}
                      >
                        Calcular Orçamento
                      </Button>
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Result */}
                {step === 3 && estimatedPrice && (
                  <motion.div
                    key="step3"
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
                        Enviar para WhatsApp
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
