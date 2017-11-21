<style lang="less">
  .my-spider-detail {
    position: fixed;
    background-color: rgb(255, 255, 255);
    left: 0px;
    top: 0px;
    z-index: 99999;
    display: flex;
    box-shadow: rgba(0, 0, 0, 0.39) 1px 1px 5px 0px;
    align-items: stretch;
    flex-direction: column;
    padding: 20px;
    text-align: center;
    > span {
      display: block;
      cursor: pointer;
      background-color: rgb(244, 67, 54);
      color: rgb(255, 255, 255);
      font-size: 14px;
      border-radius: 3px;
      padding: 3px 5px;
      user-select: none;
      &:nth-child(2) {
        margin-top: 10px;
      }
    }
  }

  .my-spider-detail-acquisition.success,
  .my-spider-detail-generation.success,
  .my-spider-detail-acquisition.my-spider-link-success,
  .my-spider-detail-generation.my-spider-link-success {
    background: #4CAF50;
  }

  .my-spider-detail-acquisition.error,
  .my-spider-detail-generation.error,
  .my-spider-detail-acquisition.my-spider-link-error,
  .my-spider-detail-generation.my-spider-link-error {
    background: #F44336;
  }
</style>
<template>
  <div class="my-spider-detail">
    <span class="my-spider-detail-acquisition success">已采集</span>
    <span class="my-spider-detail-generation" @click="hideSpreadBox">生成传播图</span>
  </div>
</template>
<script>
	import $ from 'jquery'
	import eventBus from './eventBus'

	export default {
		methods: {
			hideSpreadBox() {
				eventBus.$emit('show-spread-box')
			}
		}
	}
</script>