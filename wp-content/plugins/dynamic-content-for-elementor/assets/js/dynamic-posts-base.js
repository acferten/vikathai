var dceDynamicPostsSkin = '';
var dceDynamicPostsSkinPrefix = '';
var Widget_DCE_Dynamicposts_base_Handler = function($scope, $) {
	const widgetType = $scope.attr('data-widget_type');
	if (typeof widgetType !== 'string') {
		return;
	}
	const typeAndSkin = widgetType.split('.');
	if (typeAndSkin.length !== 2) {
		return;
	}
	const dpostsTypes = [
		'dce-dynamicposts-v2',
		'dce-metabox-relationship',
		'dce-search-results',
		'dce-sticky-posts',
		'dce-my-posts',
		'dce-dynamic-show-favorites',
		'dce-dynamic-woo-products',
		'dce-woo-product-crosssells',
		'dce-woo-product-upsells',
		'dce-woo-products-cart-on-sale',
		'dce-woo-products-cart',
		'dce-dynamic-woo-products-on-sale',
	];
	if (! dpostsTypes.includes(typeAndSkin[0])) {
		return;
	}
	dceDynamicPostsSkin = typeAndSkin[1];
	if(dceDynamicPostsSkin === 'grid-filters') {
		dceDynamicPostsSkin = 'grid_filters';
	}
    dceDynamicPostsSkinPrefix = dceDynamicPostsSkin + '_';
    var elementSettings = dceGetElementSettings($scope);

    // Run on load
	fitImages();

    // HOVER EFFECTS
    var blocks_hoverEffects = $scope.find('.dce-post-block.dce-hover-effects');
    if (blocks_hoverEffects.length) {
		blocks_hoverEffects.each(function(i, el) {
			$(el).on("mouseenter touchstart", function() {
				$(this).find('.dce-hover-effect-content').removeClass('dce-close').addClass('dce-open');
			});
			$(el).on("mouseleave touchend", function() {
				$(this).find('.dce-hover-effect-content').removeClass('dce-open').addClass('dce-close');
			});
		});
    }

    // Linkable Template
    if(
      false === elementorFrontend.isEditMode()
	  && 'yes' === elementSettings.templatemode_linkable
    ){
      $scope.find('.dce-post.dce-post-item[data-post-link]').click(function() {
        window.location.assign( $(this).attr("data-post-link") );
        return false;
      });
    }

	// Fit Images Ratio
	function fitImage($post) {
		var $imageParent = $post.find('.dce-img');
		$image = $imageParent.find('img');
		image = $image[0];

		if (!image) {
			return;
		}

		var imageParentRatio = $imageParent.outerHeight() / $imageParent.outerWidth(),
		imageRatio = image.naturalHeight / image.naturalWidth;
		$imageParent.toggleClass('dce-fit-img', imageRatio < imageParentRatio);
  	}

	function fitImages() {
		var itemRatio = $scope.find('.dce-post-image figure').first().data('image-ratio');

		if( !itemRatio ) {
			return;
		}
		$scope.find('.dce-posts-container').toggleClass('dce-is-ratio', true);
		$scope.find('.dce-post-image').each(function() {
			var $post = $(this);
			$image = $post.find('.dce-img img');
			fitImage($post);
			$image.on('load', function() {
				fitImage($post);
			});
		});
	}
};

jQuery(window).on('elementor/frontend/init', function() {
	elementorFrontend.hooks.addAction('frontend/element_ready/global', Widget_DCE_Dynamicposts_base_Handler);
});

// Re init layout after ajax request on Search&Filter Pro
(function ( $ ) {
	"use strict";
	$( document ).on( "sf:ajaxfinish", ".searchandfilter", function( e, data ) {
		if ( window.elementorFrontend && window.elementorFrontend.elementsHandler && window.elementorFrontend.elementsHandler.runReadyTrigger) {
			var runReadyTrigger = window.elementorFrontend.elementsHandler.runReadyTrigger;
			let form = data.object;
			let ajaxUpdateSections = '[]';
			if (typeof form.dataset.ajaxUpdateSections == 'string') {
				ajaxUpdateSections = form.dataset.ajaxUpdateSections;
			}
			let sections = JSON.parse(ajaxUpdateSections)
			sections.push(data.targetSelector);
			for (let section of sections) {
				runReadyTrigger( section );
				$( section ).find('.elementor-widget').each( function() {
					runReadyTrigger($( this ));
				});
			}
		}
	});
}(jQuery));
