/* ---------------------
	CUSTOM JS DOCUMENT 
--------------------- */
var appMaster = {
	/* ---------------------
		Page Loader 
	--------------------- */
	pageLoader: function(){
		$(".loader-item").delay(700).fadeOut();
		$("#pageloader").delay(800).fadeOut("slow");
	},
	/* ---------------------
		Navigation Menu 
	--------------------- */
	navBar: function(){	
		/* ---------------------
			Sticky 
		--------------------- */
		 if ($('#sticker').length) {
			$("#sticker").sticky({topSpacing:0});
		 }
		/* --------------------------
		Home Background Super Slider 
		-------------------------- */
		 if ($('#slides').length) {
			$('#slides').superslides({
			});
		 }		 
		
	},
	
	/* --------------------------
	HeaderSearch, Phone & Social Icons Toggle
	-------------------------- */
	toggleNav: function(){
		
		/* header Contact (Phone) */
	   $( ".header-contact" ).click(function() {
		$( ".header-contact-content" ).show( "fast", function() {});
		$('.transparent-header .navbar').fadeIn().addClass('top-search-open');
		$(".close").click(function() {
		  $(".header-contact-content").hide("fast", function() {});
		  $('.transparent-header .navbar').fadeIn().removeClass('top-search-open');
		})
	   });
	   
	   
	   /* header Search (Search Form) */
	   $( ".header-search" ).click(function() {
		$( ".header-search-content" ).show( "fast", function() {});
		$('.transparent-header .navbar').fadeIn().addClass('top-search-open');
		
		$(".close").click(function() {
		  $(".header-search-content").hide("fast", function() {});
		  $('.transparent-header .navbar').fadeIn().removeClass('top-search-open');
		})
	   });
	   
	   
		/* header Share (Search Form) */
	   $( ".header-share" ).click(function() {
		$( ".header-share-content" ).show( "fast", function() {});
		$('.transparent-header .navbar').fadeIn().addClass('top-search-open');
		
		$(".close").click(function() {
		  $(".header-share-content").hide("fast", function() {});
		  $('.transparent-header .navbar').fadeIn().removeClass('top-search-open');
		})
	   });
	},
	
	/* ---------------------	
		Animation
	/* --------------------- */	
	dataAnimations: function() {
	  $('[data-animation]').each(function() {
			var element = $(this);
			element.addClass('animated');
			element.appear(function() {
				
				var delay = ( element.data('delay') ? element.data('delay') : 1 );
				if( delay > 1 ) element.css('animation-delay', delay + 'ms');				
				element.addClass( element.data('animation') );
				setTimeout(function() {
					element.addClass('visible');
				}, delay);
				
			});
	  });
	},
	
	/* ---------------------	
		Background Image Attribute
	/* --------------------- */
	bgImage: function(){		
		var pageSection = $(".image-bg, .parallax-bg");
		pageSection.each(function(indx){
			if ($(this).attr("data-background")){
				$(this).css("background-image", "url(" + $(this).data("background") + ")");
			}
		});
	},

	/* ---------------------	
		Parallax BG
	/* --------------------- */
	parallaxBg: function(){	
		if($('.image-bg').length != 0 && !navigator.userAgent.match(/iPad|iPhone|Android/i)){	
			$.stellar({
			horizontalScrolling: false,
			verticalOffset: 0,
			horizontalOffset: 0,
			responsive: true,
			scrollProperty: 'scroll',
			parallaxElements: false,
		  });
		}
    },
	/* ---------------------	
		Portfolio
	/* --------------------- */
	portfolioFilter: function(){	
	if($('#mix-container').length != 0){
		$('#mix-container').mixItUp();
	}
	},
	/* ---------------------	
		Image Popup
	/* --------------------- */
	prettyPhoto: function(){
		(function($) {
			"use strict";
			if( $("a[rel^='prettyPhoto'], a[data-rel^='prettyPhoto']").length != 0 ) { 
			 $("a[rel^='prettyPhoto'], a[data-rel^='prettyPhoto']").prettyPhoto({hook: 'data-rel', theme: "dark_square", social_tools: false, deeplinking: false});
			}
		 })(jQuery);
	},
	


	/* --------------------------------------------
	 Scroll Navigation
	-------------------------------------------- */	
	navMenu: function(){	 
		jQuery('.scroll').bind('click', function(event) {
		var $anchor = jQuery(this);
		var headerH = jQuery('#navigation').outerHeight();
			jQuery('html, body').stop().animate({					
				scrollTop : jQuery($anchor.attr('href')).offset().top  - 60 + "px"
			}, 1200, 'easeInOutExpo');
		event.preventDefault();
	});
		/* Active When Scroll */
		jQuery('body').scrollspy({ 
			target: '#topnav',
			offset: 95
		})
		/* Responsive Auto Close */
		$('.one-page .nav li a').click(function () {
			 $('.navbar-collapse').removeClass('in');
		});
		/* Smooth Scroll Links */
		jQuery('.page-scroll a')
            .bind('click', function(event) {
                var $anchor = jQuery(this);
                jQuery('html, body')
                    .stop()
                    .animate({
                        scrollTop: jQuery($anchor.attr('href'))
                            .offset()
                            .top
                    }, 1500, 'easeInOutExpo');
                event.preventDefault();
            });
	},
	/* --------------------------------------------
	 Scroll Navigation
	-------------------------------------------- */	
	/* Text Tying Slider */
	typedSlider: function() {
		jQuery(".element").each(function(){
			var $this = jQuery(this);
			$this.typed({
			strings: $this.attr('data-elements').split(','),
			typeSpeed: 100, 
			backDelay: 3000 
			});
		});
	},
	
	/*==========Navigation Menu============*/	
	sideNav: function() {	
		$("#navigation-menu").click(function(e) {
			e.preventDefault();		
			$("#wrapper .toggle-menu").animate({ right: '0px' }, "slow");		
			return false;
		});					   
		$("#navigation-close").click(function(e) {
			e.preventDefault();		
			$("#wrapper .toggle-menu").animate({ right: '-50%' }, "slow");		
			return false;
		});	
		
		/* ----------- Menus hide after click -- mobile devices ----------- */	
	
		$('#wrapper .nav li a').click(function () {
			$("#wrapper .toggle-menu").animate({ right: '-50%' }, "slow");		
			return false;
		});
		
		$('.scroll-2').bind('click', function(event) {
			var $anchor = $(this);
			var headerH = $('#navigation-menu').outerHeight();
				$('html, body').stop().animate({					
					scrollTop : $($anchor.attr('href')).offset().top  + 1 + "px"
				}, 1200, 'easeInOutExpo');		
			event.preventDefault();
		});
	},	
	
	/*  Background image height equal to the browser height. */
		fullScreen: function() {
			$('.full-screen').css({ 'height': $(window).height() });
				 $(window).on('resize', function() {
					$('.full-screen').css({ 'height': $(window).height() });
			   });
		},
		
	fancySelect: function() {
		"use strict";
		if ( $( ".fancy-select" ).length !== 0 ) {
			$('.fancy-select').fancySelect();
		}
	},	
	
	
	hiddenFooter: function() {
		var footer_height = $(".hidden-footer").height();
		$('#page').css({ 'margin-bottom': footer_height + "px" });
		$('.hidden-footer').css({ 'height': footer_height + "px" });
		$('.hidden-footer').css({ 'max-height': footer_height + "px" });
		$(window).on('resize', function() {
			$('#page').css({ 'margin-bottom': footer_height + "px" });
			$('.hidden-footer').css({ 'height': footer_height + "px" });
			$('.hidden-footer').css({ 'max-height': footer_height + "px" });
		});	
	},
	
	/* --------------------------------------------
	Masonry Grid
	-------------------------------------------- */	
	masonryGrid: function(){
	
			 $('.masonry-grid').each(function(){  
			  var $port_container = $(this);  	  
			  
			  var filter_selector = $port_container.parent().find('.works-filters li.active').data('filter');  
			  
				$port_container.imagesLoaded(function(){  
					$port_container.isotope({   
					   itemSelector: '.grid-item',
					   filter: filter_selector,
					   animationEngine: "css",
					   masonry: {
						columnWidth: '.grid-sizer'
					   }
					  });
				});
			  
			 /*  Portfolio Filter Items */
			 $('.works-filters li').click(function(){			  
				$(this).parents().find('.works-filters li.active').removeClass('active');    
				$(this).addClass('active');
				var selector = $(this).parents().find('.works-filters li.active').attr('data-filter');  
				$(this).parents().find('.masonry-grid').isotope({ filter: selector, animationEngine : "css" });

				return false; 
				});
			});
				 
	},
	/* --------------------------------------------
	Product Zoom
	-------------------------------------------- */	
	productZoom: function(){	
		if ( $( ".single-product" ).length !== 0 ) {
			var zoomWindowWidth;
			var zoomWindowHeight;
			
			 zoomWindowWidth    : 400;
			 zoomWindowHeight   : 470;	
			 zoomType   = 'window';
			 
			if ($(window).width() < 992) {
				 zoomWindowWidth    : 0;
				 zoomWindowHeight   : 0;	
				 zoomType   = 'inner';
			}
			
			$("#zoom-product").elevateZoom({				
			gallery:'zoom-product-thumb', 
			cursor: 'pointer', 
			galleryActiveClass: 'active', 
			imageCrossfade: true,
			responsive: true,
			scrollZoom: false,
			zoomWindowWidth    : zoomWindowWidth,
			zoomWindowHeight   : zoomWindowHeight,
			zoomType		: zoomType	
			}); 

			$("#zoom-product").bind("click", function(e) {  
			  var ez =   $('#zoom-product').data('elevateZoom');	
				$.fancybox(ez.getGalleryList());
			  return false;
			});
			$('#plus').click(function() {
				$('#output').html(function(i, val) { return val*1+1 });
			});
			$('#minus').click(function() {
				$('#output').html(function(i, val) { return val*1-1 });
			});
		}	
	},

	
}; 

