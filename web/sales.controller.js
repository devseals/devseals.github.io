﻿$(document).ready(function () {
    consultar(); 
});


function consultar() {
    $("#grid").empty();
    var dsgrid = new kendo.data.DataSource({
        transport: {
            read: function (options) {
                $.ajax({
                    method: "GET",
                    url: sysapi+"sales/owners/"+getSession().owner_id,
                    dataType: "json",
                    headers: {
                        "x-requested-with": "xhr",
                        "Authorization": "Bearer " +getToken()
                    },
                    success: function (response) {
                        options.success(response.Sales);
                        if (response.Sales.length > 0) {
                            dsgrid.pageSize(10);
                        }
                    },
                    error: function (response) {				
                        showError(JSON.stringify(response));
                    }
                });
            }
        }
    });

    var gridheight = $(window).height() - 240;
    $("#grid").kendoGrid({
        dataSource: dsgrid,
        height: gridheight,
        groupable: false,
        filterable: true,
        scrollable: true,
        sortable: true,
        selectable: false,
        resizable: false,
        pageable: {
            refresh: true,
            pageSizes: [10, 50, 100],
            buttonCount: 5,
            messages: {
                display: "Mostrando {0}-{1} de {2} registros",
                empty: "No hay registros",
                itemsPerPage: "registros por página"
            }
        },
        columns: [            
            /*{
                headerTemplate: "<center><div style=\"cursor:pointer\" onclick=\"nuevo(); return false;\"><i class=\"fa fa-plus\"></i></div></center>",
                //template: "<center><div style=\"cursor:pointer\" onclick=\"ver(#: sales_record_id #); return false;\"><i class=\"fa fa-eye\"></i></div></center>",
                width: 40
            },*/
            {
                template: "#: sales_record_id #",
                title: "sales_record_id",
                width: 100,
                hidden: true
            },
            {
                template: "#: employee #",
                title: "Empleado",
                width: 160
            },
            {
                template: "S/. #: value #",
                title: "Valor",
                width: 160
            },
            {
                field: "date",
                template: "#= kendo.toString(kendo.parseDate(date, 'yyyy-MM-ddTHH:mm:ss'), 'dd/MM/yyyy HH:mm:ss') #",
                title: "Fecha"
            }
        ]
    });
}
