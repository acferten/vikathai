<?php
namespace Frontend_Admin;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! function_exists( 'feap_fs' ) ) {
	function feap_fs() {
		return false;
	}
}

if ( ! class_exists( 'Plugin' ) ) {
	/**
	 * Main Frontend Admin Plugin Class
	 *
	 * The main class that initiates and runs the plugin.
	 *
	 * @since 1.0.0
	 */
	final class Plugin {

		/**
		 * Minimum PHP Version
		 *
		 * @since 1.0.0
		 *
		 * @var string Minimum PHP version required to run the plugin.
		 */
		const  MINIMUM_PHP_VERSION = '5.2.4';

		/**
		 * Constructor
		 *
		 * Checks for basic minimum php version.
		 * Checks if ACF is still required.
		 * Prompt user to rate plugin after several submississions
		 * Add tutorial videos to plugin item on plugins page
		 * Load plugin files
		 *
		 * @since 1.0.0
		 *
		 * @access public
		 */
		public function __construct( $data = false ) {
			$data = wp_parse_args(
				$data,
				array(
					'pro_version'  => false,
					'requires_acf' => true,
				)
			);

			do_action( 'front_end_admin_loaded' );


			// Check for required PHP version
			if ( version_compare( PHP_VERSION, self::MINIMUM_PHP_VERSION, '<' ) ) {
				add_action( 'admin_notices', array( $this, 'admin_notice_minimum_php_version' ) );
				return;
			}

			if ( $data['requires_acf'] && ! class_exists( 'ACF' ) ) {
				add_action( 'admin_notices', array( $this, 'admin_notice_missing_acf_plugin' ) );
				return;
			}

			add_action( 'init', array( $this, 'i18n' ) );

			if ( ! $data['pro_version'] ) {
				add_action( 'admin_notices', array( $this, 'admin_notice_get_pro' ) );
				add_action( 'wp_ajax_acff-upgrade-pro-dismiss', array( $this, 'ajax_upgrade_pro_dismiss' ) );
			}

			// Prompt user to rate plugin after several submississions
			add_action( 'admin_notices', array( $this, 'admin_notice_review_plugin' ) );
			add_action( 'wp_ajax_acff-rate-plugin', array( $this, 'ajax_rate_the_plugin' ) );

			// Add tutorial videos to plugin item on plugins page
			add_filter(
				'plugin_row_meta',
				array( $this, 'frontend_admin_row_meta' ),
				10,
				2
			);

			add_action( 'after_setup_theme', array( $this, 'plugin_includes' ), 12 );
		}


		/**
		 * Load Textdomain
		 *
		 * Load plugin localization files.
		 *
		 * Fired by `init` action hook.
		 *
		 * @since 1.0.0
		 *
		 * @access public
		 */
		public function i18n() {
			load_plugin_textdomain( 'acf-frontend-form-element', false, dirname( plugin_basename( __FILE__ ) ) . '/languages/' );
		}

		/**
		 * Plugin Includes
		 *
		 * Load plugin files and folders that makle this plugin so awesome
		 *
		 * Fired in the constructer.
		 *
		 * @since 1.0.0
		 *
		 * @access public
		 */
		public function plugin_includes() {
			include_once __DIR__ . '/helpers.php';

			if ( did_action( 'elementor/loaded' ) ) {
				include_once __DIR__ . '/elementor/module.php';
			}
			include_once __DIR__ . '/gutenberg/module.php';
			include_once __DIR__ . '/frontend/module.php';
			include_once __DIR__ . '/admin/module.php';
		}

		/**
		 * is_license_active
		 *
		 * Legacy function to avoid breaking the plugin when used in
		 * conjuction with previous versions
		 *
		 * @since 1.0.0
		 *
		 * @access public
		 */
		public function is_license_active() {
			return true;
		}

		/**
		 * set_basename
		 *
		 * Legacy function to avoid breaking the plugin when used in
		 * conjuction with previous versions
		 *
		 * @since 1.0.0
		 *
		 * @access public
		 */
		public function set_basename() {
			return null;
		}

		 /**
		  * Admin notice get pro version
		  *
		  * Notify the admin about pro version of Frontend Admin
		  *
		  * @since 1.0.0
		  *
		  * @access public
		  */
		public function admin_notice_get_pro() {
			if ( ! is_admin() ) {
				return;
			}

			if ( get_option( 'acff_pro_trial_dismiss' ) ) {
				return;
			}

			if ( get_option( 'frontend_admin_submissions_all_time', 0 ) < 150 ) {
				return;
			}
			$image_path = FEA_URL . 'assets/icon.png';

			?>

			<div class="notice notice-info acff-upgrade-pro-action" style="padding-right: 38px; position: relative;">
				<p> <?php printf( esc_html( __( 'Try %s <b>Pro</b> free for 7 days!', 'acf-frontend-form-element' ) ), 'Frontend Admin' ); ?> <a href="https://dynamiapps.com/try-frontend-admin-pro/" target="_blank">Check it out!</a> <a class="button button-primary" style="margin-left:20px;" href="https://dynamiapps.com/try-frontend-admin-pro/" target="_blank"><?php esc_html_e( 'Free trial!', 'acf-frontend-form-element' ); ?></a></p>
				<div><img width="40px" src="<?php echo esc_url( $image_path ); ?>" style="width:40px;margin:10px"/></div>

			<a href="#" style="position:absolute;top:5px;right:5px;" type="button" data-nonce="<?php esc_attr_e( wp_create_nonce( 'acff_dismiss_pro_nonce' ) ); ?>" class="acff-dismiss-notice"><?php esc_html_e( 'Dismiss notice', 'acf-frontend-form-element' ); ?></a>
			</div>
			<?php
			$min = defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ? '' : '-min';

			wp_enqueue_script( 'fea-try-pro-plugin', FEA_URL . 'assets/js/try-pro' . $min . '.js', array( 'acf' ), FEA_VERSION, true );
			wp_localize_script( 'fea-try-pro-plugin', 'fa', array( 'ajaxurl' => admin_url( 'admin-ajax.php' ) ) );
		}

		/**
		 * Admin notice rate the plugin
		 *
		 * Request from the admin to rate the plugin on WordPress.org
		 *
		 * @since 1.0.0
		 *
		 * @access public
		 */
		public function admin_notice_review_plugin() {
			if ( ! is_admin() ) {
				return;
			}

			$min_submits   = get_option( 'acff_min_submits_trigger', 10 );
			$submits_count = get_option( 'frontend_admin_submissions_all_time', 0 );

			if ( $min_submits == -1 || $submits_count < $min_submits ) {
				return;
			}

			$image_path = FEA_URL . 'assets/icon.png';

			$review_url = 'https://wordpress.org/support/view/plugin-reviews/' . 'acf-frontend-form-element' . '?rate=5#postform';

			?>
			<div class="notice notice-info acff-rate-action" style="padding-right: 48px">
			<?php
			printf( esc_html( __( "Hey, I noticed you've received over %1\$d submissions on %2\$s already - that's awesome! I am so glad you are enjoying my plugin! Please take a minute to help our business grow by leaving a review.", 'acf-frontend-form-element' ) ), esc_html( $min_submits ), 'Frontend Admin' );
			?>
			<strong><em>~ Shabti Kaplan</em></strong>
			<ul data-nonce="<?php esc_attr_e( wp_create_nonce( 'acff_rate_action_nonce' ) ); ?>">
			<li><a data-rate-action="do-rate" href="#" data-href="<?php echo esc_url( $review_url ); ?>"><?php esc_html_e( 'Ok, you deserve it', 'acf-frontend-form-element' ); ?></a></li>
				<li><a data-rate-action="done-rating" href="#"><?php esc_html_e( 'I already did', 'acf-frontend-form-element' ); ?></a></li>
				<li><a data-rate-action="not-yet" href="#"><?php esc_html_e( 'Nope, maybe later', 'acf-frontend-form-element' ); ?></a></li>
			</ul>
			<div><img width="40px" src="<?php echo esc_url( $image_path ); ?>" style="width:40px;margin:10px"/></div>

			</div>
			<?php
			$min = defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ? '' : '-min';

			wp_enqueue_script( 'fea-rate-plugin', FEA_URL . 'assets/js/rate-plugin' . $min . '.js', array( 'acf' ), FEA_VERSION, true );
			wp_localize_script( 'fea-rate-plugin', 'fa', array( 'ajaxurl' => admin_url( 'admin-ajax.php' ) ) );

		}

		/**
		 * Ajax rate the plugin
		 *
		 * Ajax function to take action when admin responds to request to
		 * rate the plugin.
		 *
		 * @since 1.0.0
		 *
		 * @access public
		 */
		public function ajax_rate_the_plugin() {
			// Continue only if the nonce is correct
			check_admin_referer( 'acff_rate_action_nonce', '_n' );
			$min_submits = get_option( 'acff_min_submits_trigger', 10 );
			if ( -1 === $min_submits ) {
				exit;
			}
			if ( ! isset( $_POST['rate_action'] ) ) {
				exit;
			}

			$rate_action = sanitize_text_field( wp_unslash( $_POST['rate_action'] ) );

			if ( 'do-rate' === $rate_action ) {
				$min_submits = -1;
			} else {

				if ( 10 === $min_submits ) {
					$min_submits = 100;
				} else {

					if ( 100 === $min_submits ) {
						$min_submits = 1000;
					} else {
						$min_submits = -1;
					}
				}
			}

			update_option( 'acff_min_submits_trigger', $min_submits );
			echo 1;
			exit;
		}

		/**
		 * Admin notice
		 *
		 * Warning when the site doesn't have ACF installed or activated.
		 *
		 * @since 1.0.0
		 *
		 * @access public
		 */
		public function admin_notice_missing_acf_plugin() {
			if ( isset( $_GET['activate'] ) ) {
				unset( $_GET['activate'] );
			}
			$message = sprintf(
				/* translators: 1: Plugin name 2: Advanced Custom Fields */
				__( '"%1$s" requires "%2$s" to be installed and activated.', 'acf-frontend-form-element' ),
				'<strong>Frontend Admin</strong>',
				'<strong>Advanced Custom Fields</strong>'
			);
			printf( '<div class="notice notice-warning is-dismissible"><p>%1$s</p></div>', wp_kses_post( $message ) );
		}


		/**
		 * Admin notice
		 *
		 * Warning when the site doesn't have a minimum required PHP version.
		 *
		 * @since 1.0.0
		 *
		 * @access public
		 */
		public function admin_notice_minimum_php_version() {
			if ( isset( $_GET['activate'] ) ) {
				unset( $_GET['activate'] );
			}
			$message = sprintf(
				/* translators: 1: Plugin name 2: PHP 3: Required PHP version */
				__( '"%1$s" requires "%2$s" version %3$s or greater.', 'acf-frontend-form-element' ),
				'<strong>Frontend Admin</strong>',
				'<strong>' . __( 'PHP', 'acf-frontend-form-element' ) . '</strong>',
				self::MINIMUM_PHP_VERSION
			);
			printf( '<div class="notice notice-warning is-dismissible"><p>%1$s</p></div>', wp_kses( $message ) );
		}

		/**
		 * Plugin page row meta
		 *
		 * Adds "video tutorials" meta to plugin in plugins list
		 *
		 * @since 1.0.0
		 *
		 * @access public
		 */
		public function frontend_admin_row_meta( $links, $file ) {

			if ( FEA_NAME == $file ) {
				$row_meta = array(
					'video' => '<a href="' . esc_url( 'https://www.youtube.com/channel/UC8ykyD--K6pJmGmFcYsaD-w/playlists' ) . '" target="_blank" aria-label="' . esc_attr__( 'Video Tutorials', 'acf-frontend-form-element' ) . '" >' . esc_html__( 'Video Tutorials', 'acf-frontend-form-element' ) . '</a>',
				);
				return array_merge( $links, $row_meta );
			}

			return (array) $links;
		}

	}

}
