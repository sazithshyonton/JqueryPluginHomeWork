/**
 * jQuery plugin for a thumb slider
 */
/* define $ as jQuery just in case */
(function ($) {
	/* thumb slideshow - my custom plugin */
	$.fn.thumb_slider = function () {
		/* set vars */
		var thumb_slider = this;
		var slides = thumb_slider.find('.slide');
		var controls = thumb_slider.find('.controls .control');
		var active_controls = controls.find('.active');
		var active_control = active_controls.first().length > 0 ? active_controls.first() : thumb_slider.find('.control:eq(0)');
		var target_index = active_control.index();
		var target_el = thumb_slider.find('.slide:eq(' + target_index + ')');

		/* set the css */
		thumb_slider.hide();
		$(window).load(function () {
			/* grab the active slide and hide all other slides */
			controls.removeClass('active');
			active_control.addClass('active');
			slides.hide();
			target_el.show();

			/* show the slideshow when everything is loaded */
			thumb_slider.show();
		});

		/* add the cursor to the control element (so it acts like an anchor link) */
		controls.css({
			'cursor': 'pointer'
		});

		/* click the thumb */
		thumb_slider.on('click', '.control', function (e) {
			/* set active class on the clicked thumb */
			controls.removeClass('active');
			$(this).addClass('active');

			/* grab the target thumb and show it */
			var target_index = $(this).index();
			var target_el = thumb_slider.find('.slide:eq(' + target_index + ')');
			slides.hide();
			target_el.show();
			e.preventDefault();
		});
	}
})(jQuery);
