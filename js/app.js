const apiKey = "api_key=bfbce0b99d527275ec8e7cd01aa2103d";
const popular = "https://api.themoviedb.org/3/movie/popular?";

new Vue({
    el: "#app",
    data : {
        list :  [],
        generalPosterPath : "https://image.tmdb.org/t/p/w185/",
        filmName : '',
    },

    methods : {
        loadPopular() {
            this.cleanList();
            axios.get(popular + apiKey)
                .then(popularMovie => {
                this.list = popularMovie.data.results;
                this.convertVoteAverage();
            })
        },

        search() {
            this.cleanList();
            this.getList();
        },

        // Get all movies and tv show
        getList() {
            const url = "https://api.themoviedb.org/3/search/multi?";
            this.cleanList()
            axios.get(url + apiKey + "&query=" + this.filmName)
                .then(multiList => {
                    this.list = multiList.data.results;
                    this.convertVoteAverage();
            })
        },

        // Convert Vote Average
        convertVoteAverage() {
            this.list.forEach(el => {
                el.vote_average = Math.ceil(el.vote_average / 2)
            });
        },

        // Clean array list
        cleanList() {
            this.list = [];
        }

    },

    mounted: function() {
        this.loadPopular();

    }
})