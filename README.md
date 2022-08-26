# create-verify-signature

When sending data to webhook from Nodejs server, send data with signature and on the receiving end verify that signature. Create signature using data being sent and secret token and verify that token using the same secret key provided by server.

## Installation

Install via NPM:

```bash
npm i create-verify-signature

```

## Usage

#### Create sginature

```

const signer = require ("create-verify-signature");

signer.createSignature(
    '{"event":"mint","txh":"0xa1ec711cb5b2f2fdcc25aa12257874c376622d4f4d8631a49c0cb31b9c4baca5"}',
    "supersecret"
    )(); // e26de59e3702e79e9e9e7d27547b6169dd8865ed98d1c53c77ef16f9d0f2ad37"

```

#### Verify sginature

```

const signer = require ("create-verify-signature");

signer.app.isValidSignature(
    "e26de59e3702e79e9e9e7d27547b6169dd8865ed98d1c53c77ef16f9d0f2ad37",
    '{"event":"mint","txh":"0xa1ec711cb5b2f2fdcc25aa12257874c376622d4f4d8631a49c0cb31b9c4baca5"}',
    "supersecret"
    )(); // true

```

## Author

[![github](https://img.shields.io/badge/github-000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/inayatu)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/inayatu)
