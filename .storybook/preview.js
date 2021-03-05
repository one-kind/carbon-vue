import '!style-loader!css-loader!sass-loader!../src/styles/main.scss';
import '!style-loader!css-loader!sass-loader!./demo.scss';

import Vue from 'vue';
import CarbonVue from '../src';

Vue.use(CarbonVue);

export const parameters = {
  // layout: 'centered',
  controls: {
    expanded: false,
    hideNoControlsWarning: true
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
}
