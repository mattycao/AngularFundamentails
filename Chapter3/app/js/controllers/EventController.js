'use strict';

eventsApp.controller('EventController',
    function EventController($scope, eventData) {

        $scope.snippet = '<span style="color: red">hi there</span>';
        $scope.boolValue = true;
        $scope.sortOrder = 'name';
        eventData.getEvent(function(data) {
            $scope.event = data;
        });

        $scope.upVoteSession = function(session) {
            session.upVoteCount++;
        };

        $scope.downVoteSession = function(session) {
            session.upVoteCount--;
        };
    }
);