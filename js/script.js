$(document).ready(function() {
    $('.fullpage').fullpage({
        scrollOverflow: true,
        scrollOverflowOptions: {click: false},
        menu: '.menu',
        anchors: [
            'firstPage',
            'secondPage',
            'thirdPage',
            'fourthPage',
            'fifthPage',
            'sixthPage'
        ],
        afterRender: function() {
            $('.projects__last').html($('.projects__slides').length);
        },
        afterSlideLoad: function (section, origin, destination) {
            $('.projects__first').html(++destination.index);
        }
    });

    $(document).on('click', '.projects__mini a', changeImg);
    $(document).on('input', '.calc', changeInput);
    $(document).on('click', '.scroll-down', scrollDown);
    $(document).on('click', '.fixed__hamburger', openMenu);
    $(document).on('click', '.main-menu__close', closeMenu);
    $(document).on('click', '.main-menu__link', closeMenu);

    function changeImg(event) {
        event.preventDefault();
        $('.projects__big img').attr('src', $(this).attr('data-src'));
    }

    function changeInput(event) {
        event.preventDefault();
        $(this).find('.calc__range output').val(
            $(this).find('.calc__range input').val()
        );
    }

    function openMenu(event) {
        $('.main-menu').addClass('main-menu--active');
    }

    function closeMenu(event) {
        $('.main-menu').removeClass('main-menu--active');
    }

    function scrollDown(event) {
        event.preventDefault();
        fullpage_api.moveSectionDown();
    }
});