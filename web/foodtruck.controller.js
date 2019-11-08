﻿$(document).ready(function () {
    consultar();

    $('#modal-create').on('shown.bs.modal', function () {
        $(document).off('focusin.modal');
    });

    IniciarControles();    
});

function IniciarControles(){
    $("#modal-create-precio").kendoNumericTextBox({format: "0.00",decimals: 2,min: 0});
    $("#modal-create-latitud").kendoNumericTextBox({format: "0.0000000",decimals: 7});
    $("#modal-create-longitud").kendoNumericTextBox({format: "0.0000000",decimals: 7});
}

function consultar() {
    $("#grid").empty();
    var dsgrid = new kendo.data.DataSource({
        transport: {
            read: function (options) {
                $.ajax({
                    method: "GET",
                    url: sysapi+"foodtrucks",
                    dataType: "json",
                    headers: {
                        "x-requested-with": "xhr" 
                    },
                    success: function (response) {
                        options.success(response.Foodtrucks);
                        if (response.Foodtrucks.length > 0) {
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
            {
                headerTemplate: "<center><div style=\"cursor:pointer\" onclick=\"nuevo(); return false;\"><i class=\"fa fa-plus\"></i></div></center>",
                template: "<center><div style=\"cursor:pointer\" onclick=\"Ver(#: foodtruck_id #); return false;\"><i class=\"fa fa-eye\"></i></div></center>",
                width: 40
            },
            {
                template: "#: foodtruck_id #",
                title: "FoodtruckId",
                width: 100,
                hidden: true
            },
            {
                template: "#: name #",
                title: "Foodtruck",
                width: 160
            },
            {
                template: "#: food_type #",
                title: "Tipo Comida",
                width: 160
            },
            {
                template: "#: avg_price #",
                title: "Precio Promedio",
                width: 120
            },
            {
                template: "#: phone_number #",
                title: "Celular",
                width: 120
            },
            {
                template: "#: owners.name #",
                title: "Propietario",
                width: 120
            },
            {
                template: "#: latitude #",
                title: "Latitud",
                width: 160
            },
            {
                template: "#: longitude #",
                title: "Longitud",
                width: 250
            }
        ]
    });
}

function nuevo() {
    $("#modal-create").modal("show");
    $("#mconfirmacion-si").attr("disabled", false);
    $("#modal-create-titulo").html("<div class=\"fa-pull-left\"><i class='fa fa-plus'></i>&nbsp;&nbsp;Registrar Foodtruck<input id=\"modal-create-id\" type=\"hidden\"></div>");
    Limpiar();
    $("#modal-create-nombre").focus();
    $("#modal-create-guardar").click(function () {
        $("#mconfirmacion").modal("show");
        $("#mconfirmacion-titulo").html("<div class=\"fa-pull-left\"><i class='fas fa-question-circle'></i>&nbsp;&nbsp;Confirmar</div>");
        $("#mconfirmacion-question").html("<div><center>¿Desea crear el registro?</center></div>");
        $("#mconfirmacion-no").html("<i class='fas fa-ban'></i>&nbsp;&nbsp;Cancelar");
        $("#mconfirmacion-si").html("<i class='fas fa-check'></i>&nbsp;&nbsp;Aceptar");
        $("#mconfirmacion-si").focus();


        $("#mconfirmacion-no").unbind("click");
        $("#mconfirmacion-no").click(function () {
            $("#mconfirmacion").modal("hide");
        });

        $("#mconfirmacion-si").unbind("click");
        $("#mconfirmacion-si").click(function () {
            GuardarFoodtruck();
        });
    });

}

function Limpiar(){
    $("#modal-create-nombre").val("");
    $("#modal-create-tipo-comida").val("");
    $("#modal-create-precio").data("kendoNumericTextBox").value(null);
    $("#modal-create-celular").val("");
    $("#modal-create-latitud").data("kendoNumericTextBox").value(null);
    $("#modal-create-longitud").data("kendoNumericTextBox").value(null);
}

function GuardarFoodtruck() {
    if ($('#modal-create-id').val() !== 0) {
        $("#mconfirmacion-si").attr("disabled", true);
        $.ajax({
            method: "POST",
            url: sysapi+"foodtrucks",
            dataType: "json",
            headers: {
                "x-requested-with": "xhr" 
            },
            data: {
                "latitude": $("#modal-create-latitud").data("kendoNumericTextBox").value(),
                "longitude": $("#modal-create-longitud").data("kendoNumericTextBox").value(),
                "name": $("#modal-create-nombre").val(),
                "food_type": $("#modal-create-tipo-comida").val(),
                "owner_id": getSession().owner_id,
                "avg_price": $("#modal-create-precio").data("kendoNumericTextBox").value(),
                "phone_number": $("#modal-create-celular").val()
            },
            success: function (response) {
                $("#mconfirmacion-si").attr("disabled", false);
                showSuccess("Registro Creado");
                $("#mconfirmacion").modal("hide");
                $("#modal-create").modal("hide");
                consultar();
            },
            error: function (response) {		
                $("#mconfirmacion-si").attr("disabled", false);		
                showError(JSON.stringify(response));
            }
        });
    }
}

function Ver(foodtruckId) {
    $.ajax({
        method: "GET",
        url: sysapi+"foodtrucks/"+foodtruckId,
        dataType: "json",
        headers: {
            "x-requested-with": "xhr" 
        },
        success: function (response) {
            $("#modal-create").modal("show");
            $("modal-create-guardar").unbind();
            $("#mconfirmacion-si").attr("disabled", true);
            $("#modal-create-latitud").data("kendoNumericTextBox").value(response.Foodtrucks.latitude);
            $("#modal-create-longitud").data("kendoNumericTextBox").value(response.Foodtrucks.longitude);
            $("#modal-create-nombre").val(response.Foodtrucks.name);
            $("#modal-create-tipo-comida").val(response.Foodtrucks.food_type);
            $("#modal-create-precio").data("kendoNumericTextBox").value(response.Foodtrucks.avg_price);
            $("#modal-create-celular").val(response.Foodtrucks.phone_number);
        },
        error: function (response) {				
            showError(JSON.stringify(response));
        }
    });
}
