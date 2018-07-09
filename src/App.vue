<template>
  <div >  
  	 <transition :name="transitionName"> 
	    <router-view class="child-view"></router-view>
	</transition>
  </div>
</template>

<script>
export default {
  	name: 'App',
  	data () {
  	  return {
  	    transitionName : 'slide-left'
  	  }
  	}/*,
  	beforeRouteUpdate (to, from, next) {
  		console.log("beforeRouteUpdate:")
  		let isBack = this.$router.isBack;		

          if(isBack){
              this.transitionName = 'slide-right'
          } else {
              this.transitionName = 'slide-left'
          }
          this.$router.isBack = false
          next()
  	}	*/
  }
</script>

<style lang="scss" scoped>
.child-view {
   position: absolute;
   width:100%;
   transition: all .4s cubic-bezier(.55,0,.1,1);
}
.slide-left-enter, .slide-right-leave-active {
   opacity: 0;
  /* -webkit-transform: translate(150px, 0);
   transform: translate(150px, 0);*/
   
}
.slide-left-leave-active, .slide-right-enter {
   opacity: 0;/*
   -webkit-transform: translate(-150px, 0);
   transform: translate(-150px, 0);*/
}

</style>
