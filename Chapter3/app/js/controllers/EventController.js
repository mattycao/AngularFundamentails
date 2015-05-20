'use strict';

eventsApp.controller('EventController',
    function EventController($scope, eventData) {

        $scope.snippet = '<span style="color: red">hi there</span>';
        $scope.boolValue = true;
        $scope.sortOrder = 'name';
        $scope.event = eventData.getEvent().
            $promise.then(
            function(event) {
                $scope.event = event;
                console.log(event);
            },
            function(statusCode) {
                console.log(statusCode);
            }
        );

        $scope.upVoteSession = function(session) {
            session.upVoteCount++;
        };

        $scope.downVoteSession = function(session) {
            session.upVoteCount--;
        };
    }
);