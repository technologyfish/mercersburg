// 位置数据配置
const locationsData = {
    '1': {
        id: '1',
        title: 'Mercersburg Academy Chapeland',
        image: 'images/1.png',
        marker: {
            top: 'pxtovw(80)',
            right: 'pxtovw(40)',
            number: '1'
        },
        facts: [
            'Founded in 1836 as Marshall College before moving to lancaster.',
            'Campus covers more than 300 acres and has educated students from all over the world.',
            'The chapel\'s tall bell tower is one of the tallest structures in town.',
            'Stained-glass windows tell biblical and historical stories.'
        ],
        question: 'Count how many stained-glass windows you can spot from the outside.',
        ask: 'If you could build a school anywhere in the world, where would it be and what would it look like?',
        buttonText: 'STOP1-MERCERSBURG ACADEMY CHAPELAND MAYBE BUCHANAN LOG CABIN???'
    },
    '2': {
        id: '2',
        title: 'Buchanan Hotel',
        image: 'images/2.png',
        marker: {
            top: 'pxtovw(600)',
            right: 'pxtovw(100)',
            number: '2'
        },
        facts: [
            'Harriet Lane was the niece of President James Buchanan.',
            'She served as First Lady because Buchanan was unmarried.',
            'Known for bringing art and culture to the White House.',
            'Advocated for children\'s health later in life, founding a hospital in Baltimore.'
        ],
        question: '',
        ask: 'If you lived in the White House, what rule would you make for the whole country?',
        buttonText: 'STOP 3-BUCHANAN HOTEL'
    },
    '3': {
        id: '3',
        title: 'Harriet Lane House',
        image: 'images/3.png',
        marker: {
            top: 'pxtovw(150)',
            right: 'pxtovw(80)',
            number: '3'
        },
        facts: [
            'Built in the early 1800s, served stagecoach travelers.',
            'Guests often arrived dusty and tired from long trips.',
            'The hotel was a social hub for the town in its heyday.'
        ],
        question: '',
        ask: 'Pretend-play: Imagine you just got here after a two-day trip, what Food would you ask for first?',
        buttonText: 'STOP 3-HARRIET LANE HOUSE'
    },
    '4': {
        id: '4',
        title: 'Historic Post Office',
        image: 'images/4.png',
        marker: {
            top: 'pxtovw(150)',
            right: 'pxtovw(100)',
            number: '4'
        },
        facts: [
            'Built in the early 20th century.',
            'Houses a Great Depression-era mural painted under a NewDeal art program.',
            'The mural shows local farmlife and hard work in FranklinCounty.'
        ],
        question: 'Mural scavenger hunt: Find threehidden objects in the painting.',
        ask: 'Why do you think art wasimportant for people daring theGreat Depression?',
        buttonText: 'STOP 4-HISTORIC POST OFFICE'
    },
    '5': {
        id: '5',
        title: 'The Johnston Tavern',
        image: 'images/5.png',
        marker: {
            top: 'pxtovw(300)',
            right: 'pxtovw(150)',
            number: '5'
        },
        facts: [
            'One of the oldest buildings in Mercersburg, dating back to the late 1700s.',
            'Served as a stop for travelers on horseback and wagons.',
            'Hosted lively evenings with food, music, and sometimes political debates.'
        ],
        question: '',
        ask: '',
        buttonText: 'STOP 5-THE JOHNSTON TAVERN'
    },
    '6': {
        id: '6',
        title: 'Presbyterian Church',
        image: 'images/6.png',
        marker: {
            top: 'pxtovw(200)',
            right: 'pxtovw(120)',
            number: '6'
        },
        facts: [
            'Original congregation founded in the late 1700s.',
            'The stone building you see today was completed in the 1800s.',
            'Many important townspeople are buried in the graveyard.'
        ],
        question: 'Graveyard scavenger hunt: Find the oldest date on a gravestone.',
        ask: 'If you could design a church, what would it look like?',
        buttonText: 'STOP 6-PRESBYTERIAN CHURCH'
    },
    '7': {
        id: '7',
        title: 'Irwin House / General Store',
        image: 'images/7.png',
        marker: {
            top: 'pxtovw(180)',
            right: 'pxtovw(100)',
            number: '7'
        },
        facts: [
            'Originally a home and store selling almost everything a small town needed.',
            'People could buy food, clothing, tools, and candy here.',
            'Was a community gathering place where news spread quickly.'
        ],
        question: '',
        ask: 'If you ran this store in the 1800s, what three things would you sell?',
        buttonText: 'STOP 7-IRWIN HOUSE / GENERAL STORE'
    },
    '8': {
        id: '8',
        title: 'Mercersburg Town Square',
        image: 'images/8.png',
        marker: {
            top: 'pxtovw(60)',
            right: 'pxtovw(60)',
            number: '8'
        },
        facts: [
            'The heart of Mercersburg for over 200 years.',
            'Has been the site of parades, markets, and public speeches.',
            'Many buildings around the square have stood for more than a century.'
        ],
        question: '',
        ask: 'Share a favorite moment from the tour. End with a snack???',
        buttonText: 'FINAL STOP-MERCERSBURG TOWN SQUARE'
    }
};

