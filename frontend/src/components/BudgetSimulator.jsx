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

  const environmentTypes = [
    { id: 'residential', label: 'Residencial', multiplier: 1, icon: '🏠' },
    { id: 'commercial', label: 'Comercial', multiplier: 1.3, icon: '🏢' },
    { id: 'industrial', label: 'Industrial', multiplier: 1.8, icon: '🏭' },
  ];

  const roomSizes = [
    { id: 'small', label: 'Até 12m² (9000 BTUs)', multiplier: 1 },
    { id: 'medium', label: '12-20m² (12000 BTUs)', multiplier: 1.3 },
    { id: 'large', label: '20-30m² (18000 BTUs)', multiplier: 1.8 },
    { id: 'xlarge', label: '30-45m² (24000 BTUs)', multiplier: 2.3 },
    { id: 'xxlarge', label: 'Acima de 45m² (30000+ BTUs)', multiplier: 3 },
  ];

  const infrastructureOptions = [
    { id: 'yes', label: 'Sim, já tenho tubulação', discount: 0 },
    { id: 'partial', label: 'Parcial, precisa adequação', discount: -0.15 },
    { id: 'no', label: 'Não, precisa instalar tudo', discount: -0.3 },
  ];

  const urgencyOptions = [
    { id: 'normal', label: 'Normal (7-15 dias)', multiplier: 1 },
    { id: 'fast', label: 'Rápido (3-7 dias)', multiplier: 1.2 },
    { id: 'urgent', label: 'Urgente (24-48h)', multiplier: 1.5 },
  ];

  const brandOptions = [
    { id: 'any', label: 'Sem preferência' },
    { id: 'premium', label: 'Marcas Premium (LG, Samsung, Daikin)' },
    { id: 'midrange', label: 'Custo-benefício (Midea, Electrolux)' },
    { id: 'economic', label: 'Econômico (Springer, Philco)' },
  ];

  const calculateEstimate = () => {
    const service = serviceTypes.find(s => s.id === formData.serviceType);
    const environment = environmentTypes.find(e => e.id === formData.environmentType);
    const room = roomSizes.find(r => r.id === formData.roomSize);
    const infrastructure = infrastructureOptions.find(i => i.id === formData.hasInfrastructure);
    const urgency = urgencyOptions.find(u => u.id === formData.urgency);
    
    if (service && environment && room && infrastructure && urgency) {
      const basePrice = service.basePrice;
      const envMultiplier = environment.multiplier;
      const sizeMultiplier = room.multiplier;
      const infraAdjustment = 1 + infrastructure.discount;
      const urgencyMultiplier = urgency.multiplier;
      const quantity = parseInt(formData.quantity) || 1;
      
      const total = basePrice * envMultiplier * sizeMultiplier * infraAdjustment * urgencyMultiplier * quantity;
      
      setEstimatedPrice(total.toFixed(2));
      setStep(8);
    }
  };

  const handleWhatsApp = () => {
    const service = serviceTypes.find(s => s.id === formData.serviceType);
    const environment = environmentTypes.find(e => e.id === formData.environmentType);
    const room = roomSizes.find(r => r.id === formData.roomSize);
    const infrastructure = infrastructureOptions.find(i => i.id === formData.hasInfrastructure);
    const urgency = urgencyOptions.find(u => u.id === formData.urgency);
    const brand = brandOptions.find(b => b.id === formData.brand);
    
    const message = `╔════════════════════════════╗
║   SOLICITAÇÃO DE ORÇAMENTO   ║
╚════════════════════════════╝

📋 *DETALHES DO SERVIÇO*
━━━━━━━━━━━━━━━━━━━━━━━━
▸ Serviço: *${service?.label}*
▸ Tipo: *${environment?.label}*
▸ Ambiente: *${room?.label}*
▸ Quantidade: *${formData.quantity} unidade(s)*

🔧 *INFRAESTRUTURA*
━━━━━━━━━━━━━━━━━━━━━━━━
▸ ${infrastructure?.label}

⚡ *URGÊNCIA*
━━━━━━━━━━━━━━━━━━━━━━━━
▸ ${urgency?.label}

🏷️ *PREFERÊNCIA DE MARCA*
━━━━━━━━━━━━━━━━━━━━━━━━
▸ ${brand?.label}

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
    
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
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

  const totalSteps = 8;

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
                  initial={{ width: '12.5%' }}
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
                            <ChevronRight className="w-5 h-5 text-accent" />
                          </div>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Environment Type */}
                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <h3 className="text-xl font-semibold mb-4">Tipo de ambiente</h3>
                    <div className="grid gap-3">
                      {environmentTypes.map((env) => (
                        <button
                          key={env.id}
                          onClick={() => {
                            setFormData({ ...formData, environmentType: env.id });
                            setStep(3);
                          }}
                          className="p-4 rounded-lg border-2 text-left transition-all hover:scale-[1.02] border-border hover:border-primary/50"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <span className="text-2xl">{env.icon}</span>
                              <span className="font-medium">{env.label}</span>
                            </div>
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

                {/* Step 3: Room Size */}
                {step === 3 && (
                  <motion.div
                    key="step3"
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
                            setStep(4);
                          }}
                          className="p-4 rounded-lg border-2 text-left transition-all hover:scale-[1.02] border-border hover:border-primary/50"
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-medium text-sm">{room.label}</span>
                            <ChevronRight className="w-5 h-5 text-accent" />
                          </div>
                        </button>
                      ))}
                    </div>
                    <Button variant="ghost" onClick={() => setStep(2)} className="w-full">
                      Voltar
                    </Button>
                  </motion.div>
                )}

                {/* Step 4: Infrastructure */}
                {step === 4 && (
                  <motion.div
                    key="step4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <h3 className="text-xl font-semibold mb-4">Já possui infraestrutura?</h3>
                    <div className="grid gap-3">
                      {infrastructureOptions.map((infra) => (
                        <button
                          key={infra.id}
                          onClick={() => {
                            setFormData({ ...formData, hasInfrastructure: infra.id });
                            setStep(5);
                          }}
                          className="p-4 rounded-lg border-2 text-left transition-all hover:scale-[1.02] border-border hover:border-primary/50"
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-medium text-sm">{infra.label}</span>
                            <ChevronRight className="w-5 h-5 text-accent" />
                          </div>
                        </button>
                      ))}
                    </div>
                    <Button variant="ghost" onClick={() => setStep(3)} className="w-full">
                      Voltar
                    </Button>
                  </motion.div>
                )}

                {/* Step 5: Urgency */}
                {step === 5 && (
                  <motion.div
                    key="step5"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <h3 className="text-xl font-semibold mb-4">Qual a urgência?</h3>
                    <div className="grid gap-3">
                      {urgencyOptions.map((urg) => (
                        <button
                          key={urg.id}
                          onClick={() => {
                            setFormData({ ...formData, urgency: urg.id });
                            setStep(6);
                          }}
                          className="p-4 rounded-lg border-2 text-left transition-all hover:scale-[1.02] border-border hover:border-primary/50"
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-medium text-sm">{urg.label}</span>
                            <ChevronRight className="w-5 h-5 text-accent" />
                          </div>
                        </button>
                      ))}
                    </div>
                    <Button variant="ghost" onClick={() => setStep(4)} className="w-full">
                      Voltar
                    </Button>
                  </motion.div>
                )}

                {/* Step 6: Brand */}
                {step === 6 && (
                  <motion.div
                    key="step6"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <h3 className="text-xl font-semibold mb-4">Preferência de marca</h3>
                    <div className="grid gap-3">
                      {brandOptions.map((brand) => (
                        <button
                          key={brand.id}
                          onClick={() => {
                            setFormData({ ...formData, brand: brand.id });
                            setStep(7);
                          }}
                          className="p-4 rounded-lg border-2 text-left transition-all hover:scale-[1.02] border-border hover:border-primary/50"
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-medium text-sm">{brand.label}</span>
                            <ChevronRight className="w-5 h-5 text-accent" />
                          </div>
                        </button>
                      ))}
                    </div>
                    <Button variant="ghost" onClick={() => setStep(5)} className="w-full">
                      Voltar
                    </Button>
                  </motion.div>
                )}

                {/* Step 7: Contact Info */}
                {step === 7 && (
                  <motion.div
                    key="step7"
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
                        <label className="text-sm text-muted-foreground mb-2 block">Nome completo</label>
                        <Input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Seu nome completo"
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
                      <div>
                        <label className="text-sm text-muted-foreground mb-2 block">Endereço</label>
                        <Input
                          type="text"
                          value={formData.address}
                          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                          placeholder="Rua, número, bairro, cidade"
                        />
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Button variant="ghost" onClick={() => setStep(6)} className="flex-1">
                        Voltar
                      </Button>
                      <Button
                        variant="glow"
                        onClick={calculateEstimate}
                        className="flex-1"
                        disabled={!formData.name || !formData.phone || !formData.address}
                      >
                        Calcular
                      </Button>
                    </div>
                  </motion.div>
                )}

                {/* Step 8: Result */}
                {step === 8 && estimatedPrice && (
                  <motion.div
                    key="step8"
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