# Application Overview

The application built with:

- `typescript` + `eslint` + `prettier` -> development productivity
- `vitest` + `@testing-library/react` -> unit test, integration test, coverage
- `msw` -> API response mocking for tests
- `axios` + `@tanstack/react-query` -> server state management + data fetching
- `zod` -> runtime schema validation
- `react-hook-form` -> form management
- `zustand` -> performant global state
- `type-fest` -> collection of useful type helpers
- `@rifandani/nxact-yutiriti` -> collection of useful utils
- tamagui...

## Get Started

Prerequisites:

- Node 18+

To set up the app execute the following commands:

```bash
# clone the template OR you can click "Use this template" in https://github.com/rifandani/expo-app.com
$ git clone https://github.com/rifandani/expo-app.git

# cd into the app dir
$ cd expo-app

# rename the example env files
$ cp .env.development.local.example .env.development.local

# install deps
$ npm i
```

## Development

Every single time you change the `app.json` file, install native libraries, you need to re-generate native build (CNG) using:

```bash
# Regenerate native build
$ npm run prebuild

# or regenerate native build from scratch
$ npm run prebuild:clean
```

After that, to start the app + i18n, run:

```bash
# Runs the app + i18n
$ npm run start

# or
$ npm run start:clean
```

## Testing

Coming Soon

## Build

To build the app, we use global `eas-cli` npm package. Install it globally as it is the recommendation from the expo team.

```bash
# install eas-cli globally
$ npm i -g eas-cli
```

There are 2 main target build, android and ios. For further details, please check `eas.json` file.

```bash
# build android
$ npm build:android

# build ios
$ npm build:ios
```

## Deployment

Coming Soon