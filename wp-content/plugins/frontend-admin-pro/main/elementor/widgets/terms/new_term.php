<?php
namespace Frontend_Admin\Elementor\Widgets;





/**

 *
 * @since 1.0.0
 */
class New_Term_Widget extends Frontend_Form {


	/**
	 * Get widget name.
	 *
	 * Retrieve acf ele form widget name.
	 *
	 * @since  1.0.0
	 * @access public
	 *
	 * @return string Widget name.
	 */
	public function get_name() {
		return 'new_term';
	}


	public function hide_on_search() {
		return true;
	}


	/**
	 * Get widget categories.
	 *
	 * Retrieve the list of categories the acf ele form widget belongs to.
	 *
	 * @since  1.0.0
	 * @access public
	 *
	 * @return array Widget categories.
	 */
	public function get_categories() {
		return array( '' );
	}

}