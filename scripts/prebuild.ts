import { execSync } from 'node:child_process';

execSync('npm run services:verify', { stdio: 'inherit' });
