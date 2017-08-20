(function() {
    'use strict';
    angular
        .module('angelaApp')
        .factory('home', home);

    home.$inject = ['$resource', 'DateUtils', '$http', 'PROD'];

    function home ($resource, DateUtils, $http, PROD) {
        var getProductListUrl =  PROD['DATAAPI'] + '/Angela/products/getAllProducts';
        var getCaseListUrl = PROD['DATAAPI'] + "/Angela/cases/getAllCases";
        var getCategorysListUrl = PROD['DATAAPI'] + "/Angela/categorys/getAllCategorys";

        var getProductList = function(params) {
            return $http({
                   method: 'GET',
                   url: getProductListUrl + "?OrderBy=" + params["OrderBy"] + "&Size=4",
                   data: {}
            });
        }

        var getCaseList = function(params) {
            return $http({
                   method: 'GET',
                   url: getCaseListUrl + "?OrderBy=" + params["OrderBy"] + "&Size=3",
                   data: {}
            });
        }

        var getCategorysList = function(params){
            return $http({
                   method: 'GET',
                   url: getCategorysListUrl,
                   data: {}
            });
        }
        return {
            getProductList: getProductList,
            getCaseList: getCaseList,
            getCategorysList: getCategorysList
        };
    }
})();
