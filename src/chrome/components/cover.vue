<style lang="less">
  .spread-cover-wrap {
    position: relative;
    height: 240px;
    margin: 30px 0px;
    border-width: 1px 1px;
    border-style: solid none;
    border-color: rgb(217, 217, 217) rgb(217, 217, 217);
    border-image: initial;
    border-left: none;
    border-right: none;
    overflow: hidden;

    .spread-cover-img {
      width: 100%;
      position: relative;
    }
  }
</style>
<template>
  <div class="spread-cover-wrap">
    <div class="spread-flage">
      <img :src="`${extPath}images/i-discount.png`"/>
      <div class="spread-discount">2折</div>
    </div>
    <img ref="spread-cover" class="spread-cover-img"/>
  </div>
</template>
<script>
	import $ from 'jquery'
	import {extPath} from './extPath'

	export default {
		data() {
			return {
				extPath: extPath
			}
		}
	}
</script>