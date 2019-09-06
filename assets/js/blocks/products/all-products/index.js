/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { InnerBlocks } from '@wordpress/editor';
import { registerBlockType } from '@wordpress/blocks';
import Gridicon from 'gridicons';

/**
 * Internal dependencies
 */
import Editor from './edit';
import sharedAttributes from '../attributes';
import '../../../atomic/blocks/product-list';

/**
 * Register and run the "All Products" block.
 */
registerBlockType( 'woocommerce/all-products', {
	title: __( 'All Products', 'woo-gutenberg-products-block' ),
	icon: {
		src: <Gridicon icon="grid" />,
		foreground: '#96588a',
	},
	category: 'woocommerce',
	keywords: [ __( 'WooCommerce', 'woo-gutenberg-products-block' ) ],
	description: __(
		'Show all products.',
		'woo-gutenberg-products-block'
	),
	supports: {
		align: [ 'wide', 'full' ],
		html: false,
	},
	attributes: {
		...sharedAttributes,
	},

	/**
	 * Renders and manages the block.
	 */
	edit( props ) {
		return <Editor { ...props } />;
	},

	/**
	 * Save the props to post content.
	 */
	save() {
		return (
			<div>
				<InnerBlocks.Content />
			</div>
		);
	},
} );
