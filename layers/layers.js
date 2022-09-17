ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:3395").setExtent([3364885.461447, 8338413.384372, 3380452.254875, 8350339.674193]);
var wms_layers = [];

var lyr_street_dens_r100m_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "street_dens_r100m",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/street_dens_r100m_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [3275565.537988, 8318928.711158, 3423270.261854, 8453834.069404]
                            })
                        });
var lyr_street_dens_r300m_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "street_dens_r300m",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/street_dens_r300m_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [3275565.537988, 8318928.711158, 3423270.261854, 8453834.069404]
                            })
                        });
var format_str_densbase_plan_streets_2 = new ol.format.GeoJSON();
var features_str_densbase_plan_streets_2 = format_str_densbase_plan_streets_2.readFeatures(json_str_densbase_plan_streets_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3395'});
var jsonSource_str_densbase_plan_streets_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_str_densbase_plan_streets_2.addFeatures(features_str_densbase_plan_streets_2);
var lyr_str_densbase_plan_streets_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_str_densbase_plan_streets_2, 
                style: style_str_densbase_plan_streets_2,
                interactive: true,
                title: '<img src="styles/legend/str_densbase_plan_streets_2.png" /> str_dens — base_plan_streets'
            });

lyr_street_dens_r100m_0.setVisible(true);lyr_street_dens_r300m_1.setVisible(true);lyr_str_densbase_plan_streets_2.setVisible(true);
var layersList = [lyr_street_dens_r100m_0,lyr_street_dens_r300m_1,lyr_str_densbase_plan_streets_2];
lyr_str_densbase_plan_streets_2.set('fieldAliases', {'fid': 'fid', 'NAME': 'NAME', 'LR': 'LR', 'TYPE_AXIS': 'TYPE_AXIS', 'CODE_TYPE_AXIS': 'CODE_TYPE_AXIS', 'LOCATION': 'LOCATION', 'ADDITION': 'ADDITION', 'CODE_CK': 'CODE_CK', 'UID_BP': 'UID_BP', 'PLAN_TYPE': 'PLAN_TYPE', 'NAME_PRINT': 'NAME_PRINT', 'SHORT': 'SHORT', 'BASE_AXIS': 'BASE_AXIS', 'BASE': 'BASE', 'MI_STYLE': 'MI_STYLE', });
lyr_str_densbase_plan_streets_2.set('fieldImages', {'fid': '', 'NAME': '', 'LR': '', 'TYPE_AXIS': '', 'CODE_TYPE_AXIS': '', 'LOCATION': '', 'ADDITION': '', 'CODE_CK': '', 'UID_BP': '', 'PLAN_TYPE': '', 'NAME_PRINT': '', 'SHORT': '', 'BASE_AXIS': '', 'BASE': '', 'MI_STYLE': '', });
lyr_str_densbase_plan_streets_2.set('fieldLabels', {'fid': 'no label', 'NAME': 'no label', 'LR': 'no label', 'TYPE_AXIS': 'no label', 'CODE_TYPE_AXIS': 'no label', 'LOCATION': 'no label', 'ADDITION': 'no label', 'CODE_CK': 'no label', 'UID_BP': 'no label', 'PLAN_TYPE': 'no label', 'NAME_PRINT': 'no label', 'SHORT': 'no label', 'BASE_AXIS': 'no label', 'BASE': 'no label', 'MI_STYLE': 'no label', });
lyr_str_densbase_plan_streets_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});