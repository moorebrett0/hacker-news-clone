haxorNews.factory('StoriesFactory', function StoriesFactory() {
    var factory = {};
    factory.stories = [];

    factory.addStory = function(storyTitle) {
        factory.stories.push({ title: storyTitle, id: factory.stories.length + 1, users: [] });
    };

    return factory;
})
