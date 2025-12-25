const highlightsData = [
    {
        month: 'October',
        title: 'Heritage Days Festival',
        description: 'A celebration of Mercersburg’s history with reenactments, traditional crafts, historical demonstrations, and family activities in the Town Square.'
    },
    {
        month: 'December',
        title: 'Holiday Lights & Tree Lighting',
        description: 'The community gathers in the Town Square for the annual tree lighting ceremony, caroling, hot cocoa, and festive cheer!'
    },
    {
        month: 'May',
        title: 'Spring Arts Walk',
        description: 'Local artists display their work throughout historic buildings. Enjoy live music, art demonstrations, and creative workshops for kids.'
    },
    {
        month: 'June-August',
        title: 'Summer Concert Series',
        description: 'Free outdoor concerts fill the Town Square featuring local and regional musicians. Bring a blanket and enjoy music under the stars!'
    }
];

const galleryImages = [
    'images/a-1.jpg',
    'images/a-2.jpg',
    'images/a-3.jpg',
    'images/a-4.jpg',
    'images/a-5.jpg',
    'images/a-6.jpg'
];

const planVisitData = [
    {
        title: 'Getting Here',
        text: 'Mercersburg is located in southwestern Pennsylvania, just a few miles from the Maryland border. The town is easily accessible by car and makes a perfect day trip or weekend getaway destination.',
        accent: 'red'
    },
    {
        title: 'Stay & Explore',
        text: 'While you’re here, take time to walk through the historic downtown, visit local shops and restaurants, and enjoy the beautiful countryside that surrounds this charming town!',
        accent: 'green'
    }
];

$(document).ready(function() {
    renderHighlights();
    renderGallery();
    renderPlanCards();
    initVideoPlayer();
});

function renderHighlights() {
    const grid = $('#highlights-grid');
    if (!grid.length) return;

    grid.html(highlightsData.map(item => `
        <div class="highlight-card">
            <div class="highlight-month">📅 ${item.month}</div>
            <div class="highlight-title">${item.title}</div>
            <p class="highlight-description">${item.description}</p>
        </div>
    `).join(''));
}

function renderGallery() {
    const wrapper = $('#gallery-wrapper');
    if (!wrapper.length) return;

    wrapper.html(galleryImages.map(src => `
        <div class="swiper-slide">
            <img src="${src}" alt="Community highlight">
        </div>
    `).join(''));

    new Swiper('.gallery-swiper', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    });
}

function renderPlanCards() {
    const container = $('#plan-cards');
    if (!container.length) return;

    container.html(planVisitData.map(item => `
        <div class="plan-card accent-${item.accent}">
            <div class="plan-title">
                ${item.accent === 'red' ? '📍' : '🌿'} ${item.title}
            </div>
            <p class="plan-text">${item.text}</p>
        </div>
    `).join(''));
}

function initVideoPlayer() {
    const video = document.getElementById('activity-video');
    const overlay = document.getElementById('video-overlay');
    if (!video || !overlay) return;

    // 添加视频控制条
    video.setAttribute('controls', 'controls');

    // 点击overlay播放视频
    overlay.addEventListener('click', (e) => {
        e.stopPropagation();
        video.play();
    });

    // 视频暂停时显示overlay
    video.addEventListener('pause', () => {
        if (!video.ended) {
            overlay.classList.remove('hidden');
        }
    });

    // 视频播放时隐藏overlay
    video.addEventListener('play', () => {
        overlay.classList.add('hidden');
    });

    // 视频结束时显示overlay
    video.addEventListener('ended', () => {
        overlay.classList.remove('hidden');
    });
}


