import { autoItem, type SidebarItem } from './types';

export const frontend: SidebarItem = {
	label: '前端技术',
	collapsed: true,
	items: [
		autoItem('HTML', 'frontend/html'),
		autoItem('CSS', 'frontend/css'),
		autoItem('JavaScript', 'frontend/javascript'),
		autoItem('Vue', 'frontend/vue'),
		autoItem('React', 'frontend/react'),
	],
};
