<template>
	<input
		type="date"
		class="cx-vui-input size-fullwidth"
		:value="filter.selected"
		@input="onChangeFilter($event.target.value)"
		:max="now"
	>
</template>

<script>

const {
	      ColumnWrapper,
      } = JetFBComponents;

const {
	      i18n,
	      FilterMixin,
      } = JetFBMixins;

let now = new Date( Date.now() - 8640000 ).toJSON();
[ now ] = now.split( 'T' );

export default {
	name: 'DateFromFilter',
	components: {
		ColumnWrapper,
	},
	data() {
		return {
			filter_id: 'date_from',
			now,
		};
	},
	mixins: [ i18n, FilterMixin ],
};
</script>
