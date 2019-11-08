$(document).ready(function () {
    $(':checkbox').checkboxpicker();
    $("#cbActivacion1").prop("checked", true);

    $('#cbActivacion1').on('change', function () {
        ToggleActivacion($(this));
    });
/*
    var params = JSON.stringify({
        "session": getToken(),
        "parameters": {
            "IdModulo": 1,
            "IdPadre": -1
        }
    });    
*/

    var session = getSession();
    if (session === null)
        //location.href = "../../Views/login/index.html";
        showError('NO sesion');
    var panelbar_source = new kendo.data.HierarchicalDataSource({
        data: [
            {
                "id": 1,
                "nombre": "Menú",
                "ruta": "",
                "idPadre": -1,
                "idModulo": 0,
                "idTipoOpcion": 3,
                "icono": "fa fa-table",
                "secuencia": 0,
                "activo": false,
                "detalle": getMenu()
            }
        ],
        schema: {
            model: {
                children: "detalle"
            }
        }
    });

    //$("#navbar-welcome").html("<i class='fas fa-user-circle' ></i> &nbsp;&nbsp;" + session.Usuario.FirstName + " " + session.Usuario.LastName);
    //$("#pageTitle").html("<i>Bienvenido " + session.Usuario.FirstName + " " + session.Usuario.LastName + " - " + session.Rol.Remark + "</i>");

    $("#navbar-welcome").html("<i class='fas fa-user-circle' ></i> &nbsp;&nbsp; Usuario");
    $("#pageTitle").html("<i>Bienvenido a Track Truck</i>");


    $("#panelbar").kendoPanelBar({
        dataSource: panelbar_source,
        template: "<div id=\"#= item.idPadre #p#= item.id #\" onclick=\"abrirOpcion('#= item.ruta #');return false;\" ><i class='#= item.icono #' style=\"margin-left:#= item.marginleft #\" >&nbsp;</i> #= item.nombre #</div>",
        expandMode: "single"
    });

    setTimeout(function () {
        var panelBar = $("#panelbar").data("kendoPanelBar").collapse($("#panelbar .k-link"));
        $("#panelbar").kendoPanelBar({ animation: { expand: { effects: "" } } });
        panelBar.expand($('.k-item'));
        abrirOpcion(getPageDefault());
    }, 500);
});



function ToggleActivacion(checkbox) {
    var estado = checkbox.is(":checked");
    CONST_Modal = true;
    if (estado)
        CambiarEstadoActivo(estado, false);
    

}

function getPageDefault() {
    var page = 'foodtruck.html'; 
    return page;
}

function getMenu() {
    var detalle = [
        {
            "id": 2,
            "nombre": "Inbox",
            "ruta": "foodtruck.html",
            "idPadre": 1,
            "idModulo": 0,
            "idTipoOpcion": 3,
            "icono": "fa fa-comment",
            "secuencia": 0,
            "activo": false,
            "detalle": null,
            "marginleft": "20px"
        },
        {
            "id": 3,
            "nombre": "Dashboard",
            "ruta": "",
            "idPadre": 1,
            "idModulo": 0,
            "idTipoOpcion": 3,
            "icono": "fa fa-bar-chart",
            "secuencia": 0,
            "activo": false,
            "detalle": null,
            "marginleft": "20px"
        },
        {
            "id": 27,
            "nombre": "Reporte",
            "ruta": "",
            "idPadre": 1,
            "idModulo": 0,
            "idTipoOpcion": 3,
            "icono": "fa fa-tasks",
            "secuencia": 0,
            "activo": false,
            "detalle": null,
            "marginleft": "20px",
            "detalle": null
        }
    ];
    return detalle;
}

function abrirOpcion(ruta) {
    if (ruta !== "") {
        if (ruta !== "@") {
            sysparameters = null;
            $("#navbar-root").click();
            $("#content-page").load(ruta);
        }
        else {
            showWarning("Estimado, la opción se encuentra en mantenimiento");
        }
    }
}
