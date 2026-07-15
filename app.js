const products = [
    { id: 1, name: 'Gulnaar Banarasi', type: 'silk', detail: 'Handwoven silk · Deep rose', price: '₹6,850', tag: 'Bestseller', image: 'images/saree-1.png', description: 'An exquisite handwoven Banarasi silk saree in a deep rose shade, featuring royal floral zari work. Perfect for weddings and heirloom collections.', media: { angles: ['images/saree-1.png', 'images/detail-1.png', 'images/detail-2.png', 'images/detail-3.png'], video: 'images/saree-video.mp4' } },
    { id: 2, name: 'Mogra Chanderi', type: 'cotton', detail: 'Chanderi cotton · Ivory', price: '₹3,450', tag: 'New arrival', image: 'images/saree-2.png', description: 'A lightweight, sheer ivory Chanderi cotton saree with delicate Mogra motifs. Breathable, comfortable, and perfect for classic everyday grace.', media: { angles: ['images/saree-2.png', 'images/detail-1.png', 'images/detail-2.png', 'images/detail-3.png'], video: 'images/saree-video.mp4' } },
    { id: 3, name: 'Neelam Tissue', type: 'festive', detail: 'Silk tissue · Sapphire blue', price: '₹5,990', tag: 'Festive edit', image: 'images/saree-3.png', description: 'A stunning silk tissue saree in deep sapphire blue, glowing with gold metallic undertones. Features beautiful borders, designed for festive evenings.', media: { angles: ['images/saree-3.png', 'images/detail-1.png', 'images/detail-2.png', 'images/detail-3.png'], video: 'images/saree-video.mp4' } },
    { id: 4, name: 'Kesar Kanjeevaram', type: 'silk', detail: 'Pure silk · Marigold', price: '₹8,250', tag: 'Limited', image: 'images/saree-4.png', description: 'A rich, pure Kanjeevaram silk saree in a striking marigold orange. Adorned with traditional temple border patterns, offering limited-edition elegance.', media: { angles: ['images/saree-4.png', 'images/detail-1.png', 'images/detail-2.png', 'images/detail-3.png'], video: 'images/saree-video.mp4' } },
    { id: 5, name: 'Meher Kota Doria', type: 'cotton', detail: 'Kota cotton · Blush pink', price: '₹2,890', tag: 'Everyday', image: 'images/saree-5.png', description: 'A delicate Kota Doria cotton saree in blush pink. Characterized by its signature check weave and light airy feel, ideal for everyday luxury.', media: { angles: ['images/saree-5.png', 'images/detail-1.png', 'images/detail-2.png', 'images/detail-3.png'], video: 'images/saree-video.mp4' } },
    { id: 6, name: 'Raat Rani Georgette', type: 'festive', detail: 'Georgette · Midnight plum', price: '₹4,750', tag: 'Festive edit', image: 'images/saree-6.png', description: 'A fluid georgette saree in rich midnight plum, embellished with delicate silver thread embroidery that catches the light beautifully.', media: { angles: ['images/saree-6.png', 'images/detail-1.png', 'images/detail-2.png', 'images/detail-3.png'], video: 'images/saree-video.mp4' } },
    { id: 7, name: 'Aabha Paithani', type: 'silk', detail: 'Silk blend · Emerald', price: '₹7,600', tag: 'Handpicked', image: 'images/saree-7.png', description: 'A classic silk blend Paithani saree in deep emerald green, showcasing the signature peacock border and traditional colorful bootis.', media: { angles: ['images/saree-7.png', 'images/detail-1.png', 'images/detail-2.png', 'images/detail-3.png'], video: 'images/saree-video.mp4' } },
    { id: 8, name: 'Dhara Linen', type: 'cotton', detail: 'Linen cotton · Terracotta', price: '₹3,190', tag: 'Everyday', image: 'images/saree-8.png', description: 'A breathable, rich linen cotton saree in warm terracotta. Combines organic texture with subtle comfort, crafted for modern daily wear.', media: { angles: ['images/saree-8.png', 'images/detail-1.png', 'images/detail-2.png', 'images/detail-3.png'], video: 'images/saree-video.mp4' } },
    { id: 9, name: 'Vanya Organza', type: 'festive', detail: 'Organza · Blush lavender', price: '₹4,200', tag: 'Trending', image: 'images/saree-9.png', description: 'A lightweight and sheer blush lavender organza saree, woven with elegant silver borders. Offers a modern, ethereal drape for light festive gatherings.', media: { angles: ['images/saree-9.png', 'images/detail-1.png', 'images/detail-2.png', 'images/detail-3.png'], video: 'images/saree-video.mp4' } },
    { id: 10, name: 'Ridhi Bandhani', type: 'cotton', detail: 'Bandhani cotton · Crimson red', price: '₹3,850', tag: 'Handcrafted', image: 'images/saree-10.png', description: 'A pure cotton Bandhani tie-dye saree in deep crimson red. Showcases complex traditional hand-knotted patterns and border highlights.', media: { angles: ['images/saree-10.png', 'images/detail-1.png', 'images/detail-2.png', 'images/detail-3.png'], video: 'images/saree-video.mp4' } },
    { id: 11, name: 'Yamini Jamdani', type: 'cotton', detail: 'Dhakai Jamdani · Mustard yellow', price: '₹5,400', tag: 'Heritage', image: 'images/saree-11.png', description: 'An intricate, supplementary-weft Dhakai Jamdani cotton saree in warm mustard yellow. Hand-loomed with fine details for heritage grace.', media: { angles: ['images/saree-11.png', 'images/detail-1.png', 'images/detail-2.png', 'images/detail-3.png'], video: 'images/saree-video.mp4' } },
    { id: 12, name: 'Kiran Kalamkari', type: 'silk', detail: 'Kalamkari silk · Indigo blue', price: '₹6,990', tag: 'Artistic', image: 'images/saree-12.png', description: 'A fluid silk saree in rich indigo blue, hand-painted with traditional Kalamkari floral and mythological vine motifs. Combines art with elegance.', media: { angles: ['images/saree-12.png', 'images/detail-1.png', 'images/detail-2.png', 'images/detail-3.png'], video: 'images/saree-video.mp4' } }
];
let cart = []; let active = 'all'; let centerIndex = 0;
const $ = s => document.querySelector(s);

