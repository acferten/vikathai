<?php


namespace JFB_Modules\Advanced_Choices;

use Jet_Form_Builder\Blocks\Module as BlocksModule;
use JFB_Modules\Advanced_Choices\Block_Parsers\Choices_Field_Parser;
use JFB_Modules\Advanced_Choices\Block_Sanitizers\Choices_Default_Value_Sanitizer;
use JFB_Components\Module\Base_Module_After_Install_It;
use JFB_Components\Module\Base_Module_Handle_It;
use JFB_Components\Module\Base_Module_Handle_Trait;
use JFB_Components\Module\Base_Module_It;
use JFB_Components\Module\Base_Module_Dir_It;
use JFB_Components\Module\Base_Module_Dir_Trait;
use JFB_Modules\Advanced_Choices\Block_Types;
use JFB_Components\Module\Base_Module_Url_It;
use JFB_Components\Module\Base_Module_Url_Trait;
use Jet_Form_Builder\Plugin;
use JFB_Modules\Block_Sanitizer;
use JFB_Modules\Block_Parsers;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * @since 3.1.0
 *
 * Class Module
 * @package JFB_Modules\Advanced_Choices
 */
class Module implements
	Base_Module_It,
	Base_Module_Dir_It,
	Base_Module_Handle_It,
	Base_Module_Url_It,
	Base_Module_After_Install_It {

	use Base_Module_Dir_Trait;
	use Base_Module_Handle_Trait;
	use Base_Module_Url_Trait;

	public function rep_item_id() {
		return 'advanced-choices';
	}

	public function condition(): bool {
		return true;
	}

	/**
	 * @noinspection PhpUnhandledExceptionInspection
	 */
	public function on_install() {
		/** @var Block_Sanitizer\Module $sanitizer */
		$sanitizer = jet_form_builder()->module( 'block-sanitizer' );
		/** @var Block_Parsers\Module $parsers */
		$parsers = jet_form_builder()->module( 'block-parsers' );

		$sanitizer->register( new Choices_Default_Value_Sanitizer() );
		$parsers->install( new Choices_Field_Parser() );
	}

	/**
	 * @noinspection PhpUnhandledExceptionInspection
	 */
	public function on_uninstall() {
		/** @var Block_Sanitizer\Module $sanitizer */
		$sanitizer = jet_form_builder()->module( 'block-sanitizer' );
		/** @var Block_Parsers\Module $parsers */
		$parsers = jet_form_builder()->module( 'block-parsers' );

		$sanitizer->unregister( new Choices_Default_Value_Sanitizer() );
		$parsers->uninstall( new Choices_Field_Parser() );
	}

	public function init_hooks() {
		add_filter( 'jet-form-builder/blocks/items', array( $this, 'add_blocks_types' ) );
		add_action( 'jet-form-builder/editor-assets/before', array( $this, 'enqueue_admin_assets' ) );

		if ( ! jet_form_builder()->has_module( 'jet-style' ) ) {
			return;
		}

		add_action( 'wp_enqueue_scripts', array( $this, 'register_frontend_scripts' ) );
		add_action( 'jet_plugins/frontend/register_scripts', array( $this, 'register_frontend_scripts' ) );
	}

	public function remove_hooks() {
		remove_filter( 'jet-form-builder/blocks/items', array( $this, 'add_blocks_types' ) );
		remove_action( 'jet-form-builder/editor-assets/before', array( $this, 'enqueue_admin_assets' ) );

		if ( ! jet_form_builder()->has_module( 'jet-style' ) ) {
			return;
		}

		remove_action( 'wp_enqueue_scripts', array( $this, 'register_frontend_scripts' ) );
		remove_action( 'jet_plugins/frontend/register_scripts', array( $this, 'register_frontend_scripts' ) );
	}

	public function add_blocks_types( array $block_types ): array {
		$types = jet_form_builder()->has_module( 'jet-style' )
			? array(
				new Block_Types\Choices_Field(),
				new Block_Types\Choice(),
				new Block_Types\Choice_Control(),
			) : array(
				new Block_Types\Choices_Field_Not_Supported(),
			);

		return array_merge( $block_types, $types );
	}

	public function register_frontend_scripts() {
		wp_register_script(
			$this->get_handle(),
			$this->get_url( 'assets-build/js/frontend/choices.field{min}.js' ),
			array(
				BlocksModule::MAIN_SCRIPT_HANDLE,
			),
			Plugin::instance()->get_version(),
			true
		);
		wp_register_style(
			$this->get_handle(),
			$this->get_url( 'assets-build/css/main.css' ),
			array(),
			jet_form_builder()->get_version()
		);
	}

	public function enqueue_admin_assets() {
		$path = jet_form_builder()->has_module( 'jet-style' )
			? 'assets-build/js/editor/main{min}.js'
			: 'assets-build/js/editor-not-supported/main{min}.js';

		wp_enqueue_script(
			$this->get_handle(),
			$this->get_url( $path ),
			array(),
			jet_form_builder()->get_version(),
			true
		);

		wp_enqueue_style(
			$this->get_handle(),
			$this->get_url( 'assets-build/css/main.css' ),
			array(),
			jet_form_builder()->get_version()
		);
	}
}