$(document).ready(function() {
	appMaster.pageLoader();
	appMaster.navBar();
	appMaster.toggleNav();
	appMaster.owlCarousel();
	appMaster.progressBar();
	appMaster.dataAnimations();
	appMaster.bgImage();
	appMaster.funFactor();
	appMaster.parallaxBg();
	appMaster.portfolioFilter();
	appMaster.prettyPhoto();
	appMaster.subscribeForm();
	appMaster.navMenu();
	appMaster.typedSlider();
	appMaster.videotextSlider();
	appMaster.countDown();	
	appMaster.socialPhotostream();	
	appMaster.priceRange();	
	appMaster.allCharts();	
	appMaster.masonryGrid();
	appMaster.productZoom();
	appMaster.sideNav();
	appMaster.fullScreen();
	appMaster.fancySelect();
	appMaster.hostedVideo();
	appMaster.gridRotator();
	appMaster.datePicker();
	appMaster.timePicker();
	appMaster.sidebarSticky();
	
});	

/* --------------------------------------------
	
	Placeholder for Image
	-------------------------------------------- */	
$(window).load(function(){
		
	$('img:not(".site_logo")').each(function() {
		if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)){
			var ieversion=new Number(RegExp.$1)
			if (ieversion>=9)
			if (typeof this.naturalWidth === "undefined" || this.naturalWidth === 0) {
			  this.src = "http://placehold.it/" + ($(this).attr('width') || this.width || $(this).naturalWidth()) + "x" + (this.naturalHeight || $(this).attr('height') || $(this).height());
			}
		} else {
			if (!this.complete || typeof this.naturalWidth === "undefined" || this.naturalWidth === 0) {
				this.src = "http://placehold.it/" + ($(this).attr('width') || this.width) + "x" + ($(this).attr('height') || $(this).height());
			}
		}
	});
	
	$('.image-bg').each(function() {
		var imageSrc = $(this).data('background');
		if( imageSrc !== undefined ) {
			var newSrc = imageSrc.replace(/url\((['"])?(.*?)\1\)/gi, '$2').split(',')[0];
		}

		/*  I just broke it up on newlines for readability        */ 
		var image = new Image();
		image.src = newSrc;

		var width = image.width,
			height = image.height;
		
		if( width === 0 || height === 0 ) {
			$(this).attr('data-background', "http://placehold.it/" + ('1900') + "x" + ('700') + "/2e2e2e/666.jpg" );
			
			$(this).removeAttr('style');
			$(this).css("background-image", "url(" + "http://placehold.it/1900x700/2e2e2e/666.jpg" + ")");
		}
	});
});

/* --------------------------------------------
Google Map
-------------------------------------------- */	
window.onload = MapLoadScript;
function GmapInit() {
	  Gmap = $('.map-canvas');
	  Gmap.each(function() {
		var $this           = $(this),
			lat             = -35.2835,
			lng             = 149.128,
			zoom            = 12,
			scrollwheel     = false,
			zoomcontrol 	= true,
			draggable       = true,
			mapType         = google.maps.MapTypeId.ROADMAP,
			title           = '',
			contentString   = '',
			dataLat         = $this.data('lat'),
			dataLng         = $this.data('lng'),
			dataZoom        = $this.data('zoom'),
			dataType        = $this.data('type'),
			dataScrollwheel = $this.data('scrollwheel'),
			dataZoomcontrol = $this.data('zoomcontrol'),
			dataHue         = $this.data('hue'),
			dataTitle       = $this.data('title'),
			dataContent     = $this.data('content');
			
		if( dataZoom !== undefined && dataZoom !== false ) {
			zoom = parseFloat(dataZoom);
		}
		if( dataLat !== undefined && dataLat !== false ) {
			lat = parseFloat(dataLat);
		}
		if( dataLng !== undefined && dataLng !== false ) {
			lng = parseFloat(dataLng);
		}
		if( dataScrollwheel !== undefined && dataScrollwheel !== null ) {
			scrollwheel = dataScrollwheel;
		}
		if( dataZoomcontrol !== undefined && dataZoomcontrol !== null ) {
			zoomcontrol = dataZoomcontrol;
		}
		if( dataType !== undefined && dataType !== false ) {
			if( dataType == 'satellite' ) {
				mapType = google.maps.MapTypeId.SATELLITE;
			} else if( dataType == 'hybrid' ) {
				mapType = google.maps.MapTypeId.HYBRID;
			} else if( dataType == 'terrain' ) {
				mapType = google.maps.MapTypeId.TERRAIN;
			}		  	
		}
		if( dataTitle !== undefined && dataTitle !== false ) {
			title = dataTitle;
		}
		if( navigator.userAgent.match(/iPad|iPhone|Android/i) ) {
			draggable = false;
		}
		
		var mapOptions = {
		  zoom        : zoom,
		  scrollwheel : scrollwheel,
		  zoomControl : zoomcontrol,
		  draggable   : draggable,
		  center      : new google.maps.LatLng(lat, lng),
		  mapTypeId   : mapType
		};		
		var map = new google.maps.Map($this[0], mapOptions);
		
		var image = 'img/map-marker.png';
		if( dataContent !== undefined && dataContent !== false ) {
			contentString = '<div class="map-data">' + '<h6>' + title + '</h6>' + '<div class="map-content">' + dataContent + '</div>' + '</div>';
		}
		var infowindow = new google.maps.InfoWindow({
			content: contentString
		});
		
		var marker = new google.maps.Marker({
		  position : new google.maps.LatLng(lat, lng),
		  map      : map,
		  icon     : image,
		  title    : title
		});
		if( dataContent !== undefined && dataContent !== false ) {
			google.maps.event.addListener(marker, 'click', function() {
				infowindow.open(map,marker);
			});
		}
		
		if( dataHue !== undefined && dataHue !== false ) {
		  var styles = [
			{
			  stylers : [
				{ hue : dataHue },
				{ saturation: 80 },
				{ lightness: -10 }
			  ]
			}
		  ];
		  map.setOptions({styles: styles});
		}
	 });
}
	
function MapLoadScript() {
	var script = document.createElement('script');
	script.type = 'text/javascript';
	script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' + 'callback=GmapInit';
	document.body.appendChild(script);
}



/*---------------STICKY NAVIGATION------------------*/
var header = jQuery('#slider-section'),
      headerPos = header.offset();
        
  $(window).scroll(function() {
	  if( $(".side-nav").length != 0 ) {
      if( $(this).scrollTop() > headerPos.top+header.height() ) {
          $('#sticky').addClass('nav-fixed').fadeIn('medium');
      } else {
          $('#sticky').removeClass('nav-fixed').fadeIn('medium');
	  }
      }
});

$(window).load(function() {
	appMaster.hiddenFooter();	
	appMaster.masonryGrid();
});
/* ------onHoverStop : off--------*/
$.extend(theme.PluginRevolutionSlider.defaults, {
    onHoverStop: 'off',
    navigation: {
        onHoverStop: 'off'
    }
});