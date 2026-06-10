import type { StarlightUserConfig } from '@astrojs/starlight/types';

export type Sidebar = NonNullable<StarlightUserConfig['sidebar']>;
export type SidebarItem = Sidebar[number];

/** 创建自动生成的侧边栏项 */
export function autoItem(label: string, directory: string): SidebarItem {
	return { label, collapsed: true, items: [{ autogenerate: { directory, collapsed: true } }] };
}
