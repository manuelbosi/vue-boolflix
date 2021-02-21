const apiKey = "api_key=bfbce0b99d527275ec8e7cd01aa2103d";
const popular = "https://api.themoviedb.org/3/movie/popular?";

new Vue({
    el: "#app",
    data : {
        list :  [],
        generalPosterPath : "https://image.tmdb.org/t/p/w185/",


    },

    methods : {
        loadPopular() {
            axios.get(popular + apiKey)
                .then(popularMovie => {
                this.list = popularMovie.data.results;
                    console.log(popularMovie.data.results)
                for (let i = 0; i < popularMovie.data.results.length; i++) {
                    const el = popularMovie.data.results[i];
                    el.vote_average = Math.ceil(el.vote_average / 2)
                }
            })
        }
    },

    mounted: function() {
        this.loadPopular();

    }
})