riot.tag(
    'hi',
    '<h2>Hi {title}!</h2><ul><li each="{humans}">{name}</li></ul>',
    function (opts) {
        this.title = opts.title;
        this.humans = opts.humans;
    }
);