const heroImages = [
    'images/hero/hero-1.png',
    'images/hero/hero-2.png',
    'images/hero/hero-3.png'
];
let currentHeroIndex = 0;

function rotateHeroImages() {
    const activeEl = document.querySelector('.hero-images-container .hero-image.active');
    const nextEl = document.querySelector('.hero-images-container .hero-image.next');
    if (!activeEl || !nextEl) return;
    
    currentHeroIndex = (currentHeroIndex + 1) % heroImages.length;
    
    nextEl.style.backgroundImage = `linear-gradient(0deg, rgba(18, 35, 28, 0.25), transparent 60%), url('${heroImages[currentHeroIndex]}')`;
    
    activeEl.classList.remove('active');
    activeEl.classList.add('next');
    
    nextEl.classList.remove('next');
    nextEl.classList.add('active');
}

function initHeroSlider() {
    const activeEl = document.querySelector('.hero-images-container .hero-image.active');
    const nextEl = document.querySelector('.hero-images-container .hero-image.next');
    if (activeEl) {
        activeEl.style.backgroundImage = `linear-gradient(0deg, rgba(18, 35, 28, 0.25), transparent 60%), url('${heroImages[0]}')`;
    }
    if (nextEl) {
        nextEl.style.backgroundImage = `linear-gradient(0deg, rgba(18, 35, 28, 0.25), transparent 60%), url('${heroImages[1]}')`;
    }
    setInterval(rotateHeroImages, 5000);
}

function updateSlider() {
    const list = active === 'all' ? products : products.filter(p => p.type === active);
    const N = list.length;
    if (N === 0) return;
    
    if (centerIndex >= N) centerIndex = N - 1;
    if (centerIndex < 0) centerIndex = 0;
    
    const cards = document.querySelectorAll('.product');
    const isMobile = window.innerWidth <= 760;
    const xSpacing = isMobile ? (window.innerWidth * 0.22) : 240;
    
    cards.forEach((card, index) => {
        let offset = index - centerIndex;
        if (offset < -N / 2) offset += N;
        if (offset > N / 2) offset -= N;
        
        const absOffset = Math.abs(offset);
        const maxVisible = isMobile ? 1 : 2;
        
        if (absOffset > maxVisible) {
            card.style.opacity = '0';
            card.style.pointerEvents = 'none';
            card.style.zIndex = '0';
            card.style.transform = `translate(-50%, 0) translateX(${offset * xSpacing}px) scale(0.6)`;
        } else {
            const scale = 1 - absOffset * 0.18;
            const opacity = 1 - absOffset * 0.45;
            card.style.opacity = opacity.toString();
            card.style.pointerEvents = 'auto';
            card.style.zIndex = (10 - absOffset).toString();
            card.style.transform = `translate(-50%, 0) translateX(${offset * xSpacing}px) scale(${scale})`;
            
            if (offset === 0) {
                card.classList.add('center-card');
            } else {
                card.classList.remove('center-card');
            }
        }
    });
}

