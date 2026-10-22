var wms_layers = [];


        var lyr_GoogleSatelit_0 = new ol.layer.Tile({
            'title': 'Google Satelit',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_KotaSemarang_1 = new ol.format.GeoJSON();
var features_KotaSemarang_1 = format_KotaSemarang_1.readFeatures(json_KotaSemarang_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KotaSemarang_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KotaSemarang_1.addFeatures(features_KotaSemarang_1);
var lyr_KotaSemarang_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KotaSemarang_1, 
                style: style_KotaSemarang_1,
                popuplayertitle: 'KotaSemarang',
                interactive: true,
    title: 'KotaSemarang<br />\
    <img src="styles/legend/KotaSemarang_1_0.png" /> Banyumanik<br />\
    <img src="styles/legend/KotaSemarang_1_1.png" /> Candisari<br />\
    <img src="styles/legend/KotaSemarang_1_2.png" /> Gajahmungkur<br />\
    <img src="styles/legend/KotaSemarang_1_3.png" /> Gayamsari<br />\
    <img src="styles/legend/KotaSemarang_1_4.png" /> Genuk<br />\
    <img src="styles/legend/KotaSemarang_1_5.png" /> Gunungpati<br />\
    <img src="styles/legend/KotaSemarang_1_6.png" /> Mijen<br />\
    <img src="styles/legend/KotaSemarang_1_7.png" /> Ngaliyan<br />\
    <img src="styles/legend/KotaSemarang_1_8.png" /> Pedurungan<br />\
    <img src="styles/legend/KotaSemarang_1_9.png" /> Semarang Barat<br />\
    <img src="styles/legend/KotaSemarang_1_10.png" /> Semarang Selatan<br />\
    <img src="styles/legend/KotaSemarang_1_11.png" /> Semarang Tengah<br />\
    <img src="styles/legend/KotaSemarang_1_12.png" /> Semarang Timur<br />\
    <img src="styles/legend/KotaSemarang_1_13.png" /> Semarang Utara<br />\
    <img src="styles/legend/KotaSemarang_1_14.png" /> Tembalang<br />\
    <img src="styles/legend/KotaSemarang_1_15.png" /> Tugu<br />\
    <img src="styles/legend/KotaSemarang_1_16.png" /> <br />' });

lyr_GoogleSatelit_0.setVisible(true);lyr_KotaSemarang_1.setVisible(true);
var layersList = [lyr_GoogleSatelit_0,lyr_KotaSemarang_1];
lyr_KotaSemarang_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'GID_3': 'GID_3', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'NAME_2', 'NL_NAME_2': 'NL_NAME_2', 'NAME_3': 'NAME_3', 'VARNAME_3': 'VARNAME_3', 'NL_NAME_3': 'NL_NAME_3', 'TYPE_3': 'TYPE_3', 'ENGTYPE_3': 'ENGTYPE_3', 'CC_3': 'CC_3', 'HASC_3': 'HASC_3', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_KotaSemarang_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'GID_3': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'GID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'NAME_3': 'TextEdit', 'VARNAME_3': 'TextEdit', 'NL_NAME_3': 'TextEdit', 'TYPE_3': 'TextEdit', 'ENGTYPE_3': 'TextEdit', 'CC_3': 'TextEdit', 'HASC_3': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_KotaSemarang_1.set('fieldLabels', {'OBJECTID': 'no label', 'GID_3': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'GID_1': 'no label', 'NAME_1': 'inline label - visible with data', 'NL_NAME_1': 'no label', 'GID_2': 'no label', 'NAME_2': 'no label', 'NL_NAME_2': 'no label', 'NAME_3': 'no label', 'VARNAME_3': 'no label', 'NL_NAME_3': 'no label', 'TYPE_3': 'no label', 'ENGTYPE_3': 'no label', 'CC_3': 'no label', 'HASC_3': 'no label', 'Shape_Leng': 'header label - always visible', 'Shape_Area': 'header label - always visible', });
lyr_KotaSemarang_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});