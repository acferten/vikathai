<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package kadence
 */

namespace Kadence;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

?>
<!doctype html>
<html <?php language_attributes(); ?> class="no-js" <?php kadence()->print_microdata( 'html' ); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1">
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<?php
/**
 * Kadence before wrapper hook.
 */
do_action( 'kadence_before_wrapper' );
?>
<div id="wrapper" class="site wp-site-blocks">
	<?php
	/**
	 * Kadence before header hook.
	 *
	 * @hooked kadence_do_skip_to_content_link - 2
	 */
	do_action( 'kadence_before_header' );

	/**
	 * Kadence header hook.
	 *
	 * @hooked Kadence/header_markup - 10
	 */
	do_action( 'kadence_header' );

	do_action( 'kadence_after_header' );
	?>

	<div id="inner-wrap" class="wrap hfeed kt-clear">
		<?php
		/**
		 * Hook for top of inner wrap.
		 */
		do_action( 'kadence_before_content' );
		?>

		
		
<!-- Begin Talk-Me {literal} -->
<script>
    (function(){(function c(d,w,m,i) {
        window.supportAPIMethod = m;
        var s = d.createElement('script');
        s.id = 'supportScript'; 
        var id = '265784092ee1a02b3d8f33a37421db08';
        s.src = (!i ? 'https://lcab.talk-me.ru/support/support.js' : 'https://static.site-chat.me/support/support.int.js') + '?h=' + id;
        s.onerror = i ? undefined : function(){c(d,w,m,true)};
        w[m] = w[m] || function(){(w[m].q = w[m].q || []).push(arguments);};
        (d.head || d.body).appendChild(s);
    })(document,window,'TalkMe')})();
</script>
<!-- {/literal} End Talk-Me -->