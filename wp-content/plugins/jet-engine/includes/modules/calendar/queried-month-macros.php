<?php

class Jet_Engine_Queried_Month_Macros extends Jet_Engine_Base_Macros {

	/**
	 * Returns macros tag
	 *
	 * @return string
	 */
	public function macros_tag() {
		return 'calendar_queried_month';
	}

	/**
	 * Returns macros name
	 *
	 * @return string
	 */
	public function macros_name() {
		return 'Dynamic Calendar: Queried Month';
	}

	/**
	 * Callback function to return macros value
	 *
	 * @return string
	 */
	public function macros_callback( $args = array() ) {
		
		$range  = wp_cache_get( 'jet_engine_calendar_requested_dates' );
		$return = ! empty( $args['return'] ) ? $args['return'] : 'start';
		$format = ! empty( $args['format'] ) ? $args['format'] : 'timestamp';

		if ( empty( $range ) ) {
			$range = $this->get_fallabck_range();
		}

		$result = $range[ $return ];

		if ( $result && 'timestamp' !== $format ) {
			$result = date( 'Y-m-d H:i:s' );
		}		

		return $result;
	}

	public function get_fallabck_range() {

		if ( isset( $_REQUEST['month'] ) ) {
			$month = date( '1 F Y', strtotime( $_REQUEST['month'] ) );
		} else {
			$month = date( '1 F Y', strtotime( 'this month' ) );
		}

		$month = strtotime( $month );

		return array(
			'start' => $month,
			'end'   => strtotime( date( 'Y-m-t 23:59:59', $month ) ),
		);

	}

	/**
	 * Optionally return custom macros attributes array
	 *
	 * @return array
	 */
	public function macros_args() {
		return array(
			'return' => array(
				'label'   => __( 'Return', 'jet-engine' ),
				'type'    => 'select',
				'options' => array(
					'start' => __( 'Start of month', 'jet-engine' ),
					'end'   => __( 'End of month', 'jet-engine' ),
				),
				'default' => 'start',
			),
			'format' => array(
				'label'   => __( 'Date format', 'jet-engine' ),
				'type'    => 'select',
				'options' => array(
					'timestamp' => __( 'Timestamp', 'jet-engine' ),
					'sql_date'  => __( 'SQL Date', 'jet-engine' ),
				),
				'default' => 'timestamp',
			),
		);
	}

}