// Sorting the features so that they are displayed chronologically by ACTIONDATE attribute
ND.features.sort(function(a, b) {
  return (a.properties.ACCTIONDATE > b.properties.ACTIONDATE);
});

// Declaring the map variable and each of the Tilesets therein as variables to use in the layerControl later
var mymap = L.map('mapid', {
            minZoom: 6,
            maxZoom: 16,
            attributionControl: false
            }, 
    ).setView([47.650589, -100.437012], 7);
    
var Esri_WorldImagery = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, ' +
    'AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});
    
         
var Stamen_Terrain = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}{r}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 18,
	ext: 'png'
});

var Esri_DarkGreyCanvas = L.tileLayer(
        "http://{s}.sm.mapstack.stamen.com/" +
        "(toner-lite,$fff[difference],$fff[@23],$fff[hsl-saturation@20])/" +
        "{z}/{x}/{y}.png",
        {
            attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, ' +
            'NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community'        
}).addTo(mymap);
    
// Declaring the slider
var sliderControl = null; 
    
// Declaring the 50m wind data from AJAX call to the geojson, using the style specified by windStyle
var nd50m = new L.GeoJSON.AJAX("ND50m.geojson", {style: windStyle});

// Function specifying the colors for polygons in the gejson based on the WPC feature property
function windStyle(feature) {
  var colorToUse;
  var WPC = feature.properties.WPC;
            
  if (WPC === "LINEA A") colorToUse = "#f1eef6";
  else if (WPC === 2) colorToUse = "#d7b5d8";
  else if (WPC === 3) colorToUse = "#df65b0";
  else if (WPC === 4) colorToUse = "#dd1c77";
  else if (WPC === 5) colorToUse = "#65018A";
  else if (WPC === 6) colorToUse = "#980043";
  else colorToUse = "#000000";
            
  return {
    "color": colorToUse,
    "weight": 1,
    "opacity": .5
  };
}       
         

     


// Declare variable for baselayers
var baseLayers = {
    "Terrain": Stamen_Terrain,
    "Satellite": Esri_WorldImagery,
    "Dark Canvas" : Esri_DarkGreyCanvas
};     

// Declare variable for wind layers
var windLayers = {
    "North Dakota 50m Wind Resource Map" : nd50m
}
      
// Decalre the layerControl and add the wind and base layers
var layerControl = L.control.layers(baseLayers, windLayers, {position: 'topleft'});
layerControl.addTo(mymap);  
    
// add the wind/Grib data to the map. Eventually I want this to be live data, but for the scope of this assignment I did not have time to host my own server to launch the grib/json conversion
 $.getJSON('demo.json', function (data) {

	var velocityLayer = L.velocityLayer({
		displayValues: true,
		displayOptions: {
			velocityType: 'Global Wind',
			displayPosition: 'bottomleft',
			displayEmptyString: 'No wind data'
		},
		data: data,
        minVelocity: 0,
		maxVelocity: 5,
        colorScale: ["#edf8e9","#bae4b3", "#74c476","#31a354", "#006d2c"]
	});

	layerControl.addOverlay(velocityLayer, 'WindGlobal');
});
// End control and layers declaration      

         
           

// Unused icon. Planned to integrate in marker clusters to improve visual cleaness as well as performance
var myIconDot = L.icon({
  iconUrl: '/img/dot.png',
  iconSize: [32, 32],
  iconAnchor: [16, 37],
  popupAnchor: [0, -28]
});

// Adding the geojson features with the proper icons.
// The ND.js file declares a variable, ND, that is equal to all the geojson data fo ND turbines.
// The geojson layer then goes through all its features and gives them a differently sized custom marker based on their heights.
// Finally, it initiates the onEachFeature funciton to aid in creating the info div for hover info
        // could have been done more dynamically
