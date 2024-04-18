import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	base: 'result-r-005-1-placeholder',
	plugins: [react()],
	server: {
		open: true,
	},
});
