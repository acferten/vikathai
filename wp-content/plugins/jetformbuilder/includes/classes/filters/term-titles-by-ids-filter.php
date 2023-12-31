<?php


namespace Jet_Form_Builder\Classes\Filters;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * @deprecated 2.1.6
 *
 * Class Term_Titles_By_Ids_Filter
 * @package Jet_Form_Builder\Classes\Filters
 */
class Term_Titles_By_Ids_Filter extends Base_Filter {

	public function get_id(): string {
		return 'term_titles_by_ids';
	}

	public function callback_args(): array {
		return array( ', ' );
	}

	public function apply_macros( $value, ...$args ): string {
		if ( ! $value || ! is_array( $value ) ) {
			return $value;
		}

		list( $delimiter ) = $args;

		$titles = array_map( array( $this, 'get_term_title' ), $value );
		$titles = array_filter( $titles );

		return wp_kses_post( implode( $delimiter, $titles ) );
	}

	protected function get_term_title( $term_id ): string {
		$term = get_term( $term_id );

		if ( ! is_a( $term, \WP_Term::class ) ) {
			return '';
		}

		return $term->name;
	}

}
