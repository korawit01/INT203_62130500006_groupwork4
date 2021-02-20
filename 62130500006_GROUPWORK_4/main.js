    const app = {
        data() {
            return {
                searching: false,
                inputValue:'',
                bigPic:false,
                bigSrc:'',
                photos: [{
                        src: 'https://img.kapook.com/u/pirawan/Pet/persia.jpg',
                        title: 'Persian',
                        favor: false,
                        done: false,
                        show: true,
                    },
                    {
                        src: 'https://img.kapook.com/u/pirawan/Pet/americanshothair1.jpg',
                        title: 'American Shorthair',
                        favor: false,
                        done: false,
                        show: true,
                    },
                    {
                        src: 'https://img.kapook.com/u/pirawan/Pet/scottich.jpg',
                        title: 'Scottish Fold',
                        favor: false,
                        done: false,
                        show: true,
                    },
                    {
                        src: 'https://img.kapook.com/u/pirawan/Pet/wicheinmas.jpg',
                        title: 'Siamese',
                        favor: false,
                        done: false,
                        show: true,
                    },
                    {
                        src: 'https://img.kapook.com/u/pirawan/Pet/siamese1.jpg',
                        title: 'Korat',
                        favor: false,
                        done: false,
                        show: true,
                    },
                    {
                        src: 'https://img.kapook.com/u/pirawan/Pet/khaomanee2.jpg',
                        title: 'Khao Manee',
                        favor: false,
                        done: false,
                        show: true,
                    },
                    {
                        src: 'https://img.kapook.com/u/pirawan/Pet/shutterstock_113944567.jpg',
                        title: 'British Shorthair',
                        favor: false,
                        done: false,
                        show: true,
                    },
                    {
                        src: 'https://img.kapook.com/u/pirawan/Pet/exotic.jpg',
                        title: 'Exotic',
                        favor: false,
                        done: false,
                        show: true,
                    },
                    {
                        src: 'https://img.kapook.com/u/pirawan/Pet/shutterstock_96886009.jpg',
                        title: 'Main Coon',
                        favor: false,
                        done: false,
                        show: true,
                    },
                    {
                        src: 'https://img.kapook.com/u/pirawan/Pet/shutterstock_12862705.jpg',
                        title: 'Bengal',
                        favor: false,
                        done: false,
                        show: true,
                    }

                ],
               

            }
        },
        methods:{
            toggleLike(index){
                this.photos[index].favor = !this.photos[index].favor
            },
            cancelSearch(){
                this.searching = false;
                location.reload();
            },
            openSearch() {
                this.searching = true;
            },
            expand(index) {
                this.bigPic = true
                return this.bigSrc = this.photos[index].src;
            },
            close() {
                this.bigPic = false;
            }
        },
        computed: {
            countPic() {
                return this.photos.filter(t => !t.false).length
            },
            search(){   
                if(this.inputValue){
                this.photos = this.photos.filter((searchPic)=> {return searchPic.title.toLowerCase().includes(this.inputValue.toLowerCase())})
            }            
        },
            
        }    
        }
      
    mountedApp = Vue.createApp(app).mount('#app')