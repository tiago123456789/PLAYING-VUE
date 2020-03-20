<template>
    <div class="gui-card" 
        v-on:mouseout="removeFocus"
        v-on:mouseover="applyFocus" v-bind:style="focus">
        <div class="gui-card__media">
            <img class="gui-card__img" v-bind:src="source" alt="" />
        </div>
        <div class="gui-card__details">
        <div class="gui-card__title">
            {{ title }}
        </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Movie",
    props: [ "title", "source" ],
    data() {
        return {
            focus: false
        }
    },
    methods: {
        applyFocus() {
             this.focus = `
                color: red;
                transform: scale(1.9);
                margin-right: 110px;
            `;
        },
        removeFocus() {
            this.focus = "";
        }
    }
}
</script>

<style>
</style>