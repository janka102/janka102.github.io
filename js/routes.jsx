// jsx --harmony --strip-types -x jsx --watch js/ js/

var Router = ReactRouter;

var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

var App = React.createClass({
    render() {
        return (
            <div className='row'>
                <div className='col-xs-12'>
                    <nav>
                        <ul className='tabs'>
                            <li className='tab col-xs-6'><Link to='app'>Home</Link></li>
                            <li className='tab col-xs-6'><Link to='contact'>Contact</Link></li>
                        </ul>
                    </nav>
                </div>
                <RouteHandler/>
            </div>
        );
    }
});

var About = React.createClass({
    render() {
        return (
            <div className='col-xs-10 col-xs-offset-1 body'>
                <h4 className='text-center'>Hi, my name is <b>Jesse Smick</b>, and I'm a student and part-time developer.</h4>
                <p>I mainly develop for the web, both client-side and server side.</p>
            </div>
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

var Contact = React.createClass({
    render() {
        var contactTiles = [];

        for (var i = 0, contactMethod; i < contactMethods.length; i++) {
            contactMethod = contactMethods[i];
            contactTiles.push(
                <div className='col-xs-6 col-sm-4 col-md-3 col-lg-2 tile' key={contactMethod.title}>
                  <a href={contactMethod.href} title={contactMethod.title} className={'tile-content ' + contactMethod.color}>
                    <div className='valign-wrapper tile-icon'>
                      <i className={'fa fa-' + contactMethod.icon + ' valign'}></i>
                    </div>
                    <div className='tile-data'>
                      <div className='tile-title'>{contactMethod.title}</div>
                    </div>
                  </a>
                </div>
            );
        }

        return (
          <div className="col-xs-12 body grid">{contactTiles}</div>
        );
    }
});

var routes = (
    <Route name='app' path='/' handler={App}>
      <Route name='contact' handler={Contact}/>
      <DefaultRoute handler={About}/>
    </Route>
);

Router.run(routes, function(Handler) {
    React.render(<Handler/>, document.getElementsByTagName('main')[0]);
});
