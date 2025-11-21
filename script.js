// Products Data
const products = [
    {
        id: 1,
        name: 'Ar-Condicionado Split HW Inverter Midea Xtreme Save Al Connect',
        brand: 'Premium Line',
        price: 'Sob Consulta',
        rating: 4.8,
        features: ['Inverter', 'Wi-Fi integrado (Al Connect)', 'Modo econômico', 'Filtro antibactéria'],
        power: '9000 BTUs',
        category: 'Residencial',
        image: 'Imagens Clim/ar1.jpg'
    },
    {
        id: 2,
        name: 'Ar-Condicionado LG AF DUAL Inverter Voice ARTCOOL UV Nano',
        brand: 'Premium Line',
        price: 'Saber Mais',
        rating: 4.9,
        features: ['Inverter', 'Voice Control (Google Assistant / Alexa)', 'Tecnologia ARTCOOL UV Nano', 'Wi-Fi integrado'],
        power: '12000 BTUs',
        category: 'Residencial',
        image: 'Imagens Clim/ar2.jpg'
    },
    {
        id: 3,
        name: 'Ar-Condicionado Split Cassete Inverter Vias Midea Connect',
        brand: 'Professional',
        price: 'Sob Consulta',
        rating: 4.7,
        features: ['Inverter', 'Wi-Fi integrado', 'Modo econômico', 'Timer 24h'],
        power: '18000 BTUs',
        category: 'Comercial',
        image: 'Imagens Clim/ar3.jpg'
    },
    {
        id: 4,
        name: 'Ar-Condicionado LG AI DUAL',
        brand: 'Professional',
        price: 'Sob Consulta',
        rating: 4.9,
        features: ['Inverter', 'Filtro antibactéria', 'Controle por app', 'Modo silencioso'],
        power: '24000 BTUs',
        category: 'Comercial',
        image: 'Imagens Clim/ar4.jpg'
    },
    {
        id: 5,
        name: 'Ar-Condicionado Splitão Carrier Ecosplit 25 TR So Frio 380V Trifásico',
        brand: 'Industrial',
        price: 'Sob Consulta',
        rating: 5.0,
        features: ['Inverter', '4 vias', 'Controle remoto', 'Alta eficiência'],
        power: '36000 BTUs',
        category: 'Industrial',
        image: 'Imagens Clim/ar5.jpg'
    },
    {
        id: 6,
        name: 'Ar Condicionado Split HW G-Top Auto',
        brand: 'Industrial',
        price: 'Sob Consulta',
        rating: 5.0,
        features: ['Sistema modular', 'Controle centralizado', 'Alta eficiência', 'Múltiplas zonas'],
        power: 'Variável',
        category: 'Industrial',
        image: 'Imagens Clim/ar6.jpg'
    }
];

