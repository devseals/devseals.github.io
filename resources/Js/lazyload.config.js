// lazyload config
var MODULE_CONFIG = {
    chat:           [
                      '/hayex/resources/libs/list.js/dist/list.js',
                      '/hayex/resources/libs/notie/dist/notie.min.js',
                      '../common/plugins/notie.js',
                      '../common/app/chat.js'
                    ],
    mail:           [
                      '/hayex/resources/libs/list.js/dist/list.js',
                      '/hayex/resources/libs/notie/dist/notie.min.js',
                      '../common/plugins/notie.js',
                      '../common/app/mail.js'
                    ],
    user:           [
                      '/hayex/resources/libs/list.js/dist/list.js',
                      '/hayex/resources/libs/notie/dist/notie.min.js',
                      '../common/plugins/notie.js',
                      '../common/app/user.js'
                    ],
    screenfull:     [
                      '/hayex/resources/libs/screenfull/dist/screenfull.js',
                      '../common/plugins/screenfull.js'
                    ],
    jscroll:        [
                      '/hayex/resources/libs/jscroll/jquery.jscroll.min.js'
                    ],
    stick_in_parent:[
                      '/hayex/resources/libs/sticky-kit/jquery.sticky-kit.min.js'
                    ],
    scrollreveal:   [
                      '/hayex/resources/libs/scrollreveal/dist/scrollreveal.min.js',
                      '../common/plugins/jquery.scrollreveal.js'
                    ],
    owlCarousel:    [
                      '/hayex/resources/libs/owl.carousel/dist/assets/owl.carousel.min.css',
                      '/hayex/resources/libs/owl.carousel/dist/assets/owl.theme.css',
                      '/hayex/resources/libs/owl.carousel/dist/owl.carousel.min.js'
                    ],
    html5sortable:  [
                      '/hayex/resources/libs/html5sortable/dist/html.sortable.min.js',
                      '../common/plugins/jquery.html5sortable.js',
                      '../common/plugins/sortable.js'
                    ],
    easyPieChart:   [
                      '/hayex/resources/libs/easy-pie-chart/dist/jquery.easypiechart.min.js' 
                    ],
    peity:          [
                      '/hayex/resources/libs/peity/jquery.peity.js',
                      '../common/plugins/jquery.peity.tooltip.js',
                    ],
    chart:          [
                      '/hayex/resources/libs/moment/min/moment-with-locales.min.js',
                      '/hayex/resources/libs/chart.js/dist/Chart.min.js',
                      '../common/plugins/jquery.chart.js',
                      '../common/plugins/chartjs.js'
                    ],
    dataTable:      [
                      '/hayex/resources/libs/datatables/media/js/jquery.dataTables.min.js',
                      '/hayex/resources/libs/datatables.net-bs4/js/dataTables.bootstrap4.js',
                      '/hayex/resources/libs/datatables.net-bs4/css/dataTables.bootstrap4.css',
                      '../common/plugins/datatable.js'
                    ],
    bootstrapTable: [
                      '/hayex/resources/libs/bootstrap-table/dist/bootstrap-table.min.css',
                      '/hayex/resources/libs/bootstrap-table/dist/bootstrap-table.min.js',
                      '/hayex/resources/libs/bootstrap-table/dist/extensions/export/bootstrap-table-export.min.js',
                      '/hayex/resources/libs/bootstrap-table/dist/extensions/mobile/bootstrap-table-mobile.min.js',
                      '../common/plugins/tableExport.min.js',
                      '../common/plugins/bootstrap-table.js'
                    ],
    bootstrapWizard:[
                      '/hayex/resources/libs/twitter-bootstrap-wizard/jquery.bootstrap.wizard.min.js'
                    ],
    dropzone:       [
                      '/hayex/resources/libs/dropzone/dist/min/dropzone.min.js',
                      '/hayex/resources/libs/dropzone/dist/min/dropzone.min.css'
                    ],
    datetimepicker: [
                      '/hayex/resources/libs/tempusdominus-bootstrap-4/build/css/tempusdominus-bootstrap-4.min.css',
                      '/hayex/resources/libs/moment/min/moment-with-locales.min.js',
                      '/hayex/resources/libs/tempusdominus-bootstrap-4/build/js/tempusdominus-bootstrap-4.min.js',
                      '../common/plugins/datetimepicker.js'
                    ],
    datepicker:     [
                      "../libs/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js",
                      "../libs/bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css",
                    ],
    fullCalendar:   [
                      '/hayex/resources/libs/moment/min/moment-with-locales.min.js',
                      '/hayex/resources/libs/fullcalendar/dist/fullcalendar.min.js',
                      '/hayex/resources/libs/fullcalendar/dist/fullcalendar.min.css',
                      '../common/plugins/fullcalendar.js'
                    ],
    parsley:        [
                      '/hayex/resources/libs/parsleyjs/dist/parsley.min.js'
                    ],
    select2:        [
                      '/hayex/resources/libs/select2/dist/css/select2.min.css',
                      '/hayex/resources/libs/select2/dist/js/select2.min.js',
                      '../common/plugins/select2.js'
                    ],
    summernote:     [
                      '/hayex/resources/libs/summernote/dist/summernote.css',
                      '/hayex/resources/libs/summernote/dist/summernote-bs4.css',
                      '/hayex/resources/libs/summernote/dist/summernote.min.js',
                      '/hayex/resources/libs/summernote/dist/summernote-bs4.min.js'
                    ],
    vectorMap:      [
                      '/hayex/resources/libs/jqvmap/dist/jqvmap.min.css',
                      '/hayex/resources/libs/jqvmap/dist/jquery.vmap.js',
                      '/hayex/resources/libs/jqvmap/dist/maps/jquery.vmap.world.js',
                      '/hayex/resources/libs/jqvmap/dist/maps/jquery.vmap.usa.js',
                      '/hayex/resources/libs/jqvmap/dist/maps/jquery.vmap.france.js',
                      '../common/plugins/jqvmap.js'
                    ],
    waves:          [
                      '/hayex/resources/libs/node-waves/dist/waves.min.css',
                      '/hayex/resources/libs/node-waves/dist/waves.min.js',
                      '../common/plugins/waves.js'
                    ]
  };

var MODULE_OPTION_CONFIG = {
  parsley: {
    errorClass: 'is-invalid',
    successClass: 'is-valid',
    errorsWrapper: '<ul class="list-unstyled text-sm mt-1 text-muted"></ul>'
  }
}
