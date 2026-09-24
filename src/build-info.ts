import { execFileSync } from 'node:child_process';
import { version } from '../package.json';

// Evaluated once when the site is built, so these describe the deployed build

function readCommitHash(): string | undefined {
	try {
		return execFileSync('git', ['rev-parse', 'HEAD'], { encoding: 'utf8' }).trim();
	} catch {
		// Not a git checkout (for example a source tarball), fall back to what GitHub Actions provides
		return process.env.GITHUB_SHA;
	}
}

const commitHash = readCommitHash();

export const buildInfo = {
	version,
	builtAt: new Date(),
	commitHash,
	commitUrl: commitHash && `https://github.com/SantaClaas/cla.moe/commit/${commitHash}`,
};
