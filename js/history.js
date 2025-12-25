// History页面脚本
$(document).ready(function() {
    renderHistory();
});

// 渲染History内容
function renderHistory() {
    const sectionsContainer = $('#history-sections');
    sectionsContainer.empty();

    historyData.sections.forEach((section, index) => {
        let sectionHtml = `
            <div class="history-card">
                <div class="history-card-header">
                   <!-- <span class="history-card-icon" style="color: ${section.iconColor || '#d87045'}">${getHistoryIcon(section.icon)}</span> -->
                    <h2 class="history-card-title">${section.title}</h2>
                </div>
                ${section.content.map(para => `<p class="history-card-content">${para}</p>`).join('')}
        `;

        // 如果有highlight，添加highlight box
        if (section.highlight) {
            sectionHtml += `
                <div class="history-highlight">
                   <!--  <span class="history-highlight-icon">${getHistoryIcon(section.highlight.icon)}</span> -->
                    <div class="history-highlight-content">
                        <h3 class="history-highlight-title">${section.highlight.title}</h3>
                        <p class="history-highlight-text">${section.highlight.text}</p>
                    </div>
                </div>
            `;
        }

        // 如果有figures，添加figures grid
        if (section.figures) {
            sectionHtml += `
                <div class="history-figures-grid">
                    ${section.figures.map(figure => `
                        <div class="history-figure-card">
                            <span class="history-figure-icon">${getHistoryIcon(figure.icon)}</span>
                            <h3 class="history-figure-title">${figure.title}</h3>
                            <p class="history-figure-text">${figure.text}</p>
                        </div>
                    `).join('')}
                </div>
            `;
        }

        sectionHtml += '</div>';
        sectionsContainer.append(sectionHtml);
    });
}

// 获取历史图标
function getHistoryIcon(iconName) {
    const icons = {
        'leaf': '🍃',
        'bulb': '💡',
        'house': '🏠',
        'swords': '⚔️',
        'flag': '🇺🇸',
        'building': '🏛️',
        'gear': '⚙️',
        'person': '👤',
        'graduation': '🎓',
        'president': '👑',
        'lady': '👗',
        'general': '⚔️',
        'book': '📖',
        'city': '🏙️'
    };
    return icons[iconName] || '📌';
}



