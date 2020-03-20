<template>
    <div class="slider">
      
      <h3>{{title}}</h3>
      <span v-on:mouseover="scrollToLeft()" v-on:mouseout="clearScroll()" class="handle handlePrev active">
        <i class="fa fa-caret-left" aria-hidden="true"></i>
      </span>

      <div ref="scroller" class="row">
        <div class="row__inner">
          <Movie 
            title="teste" 
            source="https://img1.ibxk.com.br/2015/11/12/12134915138723.jpg?w=700"></Movie>
         
          <Movie 
            title="teste" 
            source="https://img1.ibxk.com.br/2015/11/12/12134915138723.jpg?w=700"></Movie>
         
          <Movie 
            title="teste" 
            source="https://img1.ibxk.com.br/2015/11/12/12134915138723.jpg?w=700"></Movie>
         
          <Movie 
            title="teste" 
            source="https://img1.ibxk.com.br/2015/11/12/12134915138723.jpg?w=700"></Movie>
         
          <Movie 
            title="teste" 
            source="https://img1.ibxk.com.br/2015/11/12/12134915138723.jpg?w=700"></Movie>
         
          <Movie 
            title="teste" 
            source="https://img1.ibxk.com.br/2015/11/12/12134915138723.jpg?w=700"></Movie>
         
          <Movie 
            title="teste" 
            source="https://img1.ibxk.com.br/2015/11/12/12134915138723.jpg?w=700"></Movie>
         
          <Movie 
            title="teste" 
            source="https://img1.ibxk.com.br/2015/11/12/12134915138723.jpg?w=700"></Movie>
         
         
        </div>
      </div>
      <span v-on:mouseover="scrollToRight()" v-on:mouseout="clearScroll()"
       class="handle handleNext active">
        <i class="fa fa-caret-right" aria-hidden="true"></i>
      </span>
    </div>
</template>

<script>

import Movie from "./Movie";

export default {
    name: "Category",
    props: [ "title" ],
    components: {
        Movie: Movie
    },
    datas: {
        intervalo: null
    },
    methods: {
        scrollToRight: function() {
        this.intervalo = setInterval(() => this.$refs.scroller.scrollLeft += 1, 5);
        },

        scrollToLeft: function() {
        this.intervalo = setInterval(() => this.$refs.scroller.scrollLeft -= 1, 5);
        },

        clearScroll: function() {
            clearInterval(this.intervalo);
        }
    },
}
</script>