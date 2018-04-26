/**
 * Created by sotos on 21/12/2016.
 */
 
 $(document).ready(function(){
 
 /* intro */
 
 $('.sticky').Stickyfill();
 
/*  the portfolio fade effect  (opacity) */
 
 $(".portfolio li").mouseenter(function(){
    $(this).fadeTo("300", 1.00);
	/* $(this).animate({
	 height: '+=1%',
     width: '+=1%'
	
	}) */
	
	

	
});
 
 
  $(".portfolio li").mouseleave(function(){
    $(this).fadeTo("300", 0.70);
	 /* $(this).animate({
	 height: '-=1%',
     width: '-=1%' 
	
	}) */
		
	
});


/* barchart replace text */




$('#chartdiv > div:nth-child(1) > div:nth-child(1) > svg:nth-child(1) > g:nth-child(15) > g:nth-child(2) > text:nth-child(2):contains("1.0")').text('Novice');

$('#chartdiv > div:nth-child(1) > div:nth-child(1) > svg:nth-child(1) > g:nth-child(15) > g:nth-child(2) > text:nth-child(4):contains("2.0")').text('Experienced');

$('#chartdiv > div:nth-child(1) > div:nth-child(1) > svg:nth-child(1) > g:nth-child(15) > g:nth-child(2) > text:nth-child(6):contains("3.0")').text('Advanced');

/* on menu click refresh the skill chart */

/* $(".nav > li:nth-child(2) > a:nth-child(1)").click(function(){
$('#chartdiv').load(location.href + 'index.php');
});
  */

  
  
 /* personal sites */
 
 /* drupal image change */
 

 $("#lightbox").mouseenter(function(){
	 
	 $(".image_change").attr("src","../img/sbaiboscom_lightbox.jpg");
 
 });
 
 $("#multi_language").mouseenter(function(){
	 
	 $(".image_change").attr("src","../img/sbaiboscom_language.jpg");
 
 });
$("#video_support").mouseenter(function(){
	 
	 $(".image_change").attr("src","../img/sbaiboscom_video.jpg");
 
 });
 $("#dynamic_block").mouseenter(function(){
	 
	 $(".image_change").attr("src","../img/sbaiboscom_dynamic_block.jpg");
 
 });
 $("#rotating_banner").mouseenter(function(){
	 
	 $(".image_change").attr("src","../img/sbaiboscom_rotating_banner.jpg");
 
 });


 
 /* philomama image change */
 $("#philomama_video").mouseenter(function(){
	 
	 $(".image_change").attr("src","../img/philomama_akeso.jpg");
 
 });
 
 $("#philomama_simple_viewer").mouseenter(function(){
	 
	 $(".image_change").attr("src","../img/philomama_presentations.jpg");
 
 });
$("#philomama_multilingual").mouseenter(function(){
	 
	 $(".image_change").attr("src","../img/philomama_multilingual.jpg");
 
 });
 
 
  /* mendor image change */
 
 $("#mendor_portfolio").mouseenter(function(){
	 
	 $(".image_change").attr("src","../img/mendor_landing.jpg");
 
 });
 
 $("#mendor_counter").mouseenter(function(){
	 
	 $(".image_change").attr("src","../img/mendor_counter.jpg");
 
 });
$("#mendor_slider").mouseenter(function(){
	 
	 $(".image_change").attr("src","../img/mendor_slider.jpg");
 
 });
 $("#mendor_contact").mouseenter(function(){
	 
	 $(".image_change").attr("src","../img/mendor_form.jpg");
 
 });
 
 /* filoipirotiki image change */
 
 
  $("#filoipirotiki_members_area").mouseenter(function(){
	 
	 $(".image_change").attr("src","../img/filoipirotiki_members_area.jpg");
 
 });
 
 $("#filoipirotiki_quiz").mouseenter(function(){
	 
	 $(".image_change").attr("src","../img/filoipirotiki_quiz.jpg");
 
 });
$("#filoipirotiki_parallax").mouseenter(function(){
	 
	 $(".image_change").attr("src","../img/filoipirotiki_parallax.jpg");
 
 });

  /* athena image change */
  
  $("#athena_landing_page").mouseenter(function(){
	 
	 $(".image_change").attr("src","../img/athena_landing.jpg");
 
 });
 
 $("#athena_video").mouseenter(function(){
	 
	 $(".image_change").attr("src","../img/athena_video.jpg");
 
 });
$("#accordion_menu").mouseenter(function(){
	 
	 $(".image_change").attr("src","../img/athena_accordeon.jpg");
 
 });
 
 /* wide services image change */
  
  $("#wideservices_bootstrap").mouseenter(function(){
	 
	 $(".image_change").attr("src","../img/wideservices_joomla.jpg");
 
 });
 
 $("#wideservices_joomla").mouseenter(function(){
	 
	 $(".image_change").attr("src","../img/wideservices_bootstrap.jpg");
 
 });

  /* macinfo image change */
 
   $("#macinfo_slideshow").mouseenter(function(){
	 
	 $(".image_change").attr("src","../img/macinfo_slideshow.jpg");
 
 });
 
 $("#macinfo_search").mouseenter(function(){
	 
	 $(".image_change").attr("src","../img/macinfo_custom_search.jpg");
 
 });
 
   $("#macinfo_tabs").mouseenter(function(){
	 
	 $(".image_change").attr("src","../img/macinfo_tabs.jpg");
 
 });
 
 $("#macinfo_maps").mouseenter(function(){
	 
	 $(".image_change").attr("src","../img/macinfo_google-maps.jpg");
 
 });
 
   $("#macinfo_add_content").mouseenter(function(){
	 
	 $(".image_change").attr("src","../img/macinfo_add_content.jpg");
 
 });
 
 $("#macinfo_taxonomy").mouseenter(function(){
	 
	 $(".image_change").attr("src","../img/macinfo_taxonomy.jpg");
 
 });
 
   $("#macinfo_autocomplete").mouseenter(function(){
	 
	 $(".image_change").attr("src","../img/macinfo_autocomplete.jpg");
 
 });
 
 /* velti image change */
 
 $("#velti_bootstrap").mouseenter(function(){
	 
	 $(".image_change").attr("src","../img/velti_2.jpg");
 
 });
 
   $("#velti_responsive").mouseenter(function(){
	 
	 $(".image_change").attr("src","../img/velti_responsive.jpg");
 
 });
 
  /* site builder image change */
   $("#sitebuilder_multilanguage").mouseenter(function(){
	 
	 $(".image_change").attr("src","../img/sitebuilder_multilanguage.jpg");
 
 });
 
   $("#sitebuilder_change_theme").mouseenter(function(){
	 
	 $(".image_change").attr("src","../img/sitebuilder_change_theme.jpg");
	 });
	 
	  $("#sitebuilder_add_content").mouseenter(function(){
	 
	 $(".image_change").attr("src","../img/sitebuilder_add_page.jpg");
 
 });
 
   $("#sitebuilder_move_items").mouseenter(function(){
	 
	 $(".image_change").attr("src","../img/site_builder_move_blocks.jpg");
	 });
	 
	  $("#sitebuilder_change_color").mouseenter(function(){
	 
	 $(".image_change").attr("src","../img/site_builder_change_color.jpg");
 
 });
 
   $("#sitebuilder_settings").mouseenter(function(){
	 
	 $(".image_change").attr("src","../img/sitebuilder_general_settings.jpg");
  
  });
  /* cake php image change */
 
  $("#cakephp_session").mouseenter(function(){
	 
	 $(".image_change").attr("src","../img/cakephp_login_session.jpg");
  
  });
  
   $("#cakephp_validation").mouseenter(function(){
	 
	 $(".image_change").attr("src","../img/cakephp_validation.jpg");
  
  });
  
   $("#cakephp_add_user").mouseenter(function(){
	 
	 $(".image_change").attr("src","../img/cakephp_add_user.jpg");
  
  });
  
   $("#cakephp_delete_user").mouseenter(function(){
	 
	 $(".image_change").attr("src","../img/cakephp_delete_user.jpg");
  
  });
  
   $("#cakephp_edit_user").mouseenter(function(){
	 
	 $(".image_change").attr("src","../img/cakephp_edit_user.jpg");
  
  });
  
   $("#cakephp_lesson_per_user").mouseenter(function(){
	 
	 $(".image_change").attr("src","../img/cakephp_lesson_per_user.jpg");
  
  });
 
 
  $("#cakephp_view_users").mouseenter(function(){
	 
	 $(".image_change").attr("src","../img/cakephp_view_users.jpg");
  
  });
  
  
    /* patrio image change */
	
	$("#patrio_panels").mouseenter(function(){
	 
	 $(".image_change").attr("src","../img/patrio_panels.jpg");
  
  });
 
 $("#patrio_forum").mouseenter(function(){
	 
	 $(".image_change").attr("src","../img/patrio_forum.jpg");
  
  });
  
   $("#patrio_news").mouseenter(function(){
	 
	 $(".image_change").attr("src","../img/patrio_news.jpg");
  
  });
  
  /* atypon image change */
 $("#atypon_responsive").mouseenter(function(){
	 
	 $(".image_change").attr("src","../img/atypon_responsive.jpg");
  
  });
  
   $("#atypon_scrollbar").mouseenter(function(){
	 
	 $(".image_change").attr("src","../img/atypon_scrollbar.jpg");
  
  });

   $("#atypon_panels").mouseenter(function(){
	 
	 $(".image_change").attr("src","../img/atypon_panels.jpg");
  
  });
  
  
   /* plumberx image change */
 
   $("#plumberx_shopping_cart").mouseenter(function(){
	 
	 $(".image_change").attr("src","img/plumberx_shopping_cart.jpg");
 
 });
 
 
 $("#plumberx_product_catalogue").mouseenter(function(){
	 
	 $(".image_change").attr("src","img/plumberx_product_catalogue.jpg");
 
 });
 
   
  $("#plumberx_woocommerce").mouseenter(function(){
	 
	 $(".image_change").attr("src","img/plumberx_woocommerce.jpg");
 
 });
 
  $("#plumberx_multilingual").mouseenter(function(){
	 
	 $(".image_change").attr("src","img/plumberx_multilingual.jpg");
 
 });
 
  $("#plumberx_contact_form").mouseenter(function(){
	 
	 $(".image_change").attr("src","img/plumberx_contact_form.jpg");
 
 });
 
  $("#plumberx_visual_composer").mouseenter(function(){
	 
	 $(".image_change").attr("src","img/plumberx_visual_composer.jpg");
 
 });
 
  $("#plumberx_slideshow").mouseenter(function(){
	 
	 $(".image_change").attr("src","img/plumberx_slideshow.jpg");
 
 });
 
  $("#palaimaxoi_logo").mouseenter(function(){
	 
	 $(".image_change").attr("src","img/palaimaxoi_main.png");
 
 });
 
  $("#palaimaxoi_slideshow").mouseenter(function(){
	 
	 $(".image_change").attr("src","img/palaimaxoi-slideshow.jpg");
 
 });
 
 
   $("#extend_slideshow").mouseenter(function(){
	 
	 $(".image_change").attr("src","img/extend_slideshow.jpg");
 
 });
 
   $("#extend_banner").mouseenter(function(){
	 
	 $(".image_change").attr("src","img/extend_banner.jpg");
 
 });
 
   $("#extend_footer").mouseenter(function(){
	 
	 $(".image_change").attr("src","img/extend_footer.jpg");
 
 });
 
   $("#extend_newsletter").mouseenter(function(){
	 
	 $(".image_change").attr("src","img/extend_newsletter.jpg");
 
 });
 
  
  
 
});