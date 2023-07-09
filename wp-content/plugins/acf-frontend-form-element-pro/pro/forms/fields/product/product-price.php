<?php

if( ! class_exists('acf_field_product_price') ) :

class acf_field_product_price extends acf_field_number {
	
	
	/*
	*  initialize
	*
	*  This function will setup the field type data
	*
	*  @type	function
	*  @date	5/03/2014
	*  @since	5.0.0
	*
	*  @param	n/a
	*  @return	n/a
	*/
	
	function initialize() {
		
		// vars
		$this->name = 'product_price';
		$this->label = __("Price",FEA_NS);
        $this->category = __( "Product", FEA_NS );
		$this->defaults = array(
			'default_value'	=> '',
			'min'			=> '0',
			'max'			=> '',
			'step'			=> '0.01',
			'placeholder'	=> '',
			'prepend'		=> '',
			'append'		=> ''
		);
        add_filter( 'acf/load_field/type=number',  [ $this, 'load_price_field'], 2 );
        add_filter( 'acf/update_value/type=' . $this->name,  [ $this, 'pre_update_value'], 9, 3 );      
	}

    function load_price_field( $field ){
        if( ! empty( $field['custom_price'] ) ){
            $field['type'] = 'product_price';
        }
        return $field;
    }

    function prepare_field( $field ){
        if( isset( $GLOBALS['form_fields'] ) ){
            $fields = $GLOBALS['form_fields'];    
            $field['conditional_logic'] = array(
                array(
                    array(
                        'field' => $fields['product_types'],
                        'operator' => '==',
                        'value' => 'simple',
                    ),
                ),
                array(
                    array(
                        'field' => $fields['product_types'],
                        'operator' => '==',
                        'value' => 'external',
                    ),
                ),
            );
        }
        return $field;
    }
    function load_value( $value, $post_id = false, $field = false ){
        $value = get_post_meta( $post_id, '_regular_price', true );
        return $value;
    }
    

  function load_field( $field ){
      $field['name'] = $field['type'];
      return $field;
}
  function pre_update_value( $value, $post_id = false, $field = false ){
        update_metadata( 'post', $post_id, '_regular_price', $value );
        $sale_price = get_post_meta( $post_id, '_sale_price', true );
        if( ! $sale_price ){
            update_metadata( 'post', $post_id, '_price', $value );
        }
        return null;
    }

    function update_value( $value, $post_id = false, $field = false ){
        return null;
    }
    function render_field( $field ){
        $field['type'] = 'number';
        parent::render_field( $field );
        acf_hidden_input( array( 'name' => 'acff[woo_product][price_field]', 'value' => $field['key'] ) );
    }
}

// initialize
acf_register_field_type( 'acf_field_product_price' );

endif; // class_exists check

?>