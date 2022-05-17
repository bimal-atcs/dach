jQuery(document).ready(function() {
    jQuery(".sliding-panel").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        centerMode: true,
        centerPadding: '60px',
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    centerPadding: '0',
                    slidesToShow: 1
                }
            }
        ]
    });
});
