import type { SidebarItem } from './types';
import { frontend } from './frontend';
import { backend } from './backend';
import { middleware } from './middleware';
import { projects } from './projects';

export const sidebar: SidebarItem[] = [frontend, backend, middleware, projects];