geojson = L.geoJson(ND, {
    pointToLayer: function (feature, latlng) {
        if (feature.properties.ABOVEGROUNDLEVELHEIGHT < 290)
            return L.marker(latlng, {icon: L.icon({
                                    iconUrl: '/img/WTurbine.png',
                                    iconSize: [20, 20],   // 20, 22.5
                                    iconAnchor: [10, 20],
                                    popupAnchor: [0, -28]
                                                })
        });   
        if (feature.properties.ABOVEGROUNDLEVELHEIGHT == 290)
            return L.marker(latlng, {icon: L.icon({
                                    iconUrl: '/img/WTurbine.png',
                                    iconSize: [30, 30],   // 31.5, 35.25
                                    iconAnchor: [15, 30],
                                    popupAnchor: [0, -28]
                                                })
        }); 
        if (feature.properties.ABOVEGROUNDLEVELHEIGHT > 290 && feature.properties.ABOVEGROUNDLEVELHEIGHT < 389)
            return L.marker(latlng, {icon: L.icon({
                                    iconUrl: '/img/WTurbine.png',
                                    iconSize: [40, 40],   // 42, 47
                                    iconAnchor: [20, 40],
                                    popupAnchor: [0, -28]
                                                })
        });
        if (feature.properties.ABOVEGROUNDLEVELHEIGHT > 389 && feature.properties.ABOVEGROUNDLEVELHEIGHT < 426)
            return L.marker(latlng, {icon: L.icon({
                                    iconUrl: '/img/WTurbine.png',
                                    iconSize: [60, 60],   // 44, 49
                                    iconAnchor: [30, 60],
                                    popupAnchor: [0, -28]
                                                })
        });
        if (feature.properties.ABOVEGROUNDLEVELHEIGHT > 426 && feature.properties.ABOVEGROUNDLEVELHEIGHT < 500)
            return L.marker(latlng, {icon: L.icon({
                                    iconUrl: '/img/WTurbine.png',
                                    iconSize: [70, 70],   // 46, 52
                                    iconAnchor: [35, 70],
                                    popupAnchor: [0, -28]
                                                })
        });
          
        
        
        
    },
    onEachFeature: onEachFeature
});

// Creating the WPC legend for all of the colors and wind power classifications
    // could have been done more dynamically
var legend = L.control({position: 'bottomright'});
    legend.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'info legend');
    labels = ['<strong>Wind Power Classification</strong>'],
    categories = ['Marginal','Fair','Good', 'Excellent','Outstanding'],
    colors = ["#d7b5d8","#df65b0", "#dd1c77","#65018A", "#980043"];

    for (var i = 0; i < categories.length; i++) {

            div.innerHTML += 
            labels.push(
                '<i class="circle" style="background:' + colors[i] + '"></i> ' +
            (categories[i] ? categories[i] : '+'));

        }
        div.innerHTML = labels.join('<br>');
    return div;
};
legend.addTo(mymap);
   
// sets listeners for mousing over and off of each feature as well as for clicks
    // clicks zoom to the feature and display a turbine height popup
function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToFeature
            });
    layer.bindPopup("<strong>Turbine Hieght (ft): </strong>" + feature.properties.ABOVEGROUNDLEVELHEIGHT)
}
// Hovers are set to update the info dive with the nearest town name and the action date of the turbine
function highlightFeature(e) {
      var layer = e.target;
      info.update(layer.feature.properties);
};
// Mouse off updates the info div and orignally restyled...
function resetHighlight(e) {
    geojson.resetStyle(e.target);
    info.update();
  };
// Click pans the map and zooms to the feature as well
function zoomToFeature(e) {
    mymap.setView(e.latlng, 13);
}   
    
         
         
// Add control to the map
var info = L.control();

// function the takes the map as a parameter and creates the new info div each time the info is updated
info.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info');
    this.update();
    return this._div;
};

// Creates the inner HTML of the info div drawing on the feature properties.
info.update = function (props) {
    this._div.innerHTML = '<h4>Turbine Info</h4>' +  (props ?
        '<b>' + props.CITY + '</b><br />' + ' Action Date: ' + props.ACTIONDATE 
        : 'Hover over a Turbine Location');
};
info.addTo(mymap); 
         
//Declares the slider variable, specifies the layer and other parameters. Most importantly setting the timeAttribute to ACTIONDATE
    // Changes were made to the JS file "SliderControl.js" in order to make the script therein accomodate my datas time notation
var sliderControl = L.control.sliderControl({
    position: "topright",
    layer: geojson,
    range: false,
    showAllOnStart: false,
    alwaysShowDate: true,
    timeAttribute: "ACTIONDATE",
});

// add slider to mymap
mymap.addControl(sliderControl);

//inititiate slider and perform a final sort (at one point it appeared thsat an aboev function was interfering with this....)
sliderControl.startSlider();
sliderControl.options.markers.sort(function(a, b) {
    return (a.feature.properties.ACTIONDATE > b.feature.properties.ACTIONDATE);
});  
    
// END SLIDER
         
      