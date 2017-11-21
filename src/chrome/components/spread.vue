<style lang="less">
  .spread-wrap {
    position: fixed;
    background-color: rgb(255, 255, 255);
    left: 0px;
    top: 0px;
    z-index: 999999;
    display: flex;
    box-shadow: rgba(0, 0, 0, 0.39) 1px 1px 5px 0px;
    align-items: flex-start;

    .spread-inner {
      width: 320px;
      font-family: ~'"Microsoft YaHei", 微软雅黑';
      height: 570px;
      overflow: hidden;
      border-right: 1px solid rgb(234, 234, 234);
    }
    .spread-header {
      color: rgb(244, 67, 54);
      text-align: center;
      font-size: 20px;
      line-height: 40px;
      background: rgb(242, 242, 242);
    }
  }
</style>
<template>
  <div class="spread-wrap">
    <div ref="spread-download" class="spread-inner">
      <div class="spread-header">每日大牌折扣</div>
      <cover/>
      <div class="spread-desc">
        <specialty></specialty>
        <price></price>
      </div>
    </div>
    <right/>
  </div>
</template>

<script>
	import $ from 'jquery'
	import Right from './right.vue'
	import Cover from './cover.vue'
	import Specialty from './specialty.vue'
	import Price from './price.vue'
	import eventBus from './eventBus'

	export default {
		data() {
			return {
				show: true,
				spread: {}
			}
		},
		components: {
			Right,
			Cover,
			Specialty,
			Price
		}
	}
</script>