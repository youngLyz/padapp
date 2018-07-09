<template>
	<div>
		<div class="layout">
			<transition :name="transitionName"> 
			    <router-view class="child-view"></router-view>
			</transition>				 
		</div>
		<home-footer></home-footer>
	</div>
</template>

<script type="text/javascript">
	import HomeFooter from './Footer'
	export default {
		name: 'Layout',
		data () {
			return {
				transitionName: 'slide-go'
			}
		},
		components: {
			HomeFooter
		},
		watch: {
	      '$route' (to, from) {

	        if (from.query.order) {
	          if (to.query.order > from.query.order) {
	            this.transitionName = 'slide-go'
	          } else {
	            this.transitionName = 'slide-back'
	          }
	        } else {
	          this.transitionName = 'slide-go'
	        }
	        console.log(this.transitionName);
	      }
	    }
	}
</script>

<style lang="scss" scoped>
@mixin ani01-transform{
  -webkit-transition: transform 0.4s cubic-bezier(.55,0,.1,1);
  transition: transform 0.4s cubic-bezier(.55,0,.1,1);
}
/* 路由动画 */
.child-view {
   position: absolute;
   width:100%;
   transition: all .4s cubic-bezier(.55,0,.1,1);
}
.slide-go-enter-active,.slide-go-leave-active,
.slide-back-enter-active,.slide-back-leave-active{
  @include ani01-transform;
}


.slide-go-leave{
  -webkit-transform: translate3d(0,0,0);
  transform: translate3d(0,0,0);
}
.slide-go-leave-to{
  -webkit-transform: translate3d(-100%,0,0);
  transform: translate3d(-100%,0,0);
}

.slide-go-enter{
  -webkit-transform: translate3d(100%,0,0);
  transform: translate3d(100%,0,0);
}
.slide-go-enter-to{
  -webkit-transform: translate3d(0%,0,0);
  transform: translate3d(0%,0,0);
}
.slide-back-leave{
  -webkit-transform: translate3d(0,0,0);
  transform: translate3d(0,0,0);
}
.slide-back-leave-to{
  -webkit-transform: translate3d(100%,0,0);
  transform: translate3d(100%,0,0);
}

.slide-back-enter{
  -webkit-transform: translate3d(-100%,0,0);
  transform: translate3d(-100%,0,0);
}
.slide-back-enter-to{
  -webkit-transform: translate3d(0%,0,0);
  transform: translate3d(0%,0,0);
}
</style>