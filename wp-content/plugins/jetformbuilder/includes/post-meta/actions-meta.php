<?php


namespace Jet_Form_Builder\Post_Meta;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Actions_Meta extends Base_Meta_Type {

	public function get_id(): string {
		return '_jf_actions';
	}

	public function get_type(): string {
		return 'string';
	}

	public function get_default(): string {
		return '[]';
	}
}
