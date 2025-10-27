// Products Data
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
        image: 'https://images.unsplash.com/photo-1631545806609-7e7992cc7d4c?w=800&q=80'
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
        image: 'https://images.unsplash.com/photo-1604077350853-8d5e6b61c25d?w=800&q=80'
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
        image: 'https://images.unsplash.com/photo-1585412727339-b4d7c6d77ec8?w=800&q=80'
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
        image: 'https://images.unsplash.com/photo-1613798957828-8e217f83db0d?w=800&q=80'
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
        image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80'
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
        image: 'https://images.unsplash.com/photo-1635274831853-56b3b0bb5a09?w=800&q=80'
    }
];

// Portfolio Data
const portfolioItems = [
    {
        id: 1,
        title: 'Instalação Residencial',
        description: 'Split 12000 BTUs - São Paulo',
        image: 'https://images.unsplash.com/photo-1631548564797-eb69ae69a176?w=800&q=80',
        category: 'residencial'
    },
    {
        id: 2,
        title: 'Projeto Comercial',
        description: 'Sistema Multi Split - Escritório',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
        category: 'comercial'
    },
    {
        id: 3,
        title: 'Instalação Industrial',
        description: 'Sistema VRF - Fábrica',
        image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80',
        category: 'industrial'
    },
    {
        id: 4,
        title: 'Manutenção Preventiva',
        description: 'Limpeza e Revisão Completa',
        image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&q=80',
        category: 'manutencao'
    },
    {
        id: 5,
        title: 'Residencial Premium',
        description: 'Múltiplas Unidades - Casa',
        image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80',
        category: 'residencial'
    },
    {
        id: 6,
        title: 'Loja Comercial',
        description: 'Climatização Completa',
        image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
        category: 'comercial'
    },
    {
        id: 7,
        title: 'Restaurante',
        description: 'Sistema de Refrigeração',
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
        category: 'comercial'
    },
    {
        id: 8,
        title: 'Consultório Médico',
        description: 'Ar Purificado HEPA',
        image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80',
        category: 'comercial'
    }
];

// Budget Form Data
let budgetData = {
    serviceType: '',
    serviceLabel: '',
    environmentType: '',
    roomSize: '',
    quantity: '1',
    infrastructure: '',
    urgency: '',
    brand: '',
    name: '',
    phone: '',
    address: ''
};

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    renderProducts();
    renderPortfolio();
    setupNavbar();
});

// Navbar Scroll Effect
function setupNavbar() {
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Smooth Scroll to Section
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        // Close mobile menu if open
        const navLinks = document.getElementById('navLinks');
        if (navLinks.classList.contains('active')) {
            toggleMobileMenu();
        }
    }
}

// Mobile Menu Toggle
function toggleMobileMenu() {
    const navLinks = document.getElementById('navLinks');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    navLinks.classList.toggle('active');
    mobileMenuBtn.classList.toggle('active');
}

// Render Products
function renderProducts() {
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = products.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}" class="product-image" onerror="this.src='https://via.placeholder.com/400x200?text=${product.name}'">
            <div class="product-content">
                <div class="product-brand">${product.brand}</div>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-category">${product.category}</div>
                <ul class="product-features">
                    ${product.features.map(f => `<li>${f}</li>`).join('')}
                </ul>
                <div class="product-price">${product.price}</div>
                <button class="btn btn-glow" style="width: 100%;" onclick="contactProduct('${product.name}', '${product.brand}')">
                    Consultar Preço
                </button>
            </div>
        </div>
    `).join('');
}

// Render Portfolio
function renderPortfolio() {
    const grid = document.getElementById('portfolioGrid');
    grid.innerHTML = portfolioItems.map(item => `
        <div class="portfolio-item" onclick="openPortfolioModal('${item.title}', '${item.description}', '${item.image}')">
            <img src="${item.image}" alt="${item.title}" class="portfolio-image" onerror="this.src='https://via.placeholder.com/400?text=${item.title}'">
            <div class="portfolio-badge">${item.category}</div>
            <div class="portfolio-overlay">
                <div>
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                </div>
            </div>
        </div>
    `).join('');
}

// Contact Product via WhatsApp
function contactProduct(name, brand) {
    const message = `Olá! Gostaria de mais informações sobre o ${name} - ${brand}`;
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// Budget Simulator Functions
function selectService(serviceId, serviceLabel) {
    budgetData.serviceType = serviceId;
    budgetData.serviceLabel = serviceLabel;
    goToStep(2);
}

function goToStep(stepNumber) {
    // Hide all steps
    document.querySelectorAll('.step').forEach(step => {
        step.classList.remove('active');
    });
    
    // Show selected step
    document.getElementById(`step${stepNumber}`).classList.add('active');
    
    // Update progress
    document.getElementById('currentStep').textContent = stepNumber;
    const progress = (stepNumber / 3) * 100;
    document.getElementById('progressBar').style.width = `${progress}%`;
}

function calculateBudget() {
    // Get form data
    budgetData.environmentType = document.getElementById('environmentType').value;
    budgetData.roomSize = document.getElementById('roomSize').value;
    budgetData.quantity = document.getElementById('quantity').value;
    budgetData.infrastructure = document.getElementById('infrastructure').value;
    budgetData.urgency = document.getElementById('urgency').value;
    budgetData.brand = document.getElementById('brand').value;
    budgetData.name = document.getElementById('name').value;
    budgetData.phone = document.getElementById('phone').value;
    budgetData.address = document.getElementById('address').value;
    
    // Validate required fields
    if (!budgetData.name || !budgetData.phone || !budgetData.address) {
        alert('Por favor, preencha seu nome, telefone e endereço');
        return;
    }
    
    // Calculate estimate
    const basePrice = 500;
    const quantity = parseInt(budgetData.quantity) || 1;
    const total = (basePrice * quantity * 1.5).toFixed(2);
    
    // Show result
    document.getElementById('estimatedPrice').textContent = `R$ ${total}`;
    goToStep(3);
}

function sendWhatsApp() {
    const price = document.getElementById('estimatedPrice').textContent;
    
    const message = `╔══════════════════════════╗
