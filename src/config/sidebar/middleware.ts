import { autoItem, type SidebarItem } from './types';

export const middleware: SidebarItem = {
	label: '中间件',
	collapsed: true,
	items: [
		autoItem('MySQL', 'middleware/mysql'),
		autoItem('Redis', 'middleware/redis'),
		autoItem('ElasticSearch', 'middleware/elasticsearch'),
	],
};
