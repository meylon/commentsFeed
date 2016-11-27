/**
 * Created by moshe eylon on 26/11/2016.
 */
var comments = angular.module('comments', ['ui.gravatar','ngAnimate']);

comments.controller('CommentListCtrl', ["$scope", "$animate",function ($scope, $animate) {
    $scope.comments = [
        {"mail": "meylon@gmail.com",
            "comment": "Hi i am moshe"},
        {"mail": "shira.vainer@gmail.com",
            "comment": "i am shira"},
        {"mail": "elik@bigpanda.io",
            "comment": "Intel core 2 duo"}
    ];
    $scope.orderList = "mail";

    $scope.addComment = function(){
        $scope.comments.push({"mail":$scope.formEmail, "comment":$scope.formComment});
        $scope.formEmail = '';
        $scope.formComment = '';
    };
}]);

