haxorNews.controller('StoriesCtrl', function StoriesCtrl($scope, StoriesFactory) {
    $scope.stories = StoriesFactory.stories;
    $scope.StoriesFactory = StoriesFactory;

    $scope.addStory = function() {
        var storyTitle = $scope.storyTitle;
        StoriesFactory.addStory($scope.storyTitle);
        $scope.storyTitle = null;
    }

});
