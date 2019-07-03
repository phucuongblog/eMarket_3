$(document).ready(function(){
    // Show and hide specific dropdowns
    var searchbtn = $('.search-button'),
        searchcontent = $('.search-content');
    searchbtn.click(function(e){
        e.stopPropagation();
        $(this).toggleClass('updown');
        $(this).next('.search-content').slideToggle('fast');
    });
    searchcontent.on('click', function(e){
        e.stopPropagation();
    });
    $(document).on('click', function(){
        searchcontent.slideUp('fast');
        searchbtn.removeClass('updown');
    });
    // Show and hide specific popups such as login, cart,...
    var loginpop = $('.login-popup'),
        loginpopc = $('.login-popup--content');
    $('.login-btn').click(function(){
        loginpop.fadeIn();
        loginpopc.css('top','50%');
    });
    $('.close-login').click(function(){
        loginpop.fadeOut();
        loginpopc.css('top','30%');
    });
    $('.popup-btn').click(function(){
        $(this).next('.main-popup').fadeIn();
    });
    $('.close-pop').click(function(){
        $('.main-popup').fadeOut();
    });
    // Show elements on header-top
    var content = $('.dropdown-content'),
        button = $('.dropdown-btn');
    button.click(function() {
        if (content.is(':visible')) {
            content.slideUp();
        }
        if ($(this).next('.dropdown-content').is(':visible')) {
            $(this).next('.dropdown-content').slideUp();
        } else {
            $(this).next('.dropdown-content').slideDown();
        }
    });
    // Show and hide main menu mobile
    var menulist = $('.menulist');
    $('.menubutton').click(function(){
        $(this).next('.menulist').addClass('show');
    });
    $('.menubuttonx').click(function(){
        menulist.removeClass('show');
    });
    var menucontent = $('.menu-content');
    $('.open-btn').on('click', function() {
        if (menucontent.is(':visible')) {
            menucontent.slideUp(300);
            $('.open-btn').removeClass('active');
        }
        if ($(this).next('.menu-content').is(':visible')) {
            $(this).next('.menu-content').slideUp(300);
            $(this).parent('li').find('.open-btn').removeClass('active');

        } else {
            $(this).next('.menu-content').slideDown(300);
            $(this).parent('li').find('.open-btn').addClass('active');
        }
    });
    // Show .hidden-menu
    var plusmenu = $('.plus-menu'),
        minusmenu = $('.minus-menu'),
        hiddenmenu = $('.hidden-menu > ul');
    plusmenu.click(function(){
        $(this).css('display','none');
        minusmenu.css('display','block');
        hiddenmenu.slideDown(200);
    });
    minusmenu.click(function(){
        $(this).css('display','none');
        plusmenu.css('display','block');
        hiddenmenu.slideUp(200);
    });
    // Owl Carousel
    $('.logo-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots:false,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:5
            },
            1000:{
                items:7
            }
        }
    });
    $('.product-carousel').owlCarousel({
        loop:false,
        margin:20,
        nav:true,
        dots:false,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:5
            },
            1000:{
                items:6
            }
        }
    });
    $('.seller-carousel').owlCarousel({
        loop:false,
        margin:0,
        nav:true,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
    $('.blog-carousel').owlCarousel({
        loop:false,
        margin:30,
        nav:true,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    });
    $('.best-carousel').owlCarousel({
        loop:false,
        margin:0,
        nav:false,
        dots:true,
        items:1
    });
    $('.banner-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        dots:true,
        items:1,
        animateOut:'fadeOut',
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:true
    });
    // Slick
    // Flash Sale 1
    $('#sale1-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        fade: true,
        speed: 1000,
        asNavFor: '#sale1-nav'
    });
    $('#sale1-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        asNavFor: '#sale1-for',
        arrows: false,
        dots: false,
        centerMode: false,
        focusOnSelect: true,
        autoplay: true,
        autoplaySpeed: 3000,
        vertical: true
    });
    // Flash Sale 2
    $('#sale2-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        fade: true,
        speed: 1000,
        asNavFor: '#sale2-nav'
    });
    $('#sale2-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        asNavFor: '#sale2-for',
        arrows: false,
        dots: false,
        centerMode: false,
        focusOnSelect: true,
        autoplay: true,
        autoplaySpeed: 3000,
        vertical: true
    });
    // Flash Sale 3
    $('#sale3-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        fade: true,
        speed: 1000,
        asNavFor: '#sale3-nav'
    });
    $('#sale3-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        asNavFor: '#sale3-for',
        arrows: false,
        dots: false,
        centerMode: false,
        focusOnSelect: true,
        autoplay: true,
        autoplaySpeed: 3000,
        vertical: true
    });
    // Product Gallery
    $('.slider-for1').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        arrows: true,
        fade: true,
        asNavFor: '.slider-nav1'
    });
    $('.slider-nav1').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: false,
        asNavFor: '.slider-for1',
        arrows: true,
        dots: false,
        centerMode: false,
        focusOnSelect: true
    });
    // Show - Hide Back To Top Button
    $('.backtop').click(function() {
        $('html, body').animate({scrollTop: 0}, 800);
    });
    // Show and hide element over max height
    $('.show-more').click(function(){
        $(this).siblings('.hidden-element').addClass('active');
        $(this).css('display','none');
        $(this).siblings('.show-less').css('display','block');
    });
    $('.show-less').click(function(){
        $(this).siblings('.hidden-element').removeClass('active');
        $(this).css('display','none');
        $(this).siblings('.show-more').css('display','block');
    });
    // Show .pop-cat
    var popsub = $('.pop-sub');
    $('.plusminus').on('click', function() {
        if (popsub.is(':visible')) {
            popsub.slideUp(300);
            $('.plusminus').removeClass('active');
        }
        if ($(this).next('.pop-sub').is(':visible')) {
            $(this).next('.pop-sub').slideUp(300);
            $(this).parent('li').find('.plusminus').removeClass('active');

        } else {
            $(this).next('.pop-sub').slideDown(300);
            $(this).parent('li').find('.plusminus').addClass('active');
        }
    });
    // Increase/ Descrease Number input
    $('.minus,.add').on('click', function() {
        var $qty = $(this).closest('p').find('.qty'),
          currentVal = parseInt($qty.val()),
          isAdd = $(this).hasClass('add');
        !isNaN(currentVal) && $qty.val(
          isAdd ? ++currentVal : (currentVal > 0 ? --currentVal : currentVal)
        );
    });
    // Show and hide Popup Success, Popup Quickview
    var popsuccess = $('.popup-success'),
        quickview = $('.popup-quickview'); 
    $('#add-to-cart').click(function(){
        quickview.fadeOut();
        popsuccess.fadeIn();
    });
    $('.close-success').click(function(){
        popsuccess.fadeOut();
    });
    $('.quickview-btn').click(function(e){
        e.preventDefault();
        quickview.fadeIn();
    });
    $('.close-quickview').click(function(){
        quickview.fadeOut();
    });
});
// Countdown Timer HomePage
function makeTimer() {
    var endTime = new Date("17 November 2019 17:30:00 GMT+07:00");          
        endTime = (Date.parse(endTime) / 1000);

        var now = new Date();
        now = (Date.parse(now) / 1000);

        var timeLeft = endTime - now;

        var days = Math.floor(timeLeft / 86400); 
        var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
        var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

        if (hours < "10") { hours = "0" + hours; }
        if (minutes < "10") { minutes = "0" + minutes; }
        if (seconds < "10") { seconds = "0" + seconds; }

        $("#days1").html(days + "<span> Days :</span>");
        $("#hours1").html(hours + "<span> Hours :</span>");
        $("#minutes1").html(minutes + "<span> Minutes :</span>");
        $("#seconds1").html(seconds + "<span> Seconds</span>");       
}
setInterval(function() { makeTimer(); }, 1000);
// Countdown Timer Single Product
function makeTimer2() {
    var endTime = new Date("17 October 2019 17:30:00 GMT+07:00");          
        endTime = (Date.parse(endTime) / 1000);

        var now = new Date();
        now = (Date.parse(now) / 1000);

        var timeLeft = endTime - now;

        var days = Math.floor(timeLeft / 86400); 
        var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
        var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

        if (hours < "10") { hours = "0" + hours; }
        if (minutes < "10") { minutes = "0" + minutes; }
        if (seconds < "10") { seconds = "0" + seconds; }

        $("#days2").html(days);
        $("#hours2").html(hours);
        $("#minutes2").html(minutes);
        $("#seconds2").html(seconds);       
}
setInterval(function() { makeTimer2(); }, 1000);