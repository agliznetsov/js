(function ($) {

    $.fn.center = function (value) {
        let w = Math.round(this.outerWidth() / 2);
        let h = Math.round(this.outerHeight() / 2);
        if (value) {
            this.offset({left: value.x - w, top: value.y - h});
        } else {
            let p = this.offset();
            return {x: p.left + w, y: p.top + h};
        }
    };

}(jQuery));
