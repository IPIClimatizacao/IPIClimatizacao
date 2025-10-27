import React from 'react';
import { Snowflake, Facebook, Instagram, Linkedin } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Serviços',
      links: [
        { label: 'Instalação', href: '#services' },
        { label: 'Manutenção', href: '#services' },
        { label: 'Conserto', href: '#services' },
      ],
    },
    {
      title: 'Empresa',
      links: [
        { label: 'Sobre Nós', href: '#about' },
        { label: 'Produtos', href: '#products' },
        { label: 'Orçamento', href: '#budget' },
      ],
    },
    {
      title: 'Contato',
      links: [
        { label: '(21) 97023-2953', href: 'tel:+5521970232953' },
        { label: 'Igor.esteves17@gmail.com', href: 'mailto:Igor.esteves17@gmail.com' },
      ],
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Snowflake className="w-10 h-10 text-accent" strokeWidth={2} />
              <div>
                <h3 className="text-xl font-bold text-gradient">IPI Climatização</h3>
                <p className="text-xs text-muted-foreground">Soluções em Refrigeração</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Especialistas em climatização com mais de 10 anos de experiência no mercado.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-lg bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors group"
                  >
                    <Icon className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold mb-4 text-foreground">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-sm text-muted-foreground hover:text-accent transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {currentYear} IPI Climatização. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6">
              <button className="text-sm text-muted-foreground hover:text-accent transition-colors">
                Política de Privacidade
              </button>
              <button className="text-sm text-muted-foreground hover:text-accent transition-colors">
                Termos de Uso
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};