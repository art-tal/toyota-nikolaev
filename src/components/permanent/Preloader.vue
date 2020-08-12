<template>
    <div class="preloader_car">
        <div class="show_preloader">
            <img src="../../img/icon/toyota-ico-04.png" alt="icon">
        </div>
    </div>
</template>

<script>
    export default {
        name: "Preloader"


    }
</script>

<style lang="scss" scoped>

    @keyframes rotate_icon {
        0% {
            transform: rotateY(0);
        }
        50% {
            transform: rotateY(360deg);

        }
        51% {
            transform: rotateX(0deg);
        }
        100% {
            transform: rotateX(360deg);
        }
    }

    .preloader_car {
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        background-color: rgba(255,255,255,0.5);
        .show_preloader{
            position: fixed;
            top: 50%;
            left: calc(50% - 75px);
            z-index: 100;
            animation-name: rotate_icon;
            animation-duration: 1s;
            animation-iteration-count: infinite;
            animation-timing-function: ease-in-out;
            animation-delay: 0ms;
            animation-play-state: running;
            img {
                width: 150px;
            }
        }
    }

</style>