<style lang="less">

</style>
<template>
  <div class="spread-tedian">
    <span class="spread-red">产品特点：</span>
    <span contenteditable="true">{{ spread.desc ? spread.desc : '填写商品特点' }}</span>
  </div>
</template>
<script>
	export default {
		data() {
			return {
				spread: {}
			}
		}
	}
</script>