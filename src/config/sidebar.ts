// 侧边栏配置
// 文档：https://starlight.astro.build/reference/configuration/#sidebar

export const sidebar = [
	{
		label: '前端',
		collapsed: true,
		items: [
			{ label: 'HTML', items: [{ autogenerate: { directory: 'frontend/html', collapsed: true } }] },
			{ label: 'CSS', items: [{ autogenerate: { directory: 'frontend/css', collapsed: true } }] },
			{ label: 'JavaScript', items: [{ autogenerate: { directory: 'frontend/javascript', collapsed: true } }] },
			{ label: 'Vue', items: [{ autogenerate: { directory: 'frontend/vue', collapsed: true } }] },
			{ label: 'React', items: [{ autogenerate: { directory: 'frontend/react', collapsed: true } }] },
		],
	},
	{
		label: '后端技术',
		collapsed: true,
		items: [
			{
				label: 'Java',
				collapsed: true,
				items: [
					{ label: 'Java基础', collapsed: true, items: [{ autogenerate: { directory: 'backend/java/java基础', collapsed: true } }] },
					{ label: 'JavaWeb', collapsed: true, items: [{ autogenerate: { directory: 'backend/java/javaweb', collapsed: true } }] },
					{ label: 'Spring', collapsed: true, items: [{ autogenerate: { directory: 'backend/java/spring', collapsed: true } }] },
					{ label: 'MyBatis', collapsed: true, items: [{ autogenerate: { directory: 'backend/java/mybatis', collapsed: true } }] },
					{ label: 'Spring Boot', collapsed: true, items: [{ autogenerate: { directory: 'backend/java/springboot', collapsed: true } }] },
				],
			},
			{
				label: 'Python',
				collapsed: true,
				items: [
					{ label: 'Python基础', collapsed: true, items: [{ autogenerate: { directory: 'backend/python/python基础', collapsed: true } }] },
					{ label: 'FastAPI', collapsed: true, items: [{ autogenerate: { directory: 'backend/python/fastapi', collapsed: true } }] },
					{ label: 'Django', collapsed: true, items: [{ autogenerate: { directory: 'backend/python/django', collapsed: true } }] },
					{ label: 'Flask', collapsed: true, items: [{ autogenerate: { directory: 'backend/python/flask', collapsed: true } }] },
				],
			},
			{
				label: 'Go',
				collapsed: true,
				items: [
					{ label: 'Go基础', collapsed: true, items: [{ autogenerate: { directory: 'backend/go/go基础', collapsed: true } }] },
					{ label: 'Gin', collapsed: true, items: [{ autogenerate: { directory: 'backend/go/gin', collapsed: true } }] },
					{ label: 'GORM', collapsed: true, items: [{ autogenerate: { directory: 'backend/go/gorm', collapsed: true } }] },
				],
			},
		],
	},
	{
		label: '中间件',
		collapsed: true,
		items: [
			{ label: 'MySQL', collapsed: true, items: [{ autogenerate: { directory: 'middleware/mysql', collapsed: true } }] },
			{ label: 'Redis', collapsed: true, items: [{ autogenerate: { directory: 'middleware/redis', collapsed: true } }] },
			{ label: 'ElasticSearch', collapsed: true, items: [{ autogenerate: { directory: 'middleware/elasticsearch', collapsed: true } }] },
		],
	},
	{
		label: '项目实战',
		collapsed: true,
		items: [{ autogenerate: { directory: 'projects', collapsed: true } }],
	},
];