║   SOLICITAÇÃO DE ORÇAMENTO   ║
╚══════════════════════════╝

📋 *DETALHES DO SERVIÇO*
━━━━━━━━━━━━━━━━━━━━━━━━
▸ Serviço: *${budgetData.serviceLabel || 'Não especificado'}*
▸ Tipo de Ambiente: *${budgetData.environmentType || 'Não especificado'}*
▸ Tamanho/BTUs: *${budgetData.roomSize || 'Não especificado'}*
▸ Quantidade: *${budgetData.quantity} unidade(s)*

🔧 *INFRAESTRUTURA*
━━━━━━━━━━━━━━━━━━━━━━━━
▸ ${budgetData.infrastructure || 'Não especificado'}

⚡ *URGÊNCIA*
━━━━━━━━━━━━━━━━━━━━━━━━
▸ ${budgetData.urgency || 'Não especificado'}

🏷️ *PREFERÊNCIA DE MARCA*
━━━━━━━━━━━━━━━━━━━━━━━━
▸ ${budgetData.brand || 'Não especificado'}

👤 *DADOS DO CLIENTE*
━━━━━━━━━━━━━━━━━━━━━━━━
▸ Nome: *${budgetData.name}*
▸ Telefone: *${budgetData.phone}*
▸ Endereço: *${budgetData.address}*

💰 *VALOR ESTIMADO*
━━━━━━━━━━━━━━━━━━━━━━━━
▸ *${price}*
   (Valor aproximado)

━━━━━━━━━━━━━━━━━━━━━━━━
✅ Aguardo retorno para confirmar o orçamento detalhado!

_Simulação feita pelo site IPI Climatização_`;

    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

function resetBudget() {
    // Clear form data
    budgetData = {
        serviceType: '',
        serviceLabel: '',
        environmentType: '',
        roomSize: '',
        quantity: '1',
        infrastructure: '',
        urgency: '',
        brand: '',
        name: '',
        phone: '',
        address: ''
    };
    
    // Clear inputs
    document.getElementById('environmentType').value = '';
    document.getElementById('roomSize').value = '';
    document.getElementById('quantity').value = '1';
    document.getElementById('infrastructure').value = '';
    document.getElementById('urgency').value = '';
    document.getElementById('brand').value = '';
    document.getElementById('name').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('address').value = '';
    
    // Go back to step 1
    goToStep(1);
}

// Open WhatsApp from Contact
function openWhatsApp() {
    const message = 'Olá! Gostaria de mais informações sobre os serviços da IPI Climatização.';
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// Portfolio Modal
function openPortfolioModal(title, description, image) {
    const modal = document.getElementById('portfolioModal');
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalDescription').textContent = description;
    document.getElementById('modalImage').src = image;
    modal.classList.add('active');
}

function closeModal() {
    const modal = document.getElementById('portfolioModal');
    modal.classList.remove('active');
}

// Close modal on outside click
document.addEventListener('click', (e) => {
    const modal = document.getElementById('portfolioModal');
    if (e.target === modal) {
        closeModal();
    }
});

// Close modal on ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});
