# @onekind/carbon-vue

![logo](./logo.png)

An opinionated Vue implementation of IBM™ [Carbon Design System](http://www.carbondesignsystem.com/) version 10.

See them in action [here](https://one-kind.github.io/carbon-vue/)

- [Project setup](#project-setup)
  - [Using storybook for development](#using-storybook-for-development)
  - [Compiles and minifies for production](#compiles-and-minifies-for-production)
  - [Run your unit tests](#run-your-unit-tests)
  - [Lints and fixes files](#lints-and-fixes-files)
- [Using Carbon Vue in your project](#using-carbon-vue-in-your-project)
  - [Using with Vue](#using-with-vue)
  - [Using with Nuxt](#using-with-nuxt)
- [Component List](#component-list)
- [Acknowledgement](#acknowledgement)

## Project setup

```bash
yarn
```

### Using storybook for development

```bash
yarn storybook
```

### Compiles and minifies for production

```bash
yarn build
```

### Run your unit tests

```bash
yarn test:unit
```

### Lints and fixes files

```bash
yarn lint
```

## Using Carbon Vue in your project

Add carbon-vue to your project, as a dependency:

```bash
npm install @onekind/carbon-vue
```

### Using with Vue

Add the following to your `App.vue` file:

```javascript
import Vue from 'vue'
import CarbonVue from '@onekind/carbon-vue'
Vue.use(CarbonVue)
```

### Using with Nuxt

Add a `carbon-vue.js` to `/plugins` folder:

```javascript
import Vue from 'vue'
import CarbonVue from '@onekind/carbon-vue'
Vue.use(CarbonVue)
```

Add your new plugin in `nuxt.config.js`

```javascript
plugins: [
  'carbon-vue.js`
]
```

> you can use any other name for the file.

## Component List

| Component            | Status | Stories | Themes |
|----------------------|:------:|:-------:|:------:|
| Accordion            |    ✔   |    ✔    |    ✔   |
| Breadcrumb           |    ✔   |    ✔    |        |
| Button               |    ✔   |    ✔    |        |
| Checkbox             |    ✔   |    ✔    |        |
| CodeSnippet          |    ✔   |    ✔    |        |
| ComboBox             |    ✔   |    ✔    |    ✔   |
| ContentSwitcher      |        |         |        |
| DataTable            |    ✔   |    ✘    |        |
| DatePicker           |        |         |        |
| Dropdown             |    ✔   |    ✔    |        |
| FileUploader         |        |         |        |
| Form                 |    ✔   |    ✔    |        |
| InlineLoading        |        |         |        |
| InlineNotification   |        |         |        |
| Link                 |    ✔   |    ✔    |        |
| List                 |        |         |        |
| Loading              |    ✔   |    ✔!   |        |
| Modal                |    ✔   |    ✔    |        |
| MultiSelect          |        |         |        |
| NumberInput          |    ✔   |    ✔    |        |
| OverflowMenu         |    ✔   |    ✔    |        |
| Pagination           |    ✔   |    ✔    |        |
| Progress             |    ✔   |    ✔    |        |
| RadioButton          |    ✔   |    ✔    |        |
| Search               |        |         |        |
| Select               |    ✔   |    ✔    |        |
| SkeletonText         |        |         |        |
| Slider               |    ✔   |    ✔    |        |
| StructuredList       |        |         |        |
| Tabs                 |   ✔!   |    ✔    |        |
| Tag                  |    ✔   |    ✔    |        |
| TextArea             |    ✔   |    ✔    |        |
| TextInput            |    ✔   |    ✔!   |        |
| Tile                 |    ✔   |    ✔    |        |
| TimePicker           |    ✔   |    ✔!   |        |
| ToastNotification    |    ✔   |    ✔    |        |
| Toggle               |    ✔   |    ✔    |        |
| Tooltip              |    ✔   |    ✔    |        |
| UIShell              |    ✔   |    ✔    |        |

## Acknowledgement

A big thanks to IBM™ for making [Carbon Design System](http://www.carbondesignsystem.com/) publicly available. It gives us the opportunity of inspecting good professional work, even if many would disagree on the design language or approach.

This project uses lots of open source projects, and benefits from them. So a huge thanks to anyone contributing to those.
