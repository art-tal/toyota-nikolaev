<template>
    <section class="container-fluid">

    </section>
</template>

<script>
    export default {
        name: "GoogleMap",

        props: [
            'name',
        ],

        data() {
            return {
                map: "",
            }
        },

        computed: {
            mapMarkers() {
                return this.markers;
            },
        },

        mounted() {
            const element = document.getElementById(this.name);
            const option = {
                zoom: 14,
                center: new google.maps.LatLng(59.93, 30.32),
            };
            this.map = new google.maps.Map(element, option);
        },

        methods: {},
    }
</script>

<style lang="scss" scoped>

    section.container-fluid {
        width: 100%;
        margin: 0;
        padding: 0;
    }

</style>