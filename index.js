var http = require('http');

http
  .createServer(function(req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><iframe style="visibility: hidden" src="//www.siba.se/Customer/ActivateMarket?primary=false" onload="window.location.href=\'//www.siba.se' + req.url + '\'"></iframe></body></html>', 'utf8');
  })
  .listen(process.env.PORT || 8080, '0.0.0.0');