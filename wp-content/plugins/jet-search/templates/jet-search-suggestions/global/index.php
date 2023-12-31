<?php
/**
 * Main template
 *
 * @var $this Elementor\Jet_Search_Search_Suggestions_Widget
 */

$settings = $this->get_settings_for_display();

$this->add_render_attribute( 'wrapper', array(
	'class'         => 'jet-search-suggestions',
	'data-settings' => $this->get_settings_json(),
) );

if ( isset( $settings['search_form_responsive_on_mobile'] ) && filter_var( $settings['search_form_responsive_on_mobile'], FILTER_VALIDATE_BOOLEAN ) ) {
	$this->add_render_attribute( 'wrapper', 'class', 'jet-ajax-search jet-ajax-search--mobile-skin' );
}
?>

<div <?php $this->print_render_attribute_string( 'wrapper' ); ?>><?php
	include $this->get_global_template( 'form' );
	include $this->get_global_template( 'focus-suggestions' );

	if ( ! empty( $settings['show_search_suggestions_list_inline'] ) ) {
		include $this->get_global_template( 'inline-suggestions' );
	}
?></div>
