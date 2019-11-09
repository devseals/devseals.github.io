$(document).ready(function () {
    consultar();  
});

function consultar() {
        $("#grid").empty();
        var dsgrid = new kendo.data.DataSource({
            transport: {
                read: function (options) {
                    $.ajax({
                        method: "GET",
                        url: sysapi+"employees/",
                        dataType: "json",
                        headers: {
                            "x-requested-with": "xhr",
                            "Authorization": "Bearer " +getToken()
                        },
                        success: function (response) {
                            
                            options.success(response.Employees);
                            if (response.Employees.length > 0) {
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
                template: "<center><div style=\"cursor:pointer\" onclick=\"Ver(#: employee_id #); return false;\"><i class=\"fa fa-eye\"></i></div></center>",
                width: 40
            },
            {
                template: "#: employee_id #",
                title: "EmployeeId",
                width: 100,
                hidden: true
            },
            {
                template: "#: name #",
                title: "Employee",
                width: 160
            },
            {
                template: "#: username #",
                title: "Usuario",
                width: 160
            }
        ]
    });
}

function nuevo() {
    $("#modal-create").modal("show");
    $("#mconfirmacion-si").attr("disabled", false);
    $("#box-password").removeAttr("hidden");
    $("#modal-create-titulo").html("<div class=\"fa-pull-left\"><i class='fa fa-plus'></i>&nbsp;&nbsp;Registrar Empleado<input id=\"modal-create-id\" type=\"hidden\"></div>");
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
            GuardarEmployee();
        });
    });

}

function Limpiar(){
    $("#modal-create-nombre").val("");
    $("#modal-create-usuario").val("");    
    $("#modal-create-password").val("");
}

function GuardarEmployee() {
    if ($('#modal-create-id').val() !== 0) {
        $("#mconfirmacion-si").attr("disabled", true);
        $.ajax({
            method: "POST",
            url: sysapi+"employees",
            dataType: "json",
            headers: {
                "x-requested-with": "xhr",
                "Authorization": "Bearer " +getToken()
            },
            data: {
               
                "name": $("#modal-create-nombre").val(),
                "username": $("#modal-create-usuario").val(),
                "password": $("#modal-create-password").val(),
                "owner_id": getSession().owner_id
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

function Ver(employeeId) {
    $.ajax({
        method: "GET",
        url: sysapi+"employees/"+employeeId,
        dataType: "json",
        headers: {
            "x-requested-with": "xhr" ,
            "Authorization": "Bearer " +getToken()
        },
        success: function (response) {
            $("#modal-create").modal("show");
            $("modal-create-guardar").unbind();
            $("#mconfirmacion-si").attr("disabled", true);
           
            $("#modal-create-nombre").val(response.Employees.name);
            $("#modal-create-usuario").val(response.Employees.username);
            $("#box-password").attr("hidden","hidden")
        
        },
        error: function (response) {				
            showError(JSON.stringify(response));
        }
    });
}