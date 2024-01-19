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

## Expo Updates

If there are any new versions of Expo SDK, here's how to upgrade the app to the next versions:

```bash
# Update to the latest version of EAS CLI
$ npm i -g eas-cli

# Install the new version of the Expo SDK package (e.g 50)
$ npm install expo@^50.0.0

# Upgrade all dependencies to match Expo SDK 50
$ npx expo install --fix

# Check for any possible known issues
$ npx expo-doctor@latest

# Next, update `cli.version` to the new version of `eas-cli` global package in `eas.json` file
# Next, upgrade xcode / android studio if needed
# Next, Create a new development build after upgrading
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