// Portfolio Data
const portfolioItems = [
    {
        id: 1,
        title: 'Instalação Residencial',
        description: 'Split 12000 BTUs - São Paulo',
        image: 'Imagens Clim/imagem1.jpg',
        category: 'residencial'
    },
    {
        id: 2,
        title: 'Projeto Comercial',
        description: 'Sistema Multi Split - Escritório',
        image: 'Imagens Clim/imagem2.jpg',
        category: 'comercial'
    },
    {
        id: 3,
        title: 'Instalação Industrial',
        description: 'Sistema VRF - Fábrica',
        image: 'Imagens Clim/imagem3.jpg',
        category: 'industrial'
    },
    {
        id: 4,
        title: 'Manutenção Preventiva',
        description: 'Limpeza e Revisão Completa',
        image: 'Imagens Clim/imagem4.jpg',
        category: 'manutencao'
    },
    {
        id: 5,
        title: 'Residencial Premium',
        description: 'Múltiplas Unidades - Casa',
        image: 'Imagens Clim/imagem5.jpg',
        category: 'residencial'
    },
    {
        id: 6,
        title: 'Loja Comercial',
        description: 'Climatização Completa',
        image: 'Imagens Clim/imagem6.jpg',
        category: 'comercial'
    },
    {
        id: 7,
        title: 'Restaurante',
        description: 'Sistema de Refrigeração',
        image: 'Imagens Clim/imagem7.jpg',
        category: 'comercial'
    },
    {
        id: 8,
        title: 'Consultório Médico',
        description: 'Ar Purificado HEPA',
        image: 'Imagens Clim/imagem8.jpg',
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

// Hide preloader after 2 seconds
setTimeout(() => {
    const pre = document.getElementById('preloader');
    if (!pre) return;
    pre.classList.add('hide');
    pre.setAttribute('aria-hidden', 'true');
    // Remove from DOM after transition
    setTimeout(() => {
        if (pre && pre.parentNode) pre.parentNode.removeChild(pre);
    }, 500);
    // Iniciar contadores após o preloader
    setupCounterAnimation();
}, 2000);

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

// Counter Animation
function setupCounterAnimation() {
    const counters = document.querySelectorAll('.stat-number');

    const animateCounter = (counter) => {
        const target = parseInt(counter.getAttribute('data-target'));
        const suffix = counter.getAttribute('data-suffix') || '';
        if (isNaN(target)) return;
        const duration = 1500; // 1.5s mais rápido
        const start = performance.now();
        const startVal = 0;

        const updateCounter = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
            const value = Math.floor(startVal + (target - startVal) * eased);
            counter.textContent = value + suffix;
            if (progress < 1) requestAnimationFrame(updateCounter);
        };

        requestAnimationFrame(updateCounter);
    };

    // Resetar valores para zero antes de animar
    counters.forEach(counter => {
        const suffix = counter.getAttribute('data-suffix') || '';
        counter.textContent = (suffix === '/7') ? '0/7' : '0' + suffix;
    });
    // Iniciar animação
    counters.forEach(counter => animateCounter(counter));
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

// Scroll to Top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Toggle FAB Menu
function toggleFabMenu() {
    const fabContainer = document.querySelector('.floating-buttons');
    const fabMain = document.querySelector('.fab-main');
    fabContainer.classList.toggle('active');
    fabMain.classList.toggle('active');
}

// Toggle Theme (Dark/Light Mode)
function toggleTheme() {
    const body = document.body;
    const currentTheme = body.getAttribute('data-theme');
    
    if (currentTheme === 'light') {
        body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        body.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}

// Load saved theme on page load (default: dark)
document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.setAttribute('data-theme', savedTheme);
    } else {
        // Modo escuro como padrão
        document.body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
});

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
            <img src="${encodeURI(product.image)}" alt="${product.name}" class="product-image" onerror="this.src='https://via.placeholder.com/400x200?text=${encodeURIComponent(product.name)}'">
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
            <img src="${encodeURI(item.image)}" alt="${item.title}" class="portfolio-image" onerror="this.src='https://via.placeholder.com/400?text=${encodeURIComponent(item.title)}'">
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
    const whatsappUrl = `https://wa.me/5521970232953?text=${encodeURIComponent(message)}`;
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

    // Se for o passo 3, rolar diretamente até o botão (sem rolar para o topo da seção)
    if (stepNumber === 3) {
        const stepEl = document.getElementById('step3');
        // Aguardar reflow para garantir que o conteúdo já esteja visível
        setTimeout(() => {
            const primaryBtn = stepEl.querySelector('.button-group .btn.btn-glow');
            if (primaryBtn && typeof primaryBtn.scrollIntoView === 'function') {
                // Calcular uma posição que mantenha o botão totalmente visível
                const rect = primaryBtn.getBoundingClientRect();
                const currentY = window.scrollY || window.pageYOffset;
                // Offset relativo: deixa o botão um pouco abaixo do meio da tela
                const offset = Math.max(160, Math.floor(window.innerHeight * 0.90));
                const targetY = rect.top + currentY - offset;
                window.scrollTo({ top: targetY, behavior: 'smooth' });
            }
        }, 60);
    } else {
        // Para os passos 1 e 2, manter o foco na seção de orçamento
        scrollToSection('budget');
    }
}

function calculateBudget() {
    // Get form data
    const envEl = document.getElementById('environmentType');
    const sizeEl = document.getElementById('roomSize');
    const qtyEl = document.getElementById('quantity');
    const infraEl = document.getElementById('infrastructure');
    const urgEl = document.getElementById('urgency');
    const brandEl = document.getElementById('brand');
    const nameEl = document.getElementById('name');
    const phoneEl = document.getElementById('phone');
    const addrEl = document.getElementById('address');

    budgetData.environmentType = envEl.value.trim();
    budgetData.roomSize = sizeEl.value.trim();
    budgetData.quantity = qtyEl.value.trim();
    budgetData.infrastructure = infraEl.value.trim();
    budgetData.urgency = urgEl.value.trim();
    budgetData.brand = brandEl.value.trim();
    budgetData.name = nameEl.value.trim();
    budgetData.phone = phoneEl.value.trim();
    budgetData.address = addrEl.value.trim();
    
    // Helpers
    const showError = (el, msg) => { alert(msg); el.focus(); };

    // Validações obrigatórias
    if (!budgetData.environmentType) return showError(envEl, 'Informe o tipo de ambiente.');
    if (!budgetData.roomSize) return showError(sizeEl, 'Informe o tamanho do ambiente ou BTUs.');

    // Quantidade: inteiro >= 1
    const qty = parseInt(budgetData.quantity, 10);
    if (isNaN(qty) || qty < 1) return showError(qtyEl, 'Quantidade deve ser um número inteiro maior ou igual a 1.');

    if (!budgetData.infrastructure) return showError(infraEl, 'Informe se possui infraestrutura/tubulação.');
    if (!budgetData.urgency) return showError(urgEl, 'Informe a urgência do serviço.');
    if (!budgetData.name) return showError(nameEl, 'Informe seu nome completo.');

    // Telefone: 10 a 11 dígitos
    const digitsPhone = budgetData.phone.replace(/\D/g, '');
    if (!(digitsPhone.length === 10 || digitsPhone.length === 11)) {
        return showError(phoneEl, 'Informe um telefone válido (DDD + número).');
    }

    if (!budgetData.address) return showError(addrEl, 'Informe seu endereço completo.');
    // Mostrar mensagem fixa em vez de calcular valor
    document.getElementById('estimatedPrice').textContent = 'Conferir Orçamento';
    goToStep(3);
}

