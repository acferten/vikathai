<template>
	<div id="poststuff">
		<div id="post-body" :class="bodyClasses">
			<div id="post-body-content" v-if="$slots.topBody">
				<slot name="topBody"></slot>
			</div>
			<PostBoxContainer
				v-for="({ wrap_id, id, classes, boxes }) in containers"
				:key="wrap_id"
				:wrap-id="wrap_id"
				:id="id"
				:classes="classes"
			>
				<PostBoxSimple
					v-for="({
						slug,
						title,
						list,
						render_type = false
					}) in boxes"
					:key="slug"
					:slug="slug"
					:title="title"
					:list="list"
					:render-type="render_type"
				>
					<template #header-actions>
						<slot :name="'header-actions-' + slug" v-bind="{ list }"></slot>
					</template>
					<template #default>
						<slot :name="'body-' + slug" v-bind="{ list }"></slot>
					</template>
					<template #before>
						<slot :name="'before-' + slug" v-bind="{ list }"></slot>
					</template>
					<template #after>
						<slot :name="'after-' + slug" v-bind="{ list }"></slot>
					</template>
					<template #in-header v-if="$slots['in-header-' + slug ]">
						<slot :name="'in-header-' + slug"></slot>
					</template>
					<template #in-footer v-if="$slots['in-footer-' + slug ]">
						<slot :name="'in-footer-' + slug"></slot>
					</template>
				</PostBoxSimple>
			</PostBoxContainer>
		</div>
	</div>
</template>

<script>
import PostBoxContainer from './PostBoxContainer';
import PostBoxSimple from './PostBoxSimple';
import EditTableSwitcher from './BoxActions/EditTableSwitcher';

export default {
	name: 'PostBoxGrid',
	props: {
		containers: {
			type: Array,
			default() {
				return window?.JetFBPageConfig?.containers ?? [];
			},
		},
	},
	components: {
		EditTableSwitcher,
		PostBoxContainer,
		PostBoxSimple,
	},
	computed: {
		bodyClasses() {
			return {
				'metabox-holder': true,
				[ 'columns-' + this.containers?.length ]: true,
			};
		},
	},
};
</script>

<style>

</style>