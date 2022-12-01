$(document).ready(function() {
	$("#marquee1").kxbdMarquee({
        direction: "left"
    });
})
var swiper1 = new Swiper('.swiper-container-p1', {
    pagination: '.swiper-pagination',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    slidesPerView: 1,
    paginationClickable: true,
    spaceBetween: 30,
    autoplay: 5000,
    loop: true
});
var swiper2 = new Swiper('.swiper-container-p2', {
    pagination: '.swiper-pagination2',
    nextButton: '.swiper-button-next2',
    prevButton: '.swiper-button-prev2',
    slidesPerView: 4,
    paginationClickable: true,
    spaceBetween: 30,
    freeMode: true
});