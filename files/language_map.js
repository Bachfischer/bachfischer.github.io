;(function($) {

    function initMap() {

        //var palette = ['#66C2A5', '#E3D081', '#8DA0CB', '#E78AC3', '#FCAB64', '#B6D854', '#B33951'];

        $('#map').vectorMap({
            map: 'world_mill',
            backgroundColor: '#ffffff',
            zoomMin:0.85,
            regionStyle:{
                initial: {
                    fill: '#aaaaaa',
                    "fill-opacity": 1,
                    stroke: 'none',
                    "stroke-width": 0,
                    "stroke-opacity": 0
                },
                hover: {
                    "fill-opacity": 0.8,
                    cursor: 'pointer'
                },
                selected: {
                    fill: 'yellow'
                },
                selectedHover: { }
            },
            series: {
                regions: [{
                  values: {
                        BO:'#8DA0CB',
                        JM:'#E3D081',
                        BR:'#E78AC3',
                        BS:'#E3D081',
                        BY:'#B6D854',
                        BZ:'#E3D081',
                        RU:'#B6D854',
                        GW:'#8DA0CB',
                        GT:'#8DA0CB',
                        GQ:'#8DA0CB',
                        GB:'#E3D081',
                        GY:'#E3D081',
                        GB:'#E3D081',
                        OM:'#FCAB64',
                        TN:'#FCAB64',
                        JO:'#FCAB64',
                        HN:'#8DA0CB',
                        PR:'#E3D081',
                        PS:'#FCAB64',
                        PT:'#E78AC3',
                        PY:'#8DA0CB',
                        PA:'#E3D081',
                        PE:'#8DA0CB',
                        EG:'#FCAB64',
                        ZA:'#E3D081',
                        EC:'#8DA0CB',
                        SO:'#FCAB64',
                        ES:'#8DA0CB',
                        MA:'#FCAB64',
                        MR:'#FCAB64',
                        MX:'#8DA0CB',
                        NI:'#8DA0CB',
                        NZ:'#E3D081',
                        CH:'#66C2A5',
                        CO:'#8DA0CB',
                        CN:'#B33951',
                        CL:'#8DA0CB',
                        CA:'#E3D081',
                        CR:'#8DA0CB',
                        CU:'#8DA0CB',
                        SZ:'#E3D081',
                        SY:'#FCAB64',
                        KG:'#B6D854',
                        SV:'#8DA0CB',
                        KW:'#FCAB64',
                        KZ:'#B6D854',
                        SA:'#FCAB64',
                        SD:'#FCAB64',
                        DO:'#8DA0CB',
                        DJ:'#FCAB64',
                        DE:'#66C2A5',
                        YE:'#FCAB64',
                        DZ:'#FCAB64',
                        AG:'#FCAB64',
                        US:'#E3D081',
                        UY:'#8DA0CB',
                        LB:'#FCAB64',
                        TW:'#B33951',
                        TT:'#E3D081',
                        TD:'#FCAB64',
                        LR:'#E3D081',
                        LY:'#FCAB64',
                        AE:'#FCAB64',
                        VE:'#8DA0CB',
                        IQ:'#FCAB64',
                        AO:'#E78AC3',
                        AR:'#8DA0CB',
                        AU:'#E3D081',
                        AT:'#66C2A5',
                        IE:'#E3D081',
                        UA:'#B6D854',
                        QA:'#FCAB64',
                        MZ:'#E78AC3'
                  }
                }]
              }
        });
    }

    initMap();
    
}) (jQuery);
