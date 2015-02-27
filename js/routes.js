// jsx --harmony --strip-types -x jsx --watch js/ js/

var Router = ReactRouter;

var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

var App = React.createClass({displayName: "App",
    render:function() {
        return (
            React.createElement("div", {className: "row"}, 
                React.createElement("div", {className: "col-xs-12"}, 
                    React.createElement("nav", null, 
                        React.createElement("ul", {className: "tabs"}, 
                            React.createElement("li", {className: "tab col-xs-6"}, React.createElement(Link, {to: "app"}, "Home")), 
                            React.createElement("li", {className: "tab col-xs-6"}, React.createElement(Link, {to: "contact"}, "Contact"))
                        )
                    )
                ), 
                React.createElement(RouteHandler, null)
            )
        );
    }
});

var About = React.createClass({displayName: "About",
    render:function() {
        return (
            React.createElement("div", {className: "col-xs-10 col-xs-offset-1 body"}, 
                React.createElement("h4", {className: "text-center"}, "Hi, my name is ", React.createElement("b", null, "Jesse Smick"), ", and I'm a student and part-time developer."), 
                React.createElement("p", null, "I mainly develop for the web, both client-side and server side.")
            )
        );
    }
});

var contactMethods = [{
    title: 'Email',
    href: 'mailto:jesse@smick.me',
    icon: 'envelope-o',
    color: 'red lighten-1'
}, {
    title: 'Bitcoin',
    href: '/btc',
    icon: 'btc',
    color: 'amber darken-1'
}, {
    title: 'GitHub',
    href: '/gh',
    icon: 'github',
    color: 'blue lighten-1'
}, {
    title: 'Google+',
    href: '/g+',
    icon: 'google-plus',
    color: 'red'
}, {
    title: 'Hacker News',
    href: '/hn',
    icon: 'hacker-news',
    color: 'orange accent-4'
}, {
    title: 'Reddit',
    href: '/reddit',
    icon: 'reddit',
    color: 'light-blue darken-2'
}, {
    title: 'Stack Overflow',
    href: '/so',
    icon: 'stack-overflow',
    color: 'deep-orange'
}, {
    title: 'Twitter',
    href: '/twitter',
    icon: 'twitter',
    color: 'light-blue lighten-1'
}, {
    title: 'Keybase',
    href: '/keybase',
    icon: 'key',
    color: 'yellow darken-1'
}, {
    title: 'Bitbucket',
    href: '/bitbucket',
    icon: 'bitbucket',
    color: 'blue darken-4'
}];

var Contact = React.createClass({displayName: "Contact",
    render:function() {
        var contactTiles = [];

        for (var i = 0, contactMethod; i < contactMethods.length; i++) {
            contactMethod = contactMethods[i];
            contactTiles.push(
                React.createElement("div", {className: "col-xs-6 col-sm-4 col-md-3 tile", key: contactMethod.title}, 
                  React.createElement("a", {href: contactMethod.href, title: contactMethod.title, className: 'tile-content ' + contactMethod.color}, 
                    React.createElement("div", {className: "valign-wrapper tile-icon"}, 
                      React.createElement("i", {className: 'fa fa-' + contactMethod.icon + ' valign'})
                    ), 
                    React.createElement("div", {className: "tile-data"}, 
                      React.createElement("div", {className: "tile-title"}, contactMethod.title)
                    )
                  )
                )
            );
        }

        return (
            React.createElement("div", {className: "col-xs-12 body grid"}, contactTiles)
        );
    }
});

var routes = (
    React.createElement(Route, {name: "app", path: "/", handler: App}, 
        React.createElement(Route, {name: "contact", handler: Contact}), 
        React.createElement(DefaultRoute, {handler: About})
    )
);

Router.run(routes, function(Handler) {
    React.render(React.createElement(Handler, null), document.getElementsByTagName('main')[0]);
});
