/*
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

Ext.namespace("Heron.options");
Ext.namespace("Heron.options.map");

// See ToolbarBuilder.js : each string item points to a definition
// in Heron.ToolbarBuilder.defs. Extra options and even an item create function
// can be passed here as well.
Heron.options.map.toolbar = [
	{type: "featureinfo", options: {max_features: 10}},
	{type: "-"} ,
	{type: "pan"},
	{type: "zoomin"},
	{type: "zoomout"},
	{type: "zoomvisible"},
	{type: "-"} ,
	{type: "zoomprevious"},
	{type: "zoomnext"},
	{type: "-"},
	{type: "measurelength"},
	{type: "measurearea"}
];


Heron.layout = {
	xtype: 'panel',

	/* Optional ExtJS Panel properties, see ExtJS API docs. */
	id: 'gv-container-main',
	layout: 'border',

	items: [
		{
			xtype: 'gv_htmlpanel',
			id: 'gv-logo-panel',
			region: 'north',
			bodyBorder: false,
			border: false,
			autoLoad: {
				url: 'resources/north-logo.html'
			},
			height: 40

		},

		{
			xtype: 'panel',

			id: 'gv-menu-left-container',
			layout: 'vbox',
			layoutConfig: {
				align : 'stretch',
				pack  : 'start'
			},
			region : "west",
			width: 240,
			collapsible: true,
			border: false,
			items: [
				{
					xtype: 'gv_activelayerspanel',
					height: 240,
					flex: 3,
					hropts: {
						/** Defines the custom component added under the standard layer node. */
						component : {
							xtype: "gx_opacityslider",
							showTitle: false,
							plugins: new GeoExt.LayerOpacitySliderTip(),
							width: 160,
							value: 100,
							inverse: false,
							aggressive: false,
							style: {
								marginLeft: '18px'
							}
						}

					}
				},
				{
					xtype: 'panel',
					flex: 5,

					id: 'gv-menu-acc-container',
					layout: 'accordion',
					items : [
						{
							xtype: 'gv_layertreepanel',
							flex: 4,

							hropts: Heron.options.layertree
						},
						{
							xtype: 'gv_searchpanel',
							id: 'gv-searchpanel',
							title: __('Search'),
							hropts: Heron.options.search
						},
						{
							xtype: 'gv_contextbrowserpanel',
							id: 'gv-contextbrowser',
							/** The contexts to create shortcuts in the context browser. */
							hropts: Heron.options.contextbrowser
						},
						{
							xtype: 'gv_layerlegendpanel'
						}
					]
				}
			]

		},
		{
			xtype: 'panel',

			id: 'gv-map-and-info-container',
			layout: 'border',
			region: 'center',
			width: '100%',
			collapsible: false,
			split	: true,
			border: false,
			items: [
				{
					xtype: 'gv_mappanel',
					id: 'gv-map',
					region: 'center',
					collapsible : false,
					border: false,
					hropts: Heron.options.map
				},
				{
					xtype: 'gv_featureinfopanel',
					id: 'gv-feature-info',
					region: "south",
					border: true,
					collapsible: true,
					collapsed: true,
					height: 205,
					split: true,
					maxFeatures: 10
				}
			]
		}
	]
};