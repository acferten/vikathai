<template>
	<div class="jfb-pagination">
		<span class="jfb-pagination--results">
			{{
				__s(
					`Showing %d - %d of %d results.`,
					'jet-form-builder',
					queryState.itemsFrom,
					queryState.itemsTo,
					queryState.total,
				)
			}}
		</span>
		<cx-vui-pagination
			v-if="queryState.limit < queryState.total"
			:total="queryState.total"
			:page-size="queryState.limit"
			:current="queryState.currentPage"
			:disabled="isLoading"
			@on-change="changePage"
		></cx-vui-pagination>
		<div class="jfb-pagination--sort">
			<cx-vui-input
				:label="__( 'Results per page', 'jet-form-builder' )"
				@on-input-change="changeLimit"
				:value="queryState.limit"
				type="number"
				:min="1"
				:max="queryState.total"
				:disabled="isLoading"
			></cx-vui-input>
		</div>
	</div>
</template>

<script>
import ScopeStoreMixin from '../mixins/ScopeStoreMixin';

const { i18n, GetIncoming } = JetFBMixins;

const { mapState, mapGetters } = Vuex;

export default {
	name: 'TablePagination',
	mixins: [ i18n, GetIncoming, ScopeStoreMixin ],
	computed: {
		queryState() {
			return this.getter( 'queryState' );
		},
		isLoading() {
			return this.getter( 'isLoading', 'page' )
		}
	},
	methods: {
		changeLimit( { target: { value } } ) {
			if ( this.isLoading ) {
				return;
			}
			if ( this.queryState.total < value || ! value ) {
				value = this.queryState.total;
			}
			this.commit( 'setLimit', value );
			this.commit( 'setCurrentPage', 1 );
			this.dispatch( 'fetchPage' );
		},
		changePage( pageNum ) {
			if ( this.isLoading ) {
				return;
			}
			this.commit( 'setCurrentPage', pageNum );
			this.dispatch( 'fetchPage' );
		},
	},
};
</script>

<style lang="scss">

.jfb-pagination {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1.5em;
	margin-bottom: unset;

	&--sort {
		.cx-vui-component {
			column-gap: 1em;
			justify-content: center;
			align-items: center;
			padding: unset;
		}
	}

	.cx-vui-input {
		background-color: white;
	}

	li.cx-vui-pagination-item {
		width: 1.2em;
		height: 1.5em;
		border-radius: 5px;
		font-size: 1.15em;
		transition: all 0.3s ease-in-out;

		&-active, &:hover {
			box-shadow: 0 5px 5px -1px #bdbdbd;
			background-color: #007cba;
			color: #f5f5f5;
			border-color: #007cba;
		}
	}

}

</style>