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
        if (href && href !== '#' && !href.startsWith('#')) {
            // 移除所有active类
            $('.nav-item').removeClass('active');
            // 为当前点击的导航项添加active类
            $(this).parent().addClass('active');
            // 直接跳转，不阻止默认行为
            return true;
        }
        
        // 对于锚点链接，阻止默认行为并执行自定义逻辑
        if (href === '#') {
            e.preventDefault();
        }
        
        // 移除所有active类
        $('.nav-item').removeClass('active');
        
        // 为当前点击的导航项添加active类
        $(this).parent().addClass('active');
    });
});


