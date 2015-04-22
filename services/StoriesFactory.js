haxorNews.factory('StoriesFactory', function StoriesFactory() {
    var factory = {};
    factory.stories = [];

    factory.addStory = function(storyTitle, storyLink) {
        factory.stories.push({ title: storyTitle, link: storyLink, id: factory.stories.length + 1, comments: [] });
    };

    factory.addComment = function(storyTitle, newComment) {
        stories.comments.push({ comment: newComment });
    };

    return factory;
})
