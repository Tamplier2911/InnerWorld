// application
const express = require('express');
const path = require('path');

// security
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');

// logger
const morgan = require('morgan');

// cors and https
const cors = require('cors');
const enforce = require('express-sslify');

// errors
const globalErrorHandler = require('./controllers/errorsController');

// routers
const userRouter = require('./routes/usersRouter');

const app = express();
app.enable('trust proxy');

app.use(cors());
app.options('*', cors());

// protection
app.use(xss());
app.use(mongoSanitize());
app.use(hpp({ whitelist: [] }));
app.use(helmet());

// logger
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

// limiters
app.use(express.json({ limit: '10kb' }));
const limiter = rateLimit({
  max: 1000,
  windowMs: 60 * 60 * 1000,
  message: 'Too many requests from this IP, please try again in a hour.',
});
app.use('/api', limiter);

// parsers
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

// routes
app.use('/api/v1/users', userRouter);

if (process.env.NODE_ENV === 'production') {
  // compress all response bodies
  app.use(compression());

  // enforce https whenever http are made
  app.use(enforce.HTTPS({ trustProtoHeader: true }));

  // serving static files
  app.use(
    express.static(path.join(__dirname, 'client/build'), {
      etag: true,
      lastModified: true,
      setHeaders: (res, path) => {
        const hashRegExp = new RegExp('\\.[0-9a-f]{8}\\.');
        if (path.endsWith('.html')) {
          res.setHeader('Cache-Control', 'no-cache');
        } else if (hashRegExp.test(path)) {
          res.setHeader('Cache-Control', 'max-age=31536000');
        }
      },
    })
  );

  // on request to any route that is not covered - send index html
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
} else {
  // on request to any route that is not covered - send 404 html
  app.get('*', (req, res) => {
    res.status(200).json({
      success: true,
      data: {
        message: 'You are in development mode!',
      },
    });
  });
}

app.use(globalErrorHandler);

module.exports = app;
