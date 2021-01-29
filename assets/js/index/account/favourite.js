'use strict';
// Class definition
KTDatatableFavorites
var KTDatatableFavorites = function() {
    // Private functions

    var demo = function() {

        var datatable = $('.kt-datatable').KTDatatable({
            // datasource definition
            data: {
                type: 'remote',
                // type : 'local',
                // source : dataJSONArray,
                source: {

                    read: {
                        url: base_url+'favourite/ajaxFavouriteList',
                        map: function(raw) {

                            var dataSet = raw;
                            if (typeof raw.data !== 'undefined') {

                                dataSet = raw.data;
                            }
                            return dataSet;
                        },
                    },

                },
                pageSize: 1, // display 20 records per page
              //  serverPaging: true,
              //  serverFiltering: true,
              //  serverSorting: true,
            },

            // layout definition
            layout: {
                scroll: true, // enable/disable datatable scroll both horizontal and vertical when needed.
                footer: false, // display/hide footer

                class : 'table-striped myFavouriteTable ',
                customScrollbar : false,
            },
            // toolbar
            toolbar: {
                // toolbar placement can be at top or bottom or both top and bottom repeated
                placement: [],

                // toolbar items
                items: {
                    // pagination
                    // pagination: {
                    //     // page size select
                    //     pageSizeSelect: [5, 10, 20, 30, 50], // display dropdown to select pagination size. -1 is used for "ALl" option
                    // },
                },
                icons: {
                    sort: {
                        asc: 'la la-arrow-up',
                        desc: 'la la-arrow-down',
                    },
                    rowDetail: {
                        expand: 'fa fa-caret-down',
                        collapse: 'fa fa-caret-right'
                    },
                }
            },

            rows: {
                autoHide: false,
                afterTemplate: function (row, data, index) {
                    // if(index) return ;

                    var th = $('th');
                    if(index==0 ) {
                        // for(var i = 1; i < 9; i ++ ) {
                        //     var cel = $(":nth-child("+i+")", th);
                        //     cel.append('<i class = "flaticon2-sort"> </i>');
                        // }
                    }
                    var cel = $(":first", row);

                    cel.on('click', function(){
                        var span = $(":first", cel);
                        span = $(":first", span);
                        if(span.hasClass('la-star-o')) {
                            //span.removeClass('la-star-o');
                            //span.addClass('la-star');
                        } else {
                            //span.removeClass('la-star');
                            //span.addClass('la-star-o');
                        }
                    });
                }
            },

            // column sorting
            sortable: true,
            pagination: true,
            // columns definition
            columns: [
                {
                    field: '',
                    title: '',
                    sortable: false,
                    width: 20,
                    type: 'number',
                    textAlign: 'center',
                    // locked: {left: 'xl'},
                    template: function(data) {
                        return '<span class="la la-star la-lg"></span>';
                    },

                }, {
                    field: 'Sport',
                    title: `<span>SPORT</span>`,
                    // locked: {left: 'xl'},
                }, {
                    field: 'Country',
                    title: 'COUNTRY',
                    textAlign: 'center',

                }, {
                    field: 'Competition',
                    title: 'COMPETITION',
                    textAlign: 'center',
                    responsive: {
                        visible: 'md',
                        hidden: 'lg'
                    },

                }, {
                    field: 'Season',
                    title: 'SEASON',
                    textAlign: 'center',

                    responsive: {
                        visible: 'md',
                        hidden: 'lg'
                    }
                }, {
                    field: 'MatchSummary',
                    title: 'MATCH&nbspSUMMARY',
                    width : 170,
                    textAlign: 'center',
                }, {
                    field: 'DetailedStats',
                    title: 'DETAILED STATS',

                }, {
                    field: 'LastUpdate',
                    title: 'LAST UPDATE',
                    autoHide: false,
                    type: 'date',
                    textAlign: 'center',
                    // callback function support for column rendering

                }, {
                    field: 'Price',
                    title: 'PRICE',
                    textAlign: 'center',
                }, {
                    field: 'ViewSample',
                    title: '',
                    sortable: false,
                    width: 110,
                    autoHide: false,
                    textAlign: 'center',
                    // template: function() {
                    //     return '<a href = "#"><span class="viewsample">View Sample</span></a>';
                    // },
                }, {
                    field: 'AddCart',
                    title: '',
                    sortable: false,
                    width: 160,
                    textAlign: 'center',
                    autoHide: false,
                    // template: function() {
                    //     return '<a href = "#" class="btn btn-md btn-addtocart"> Add&nbspto&nbspcart<i class="la la-lg m-0 la-shopping-cart"></i></a>';
                    // },
                }],
        });

    };


    return {
        // Public functions
        init: function() {
            // init dmeo
            demo();

        },

    };
}();


jQuery(document).ready(function() {
    KTDatatableFavorites.init();

});

function viewSampleData(p_id){
	$.ajax({
		type: 'POST',
		url: base_url + "admin/product/ajaxViewSample",
		data: {
			product_id : p_id
		},
		dataType: "json",
		success: function(resultData) { 
			$("#sample_view_modal_content").html(resultData);
			$("#sample_view_modal").modal();
		}
	});
}