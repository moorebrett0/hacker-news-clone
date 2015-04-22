haxorNews.controller('StoriesCtrl', function StoriesCtrl($scope, StoriesFactory) {
    $scope.stories = StoriesFactory.stories;
    $scope.StoriesFactory = StoriesFactory;

    $scope.addStory = function() {
        var storyTitle = $scope.storyTitle;
        var storyLink = $scope.storyLink;
        debugger;
        StoriesFactory.addStory($scope.storyTitle, $scope.storyLink);
        $scope.storyTitle = null;
        $scope.storyLink = null;
    }



});
