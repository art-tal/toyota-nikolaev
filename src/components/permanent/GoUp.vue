<template>
    <div class="up">
        <img src="../../img/icon/Up-sm.png" alt="UP" @click="up()" title="Нагору">
    </div>
</template>

<script>
    export default {
        name: "GoUp",


        methods: {
            up() {
                window.scrollTo(pageXOffset, 0);
            },
        },
    }
</script>

<style lang="scss" scoped>
    @import '../../styles/variables';

    /*@keyframes rotate_arrow {*/
    /*    0% {*/
    /*        transform: rotateY(0);*/
    /*    }*/
    /*    100% {*/
    /*        transform: rotateY(360deg);*/
    /*    }*/

    /*}*/

    .up {
        width: 50px;
        position: fixed;
        bottom: 10px;
        left: 10px;
        z-index: 200;
        animation-name: rotate_arrow;
        animation-duration: 5s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
        animation-delay: 0ms;
        animation-play-state: running;
        cursor: pointer;
        img {
            width: 100%;
        }
    }

</style>