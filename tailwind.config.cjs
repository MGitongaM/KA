/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
		  fontFamily:{
			nunito:['Nunito','sans-serif'],
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
	plugins: [],
}
