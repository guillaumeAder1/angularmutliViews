'use strict';

/**
 * @ngdoc service
 * @name testControllerViewsApp.getBikes
 * @description
 * # getBikes
 * Factory in the testControllerViewsApp.
 */
angular.module('testControllerViewsApp')
    .factory('getBikes', function($http, $q) {
        var APIkeyDublinBike = "cd68da53009a674d943220ef0a67623682aa00ce";
        return {
            getListBike: function() {
                return $http.get("https://api.jcdecaux.com/vls/v1/stations?contract=dublin&apiKey=" + APIkeyDublinBike);
            },

            getCityList: function() {
                return $http.get("https://api.jcdecaux.com/vls/v1/contracts?&apiKey=" + APIkeyDublinBike)
            },

            getCityStations: function(station) {
                var def = $q.defer();
                $http.get("https://api.jcdecaux.com/vls/v1/stations?contract=" + station + "&apiKey=" + APIkeyDublinBike)
                    .then(function(res) {
                        def.resolve(res)
                    }, function(err) {
                        def.reject(err);
                    });

                return def.promise;
                // return $http.get("https://api.jcdecaux.com/vls/v1/stations?contract=" + station + "&apiKey=" + APIkeyDublinBike);

            }
        };

    });