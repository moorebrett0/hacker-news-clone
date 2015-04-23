haxorNews.controller('StoriesCtrl', function StoriesCtrl($scope, StoriesFactory) {
    $scope.stories = StoriesFactory.stories;
    $scope.StoriesFactory = StoriesFactory;

    $scope.addStory = function() {
        var newTitle = $scope.storyTitle;
        var newLink = $scope.storyLink;
        StoriesFactory.addStory(newTitle, newLink);
        $scope.storyTitle = null;
        $scope.storyLink = null;
    }






});
