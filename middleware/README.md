# Commonly Used Middlewares

This collection of middlewares can:
 - setup cors, helmet, compression, morgan and cookie-session
 - validate a user
 - handles all errors
 - handle unknown requests
 - check if user have authorization
 - validate imcoming requests

# Quick start
First, run npm install @bigoncloud/middleware --save for your app. Then in your Express app, if you want to load the common middleware function:


```js
const { commonMiddleware } = require('@bigoncloud/middleware')
```

# Important
It's best to use `commonMiddleware` early in your middleware stack, so that `cors`, `helmet`, `compression`, `morgan` and `cookie-sessions` are set

The environment variable names supported are:
### NODE_ENV
During **development** morgan, the HTTP request logger middleware will active

During **tests** your cookie-session will not be secure, will only be secure during **production** and **development**

### JWT_SECRET
If you use this package, make sure you set your secret key with this environment variable name **JWT_SECRET**. This will through an error if secret is not set with this environment variable name

# Other
This package is designed to work with [@bigoncloud/errors](https://www.npmjs.com/package/@bigoncloud/errors) package