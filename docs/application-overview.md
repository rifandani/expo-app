# Application Overview

The application built with:

- `typescript` + `eslint` + `prettier` -> development productivity
- `ky` + `@tanstack/react-query` -> data fetching
- `zod` -> runtime schema validation
- `react-hook-form` -> form management
- `zustand` -> performant global state
- `type-fest` -> collection of useful type helpers
- `@rifandani/nxact-yutiriti` -> collection of useful utils
- `tamagui` react native UI kit
- `react-native-mmkv` modern and fast local storage
- `expo` react native framework with rich ecosystem and community
- `@formatjs` polyfills for Intl i18n

## Get Started

Prerequisite, minimum requirements:

- Node 18+
- Java 11+

To set up the app execute the following commands:

```bash
# clone the template OR you can click "Use this template" on the github repo
$ git clone https://github.com/rifandani/expo-app.git

# cd into the app dir
$ cd expo-app

# rename the example env files
# learn more: https://docs.expo.dev/guides/environment-variables/
$ cp .env.development.local.example .env.development.local
$ cp .env.test.local.example .env.test.local
$ cp .env.production.local.example .env.production.local

# install deps
$ npm i
```

## How to upgrade?

If there are any new versions of Expo SDK, here's how to upgrade the app to the next versions:

```bash
# Update to the latest version of EAS CLI
$ npm i -g eas-cli

# Install the new version of the Expo SDK package (e.g ^50.0.0)
$ npm install expo@^50.0.0

# Upgrade all dependencies to match Expo SDK 50
$ npx expo install --fix

# Check for any possible known issues
$ npx expo-doctor@latest

# Next, in `eas.json` file, update `cli.version` to the new version of `eas-cli` global package
# Next, upgrade xcode / android studio if needed
# Next, Recreate a development build after upgrading
```

## Development

Every single time you change the `app.json` file, install native libraries, you need to re-generate native project (CNG) using:

```bash
# Regenerate native project
$ npm run prebuild

# or regenerate native project from scratch
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

If you want to opt-out of EAS cloud build, you can [run the build locally](https://docs.expo.dev/build-reference/local-builds/). But first, you still need to login to EAS first OR alternatively set `EXPO_TOKEN` access token.

> As of Expo SDK 50, you need to have Java 17 installed in your device to build android

```bash
# build android locally
$ npm build:android:local

# build ios locally
$ npm build:ios:local
```

## Deployment

Coming Soon