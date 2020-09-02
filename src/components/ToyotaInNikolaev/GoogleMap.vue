<template>
    <section class="container-fluid">
        <div id="map"></div>
<!--        <script async defer-->
<!--                src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB-u4nvtsjX5fgA3EUgfl3vUQP6uKhn-FM&callback=initMap">-->
<!--        </script>-->
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

        },

        mounted() {

        },

        methods: {
            initMap() {
        let element = document.getElementById('map');
        let options = {
            zoom: 5,
            center: {lat: 55.7558, lng: 37.6173},
        };

        let myMap = new google.maps.Map(element, options);

        let markers = [
            {
                coordinates: {lat: 55.751956, lng: 37.622634},
                info: '<h3>Москва</h3><br><img src="https://placehold.it/200x150"><br><p>Описание</p>'
            },
            {
                coordinates: {lat: 59.940208, lng: 30.328092},
                info: '<h3>Санкт-Петербург</h3><br> <img src="https://placehold.it/200x150"><br><p>Описание</p>'
            },
            {
                coordinates: {lat: 50.449973, lng: 30.524911},
                info: '<h3>Киев</h3><br><img src="https://placehold.it/200x150"><br><p>Описание</p>'
            }
        ];

        for(let i = 0; i < markers.length; i++) {
            addMarker(markers[i]);
        }

        function addMarker(properties) {
            let marker = new google.maps.Marker({
                position: properties.coordinates,
                map: myMap
            });

            if(properties.image) {
                marker.setIcon(properties.image);
            }

            if(properties.info) {
                let InfoWindow = new google.maps.InfoWindow({
                    content: properties.info
                });

                marker.addListener('click', function(){
                    InfoWindow.open(myMap, marker);
                });
            }
        }
    }
        },
    }
</script>

<style lang="scss" scoped>

    section.container-fluid {
        width: 100%;
        margin: 0;
        padding: 0;
    }

</style>