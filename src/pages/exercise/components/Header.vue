<template>
  <header>
    <div class="header">    
      <a class="header-arrow" href="javascript:void(0)" @click="headerArrowClick">
        {{currentTitle.qk_name}}<span class="iconfont">&#xe635;</span>
      </a>      
    </div>
    <transition 
        name="custom-classes-transition"
        enter-active-class="animated slideInDown"
        leave-active-class="animated slideOutUp">
      <div class="header-list" v-show="isShow">        
        <ul class="list">
          <li class="list-item"
              v-for="(item,index) of titleList"
              :key="index"
              @click="changeTitleClick(item)"
            >{{item.qk_name}}</li>         

          <router-link to="/home" tag="li" class="list-item">
            切换岗位
            <span class="iconfont">&#xe628;</span>
          </router-link>
        </ul>        
      </div> 
    </transition>     
  </header>
  
</template>

<script>
import { mapState,mapActions } from 'vuex'
export default {
  name: 'ExerHeader',
  props:['title'],
  data () {
    return {
      currentTitle:this.title,
      isShow: false
    
    }
  },
  computed: {
      ...mapState(['firstClz','secondClz','postClz']),
      titleList () {
        //debugger
        let fs = this.postClz.find((item,index)=>{
          return item.firstClass.id==this.title.fid;
        });
        return fs.secondClass||[];
      }
    },  
  methods: {
    ...mapActions(['setCurrentClaz']),
    headerArrowClick () {
     /* if(this.isShow){
        this.$refs.headerIcon.innerHTML = '&#xe635;';  
      }else{
        this.$refs.headerIcon.innerHTML = '&#xe634;';  
      }*/
      this.isShow = !this.isShow;
      
    },
    changeTitleClick (newTitle) {
      this.currentTitle = newTitle;
      this.isShow = false;
      JSI.initQuestionBank(
        {
          "post":this.$store.state.firstClz.id,
          "know":this.currentTitle.id
        },
        function(params){
          console.log("updatePostClass");
        });
      this.setCurrentClaz({firstClz:this.$store.state.firstClz,secondClz:this.currentTitle});
      //other action
    }
  }
}
</script>

<style lang="scss" scoped>
.header{
  width: 100%;
  height: $title-height;
  line-height: $title-height;
  background: $blue;
  position: fixed;
  top:0;
  left: 0;
  z-index: 99;  
  text-align: center;
  @include page-title; 
  .header-arrow{
    font-size: $font24;
    color: $color-white;

    .iconfont{
      font-size: $font24;
    }
  }  
}

.header-list{
  position: fixed;
  top:$title-height;
  left: 0;
  bottom: 0;
  background: rgba(0,0,0,.1);
  z-index: 98; 
  width: 100%;
}
.list{
    padding: 0 0.784rem;
    background: $color-white;
    .list-item{
      width: 100%;
      height: 1.192rem;
      line-height: 1.192rem;
      color: $blue;
      font-size: $font18;
      text-align: center;      
      @include border-bottom;
      &:last-child{
        font-size:$font20;
        color: $color-dark-grey;        
      }
    }
  }
</style>
