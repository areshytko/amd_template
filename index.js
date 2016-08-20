/**
 * Created by areshytko on 08.08.16.
 */


requirejs.config({
    baseUrl: '/{@TODO change this according to your web server configuration}/',
    paths: {
        // the left side is the module ID,
        // the right side is the path to
        // the jQuery file, relative to baseUrl.
        // Also, the path should NOT include
        // the '.js' file extension. This example
        // is using jQuery 1.9.0 located at
        // js/lib/jquery-1.9.0.js, relative to
        // the HTML page.
        jquery: 'node_modules/jquery/dist/jquery',
        main: 'main'
    }
});


requirejs(['main']);
