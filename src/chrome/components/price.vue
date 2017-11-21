<style lang="less">

</style>
<template>
  <div class="spread-erweima">
    <div class="spread-bottom-left">
      <!--<img :src="erweima">-->
      <div>长按二维码立即下单</div>
    </div>
    <div class="spread-bottom-right">
      <div class="spread-title">{{ spread.title ? spread.title : '填写商品' }}</div>
      <div class="spread-price">
              <span class="spread-red">
                <span>现价:</span>
                <span>{{ spread.price | priceFilter }}</span>元
              </span>
        <span class="spread-gray">
                <span> 原价:</span>
                <span>{{ spread.mark_price | priceFilter }}</span>
                <span>元</span>
              </span>
      </div>
      <div class="spread-logo">
        <img :src="spread.logo">
      </div>
    </div>
  </div>
</template>
<script>
	export default {
		data() {
			return {
				spread: {}
			}
		},
		filters: {
			priceFilter(price) {
				price = (price || '').replace(/\.0+$/g, '');
				return price ? price : '--.--';
			}
		}
	}
</script>