let currentPreviewId = null;

function openPreview(productId) {
    const p = products.find(prod => prod.id === productId);
    if (!p) return;
    
    currentPreviewId = p.id;
    
    $('#preview-tag').textContent = p.tag;
    $('#preview-name').innerHTML = p.name;
    $('#preview-detail').textContent = p.detail;
    $('#preview-price').textContent = p.price;
    $('#preview-description').textContent = p.description || 'A beautiful, thoughtfully chosen creation crafted to elevate your grace.';
    
    const mediaWrap = $('.preview-image-wrap');
    mediaWrap.classList.remove('video-active');
    
    const videoEl = $('#preview-video');
    videoEl.pause();
    videoEl.src = '';
    
    $('#preview-image').style.backgroundImage = `url('${p.image}')`;
    
    let thumbHtml = '';
    if (p.media && p.media.angles) {
        p.media.angles.forEach((imgUrl, i) => {
            const activeClass = i === 0 ? 'active' : '';
            thumbHtml += `<button class="preview-thumbnail ${activeClass}" style="background-image: url('${imgUrl}')" data-type="image" data-src="${imgUrl}" aria-label="Angle ${i+1}"></button>`;
        });
    }
    if (p.media && p.media.video) {
        thumbHtml += `<button class="preview-thumbnail video-thumb" style="background-image: url('${p.image}')" data-type="video" data-src="${p.media.video}" aria-label="Watch video preview"></button>`;
    }
    
    const thumbsContainer = $('#preview-thumbnails');
    thumbsContainer.innerHTML = thumbHtml;
    
    const thumbs = thumbsContainer.querySelectorAll('.preview-thumbnail');
    thumbs.forEach(thumb => {
        thumb.addEventListener('click', () => {
            thumbs.forEach(t => t.classList.remove('active'));
            thumb.classList.add('active');
            
            const type = thumb.dataset.type;
            const src = thumb.dataset.src;
            
            if (type === 'image') {
                mediaWrap.classList.remove('video-active');
                videoEl.pause();
                videoEl.src = '';
                $('#preview-image').style.backgroundImage = `url('${src}')`;
            } else if (type === 'video') {
                mediaWrap.classList.add('video-active');
                videoEl.src = src;
                videoEl.load();
                videoEl.play().catch(e => console.log('Video play blocked or failed:', e));
            }
        });
    });
    
    $('#preview-drawer').classList.add('open');
    $('#overlay').classList.add('open');
    $('#preview-drawer').setAttribute('aria-hidden', 'false');
}

function closePreview() {
    $('#preview-drawer').classList.remove('open');
    if (!document.querySelector('#cart').classList.contains('open')) {
        $('#overlay').classList.remove('open');
    }
    $('#preview-drawer').setAttribute('aria-hidden', 'true');
    
    const videoEl = $('#preview-video');
    if (videoEl) {
        videoEl.pause();
        videoEl.src = '';
    }
    
    currentPreviewId = null;
}

function renderProducts() {
    const list = active === 'all' ? products : products.filter(p => p.type === active);
    $('#products').innerHTML = list.map((p, idx) => `<article class="product" data-index="${idx}" data-id="${p.id}"><div class="product-image" style="background-image:url('${p.image}')"><span class="product-tag">${p.tag}</span><button class="add" data-id="${p.id}" aria-label="Add ${p.name} to bag">+</button></div><div class="product-info"><div><h3>${p.name}</h3><p>${p.detail}</p></div><span class="price">${p.price}</span></div></article>`).join('');
    
    document.querySelectorAll('.add').forEach(b => b.addEventListener('click', (e) => { e.stopPropagation(); add(+b.dataset.id); }));
    document.querySelectorAll('.product-image').forEach(img => img.addEventListener('click', (e) => { e.stopPropagation(); const id = +img.closest('.product').dataset.id; openPreview(id); }));
    document.querySelectorAll('.product').forEach(card => card.addEventListener('click', () => { centerIndex = +card.dataset.index; updateSlider(); }));
    
    centerIndex = 0;
    updateSlider();
}

