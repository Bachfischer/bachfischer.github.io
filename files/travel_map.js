; (function ($) {

    function initMap() {

        $('#map').vectorMap({
            map: 'world_mill',
            backgroundColor: '#ffffff',
            zoomMin: 0.85,
            regionStyle: {
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
                selectedHover: {}
            },
            series: {
                regions: [{
                    values: {
                        BO: '#5688C7',
                        BR: '#5688C7',
                        BZ: '#5688C7',
                        RU: '#5688C7',
                        RO: '#5688C7',
                        GT: '#5688C7',
                        GR: '#5688C7',
                        GB: '#5688C7',
                        HR: '#5688C7',
                        HU: '#5688C7',
                        PT: '#5688C7',
                        PY: '#5688C7',
                        PA: '#5688C7',
                        PE: '#5688C7',
                        PL: '#5688C7',
                        EG: '#5688C7',
                        IT: '#5688C7',
                        VN: '#5688C7',
                        ES: '#5688C7',
                        MX: '#5688C7',
                        FR: '#5688C7',
                        NI: '#5688C7',
                        NL: '#5688C7',
                        CH: '#5688C7',
                        CL: '#5688C7',
                        CZ: '#5688C7',
                        CY: '#5688C7',
                        CR: '#5688C7',
                        CU: '#5688C7',
                        KH: '#5688C7',
                        SA: '#5688C7',
                        SE: '#5688C7',
                        DE: '#5688C7',
                        UY: '#5688C7',
                        LB: '#5688C7',
                        AE: '#5688C7',
                        AR: '#5688C7',
                        AU: '#5688C7',
                        AT: '#5688C7',
                        IN: '#5688C7',
                        IE: '#5688C7',
                        UA: '#5688C7',
                        SI: '#5688C7',
                        TN: '#5688C7',
                        ID: '#5688C7',
                        JM: '#5688C7',
                        CO: '#5688C7',
                        US: '#5688C7',
                    }
                }]
            }
        });
    }

    initMap();

})(jQuery);
