haxorNews.controller('CommentsCtrl', function CommentsCtrl($scope, $stateParams, StoriesFactory, UtilitiesFactory){
    $scope.story = UtilitiesFactory.findById(StoriesFactory.stories, $stateParams.storyId)


    $scope.addComment = function() {
        var newComment = $scope.newComment;
        StoriesFactory.addComment($scope.story, newComment);
        $scope.newComment = null;

    };
});
