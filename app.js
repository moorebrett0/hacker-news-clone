var haxorNews = angular.module("haxorNews", ["ui.router"]);

haxorNews.config(function($stateProvider) {
    $stateProvider.state("home", {
        url: "",
        templateUrl: "partials/home.html"
    });

    $stateProvider.state("news-main", {
        url: "/news-main",
        templateUrl: "partials/news-main.html",
        controller:'StoriesCtrl'
    });

    $stateProvider.state("story", {
        url:"/:storyId",
        templateUrl: "partials/story.html",
        // controller:

    });
});
