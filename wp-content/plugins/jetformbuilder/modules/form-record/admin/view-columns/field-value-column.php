<?php


namespace JFB_Modules\Form_Record\Admin\View_Columns;

use Jet_Form_Builder\Admin\Table_Views\Column_Advanced_Base;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Field_Value_Column extends Column_Advanced_Base {

	protected $column = 'field_value';
	protected $type   = self::PRE;

	public function get_label(): string {
		return __( 'Value', 'jet-form-builder' );
	}

	public function get_control( array $record = array() ): string {
		$type    = $record['field_type'] ?? '';
		$control = 'input';

		switch ( $type ) {
			case 'repeater-field':
			case 'wysiwyg-field':
			case 'textarea-field':
				$control = 'textarea';
				break;
		}

		return apply_filters(
			'jet-form-builder/table-form-fields/column-value/control',
			$control,
			$record
		);
	}

	public function get_control_options( array $record = array() ): array {
		$field_type = $record['field_type'] ?? '';
		$type       = 'text';

		switch ( $field_type ) {
			case 'number-field':
			case 'calculated-field':
			case 'range-field':
				$type = 'number';
				break;
			case 'color-picker-field':
				$type = 'color';
				break;
			case 'date-field':
				$type = 'date';
				break;
			case 'datetime-field':
				$type = 'datetime-local';
				break;
			case 'time-field':
				$type = 'time';
				break;
		}

		$options = array(
			'type' => $type,
		);

		return apply_filters(
			'jet-form-builder/table-form-fields/column-value/control-options',
			$options,
			$record
		);
	}
}
