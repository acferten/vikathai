<?php
/**
 * Kadence functions and definitions
 *
 * This file must be parseable by PHP 5.2.
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package kadence
 */

define( 'KADENCE_VERSION', '1.1.24' );
define( 'KADENCE_MINIMUM_WP_VERSION', '5.4' );
define( 'KADENCE_MINIMUM_PHP_VERSION', '7.2' );

// Bail if requirements are not met.
if ( version_compare( $GLOBALS['wp_version'], KADENCE_MINIMUM_WP_VERSION, '<' ) || version_compare( phpversion(), KADENCE_MINIMUM_PHP_VERSION, '<' ) ) {
	require get_template_directory() . '/inc/back-compat.php';
	return;
}
// Include WordPress shims.
require get_template_directory() . '/inc/wordpress-shims.php';

// Load the `kadence()` entry point function.
require get_template_directory() . '/inc/class-theme.php';

// Load the `kadence()` entry point function.
require get_template_directory() . '/inc/functions.php';

// Initialize the theme.
call_user_func( 'Kadence\kadence' );


// Shortcode to insert OSMap - SinglePost
function wpc_elementor_shortcode( $atts ) {
    echo the_field('prop_map');
}
add_shortcode( 'osmap_insert_post', 'wpc_elementor_shortcode');

// Shortcode to insert Video - SinglePost
function wpc_elementor_shortcode2( $atts ) {
    echo the_field('prop_video_url');
}
add_shortcode( 'video_url', 'wpc_elementor_shortcode2');

// logout
add_action('check_admin_referer', 'logout_without_confirm', 10, 2);
function logout_without_confirm($action, $result)
{
    /**
     * Allow logout without confirmation
     */
    if ($action == "log-out" && !isset($_GET['_wpnonce'])) {
        $redirect_to = isset($_REQUEST['redirect_to']) ? $_REQUEST['redirect_to'] : '/main/';
        $location = str_replace('&amp;', '&', wp_logout_url($redirect_to));
        header("Location: $location");
        die;
    }
}



// // CPT- Parent Cat

add_action('save_post', 'assign_parent_terms', 10, 2);

function assign_parent_terms($post_id, $post){

    if($post->post_type != 'property')
        return $post_id;

    
    $terms = wp_get_post_terms($post_id, 'prop-type' );
    foreach($terms as $term){
        while($term->parent != 0 && !has_term( $term->parent, 'prop-type', $post )){
            // move upward until we get to 0 level terms
            wp_set_post_terms($post_id, array($term->parent), 'prop-type', true);
            $term = get_term($term->parent, 'prop-type');
        }
    }
}

function get_term_top_most_parent($term_id, $taxonomy){
    // start from the current term
    $parent  = get_term_by( 'id', $term_id, $taxonomy);
    // climb up the hierarchy until we reach a term with parent = '0'
    while ($parent->parent != '0'){
        $term_id = $parent->parent;

        $parent  = get_term_by( 'id', $term_id, $taxonomy);
    }
    return $parent;
}


// // Role custom

add_filter( 'editable_roles', function( $roles ) {

	unset( $roles['tech'] );
	
	return $roles;
} );

// // Roles dashboard
function wpse23007_redirect(){
  if( is_admin() && !defined('DOING_AJAX') && ( current_user_can('agent') || current_user_can('owner') || current_user_can('general user') || current_user_can('devrepesentative')) ){
    wp_redirect(home_url());
    exit;
  }
}
add_action('init','wpse23007_redirect');

// Convert  project price
add_filter('acf/format_value/name=project_price', 'fix_number', 10, 3);
function fix_number($value, $post_id, $field) {
  $value = number_format((int)$value, 0, ',', ' ');
  return $value;
}


add_action( 'wp_login_failed', 'my_front_end_login_fail' );  // hook failed login

function my_front_end_login_fail( $username ) {
   $referrer = $_SERVER['HTTP_REFERER'];  // where did the post submission come from?
   // if there's a valid referrer, and it's not the default log-in screen
   if ( !empty($referrer) && !strstr($referrer,'wp-login') && !strstr($referrer,'wp-admin') ) {
      wp_redirect( $referrer . '?login=failed' );  // let's append some information (login=failed) to the URL for the theme to use
      exit;
   }
}