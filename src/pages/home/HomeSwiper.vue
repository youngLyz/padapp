<template>
	<swiper :options="swiperOption" class="home-swiper">
		<swiper-slide v-for="item of swiperList" :key="item.id">
			<img class="home-swiper-img" :src="item.img" alt="swiper-image">
		</swiper-slide>	
		<div class="swiper-pagination" slot="pagination"></div>
	</swiper>
</template>

<script type="text/javascript">
	import 'swiper/dist/css/swiper.css'
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	export default {
		name: 'HomeSwiper',
		props:{
			swiperList:Array
		},
		data () {
			return {
				swiperOption: {
		          pagination: {
		            el: '.swiper-pagination'
		          }
		        }
				
			}
			
		},
		components: {
			swiper,
    		swiperSlide
		}
	}
</script>
<style lang="scss" scoped>
.home-swiper /deep/ .swiper-pagination-bullet{
		width:16px;
		height: 16px;
		margin:0 8px;
	}
.home-swiper{	
	overflow: hidden;
	width: 100%;
	height:4rem;		
	margin-top: 1.3rem;	
}
.home-swiper-img{
	width: 100%;
	height: 100%;
}
</style>