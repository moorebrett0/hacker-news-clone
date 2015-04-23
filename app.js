var haxorNews = angular.module("haxorNews", ["ui.router"]);

haxorNews.config(function($stateProvider) {
    $stateProvider.state("home", {
        url: "",
        templateUrl: "partials/home.html"
    });

    $stateProvider.state("stories", {
        url: "/news-main",
        templateUrl: "partials/news-main.html",
        controller:'StoriesCtrl'
    });

    $stateProvider.state("comments", {
        url: "stories/:storyId",
        templateUrl: "partials/comments.html",
        controller: 'CommentsCtrl'
    });
});
