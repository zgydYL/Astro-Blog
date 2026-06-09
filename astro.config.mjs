// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'My Docs',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			customCss: [
				'./src/styles/custom.css',
			],
			// 网站默认语言
			locales: {
				root: {
					label: '简体中文',
					lang: 'zh-CN',
				},
			},
			tableOfContents: {
				minHeadingLevel: 1,
				maxHeadingLevel: 6
			},
			sidebar: [
				"guides/example",
				{
					label: 'Guides',
					items: [
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					items: [{ autogenerate: { directory: 'reference' } }],
				},
				{
					label: 'Python',
					items: [{ autogenerate: { directory: 'python' } }],
				},
			],
		}),
	],
});
