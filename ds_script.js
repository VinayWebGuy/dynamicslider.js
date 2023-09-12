function renderSlider() {
    let data = `<div id="banners"></div><i class="fa banner-arrow fa-arrow-left"></i><i class="fa banner-arrow fa-arrow-right"></i><div class="slider-dots"></div>`
    $('#ds_slider').html(data)
    createBanners();
}
function createBanners() {
    let banner_data = "";
    let dot_data = "";
    for (let i = 0; i < banner_info.path.length; i++) {
        const isActive = i + 1 === banner_info.active;
        const target = banner_info.content[i].haveButton && banner_info.content[i].anotherPage ? "_blank" : "";
        const button = banner_info.content[i].haveButton ? `<a class="banner-button" target="${target}" href="${banner_info.content[i].buttonLink}">${banner_info.content[i].buttonText}</a>` : "";
        const heading = banner_info.content[i].heading ? `<h1 class="banner-heading">${banner_info.content[i].heading}</h1>` : "";
        const paragraph = banner_info.content[i].paragraph ? `<p class="banner-paragraph">${banner_info.content[i].paragraph}</p>` : "";
        banner_data += `<div class="banner ${isActive ? "active" : ""}" id="banner-${i + 1}">
            <img src="${banner_info.path[i]}" alt="">
            <div class="banner-content">${heading}${paragraph}${button}</div>
        </div>`;
        dot_data += `<div dot-id="${i + 1}" class="dot ${isActive ? "active" : ""}" id="dot-${i + 1}"></div>`;
    }
    $('#banners').html(banner_data);
    $('.slider-dots').html(dot_data);
    processBanners();
}
function processBanners() {
    const config = slider_config;
    $('.slider').css({
        height: config.sliderheight,
        width: config.sliderwidth,
        ...config.sliderCustomStyle
    });
    $('.banner-arrow').css({ color: config.arrowcolor });
    $('.dot').css({ background: config.dotcolor });
    $('.banner-heading').css({
        color: slider_config.headingcolor,
        fontSize: slider_config.headingsize + 'rem',
        opacity: slider_config.headingopacity,
        background: slider_config.headingbg,
        padding: slider_config.headingpadding,
        ...slider_config.headingCustomStyle
    });
    $('.banner-paragraph').css({
        color: slider_config.paragraphcolor,
        fontSize: slider_config.paragraphsize + 'rem',
        opacity: slider_config.paragraphopacity,
        background: slider_config.paragraphbg,
        padding: slider_config.paragraphpadding,
        ...slider_config.paragraphCustomStyle
    });
    $('.banner-button').css({
        color: slider_config.buttoncolor,
        background: slider_config.buttonbg,
        fontSize: slider_config.buttonsize + 'rem',
        padding: slider_config.buttonpadding,
        ...slider_config.buttonCustomStyle
    });
    if (config.showarrows) {
        $('.banner-arrow').addClass('show');
    }
    if (config.showdots) {
        $('.slider-dots').addClass('show');
    }
    let banner_index = 1;
    const banners = $('.banner').length;
    function runSlider() {
        $('.banner, .dot').removeClass('active');
        $(`#banner-${banner_index}, #dot-${banner_index}`).addClass('active');
    }
    $('.fa-arrow-right, .fa-arrow-left').click(function () {
        if (banner_index === banners) {
            banner_index = 1;
        } else {
            banner_index++;
        }
        runSlider();
    });
    function autoSlider() {
        if (banner_index === banners) {
            banner_index = 1;
        } else {
            banner_index++;
        }
        runSlider();
    }
    if (config.autoplay) {
        setInterval(autoSlider, config.delay * 1000);
    }
    $('.dot').click(function () {
        banner_index = $(this).attr('dot-id');
        runSlider();
    });
}
$(document).ready(function () {
    renderSlider();
})