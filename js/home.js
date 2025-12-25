// 首页建筑数据配置
const buildingsData = [
    {
        id: '1',
        title: 'Mercersburg Academy Chapel',
        subtitle: 'A Gothic Revival Masterpiece',
        date: '1928 • Late 19th Century',
        address: '300 E Seminary St',
        description: 'An awe-inspiring Gothic Revival chapel that has served as the spiritual heart of Mercersburg Academy for nearly a century.',
        image: 'images/img-1.png',
        mark: 'Educational',
        markColor: '#8B4513' // Brown
    },
    {
        id: '2',
        title: 'Harriet Lane House',
        subtitle: 'Home of America\'s First Lady',
        date: '1852 • Mid 19th Century',
        address: '112 N Main St',
        description: 'The elegant Federal-style residence of Harriet Lane, niece and White House hostess for President James Buchanan.',
        image: 'images/img-2.png',
        mark: 'Residential',
        markColor: '#8B4513' // Brown
    },
    {
        id: '3',
        title: 'Buchanan Hotel',
        subtitle: 'Historic Victorian Lodging',
        date: '1860s • Victorian Era',
        address: '120 E Main St',
        description: 'A storied Victorian-era hotel with ornate architectural details, embodying the grandeur of 19th-century hospitality and standing as a timeless landmark of Mercersburg\'s travel and social legacy for over 150 years.',
        image: 'images/img-3.png',
        mark: 'Historic',
        markColor: '#8B4513' // Brown
    },
    {
        id: '4',
        title: 'Historic Post Office',
        subtitle: 'Victorian Communications Hub',
        date: '1891 • Late 19th Century',
        address: '45 W Main St',
        description: 'A beautifully preserved Victorian post office that served as Mercersburg\'s connection to the wider world for over a century.',
        image: 'images/img-4.png',
        mark: 'Civic',
        markColor: '#8B4513' // Brown
    },
    {
        id: '5',
        title: 'The Johnston Tavern',
        subtitle: 'Colonial-Era Social Hub',
        date: '1790s • Early Republic Period',
        address: '80 W Seminary St',
        description: 'A beloved colonial-era tavern of rustic stone construction, symbolizing the camaraderie and social traditions of Mercersburg\'s early settlers for generations.',
        image: 'images/img-5.png',
        mark: 'Historic',
        markColor: '#8B4513' // Brown
    },
    {
        id: '6',
        title: 'First Presbyterian Church',
        subtitle: 'Colonial Stone Sanctuary',
        date: '1836 • Colonial Period',
        address: '201 W Main St',
        description: 'A magnificent stone church representing the faith and craftsmanship of Mercersburg\'s founding generation.',
        image: 'images/img-6.png',
        mark: 'Religious',
        markColor: '#8B4513' // Brown
    },
    {
        id: '7',
        title: 'Irwin House / General Store',
        subtitle: 'Victorian Commercial Heritage',
        date: '1873 • Victorian Era',
        address: '158 N Main St',
        description: 'A remarkably preserved Victorian-era general store that served the community for over 130 years.',
        image: 'images/img-7.png',
        mark: 'Commercial',
        markColor: '#8B4513' // Brown
    },
    {
        id: '8',
        title: 'Mercersburg Town Square',
        subtitle: 'Heart of the Community',
        date: '1750s-Present • Various (18th-20th Century)',
        address: 'Main Street & Seminary Street',
        description: 'The historic town square where generations have gathered, celebrated, and shaped the community\'s character.',
        image: 'images/img-8.png',
        mark: 'Civic',
        markColor: '#8B4513' // Brown
    }
];

// 渲染建筑卡片
function renderBuildings() {
    const grid = document.getElementById('buildings-grid');
    if (!grid) return;

    const buildingsHTML = buildingsData.map(building => `
        <div class="building-card" data-building-id="${building.id}" onclick="window.location.href='./story.html?id=${building.id}'" style="cursor: pointer;">
            <div class="building-image-wrapper">
                <img src="${building.image}" alt="${building.title}" class="building-image">
               <!-- <div class="building-mark" style="background-color: ${building.markColor};">
                    ${building.mark}
                </div>   -->
            </div>
            <div class="building-content">
                <h3 class="building-title">${building.title}</h3>
                <p class="building-subtitle">${building.subtitle}</p>
                <div class="building-details">
                    <div class="building-detail-item">
                        <span class="detail-icon">
                            <img src="images/icon-date.png" alt="Date">
                        </span>
                        <span class="detail-text">${building.date}</span>
                    </div>
                    <div class="building-detail-item">
                        <span class="detail-icon">
                            <img src="images/icon-address.png" alt="Address">
                        </span>
                        <span class="detail-text">${building.address}</span>
                    </div>
                </div>
                <p class="building-description">${building.description}</p>
                <button class="discover-button" onclick="event.stopPropagation(); window.location.href='./story.html?id=${building.id}'">
                    Discover the Story
                </button>
            </div>
        </div>
    `).join('');

    const moreBtnHTML = `
        <div class="more-btn-wrapper">
            <a href="./other_spots.html" class="more-btn-link">
                <img src="images/other.png" alt="Other Spots">
            </a>
        </div>
    `;

    grid.innerHTML = buildingsHTML + moreBtnHTML;
}

// 页面加载完成后渲染建筑
$(document).ready(function() {
    renderBuildings();
    
    // 地图图标点击功能
    $('.map-icon').on('click', function() {
        const locationId = $(this).data('location-id');
        if (locationId) {
            // 跳转到story页面，传递位置ID
            window.location.href = `./story.html?id=${locationId}`;
        }
    });
});
