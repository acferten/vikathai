<?php

namespace JFB_Modules\Block_Parsers;

use Jet_Form_Builder\Exceptions\Repository_Exception;
use Jet_Form_Builder\Live_Form;
use Jet_Form_Builder\Request\Parser_Context;
use Jet_Form_Builder\Request\Request_Tools;
use JFB_Components\Module\Base_Module_Dir_It;
use JFB_Components\Module\Base_Module_Dir_Trait;
use JFB_Components\Module\Base_Module_Static_Instance_It;
use JFB_Components\Module\Base_Module_Static_Instance_Trait;
use JFB_Components\Module\Base_Module_After_Install_It;
use JFB_Components\Module\Base_Module_It;
use Jet_Form_Builder\Blocks\Block_Helper;
use JFB_Components\Repository\Repository_Pattern_Trait;
use JFB_Modules\Security\Exceptions\Spam_Exception;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * @method static Module instance()
 *
 * @since 3.1.0
 *
 * Class Module
 * @package Jet_Form_Builder\Blocks\Block_Sanitizer
 */
final class Module implements
	Base_Module_It,
	Base_Module_After_Install_It,
	Base_Module_Static_Instance_It,
	Base_Module_Dir_It {

	const EMPTY_BLOCK_ERROR   = '0';
	const NOT_FIELD_HAS_INNER = '1';
	const FIELD_HAS_INNER     = '2';
	const IS_CONDITIONAL      = '3';

	use Repository_Pattern_Trait;
	use Base_Module_Static_Instance_Trait;
	use Base_Module_Dir_Trait;

	private $context;

	public static function get_instance_id(): string {
		return 'block-parsers';
	}

	public function condition(): bool {
		return true;
	}

	public function on_install() {
		require_once $this->get_dir( 'parser-context.php' );

		$this->rep_install();
		$this->context = new Parser_Context();
	}

	public function on_uninstall() {
		$this->rep_clear();
		unset( $this->context );
	}

	public function init_hooks() {
		add_action( 'jet-form-builder/request', array( $this, 'init_request' ), 0 );
	}

	public function remove_hooks() {
		remove_action( 'jet-form-builder/request', array( $this, 'init_request' ), 0 );
	}

	public function rep_instances(): array {
		return apply_filters(
			'jet-form-builder/parsers-request/register',
			array(
				new Fields\Default_Parser(),
				new Fields\Date_Field_Parser(),
				new Fields\Wysiwyg_Field_Parser(),
				new Fields\Text_Field_Parser(),
				new Fields\Repeater_Field_Parser(),
				new Fields\Media_Field_Parser(),
				new Fields\Datetime_Field_Parser(),
				new Fields\Hidden_Field_Parser(),
			)
		);
	}

	public function init_request() {
		Live_Form::instance()
				->set_form_id( jet_fb_handler()->get_form_id() )
				->set_specific_data_for_render();

		/**
		 * @throws Spam_Exception
		 */
		$request = apply_filters( 'jet-form-builder/request-handler/request', Request_Tools::get_request() );

		$this->get_context()
			// phpcs:ignore WordPress.Security.NonceVerification.Missing
			->set_files( Request_Tools::get_files( $_FILES ) )
			->set_request( $request );

		$this->get_context()->apply( jet_fb_request_handler()->_fields );

		$this->get_context()->update_request(
			apply_filters_deprecated(
				'jet-form-builder/form-handler/form-data',
				array( $this->get_context()->resolve_request( false ) ),
				'3.1.0',
				'jet-form-builder/request'
			),
			array()
		);
	}

	/**
	 * @param $block_name
	 *
	 * @return bool
	 */
	public function isset_parser( $block_name ): bool {
		$type = Block_Helper::delete_namespace( $block_name );

		return $this->rep_isset_item( $type );
	}

	public function get_parser( $slug ): Field_Data_Parser {
		try {
			return $this->rep_clone_item( $slug );
		} catch ( Repository_Exception $exception ) {
			return $this->rep_clone_item_or_die( 'default' );
		}
	}

	public function get_context(): Parser_Context {
		return $this->context;
	}

	public function install( Field_Data_Parser $item ): bool {
		return $this->rep_install_item_soft( $item );
	}

	/**
	 * @param Field_Data_Parser|string $item
	 */
	public function uninstall( $item ) {
		$this->rep_remove( $item );
	}


}
