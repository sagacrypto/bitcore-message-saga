# SagaCoin Message Verification and Signing for Bitcore-Saga


[![NPM Package](https://img.shields.io/npm/v/bitcore-message-saga.svg?style=flat-square)](https://www.npmjs.org/package/bitcore-message-saga)
[![Build Status](https://img.shields.io/travis/sagacrypto/bitcore-message-saga.svg?branch=master&style=flat-square)](https://travis-ci.org/sagacrypto/bitcore-message-saga)
[![Coverage Status](https://img.shields.io/coveralls/bitpay/bitcore-message-saga.svg?style=flat-square)](https://coveralls.io/r/sagacrypto/bitcore-message-saga?branch=master)

bitcore-message-saga adds support for verifying and signing SagaCoin messages in [Node.js](http://nodejs.org/) and web browsers.

See [the main bitcore-saga repo](https://github.com/sagacrypto/bitcore-saga) for more information.

## Getting Started

```sh
npm install bitcore-message-saga
```

```sh
bower install bitcore-message-saga
```

To sign a message:

```javascript
var bitcore = require('bitcore-lib-saga');
var Message = require('bitcore-message-saga');

var privateKey = bitcore.PrivateKey.fromWIF('cPBn5A4ikZvBTQ8D7NnvHZYCAxzDZ5Z2TSGW2LkyPiLxqYaJPBW4');
var signature = Message('hello, world').sign(privateKey);
```

To verify a message:

```javascript
var address = 'n1ZCYg9YXtB5XCZazLxSmPDa8iwJRZHhGx';
var signature = 'H/DIn8uA1scAuKLlCx+/9LnAcJtwQQ0PmcPrJUq90aboLv3fH5fFvY+vmbfOSFEtGarznYli6ShPr9RXwY9UrIY=';
var verified = Message('hello, world').verify(address, signature);
```

## Contributing

See [CONTRIBUTING.md](https://github.com/sagacrypto/bitcore-saga/blob/master/CONTRIBUTING.md) on the main bitcore-saga repo for information about how to contribute.

## License

Code released under [the MIT license](https://github.com/bitpay/bitcore/blob/master/LICENSE).

Copyright 2013-2015 BitPay, Inc. Bitcore is a trademark maintained by BitPay, Inc.
Copyright 2018 Saga Development Team.
