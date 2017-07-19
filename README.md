## React-intl-po-example [![Build Status](https://travis-ci.org/evenchange4/react-intl-po-example.svg?branch=master)](https://travis-ci.org/evenchange4/react-intl-po-example) [![Greenkeeper badge](https://badges.greenkeeper.io/evenchange4/react-intl-po-example.svg)](https://greenkeeper.io/)

> This is a standalone project for using react-intl-po with CRA. Futher Reading: [中文](https://medium.com/@evenchange4/i18n-workflow-for-react-project-9f9ff8fe9aef)

## Screenshots

![Demo](./docs/demo.png)

## Tutorials

### 1. Create a project with zero config

```
$ npm i create-react-app -g
$ create-react-app react-intl-po-example
$ cd react-intl-po-example
$ yarn start
```

### 2. Extract messages of CRA-Project from the command line.

```
$ yarn add react-intl react-intl-cra
```

```diff
+ "extract:messages": "react-intl-cra 'src/**/*.js' 'output/messages.json'",
```

Output: [./output/messages.json](./output/messages.json)

### 3. Extract pot

```
$ yarn add react-intl-po
```

```diff
+ "extract:pot": "react-intl-po json2pot 'output/messages.json' -o 'output/messages.pot'"
```

Output: [./output/messages.pot](./output/messages.pot)

#### Option
[How to translate the same message into two different meanings?](https://github.com/evenchange4/react-intl-po/blob/master/README.md#how-to-translate-the-same-message-into-two-different-meanings) (By [@Sand1929](https://github.com/Sand1929) in [#83](https://github.com/evenchange4/react-intl-po/issues/83))

```diff
- "extract:pot": "react-intl-po json2pot 'output/messages.json' -o 'output/messages.pot'"
+ "extract:pot": "react-intl-po json2pot 'output/messages.json' -c 'id' -o 'output/messages.pot'"
```

Output:[./output/messages-c.pot](./output/messages-c.pot)
