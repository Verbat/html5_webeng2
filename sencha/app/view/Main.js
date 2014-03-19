Ext.define('SenchaApp.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video',
        'Ext.Carousel',
        'Ext.List',
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                title: 'Welcome',
                iconCls: 'home',

                styleHtmlContent: true,
                scrollable: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Welcome to Sencha Touch 2'
                },

                html: [
                    "<p style=\'text-align:center\'>My first SenchaTouch App</p> ",
                    "- Home - Welcome Page <br />",
                    "- Tab1 - Video using HTML5 elements<br />",
                    "- Tab2 - Video using SenchaTouch xtype Element instead of HTML5 elements<br />",
                    "- Tab3 - Carousel including two diffenrent items and different background<br />",
                    "- Tab4 - list element"
                ].join("")
            },
            
            
            {
                title: 'Video 1',
                iconCls: 'action',

                styleHtmlContent: true,
                scrollable: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Include Video using HTML5 Video elements'
                },

                html: [
                       "<p>",
			        " <video controls>",
			         "   <source src=resources/video/sample-videos/small.webm type=video/webm>",
			         "   <source src=resources/video/sample-videos/small.ogv type=video/ogg>",
			         "   <source src=resources/video/sample-videos/small.mp4 type=video/mp4>",
			          "  <source src=resources/video/sample-videos/small.3gp type=video/3gp> ",
			          "  Your browser does not support the video tag.",
			        "  </video>"
                ].join("")
            },
            
            
            
            {
                title: 'Video 2',
                iconCls: 'action',

                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Including Webm-Video using SenchaTouch xtype video element'
                    },
                    {
                        xtype: 'video',
                        url: ['resources/video/big-buck-bunny_trailer.webm'],
                        posterUrl: 'http://peach.blender.org/wp-content/uploads/watchtrailer.gif'
                    }
                ]
            },
            {
            	xtype : 'carousel',
                title: 'Carousel',
                iconCls: 'action',

                items: [
					{
					    docked: 'top',
					    xtype: 'titlebar',
					    title: 'Carousel with 2 items'
					},
                    {
                        
                        html: '<div style=\"text-align:center;\">Carousel 1</div>',
                        style: 'background-color: #ececec'
                    },
                    {
                    	html: '<div style=\"text-align:center;\">Carousel 2</div>',
                        style: 'background-color: #ababab'
                    }
                ]
            },
            {
            	xtype : 'list',
                title: 'Simple List',
                iconCls: 'action',

                store: {
                    fields: ['name'],
                    data: [
                        {name: 'Cowper'},
                        {name: 'Everett'},
                        {name: 'University'},
                        {name: 'Forest'}
                    ]
                },

                itemTpl: '{name}'
            }
        ]
    }
});
