$(function () {

//   "use strict";
// //World map by jvectormap
//   $('#ATMs-map').vectorMap({
//     map: 'us_aea',
//     scaleColors: ['#C8EEFF', '#0071A4'],
//     normalizeFunction: 'polynomial',
//     hoverOpacity: 0.7,
//     hoverColor: false,
//     markerStyle: {
//       initial: {
//         fill: '#F8E23B',
//         stroke: '#383f47'
//       }
//     },
//     backgroundColor: '#00a65a',
//     markers: [
//       {latLng: [-10, 10], name: 'CA'},
//       {latLng: [43.73, 7.41], name: 'Monaco'}
//     ]
//   });




jQuery('#ATMs-map').vectorMap({
    map: 'usa_en',
    backgroundColor: '#00a65a',
    color: '#ffffff',
    enableZoom: true,
    showTooltip: true,
    selectedColor: null,
    hoverColor: '#008d4c',
    colors: {
        mo: '#666666',
        fl: '#666666',
        or: '#666666'
    },
    onRegionClick: function(event, code, region){
        event.preventDefault();
    }
});



});  