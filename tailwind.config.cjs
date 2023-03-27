/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	safelist:['text-4xl','text-2xl','text-xl','text-lg','font-bold', 'font-mplus','mb-6', 'mb-2','mb-1','rounded-xl','p-4','object-contain','underline','underline-offset-2','hover:text-purple-500'],
	theme: {
		extend: {
		  fontFamily:{
			nunito:['Nunito','sans-serif'],
			poppins:['Poppins','sans-serif'],
		  },
		  colors:{
			'communitybg':'#F5F5F5',
			'herobg':'#FFF3FC',
		  },
		  backgroundImage:{
			'valuebg':'url("/src/images/valueCommunityBg.png")',
			'homePageBg':'url("/src/images/Home-Hero-Bg.jpg")',
			'homeTeamBg':'url("/src/images/Home-Team-Bg.png")',
			'homeReachOutBg':'url("/src/images/Home-ReachOut-Bg.jpg")'
			
		  }
		},
	  },
	plugins: [require('@tailwindcss/forms')],
}
