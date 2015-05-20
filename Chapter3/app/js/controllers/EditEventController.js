/**
 * Created by caoyangkaka on 5/19/15.
 */
'use strict';

eventsApp.controller('EditEventController', function EditEventController($scope) {
    $scope.saveEvent = function(event, newEventForm) {
        console.dir(newEventForm);
        if(newEventForm.$valid) {
            alert('valid!');
        }
    };
    $scope.cancelEdit = function() {
        window.location = '/EventDetails.html';
    };

});