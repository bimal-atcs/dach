jQuery(document).ready(function() {
    videoMedia(".video-media", ".video-icon");
});

function videoMedia(parentName, onClickName) {
    jQuery(onClickName).click(function() {
        jQuery(this).parent(parentName).find("video").get(0).play();
        jQuery(this).css('display', 'none');
    });

    jQuery('.video-overlay').click(function() {
        jQuery(this).parent(parentName).find("video").get(0).pause();
        jQuery(onClickName).removeAttr('style');
    });
}
