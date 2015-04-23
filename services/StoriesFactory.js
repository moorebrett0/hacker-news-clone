haxorNews.factory('StoriesFactory', function StoriesFactory() {
    var factory = {};
    factory.stories = [];

    factory.addStory = function(storyTitle, storyLink) {
        factory.stories.push({ title: storyTitle, link: storyLink, id: factory.stories.length + 1, comments: [], votes: 0 });
    };

    factory.addComment = function(story, newComment) {
        story.comments.push({ text: newComment });
    };

    factory.upVote = function(story, votes) {
        story.votes += 1;
    };

    return factory;
});



// LIMIT TO ONE UPVOTE PER USER
// SORT STORIES BY UPVOTES
