// Story页面脚本
$(document).ready(function() {
    const urlParams = new URLSearchParams(window.location.search);
    const storyId = urlParams.get('id');

    if (!storyId || !storiesData[storyId]) {
        // 如果没有有效的story ID，重定向到首页
        window.location.href = './index.html';
        return;
    }

    const story = storiesData[storyId];
    
    // 更新页面标题
    document.title = story.title + ' - Historic Mercersburg';
    
    // 更新story标题
    $('#story-title').html(`<span class="story-number">${story.id}</span> ${story.title}`);
    
    // 渲染sections
    renderSections(story);
    
    // 渲染导航按钮
    renderNavigation(storyId);
    
    // 如果storyId为1，设置TownHistory导航为active
    if (storyId === '1') {
        $('.nav-item').removeClass('active');
        $('.nav-item').each(function() {
            const linkText = $(this).find('.nav-link').text().trim();
            if (linkText === 'TownHistory') {
                $(this).addClass('active');
            }
        });
    }
});

// 渲染sections
function renderSections(story) {
    const sectionsContainer = $('#story-sections');
    sectionsContainer.empty();

    story.sections.forEach(section => {
        let sectionHtml = '';
        
        if (section.type === 'about') {
            // About类型section - 支持背景色和分栏
            const bgColor = section.color === '#fff' ? '#fff' : (section.color === '#faf7f0' ? '#faf7f0' : (section.color === '#d3d3d3' ? '#e8e8e8' : (section.color === '#85a45d' ? '#f0fff0' : '#fff')));
            
            sectionHtml = `
                <div class="story-section story-section-about" style="background-color: ${bgColor};">
                    <h2 class="section-title" style="color: ${section.color === '#fff' || section.color === '#faf7f0' || section.color === '#d3d3d3' || section.color === '#90EE90' ? '#8B4513' : section.color};">${section.title}</h2>
                    ${section.content ? section.content.map(para => `<p class="section-content">${para}</p>`).join('') : ''}
                    ${section.columns ? `
                        <div class="columns-grid">
                            ${section.columns.map(column => `
                                <div class="column-item">
                                    <h3 class="column-title">${column.title}</h3>
                                    <ul class="column-list">
                                        ${column.items.map(item => `<li>${item}</li>`).join('')}
                                    </ul>
                                </div>
                            `).join('')}
                        </div>
                    ` : ''}
                    ${section.timeline ? `
                        <div class="timeline-list">
                            ${section.timeline.map(item => `
                                <div class="timeline-item">
                                    <div class="timeline-time">${item.time || item.period}</div>
                                    <div class="timeline-text">${item.text}</div>
                                </div>
                            `).join('')}
                        </div>
                    ` : ''}
                    ${section.items ? `<ul class="section-list">${section.items.map(item => `<li>${item}</li>`).join('')}</ul>` : ''}
                    ${section.additionalContent ? section.additionalContent.map(para => `<p class="section-content">${para}</p>`).join('') : ''}
                </div>
            `;
        } else if (section.type === 'facts') {
            // Facts类型section - 支持多种颜色背景
            let bgColor = '#fff';
            if (section.color === '#228B22') bgColor = '#ebecde';
            else if (section.color === '#FF8C00' || section.color === '#FFA500') bgColor = '#fff3e0';
            else if (section.color === '#859f4d') bgColor = '#ebecde'; // Story 7 的绿色调
            else if (section.color === '#90EE90') bgColor = '#f0fff0'; // Story 8 的绿色
            
            sectionHtml = `
                <div class="story-section story-section-facts" style="background-color: ${bgColor};">
                    <h2 class="section-title" style="color: ${section.color};">
                        ${section.title}
                    </h2>
                    <ul class="facts-list">
                        ${section.items.map(item => `
                            <li class="fact-item">
                                <span class="fact-icon">${getIconHtml(item.icon)}</span>
                                <span class="fact-text">${item.text}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>
            `;
        } else if (section.type === 'facts-highlight') {
            // Facts-highlight类型section - 改为列表布局
            let bgColor = '#ebecde';
            if (section.color === '#FF8C00' || section.color === '#FFA500' || section.color === '#FFD700') {
                bgColor = '#fff3e0'; // 橙色背景
            } else if (section.color === '#faf7f0') {
                bgColor = '#faf7f0'; // 米色背景（Story 7）
            } else if (section.color === '#FFA500') {
                bgColor = '#fff3e0'; // 橙色背景（Story 8）
            }
            
            sectionHtml = `
                <div class="story-section story-section-facts-highlight" style="background-color: ${bgColor};">
                    <h2 class="section-title" style="color: ${section.color === '#faf7f0' ? '#8B4513' : section.color};">
                        ${section.title}
                    </h2>
                    <ul class="facts-highlight-list">
                        ${section.items.map(item => `
                            <li class="fact-highlight-item">
                                <span class="fact-highlight-icon">${getIconHtml(item.icon)}</span>
                                <div class="fact-highlight-content">
                                    <h3 class="fact-highlight-title">${item.title}</h3>
                                    <p class="fact-highlight-text">${item.text}</p>
                                </div>
                            </li>
                        `).join('')}
                    </ul>
                </div>
            `;
        } else if (section.type === 'questions') {
            // Questions类型section - 橙色标题用橙色背景，其他用白色
            const bgColor = section.color === '#FF8C00' || section.color === '#FFA500' ? '#fff3e0' : '#fff';
            sectionHtml = `
                <div class="story-section story-section-questions" style="background-color: ${bgColor};">
                    <h2 class="section-title" style="color: ${section.color};">
                        ${section.title}
                    </h2>
                    <ol class="questions-list">
                        ${section.questions.map((question, index) => `
                            <li class="question-item">
                                <span class="question-label">Question ${index + 1}:</span>
                                ${question}
                            </li>
                        `).join('')}
                    </ol>
                    ${section.finalReflection ? `<p class="final-reflection">${section.finalReflection}</p>` : ''}
                </div>
            `;
        } else if (section.type === 'congratulations') {
            // Congratulations类型section
            sectionHtml = `
                <div class="story-section story-section-congratulations" style="background-color: #fff; border: 1px solid #99513b;">
                    <h2 class="section-title congratulations-title">${section.title}</h2>
                    ${section.content.map(para => `<p class="congratulations-content">${para}</p>`).join('')}
                 
                </div>
            `;
        }
        
        sectionsContainer.append(sectionHtml);
    });
}

// 获取图标HTML
function getIconHtml(iconName) {
    const icons = {
        'building': '🏛️',
        'bell': '🔔',
        'window': '🪟',
        'bed': '🛏️',
        'dining': '🍽️',
        'horse': '🐴',
        'newspaper': '📰',
        'president': '👑',
        'entertainment': '🎭',
        'architecture': '🏗️',
        'star': '👑',
        'music': '🎵',
        'globe': '🌍',
        'heart': '❤️',
        'fashion': '👗',
        'ship': '🚢',
        'legacy': '🏥',
        'mail': '✉️',
        'postmail': '📫',
        'email': '📧',
        'key': '🔑',
        'clock': '🔒',
        'money': '💰',
        'person': '👤',
        'gift': '🎁',
        'fire': '🔥',
        'swords': '⚔️',
        'ballot': '🗳️',
        'stone': '🪨',
        'church': '⛪',
        'snow': '❄️',
        'people': '👥',
        'book': '📖',
        'scale': '⚖️',
        'stove': '🔥',
        'candy': '🍬',
        'family': '👨‍👩‍👧‍👦',
        'handshake': '🤝',
        'flag': '🇺🇸',
        'circus': '🎪',
        'market': '🛒',
        'fireworks': '🎆',
        'crown': '👑',
        'megaphone': '📢',
        'film': '🎬',
        'palette':'🎨',
        'flowers': '💐',
        'holiday': '🎄',
        'Trumpet': '🎺',
        'congrats': '🎉'
    };
    return icons[iconName] || '📌';
}

// 渲染导航按钮
function renderNavigation(currentStoryId) {
    const navContainer = $('#story-navigation');
    const storyIds = Object.keys(storiesData).sort((a, b) => parseInt(a) - parseInt(b));
    const currentIndex = storyIds.indexOf(currentStoryId);
    
    let navHtml = '<div class="nav-buttons">';
    
    // Previous按钮
    if (currentIndex > 0) {
        const prevId = storyIds[currentIndex - 1];
        navHtml += `<a href="./story.html?id=${prevId}" class="nav-button nav-button-prev">← Previous Story</a>`;
    } else {
        navHtml += '<span class="nav-button nav-button-prev nav-button-disabled"></span>';
    }



    
    // Next按钮
    if (currentIndex < storyIds.length - 1) {
        const nextId = storyIds[currentIndex + 1];
        navHtml += `<a href="./story.html?id=${nextId}" class="nav-button nav-button-next">Next Story →</a>`;
    } else {
        navHtml += '<span class="nav-button nav-button-next nav-button-disabled"></span>';
    }
    

    
    // 如果是最后一个story，追加"View Activities"按钮
    if (currentIndex === storyIds.length - 1) {
        navHtml += `
           <button class="view-activities-button" onclick="window.location.href='./activity.html'">
                    View Activities
                </button>
        `;
    }
    navHtml += '</div>';
    navContainer.html(navHtml);
}


