(function () {
    'use strict';
    // DO NOT EDIT THIS FILE, EDIT THE GULP TASK NGCONSTANT SETTINGS INSTEAD WHICH GENERATES THIS FILE
    angular
        .module('angelaApp')
        .constant('VERSION', "0.0.1-SNAPSHOT")
        .constant('DEBUG_INFO_ENABLED', true)
        .constant('BUILD_TIMESTAMP', "")
        .constant("PROD", PROD());


        // function PROD() {
        //     var params = {};
        //     params.DATAAPI = "http://192.168.0.106:8080";  // 远程数据接口
        //     params.IMAGEURL = "http://192.168.0.106:8080/Angela/upload/"; // 远程图片路径
        //     return params;
        // }


        function PROD() {
            var params = {};
            params.DATAAPI = "http://49.51.35.217:80";  // 远程数据接口
            params.IMAGEURL = "http://49.51.35.217:80/Angela/upload/"; // 远程图片路径
            return params;
        }
;
})();