// Add product to cart
function add(id) {
    if (!cart.includes(id)) {
        cart.push(id);
        const badge = $('#cart-count');
        if (badge) {
            badge.classList.remove('pulse-badge');
            void badge.offsetWidth; // Trigger reflow for animation
            badge.classList.add('pulse-badge');
        }
    }
    renderCart();
    openCart();
}

// Render the sliding cart drawer contents
function renderCart() {
    const chosen = cart.map(id => products.find(p => p.id === id));
    $('#cart-count').textContent = cart.length;
    
    if (chosen.length) {
        $('#cart-items').innerHTML = chosen.map(p => `
            <div class="cart-item">
                <img src="${p.image}" alt="${p.name}">
                <div>
                    <h3>${p.name}</h3>
                    <p>${p.price}</p>
                </div>
                <button class="remove" data-id="${p.id}">Remove</button>
            </div>
        `).join('');
    } else {
        $('#cart-items').innerHTML = `
            <p class="cart-empty">
                Your bag is waiting for a beautiful find.<br/>
                Browse the collection to add pieces.
            </p>
        `;
    }
    
    // Bind remove button events
    document.querySelectorAll('.remove').forEach(b => {
        b.addEventListener('click', () => {
            cart = cart.filter(id => id !== +b.dataset.id);
            renderCart();
        });
    });
    
    // Disable or enable the WhatsApp enquiry button
    const orderBtn = $('#whatsapp-order');
    orderBtn.style.opacity = chosen.length ? '1' : '.45';
    orderBtn.style.pointerEvents = chosen.length ? 'auto' : 'none';
}

// Open and Close Cart Drawer functions
function openCart() {
    $('#cart').classList.add('open');
    $('#overlay').classList.add('open');
    $('#cart').setAttribute('aria-hidden', 'false');
}

function closeCart() {
    $('#cart').classList.remove('open');
    $('#overlay').classList.remove('open');
    $('#cart').setAttribute('aria-hidden', 'true');
}

// Filter button clicks
document.querySelectorAll('.filter').forEach(b => {
    b.addEventListener('click', () => {
        active = b.dataset.filter;
        document.querySelector('.filter.active').classList.remove('active');
        b.classList.add('active');
        renderProducts();
    });
});

// Navigation drawer triggers
$('#open-cart').addEventListener('click', openCart);
$('#close-cart').addEventListener('click', closeCart);
$('#overlay').addEventListener('click', () => {
    closeCart();
    closePreview();
});

// Carousel navigation controls
$('#prev-slide').addEventListener('click', () => {
    const list = active === 'all' ? products : products.filter(p => p.type === active);
    const N = list.length;
    if (N === 0) return;
    centerIndex = (centerIndex - 1 + N) % N;
    updateSlider();
});

$('#next-slide').addEventListener('click', () => {
    const list = active === 'all' ? products : products.filter(p => p.type === active);
    const N = list.length;
    if (N === 0) return;
    centerIndex = (centerIndex + 1) % N;
    updateSlider();
});

// Window resize listener
window.addEventListener('resize', updateSlider);

// Modal details drawer actions
$('#close-preview').addEventListener('click', closePreview);

$('#preview-add-to-bag').addEventListener('click', () => {
    if (currentPreviewId) {
        add(currentPreviewId);
        closePreview();
    }
});

// WhatsApp checkout order message link
$('#whatsapp-order').addEventListener('click', () => {
    const items = cart.map(id => products.find(p => p.id === id));
    const message = `Hello Gokul Sarees! I'd like to enquire about these pieces:%0A%0A${items.map((p, i) => `${i + 1}. ${p.name} — ${p.price}`).join('%0A')}%0A%0APlease let me know availability and delivery details.`;
    window.open(`https://wa.me/917016722778?text=${message}`, '_blank');
});

// Spotlight Quick View
$('#spotlight-quick-view').addEventListener('click', () => {
    openPreview(2);
});
function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

function initHeaderScroll() {
    const header = $('.site-header');
    if (!header) return;
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

renderProducts(); renderCart(); initHeroSlider(); initScrollReveal(); initHeaderScroll();
