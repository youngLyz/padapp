<template>
	<div>
		<dialogs-wrapper wrapper-name="confirm-message" tag="div" transition-name="fade">			
		</dialogs-wrapper>
		<header class="header">
			<span @click="handleReturnClick" class="header-back iconfont">&#xe64f;</span>
			<span class="bookName">{{ currentBook.name }}</span>
			<span class="bookPage">
				<input class="bookPageInput" v-model.number="page" type="number"> /{{numPages}}	
			</span>
			<span class="iconfont book-mark"
				@click="bookMarkOperate"
				v-html="bookMarkIcon"></span>
		</header>
		<div class="page-body" ref="readBookBody"> 
			<div class="book-body">
				<v-touch
			        v-on:swipeleft="onSwipeLeft"
			        v-on:swiperight="onSwipeRight"
			        v-on:panup="onSwipeUp"
			        v-on:pandown="onSwipeDown"
			        >
			        <pdf	          
			          ref="pdf"	          
			          :src="currentBook.url"
			          :page="page"	         
			          @password="password"
			          @progress="loadedRatio = $event"
			          @error="error"
			          @num-pages="numPages = $event"
			          @link-clicked="page = $event">
			        </pdf>
			      </v-touch>
			</div>
	      
	    </div>
	    
	</div>
</template>

<script type="text/javascript">
	import pdf from 'vue-pdf';

	export default {
		name: 'ReadBook',
		data() {
			return {
				currentBook: null,
				page: 1,
	      		numPages: 0,
	      		bookMark:null,
	      		isAdd:true,
	      		addIcon:'&#xe660;',
	      		removeIcon:'&#xe6b7;'
			}
		},
		components:{
			pdf
		},
		computed: {
			bookMarkIcon() {
				if(this.bookMark&&this.bookMark===this.page){					
					return this.removeIcon;
				}else{
					return this.isAdd?this.addIcon:this.removeIcon;	
				}
				
			}
		},
		watch:{
			page() {
				this.isAdd = this.bookMark&&this.bookMark===this.page?false:true;
			}
		},
		methods: {
			 password(updatePassword) {
		      updatePassword(true/* window.prompt('password is "test"') */);
		    },
		    error(err) {
		      window.console.log(err);
		    },
		    onSwipeLeft() {
		    	if(this.page < this.numPages){
		    		this.page += 1;
		    		this.scrollBodyTop();		
		    	}
		      
		    },
		    onSwipeRight() {
		    	if(this.page > 1){
		    		this.page -= 1;
		    		this.scrollBodyTop();	
		    	}
		      
		    },
		    onSwipeUp() {
		    	//console.log('up')
		    	this.$refs.readBookBody.scrollTop += 6;
		    },
		    onSwipeDown() {
		    	//console.log('down')
		    	let scrollTop = this.$refs.readBookBody.scrollTop
		    	if(scrollTop>6){
		    		this.$refs.readBookBody.scrollTop -= 6;
		    	}else{
		    		this.$refs.readBookBody.scrollTop = 0;
		    	}		    	
		    },
		    bookMarkOperate() {
		    	if (this.isAdd) {
		    		this.$confirmMsg('提示','要添加书签吗？').then(res=>{		    		
			    		if(res){
			    			this.isAdd = false
			    			this.bookMark = this.page;
			    			window.localStorage.setItem("bookMark"+this.currentBook.id,this.page);
			    		}
			    	});	
		    	}else{
		    		this.$confirmMsg('提示','确认要删除书签吗？').then(res=>{		    		
			    		if(res){
			    			this.isAdd = true
			    			this.bookMark = null;
			    			window.localStorage.removeItem("bookMark"+this.currentBook.id);
			    		}
			    	});	
		    	}	    	
		    	    
		    },
		    scrollBodyTop() {
		    	this.$refs.readBookBody.scrollTop = 0;
		    },
		    handleReturnClick () {		      
		      this.$router.go(-1);  
		    }
		},
		created() {
			
			let bookId = this.$route.params.bookId;
			JSI.getPdfFile((res)=>{
				this.currentBook = res.find((item,index)=>{
						return item.id == bookId;
					});
				let bookMark = window.localStorage.getItem("bookMark"+this.currentBook.id);
				if(bookMark){
					this.bookMark = this.page = Number(bookMark);
				}
			});

			/*this.currentBook = {
					id:bookId,
					name:'建筑八大员考试参考资料文档二',
					url:'http://127.0.0.1:7070/pdf?name=01.pdf'//'https://cdn.mozilla.net/pdfjs/tracemonkey.pdf'//
				};	*/
		}
	}
</script>

<style lang="scss" scoped>
.header{
  width: 100%;
  height: $title-height;
  line-height: $title-height;
  background: $bg-grey;
  position: fixed;
  top:0;
  left: 0;
  z-index: 99;  
  text-align: center;
  @include page-title; 

  .header-back{
    color: $blue;
    font-size: $font36;    
    width: 1.8rem;
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 100;
  }

  .bookName{
  	color: $blue;
  	font-weight: 600;
  }

  .bookPage{
  	margin-left: .25rem;
  	color: $blue;
  	font-size: $font18; 

  	.bookPageInput{
  		border: none;
  		background: transparent;
  		color: $color-orange;
  		font-size: $font18;
  		width:1rem;
  		text-align: right;
  	}
  }
  .book-mark{
  	font-size: $font36;
  	color: $color-red;
  	width: 1.8rem;
  	display: block;
  	position: absolute;
    right: 0;
    top: 0;
    z-index: 100;
  }
  
}
.page-body{	
	position: fixed;
	top:$title-height;
	left:0;
	right: 0;
	bottom: .5rem;
	z-index: 98;
	overflow-y: auto;/*
	.book-body{
		width:100%;
		overflow-y: auto;
	}*/
}

</style>