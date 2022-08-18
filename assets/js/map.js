mapboxgl.accessToken = 'pk.eyJ1Ijoic2FwdGFrMTAiLCJhIjoiY2tyeXB4cHYyMDY2NzJ2cGp5MzRoN21xdSJ9.zdeg5V6RN8vcfFZrZ2rBmw';
const map = new mapboxgl.Map({
container: 'map', // container ID
style: 'mapbox://styles/mapbox/streets-v11', // style URL
center: [88.30357885427057, 22.506097019664402], // starting position [lng, lat]
zoom: 10 // starting zoom
});

map.addControl(new mapboxgl.NavigationControl({ "visualizePitch": "true" }));

new mapboxgl.Marker({ "color": "#b40219" })
    .setLngLat([88.30357885427057, 22.506097019664402])
    .setPopup(
        new mapboxgl.Popup({ offset: 25 })
            .setHTML(
                `<center>
                <h6>Kolkata</h6>
                <p>West Bengal, India</p>
                </center>`
            )
    )
    .addTo(map);
