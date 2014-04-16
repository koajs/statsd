
# koa-statsd

 Statsd middleware.

## Installation

```js
$ npm install koa-statsd
```

## Options

- `prefix` optional statsd prefix ('.' is appended)
- `host` optional statsd host
- `port` optional statsd port

## Metrics

- `request.count` request counter
- `request.<method>.count` request counter
- `request.<method>.<path>.count` request counter
- `request.size` request content-length
- `request.duration` request duration
- `request.<method>.duration` request duration
- `request.<method>.<path>.duration` request duration
- `request.addresses` request addresses set

## License

  MIT
