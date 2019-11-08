// lazyload config
var MODULE_CONFIG = {
    chat:           [
                      '../../Resources/libs/list.js/dist/list.js',
                      '../../Resources/libs/notie/dist/notie.min.js',
                      '../common/plugins/notie.js',
                      '../common/app/chat.js'
                    ],
    mail:           [
                      '../../Resources/libs/list.js/dist/list.js',
                      '../../Resources/libs/notie/dist/notie.min.js',
                      '../common/plugins/notie.js',
                      '../common/app/mail.js'
                    ],
    user:           [
                      '../../Resources/libs/list.js/dist/list.js',
                      '../../Resources/libs/notie/dist/notie.min.js',
                      '../common/plugins/notie.js',
                      '../common/app/user.js'
                    ],
    screenfull:     [
                      '../../Resources/libs/screenfull/dist/screenfull.js',
                      '../common/plugins/screenfull.js'
                    ],
    jscroll:        [
                      '../../Resources/libs/jscroll/jquery.jscroll.min.js'
                    ],
    stick_in_parent:[
                      '../../Resources/libs/sticky-kit/jquery.sticky-kit.min.js'
                    ],
    scrollreveal:   [
                      '../../Resources/libs/scrollreveal/dist/scrollreveal.min.js',
                      '../common/plugins/jquery.scrollreveal.js'
                    ],
    owlCarousel:    [
                      '../../Resources/libs/owl.carousel/dist/assets/owl.carousel.min.css',
                      '../../Resources/libs/owl.carousel/dist/assets/owl.theme.css',
                      '../../Resources/libs/owl.carousel/dist/owl.carousel.min.js'
                    ],
    html5sortable:  [
                      '../../Resources/libs/html5sortable/dist/html.sortable.min.js',
                      '../common/plugins/jquery.html5sortable.js',
                      '../common/plugins/sortable.js'
                    ],
    easyPieChart:   [
                      '../../Resources/libs/easy-pie-chart/dist/jquery.easypiechart.min.js' 
                    ],
    peity:          [
                      '../../Resources/libs/peity/jquery.peity.js',
                      '../common/plugins/jquery.peity.tooltip.js',
                    ],
    chart:          [
                      '../../Resources/libs/moment/min/moment-with-locales.min.js',
                      '../../Resources/libs/chart.js/dist/Chart.min.js',
                      '../common/plugins/jquery.chart.js',
                      '../common/plugins/chartjs.js'
                    ],
    dataTable:      [
                      '../../Resources/libs/datatables/media/js/jquery.dataTables.min.js',
                      '../../Resources/libs/datatables.net-bs4/js/dataTables.bootstrap4.js',
                      '../../Resources/libs/datatables.net-bs4/css/dataTables.bootstrap4.css',
                      '../common/plugins/datatable.js'
                    ],
    bootstrapTable: [
                      '../../Resources/libs/bootstrap-table/dist/bootstrap-table.min.css',
                      '../../Resources/libs/bootstrap-table/dist/bootstrap-table.min.js',
                      '../../Resources/libs/bootstrap-table/dist/extensions/export/bootstrap-table-export.min.js',
                      '../../Resources/libs/bootstrap-table/dist/extensions/mobile/bootstrap-table-mobile.min.js',
                      '../common/plugins/tableExport.min.js',
                      '../common/plugins/bootstrap-table.js'
                    ],
    bootstrapWizard:[
                      '../../Resources/libs/twitter-bootstrap-wizard/jquery.bootstrap.wizard.min.js'
                    ],
    dropzone:       [
                      '../../Resources/libs/dropzone/dist/min/dropzone.min.js',
                      '../../Resources/libs/dropzone/dist/min/dropzone.min.css'
                    ],
    datetimepicker: [
                      '../../Resources/libs/tempusdominus-bootstrap-4/build/css/tempusdominus-bootstrap-4.min.css',
                      '../../Resources/libs/moment/min/moment-with-locales.min.js',
                      '../../Resources/libs/tempusdominus-bootstrap-4/build/js/tempusdominus-bootstrap-4.min.js',
                      '../common/plugins/datetimepicker.js'
                    ],
    datepicker:     [
                      "../libs/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js",
                      "../libs/bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css",
                    ],
    fullCalendar:   [
                      '../../Resources/libs/moment/min/moment-with-locales.min.js',
                      '../../Resources/libs/fullcalendar/dist/fullcalendar.min.js',
                      '../../Resources/libs/fullcalendar/dist/fullcalendar.min.css',
                      '../common/plugins/fullcalendar.js'
                    ],
    parsley:        [
                      '../../Resources/libs/parsleyjs/dist/parsley.min.js'
                    ],
    select2:        [
                      '../../Resources/libs/select2/dist/css/select2.min.css',
                      '../../Resources/libs/select2/dist/js/select2.min.js',
                      '../common/plugins/select2.js'
                    ],
    summernote:     [
                      '../../Resources/libs/summernote/dist/summernote.css',
                      '../../Resources/libs/summernote/dist/summernote-bs4.css',
                      '../../Resources/libs/summernote/dist/summernote.min.js',
                      '../../Resources/libs/summernote/dist/summernote-bs4.min.js'
                    ],
    vectorMap:      [
                      '../../Resources/libs/jqvmap/dist/jqvmap.min.css',
                      '../../Resources/libs/jqvmap/dist/jquery.vmap.js',
                      '../../Resources/libs/jqvmap/dist/maps/jquery.vmap.world.js',
                      '../../Resources/libs/jqvmap/dist/maps/jquery.vmap.usa.js',
                      '../../Resources/libs/jqvmap/dist/maps/jquery.vmap.france.js',
                      '../common/plugins/jqvmap.js'
                    ],
    waves:          [
                      '../../Resources/libs/node-waves/dist/waves.min.css',
                      '../../Resources/libs/node-waves/dist/waves.min.js',
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