// pxToVw转换函数（JavaScript版本）
function pxtovwJs(pxz) {
    const designVwSize = 39.08;
    if (pxz === -2 || pxz === -1 || pxz === 1 || pxz === 2) {
        return '1px';
    } else {
        return (pxz / designVwSize) + 'vw';
    }
}

$(document).ready(function() {
    // 导航栏切换功能
    $('.nav-link').on('click', function(e) {
        const href = $(this).attr('href');
        
        // 如果是页面链接，直接跳转
        if (href === 'index.html' || href === 'path.html') {
            // 移除所有active类
            $('.nav-item').removeClass('active');
            // 为当前点击的导航项添加active类
            $(this).parent().addClass('active');
            // 直接跳转，不阻止默认行为
            return true;
        }
        
        // 对于锚点链接，阻止默认行为并执行自定义逻辑
        e.preventDefault();
        
        // 移除所有active类
        $('.nav-item').removeClass('active');
        
        // 为当前点击的导航项添加active类
        $(this).parent().addClass('active');
        
        // 获取当前标签页
        const currentTab = href.substring(1);

    });

    // 地图图标点击功能
    $('.map-icon').on('click', function() {
        const locationId = $(this).data('location-id');
        
        if (locationId && locationsData[locationId]) {
            // 跳转到address-story页面，传递位置ID
            window.location.href = `address-story.html?id=${locationId}`;
        } else {
            // 如果没有配置数据，显示默认信息
            const location = $(this).data('location');
            showLocationInfo(location);
        }
    });

    // 地图图标悬停效果
    $('.map-icon').on('mouseenter', function() {
        $(this).addClass('hover');
    }).on('mouseleave', function() {
        $(this).removeClass('hover');
    });
});

// 显示地图内容
function showMapContent() {
    $('.map-container').show();
    console.log('显示地图内容');
}

// 显示路径内容
function showPathContent() {
    $('.map-container').hide();
    // 这里可以添加路径相关的内容
    console.log('显示路径内容');
}

// 显示地址故事内容
function showAddressStoryContent() {
    $('.map-container').hide();
    // 这里可以添加地址故事相关的内容
    console.log('显示地址故事内容');
}

// 显示位置信息
function showLocationInfo(location) {
    // 创建模态框显示位置详细信息
    const modal = $(`
        <div class="location-modal">
            <div class="modal-content">
                <span class="close">&times;</span>
                <h2>${location}</h2>
                <div class="location-details">
                    <p>这是一个历史悠久的景点，具有重要的历史意义。</p>
                    <p>开放时间：每天 9:00 - 17:00</p>
                    <p>门票：免费参观</p>
                </div>
            </div>
        </div>
    `);
    
    $('body').append(modal);
    
    // 关闭模态框
    $('.close, .location-modal').on('click', function(e) {
        if (e.target === this) {
            $('.location-modal').remove();
        }
    });
}

// 添加模态框样式
const modalStyles = `
<style>
.location-modal {
    display: none;
    position: fixed;
    z-index: 2000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    animation: fadeIn 0.3s ease;
}

.location-modal.show {
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal-content {
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    max-width: 500px;
    width: 90%;
    position: relative;
    animation: slideIn 0.3s ease;
}

.close {
    position: absolute;
    right: 15px;
    top: 15px;
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;
    color: #aaa;
}

.close:hover {
    color: #000;
}

.location-details {
    margin-top: 15px;
}

.location-details p {
    margin-bottom: 10px;
    line-height: 1.6;
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

@keyframes slideIn {
    from { transform: translateY(-50px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
}
</style>
`;

$('head').append(modalStyles);
