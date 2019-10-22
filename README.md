# qa-app
auth0 sample.

## Requirements

* auth0 account
* google oauth2.0 client id

## Getting started

Create secret files.

See: https://auth0.com/blog/jp-react-tutorial-building-and-securing-your-first-app/

backend/src/secret.js:

```
const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

const checkJwt = jwt({
    secret: jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `https://AUTH0DOMAIN/.well-known/jwks.json`
    }),

    // Validate the audience and the issuer.
    audience: 'AUTH0CLIENTID',
    issuer: `https://AUTH0DOMAIN/`,
    algorithms: ['RS256']
});

exports.checkJwt = checkJwt;
```

frontend/src/secret.js:

```
class secret {
    static auth0 = {
        domain: 'AUTH0DOMAIN',
        audience: 'https://AUTH0DOMAIN/userinfo',
        clientID: 'AUTH0CLIENTID',
        redirectUri: 'http://localhost:3000/callback',
        returnTo: 'http://localhost:3000',
    };
    
    static api = {
        domain: 'http://localhost:8081',
  }
}

export default secret;
```

### Start server

$ cd backend
$ node src

### Start client

$ cd frontend
$ yarn start

