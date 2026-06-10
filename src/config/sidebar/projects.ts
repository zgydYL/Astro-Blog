import type { SidebarItem } from './types';

export const projects: SidebarItem = {
	label: '项目实战',
	collapsed: true,
	items: [{ autogenerate: { directory: 'projects', collapsed: true } }],
};