function sendWhatsApp() {
    const message = `╔══════════════════════════════╗\n║      SOLICITAÇÃO DE ORÇAMENTO      ║\n╚══════════════════════════════╝\n\n📋 *DETALHES DO SERVIÇO*\n━━━━━━━━━━━━━━━━━━━━━━━━\n• Serviço: *${budgetData.serviceLabel || 'Não especificado'}*\n• Tipo de Ambiente: *${budgetData.environmentType || 'Não especificado'}*\n• Tamanho/BTUs: *${budgetData.roomSize || 'Não especificado'}*\n• Quantidade: *${budgetData.quantity} unidade(s)*\n\n🔧 *INFRAESTRUTURA*\n━━━━━━━━━━━━━━━━━━━━━━━━\n• ${budgetData.infrastructure || 'Não especificado'}\n\n⚡ *URGÊNCIA*\n━━━━━━━━━━━━━━━━━━━━━━━━\n• ${budgetData.urgency || 'Não especificado'}\n\n🏷️ *PREFERÊNCIA DE MARCA*\n━━━━━━━━━━━━━━━━━━━━━━━━\n• ${budgetData.brand || 'Não especificado'}\n\n👤 *DADOS DO CLIENTE*\n━━━━━━━━━━━━━━━━━━━━━━━━\n• Nome: *${budgetData.name}*\n• Telefone: *${budgetData.phone}*\n• Endereço: *${budgetData.address}*\n\n💬 *STATUS DO ORÇAMENTO*\n━━━━━━━━━━━━━━━━━━━━━━━━\n• *Conferir Orçamento* (valor a confirmar com a equipe)\n\n━━━━━━━━━━━━━━━━━━━━━━━━\n✅ Aguardo retorno para conferir os valores e fechar o serviço.\n\n_Solicitação enviada pelo site IPI Climatização_`;

    const whatsappUrl = `https://wa.me/5521970232953?text=${encodeURIComponent(message)}`;
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
    const whatsappUrl = `https://wa.me/5521970232953?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// Portfolio Modal
function openPortfolioModal(title, description, image) {
    const modal = document.getElementById('portfolioModal');
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalDescription').textContent = description;
    document.getElementById('modalImage').src = image;
    modal.classList.add('active');

    // Reset zoom state
    const lens = document.getElementById('zoomLens');
    const icon = document.getElementById('zoomIcon');
    lens.classList.remove('active');
    icon.classList.remove('active');
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

// Zoom Lens Logic
(function setupZoomLens(){
    const wrapper = document.getElementById('modalImageWrapper');
    const img = document.getElementById('modalImage');
    const lens = document.getElementById('zoomLens');
    const icon = document.getElementById('zoomIcon');

    if (!wrapper || !img || !lens || !icon) return;

    let zoomActive = false;
    const zoomFactor = 2; // 2x zoom

    const toggleZoom = () => {
        zoomActive = !zoomActive;
        lens.classList.toggle('active', zoomActive);
        icon.classList.toggle('active', zoomActive);
        if (zoomActive) {
            // Prepare background image for lens
            lens.style.backgroundImage = `url('${img.src}')`;
            updateLensBg();
        }
    };

    const getPos = (e) => {
        const rect = img.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        return { x, y, rect };
    };

    const moveLens = (e) => {
        if (!zoomActive) return;
        e.preventDefault();
        const { x, y, rect } = getPos(e);
        const lensW = lens.offsetWidth;
        const lensH = lens.offsetHeight;
        let lensX = x - lensW / 2;
        let lensY = y - lensH / 2;

        // Clamp inside image area
        lensX = Math.max(0, Math.min(lensX, rect.width - lensW));
        lensY = Math.max(0, Math.min(lensY, rect.height - lensH));

        lens.style.left = `${lensX + rect.left - wrapper.getBoundingClientRect().left}px`;
        lens.style.top = `${lensY + rect.top - wrapper.getBoundingClientRect().top}px`;

        // Background position for zoom effect
        const bgX = (lensX / rect.width) * 100;
        const bgY = (lensY / rect.height) * 100;
        lens.style.backgroundPosition = `${bgX}% ${bgY}%`;
    };

    const updateLensBg = () => {
        const { width, height } = img.getBoundingClientRect();
        lens.style.backgroundSize = `${width * zoomFactor}px ${height * zoomFactor}px`;
    };

    icon.addEventListener('click', toggleZoom);
    img.addEventListener('mousemove', moveLens);
    wrapper.addEventListener('mousemove', moveLens);
    window.addEventListener('resize', updateLensBg);
})();
