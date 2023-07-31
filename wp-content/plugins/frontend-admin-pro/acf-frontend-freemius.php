<?php

/**
 * Plugin Name: Frontend Admin Pro (Premium)
 * Plugin URI: https://wordpress.org/plugins/acf-frontend-form-element/
 * Description: This awesome plugin allows you to easily display admin forms to the frontend of your site so your clients can easily edit content on their own from the frontend.
 * Version:     3.16.5

 * Update URI: https://api.freemius.com
 * Author:      Shabti Kaplan
 * Author URI:  https://www.dynamiapps.com/
 * Text Domain: acf-frontend-form-element
 * Domain Path: /languages/
 */
if ( !defined( 'ABSPATH' ) ) {
    exit;
}
if ( !function_exists( 'feap_fs' ) ) {
    function feap_fs()
    {
        return false;
    }

}

if ( !class_exists( 'Front_End_Admin_Pro' ) ) {
    
    if ( !defined( 'FEA_VERSION' ) ) {
        define( 'FEA_VERSION', '3.16.5' );
        define( 'FEA_PATH', __FILE__ );
        define( 'FEA_NAME', plugin_basename( __FILE__ ) );
        define( 'FEA_URL', plugin_dir_url( __FILE__ ) );
        define( 'FEA_DIR', __DIR__ );
        define( 'FEA_TITLE', 'Frontend Admin' );
        define( 'FEA_PREFIX', 'frontend_admin' );
        define( 'FEA_NS', 'acf-frontend-form-element' );
        define( 'FEA_PRO', 'https://www.dynamiapps.com/frontend-admin/#pricing' );
        define( 'FEA_PRE', 'fea' );
    }
    
    
    if ( !function_exists( 'fea_freemius' ) ) {
        function fea_freemius()
        {
            global  $fea_freemius ;
            if ( isset( $fea_freemius ) ) {
                return $fea_freemius;
            }
            if ( !defined( 'WP_FS__PRODUCT_5212_MULTISITE' ) ) {
                define( 'WP_FS__PRODUCT_5212_MULTISITE', true );
            }
            require_once dirname( __FILE__ ) . '/includes/freemius/start.php';
            $fea_freemius = fs_dynamic_init( array(
                'id'              => '5212',
                'slug'            => 'acf-frontend-form-element',
                'premium_slug'    => 'frontend-admin-pro',
                'type'            => 'plugin',
                'public_key'      => 'pk_771aff8259bcf0305b376eceb7637',
                'is_premium'      => true,
                'premium_suffix'  => 'Pro',
                'has_addons'      => false,
                'has_paid_plans'  => false,
                'trial'           => array(
                'days'               => 365,
                'is_require_payment' => false,
            ),
                'has_affiliation' => false,
                'menu'            => array(
                'slug'        => 'fea-settings',
                'contact'     => false,
                'support'     => false,
                'affiliation' => false,
            ),
                'is_live'         => true,
            ) );
            return $fea_freemius;
        }
        
        fea_freemius();
    }
    
    /**
     * Main Frontend Admin Class
     *
     * The main class that initiates and runs the plugin.
     *
     * @since 1.0.0
     */
    final class Front_End_Admin_Pro
    {
        /**
         * Constructor
         *
         * @since 1.0.0
         *
         * @access public
         */
        public function __construct()
        {
            global  $fea_instance ;
            if ( isset( $fea_instance ) ) {
                return;
            }
            do_action( 'front_end_admin_loaded' );
            do_action( 'front_end_admin_pro_loaded' );
            add_action( 'after_setup_theme', array( $this, 'init' ), 10 );
            //require_once 'pro/features.php';
        }
        
        /**
         * Initialize the plugin
         *
         * Load the plugin only after ACF is loaded.
         * Checks for basic plugin requirements, if one check fail don't continue,
         * If all checks have passed load the files required to run the plugin.
         *
         * Fired by `plugins_loaded` action hook.
         *
         * @since 1.0.0
         *
         * @access public
         */
        public function init()
        {
            include_once 'pro/plugin.php';
            global  $fea_pro_instance ;
            $fea_pro_instance = new \Frontend_Admin\Pro_Features( [
                'using_freemius' => true,
            ] );
            include_once 'main/plugin.php';
            global  $fea_instance ;
            $fea_instance = new \Frontend_Admin\Plugin( [
                'requires_acf' => false,
                'pro_version'  => true,
            ] );
        }
    
    }
    new Front_End_Admin_Pro();
}
