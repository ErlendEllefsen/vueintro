import Vue from 'vue';
import Vuetify from 'vuetify/lib';

import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: colors.blue.lighten1,
            secondary: colors.grey.darken1,
            accent: colors.blueGrey.lighten3,
            error: colors.red.accent3,
            background: colors.indigo.lighten5,
            icon: colors.blue.darken4,
            textcolor: colors.white
          },
          dark: {
            primary: colors.blue.darken4,
            accent: colors.blueGrey.darken3,
            icon: colors.blue.lighten1,
            background: colors.indigo.base,
            textcolor: colors.black
          }
        }
      }
});
