<style lang="less">

</style>
<template>
  <div class="spread-outer-wrap">
    <spread v-if="showSpread"></spread>
    <breviary v-else></breviary>
  </div>
</template>

<script>
	import Spread from './spread.vue'
	import Breviary from './breviary.vue'
	import eventBus from './eventBus'

	export default {
		data() {
			return {
				showSpread: false
			}
		},
		created() {
			eventBus.$on('show-spread-box', () => {
				this.showSpread = true
			})
			eventBus.$on('hide-spread-box', () => {
				this.showSpread = false
			})
		},
		components: {
			Spread,
			Breviary
		}
	}
</script>