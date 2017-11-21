<style lang="less" scoped="">
  .spread-right-query {
    width: 110px;
    text-align: center;

    .spread-download-png {
      cursor: pointer;
      background-color: rgb(244, 67, 54);
      color: #fff;
      border-radius: 3px;
      margin: 0 10px;
      padding: 3px 5px;
      font-size: 14px;
      margin-top: 10px;
      user-select: none;
    }
    .model-spread-cover-wrap {
      position: relative;
    }
    .model-spread-cover {
      opacity: 0.01;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0px;
      left: 0px;
    }

    .spread-cps-check{
      font-size: 12px;
      text-align: left;
      padding: 10px;;

      .spread-check{
        color: blueviolet;
      }
      .spread-green{
        color: #32CD74;
      }
      .spread-red{
        color: #f44336;
      }
    }
  }
</style>
<template>
  <div class="spread-right-query">
    <div class="spread-download-png">下载</div>
    <div class="spread-download-png spread-download-close" @click="hideSpreadBox">关闭</div>
    <div class="spread-download-png model-spread-cover-wrap">
      上传
      <input id="model-spread-cover" type="file" name="cover" class="model-spread-cover"
             accept="image/jpg,image/jpeg,image/png,image/gif">
    </div>
    <div class="spread-cps-check">
      <div class="spread-cps spread-check">检查中...</div>
      <div class="spread-cps spread-red">没有CPS</div>
      <div class="spread-cps spread-green">有CPS链接</div>
    </div>
  </div>
</template>
<script>
	import $ from 'jquery'
	import eventBus from './eventBus'

	export default {
		methods: {
			hideSpreadBox() {
				eventBus.$emit('hide-spread-box')
			}
		}
	}
</script>