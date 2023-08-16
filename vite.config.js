import {resolve} from 'path';
import {defineConfig} from "vite";
import handlebars from "vite-plugin-handlebars";
import loginCard from './src/layout/card/loginCard.js'
import profileLayout from "./src/layout/profile/profileLayout.js";

export default defineConfig({
  plugins: [handlebars({
    partialDirectory: resolve(__dirname, 'src/components'),
    context: {
      global: 'global',
    },
    helpers: {
      loginCard: loginCard,
      profileLayout: profileLayout
    }
  })],

  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        login: resolve(__dirname, 'src/pages/login/login.html'),
        signUp: resolve(__dirname, 'src/pages/signup/signup.html'),
        page404: resolve(__dirname, 'src/pages/page404/page400.html'),
        page500: resolve(__dirname, 'src/pages/page500/page500.html'),
        main: resolve(__dirname, 'src/pages/main/main.html'),
        editProfile: resolve(__dirname, 'src/pages/editProfile/editProfile.html'),
        editPassword: resolve(__dirname, 'src/pages/editPassword/editPassword.html'),
        profile: resolve(__dirname, 'src/pages/profile/profile.html'),
      }
    }
  },
  server: {
    open: '/src/pages/login/login.html'
  }
})

