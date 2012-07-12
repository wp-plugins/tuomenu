<?php
/*
Plugin Name: Tuomenu menu
Version: 1.2.1
Description: Inserisci il menu della tua scheda direttamente sul tuo blog. Includi il tag [tuomenu url="url-tuo-ristorante"] nella pagina desiderata.
Author: Tuomenu at tuomenu.com
Author URI: http://tuomenu.com
*/






//include script
function tuomenu_add_resize_script() {
	wp_enqueue_script('jquery');
	wp_enqueue_script('cufon' , plugins_url('/cufon.js', __FILE__));
	wp_enqueue_script('Jenna_Sue_400.font',	plugins_url('/Jenna_Sue_400.font.js', __FILE__));	
	wp_enqueue_script('tuomenu_resize',	plugins_url('/tuomenu_resize.js', __FILE__));
	
}    
 
add_action('wp_enqueue_scripts', 'tuomenu_add_resize_script');






// [tuomenu url="url-tuo-ristorante"]
function tuomenu_iframe( $atts ) {
	extract( shortcode_atts( array(
		'url' => 'tuomenu'
	), $atts ) );



$file = dirname(__FILE__) . '/tuomenu.php';
$plugin_url = plugin_dir_url($file);
$plugin_path = plugin_dir_path($file);


$final='
<link rel="stylesheet" type="text/css" href="http://www.tuomenu.com/system/css/home.css" />
<link rel="stylesheet" type="text/css" href="http://www.tuomenu.com/system/css/embed.css" />
<input value="'.$url.'" id="tuomenuUrlInfo" readonly="readonly" type="hidden" /><div style="width:100%" id="tuomenuFrameContent"></div>';

return $final;

}
add_shortcode( 'tuomenu', 'tuomenu_iframe' );

?>