import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import image from "@astrojs/image";
import addClasses from 'rehype-add-classes'

// https://astro.build/config
export default defineConfig({
  markdown:{
    rehypePlugins:[[addClasses,{
      h1:"text-4xl font-bold font-mplus mb-2",
      h2:"text-2xl font-bold font-mplus mb-2",
      h3:"text-xl font-bold font-mplus mb-1",
      h4:"text-lg font-bold font-mplus",
      h5:"font-bold font-mplus",
      h6:"font-bold font-mplus",
      pre:"rounded-xl p-4",
      p:"mb-6",
      img:"object-contain mb-6",
      a:"underline, underline-offset-2 hover:text-purple-500",
    }]]
  },
  integrations: [tailwind(), react(), image({
    serviceEntryPoint: '@astrojs/image/sharp'
  }),
  
  ]
});