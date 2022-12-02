var app = new Vue({
    el: '#root',
  
    // data
    data:{
      imgList: [

        "https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?cs=srgb&dl=clouds-country-daylight-371633.jpg&fm=jpg",

        "https://static.photocdn.pt/images/articles/2017/04/28/iStock-646511634.jpg",

        "https://cdn.mos.cms.futurecdn.net/FUE7XiFApEqWZQ85wYcAfM.jpg",

        "https://static.photocdn.pt/images/articles/2017/04/28/iStock-546424192.jpg",

      ],

      imgIDX: 0,

    },
  
    // methods
    methods: {

        next: function() {
          this.imgIDX += 1;
          if(this.imgIDX > this.imgList.length - 1) {
            this.imgIDX = 0
          }
    
    
        },
        prev: function() {
          this.imgIDX -= 1;
          if(this.imgIDX < 0) {
            this.imgIDX = this.imgList.length - 1  // ultima posizione dell'array
          }
        },

        selectImageIdx: function(newIndex) {
            this.imgIDX = newIndex;
        },

    }
  
  })
  
  // vue extension chrome
  Vue.config.devtools = true;