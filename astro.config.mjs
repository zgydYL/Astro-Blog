// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeGalaxy from 'starlight-theme-galaxy';
import { sidebar } from './src/config/sidebar';

// https://astro.build/config
export default defineConfig({
	site: 'https://zgydYL.github.io',
	base: '/Astro-Blog/',
	integrations: [
		starlight({
			title: '我的知识库',
			plugins: [starlightThemeGalaxy()],
			customCss: [
				'./src/styles/global.css',
			],
			// 网站默认语言
			locales: {
				root: {
					label: '简体中文',
					lang: 'zh-CN',
				},
			},
			// 右侧目录显示层级
			tableOfContents: {
				minHeadingLevel: 1,
				maxHeadingLevel: 6
			},
			sidebar,
		}),
	],
});
