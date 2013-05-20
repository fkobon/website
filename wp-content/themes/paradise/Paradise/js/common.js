// Initial of dropdown menu

jQuery(function($){
// watermark
	var $s = $('#s');
	if ($s.length) {
		var t = 'Search';
		$s.attr('title', t);
		if ($s.val() == '') $s.val(t);
		$s.focus(function() {
			if ($s.val() == t) $s.val('');
		})
		.blur (function() {
			if ($s.val() == '') $s.val(t);
		})
	}
// tipsy
	$('.social a').tipsy(
	{
		gravity: 's', // nw | n | ne | w | e | sw | s | se
		fade: true
	});
	$.localScroll();
});

jQuery(document).ready(function() {

// tabs
	jQuery("#tabs").tabs({ fx: { height: 'toggle', opacity: 'toggle' } });
// code
	 jQuery('.toggle-flat-triger').click(function() {
		  var state = jQuery(this).parent().find('.toggle-flat-content').css('display');
		  var parent = jQuery(this).parent();
		  if(state == 'none') {
				jQuery(parent).find('.toggle-flat-icon-open').removeClass('toggle-flat-icon-open').addClass('toggle-flat-icon-close');
				jQuery(parent).find('.toggle-flat-triger').css('background-color', '#181818');
		  } else {
				jQuery(parent).find('.toggle-flat-icon-close').removeClass('toggle-flat-icon-close').addClass('toggle-flat-icon-open');
				jQuery(parent).find('.toggle-flat-triger').css('background-color', '#0A0A0A');
		  }
		  jQuery(parent).find('.toggle-flat-content').slideToggle(200);
	 });
// jquery quicksand
	var $filterType = jQuery('#filter a');
	var $list = jQuery('#portfolio');
	var $data = $list.clone();
	$filterType.click(function(event) {
		if (jQuery(this).attr('rel') == 'everyone') {
		  var $sortedData = $data.find('li');
		} else {
			var $sortedData = $data.find('.'+ jQuery(this).attr('rel'));
		}
		jQuery('#filter li a').removeClass('current_link');
		jQuery(this).addClass('current_link');
		$list.quicksand($sortedData, {
		  attribute: 'id',
		  duration: 800,
		  easing: 'easeInOutQuad',
		  adjustHeight: 'auto',
		  useScaling: 'false'
		}, function() {
			jQuery(".pic").css({
					backgroundColor: "#fff",
					borderColor: "#D5D5D5"
				});
			jQuery(".pic").hover(function() {
				jQuery(this).stop().animate({
					backgroundColor: "#666",
					borderColor: "#333"
					}, 300);
				},function() {
				jQuery(this).stop().animate({
					backgroundColor: "#fff",
					borderColor: "#D5D5D5"
					}, 500);
			});
			reloadPrettyPhoto();
		});
		return false;
	});
// fading & preloading images

	if(jQuery.support.opacity) {
		jQuery('.hover_img, .hover_vid').css({
			display: 'block',
			opacity: 0
		});
	}
	jQuery('a.gall').hover(function() {
		var fade = jQuery('> .hover_img,> .hover_vid', this);
			if(jQuery.support.opacity) {
				fade.stop().animate({
					opacity: 1,
					filter: 'alpha(opacity=100)'
				}, 300);
			} else {
				fade.fadeIn(300);
			}
	}, function () {
		var fade = jQuery('> .hover_img,> .hover_vid', this);
			if(jQuery.support.opacity) {
				fade.stop().animate({
					opacity: 0,
					filter: 'alpha(opacity=0)'
				}, 300);
			} else {
				fade.fadeOut(300);
			}
	});

// Autoalign
	jQuery(".sb_wrapper").autoAlign(".widget-container", 55);
});
