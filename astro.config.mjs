import { defineConfig } from 'astro/config'
import tailwind from "@astrojs/tailwind"
import i18next from 'astro-i18next';

export default defineConfig({
  integrations: [
    tailwind(), 
      robotsTxt(),
    i18next({      
      defaultLocale: 'es',
      locales: ['es', 'en'],
    }),
  ],
});


import robotsTxt from "astro-robots-txt"

// // https://astro.build/config


// export default defineConfig({
//   integrations: [tailwind(), robotsTxt()],
//   site: 'https://porfolio.dev/'
// })
