import { autoItem, type SidebarItem } from './types';

const java: SidebarItem = {
	label: 'Java',
	collapsed: true,
	items: [
		autoItem('Java基础', 'backend/java/java基础'),
		autoItem('JavaWeb', 'backend/java/javaweb'),
		autoItem('Spring', 'backend/java/spring'),
		autoItem('MyBatis', 'backend/java/mybatis'),
		autoItem('Spring Boot', 'backend/java/springboot'),
	],
};

const python: SidebarItem = {
	label: 'Python',
	collapsed: true,
	items: [
		autoItem('Python基础', 'backend/python/python基础'),
		autoItem('Python标准库', 'backend/python/python标准库'),
		autoItem('FastAPI', 'backend/python/fastapi'),
		autoItem('Django', 'backend/python/django'),
		autoItem('Flask', 'backend/python/flask'),
	],
};

const go: SidebarItem = {
	label: 'Go',
	collapsed: true,
	items: [
		autoItem('Go基础', 'backend/go/go基础'),
		autoItem('Gin', 'backend/go/gin'),
		autoItem('GORM', 'backend/go/gorm'),
	],
};

export const backend: SidebarItem = {
	label: '后端技术',
	collapsed: true,
	items: [java, python, go],
};
