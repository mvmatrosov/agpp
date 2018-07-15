/*VectorMap Init*/

$(function() {
	"use strict";
	if( $('#world_map_marker_1').length > 0 ){
		$('#world_map_marker_1').vectorMap(
		{
			map: 'world_mill_en',
			backgroundColor: 'transparent',
			borderColor: '#fff',
			borderOpacity: 0.25,
			borderWidth: 0,
			color: '#e6e6e6',
			regionStyle : {
				initial : {
				  fill : '#f4f4f4'
				}
			  },

			markerStyle: {
			  initial: {
							r: 10,
							'fill': '#fff',
							'fill-opacity':1,
							'stroke': '#000',
							'stroke-width' : 1,
							'stroke-opacity': 0.4
						},
				},

			markers : [{
				latLng : [59.80, 30.50],
				name : 'LVKP : Engineering office'

			  },
			  {
				latLng : [59.57, 30.19],
				name : 'BTP: Main office'


			  },
			  {
				latLng : [29.87, 121.54],
				name : 'SNEC : Engineering office'

			  },
			  {
				latLng : [55.45, 37.36],
				name : 'NIPI : Client office'

			  },
			  {
				latLng : [51.23, 128.14],
				name : 'GAZPROM : Site'

			  },
				{
				latLng : [45.27, 9.11],
				name : 'TSM : Milan Engineering office'

			  }],

			series: {
				regions: [{
					values: {
						"RU": '#0FC5BB',
						"CN": '#0FC5BB',
						"IT": '#0FC5BB',
						"FI": '#0FC5BB',
					},
					attribute: 'fill'
				}]
			},
			hoverOpacity: null,
			normalizeFunction: 'linear',
			zoomOnScroll: false,
			scaleColors: ['#000000', '#000000'],
			selectedColor: '#000000',
			selectedRegions: [],
			enableZoom: false,
			hoverColor: '#fff',
		});
	}
});
