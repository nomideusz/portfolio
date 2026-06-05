// Minimal sprite renderer — matches @zaur/sprite in the zaur monorepo.

export type ZaurFrame = 'idle' | 'walkA' | 'walkB';

const FRAMES: Record<ZaurFrame, string[]> = {
	idle: [
		'....................',
		'....................',
		'.............XXXXX..',
		'............XWXXXXX.',
		'............XXXXXXX.',
		'............XXXXX...',
		'...........XXXX.....',
		'......XXXXXXXXX.....',
		'....XXXXXXXXXXX.....',
		'...XXXXXXXXXXX......',
		'....XXXXXXXX........',
		'......XX.X.XX.......',
		'....XX.....XX.......',
		'....XX....XXX.......',
		'...XXX.....XX.......',
		'...XX........XX.....',
		'..XXXX.....XXXX.....',
		'....................'
	],
	walkA: [
		'....................',
		'....................',
		'.............XXXXX..',
		'............XWXXXXX.',
		'............XXXXXXX.',
		'............XXXXX...',
		'...........XXXX.....',
		'......XXXXXXXXX.....',
		'....XXXXXXXXXXX.....',
		'...XXXXXXXXXXX......',
		'....XXXXXXXX........',
		'.....XX.X.XX........',
		'....XX.....XX.......',
		'...XX......XXX......',
		'..XXX.......XX......',
		'..XX.........XX.....',
		'.XXXX.......XXXX....',
		'....................'
	],
	walkB: [
		'....................',
		'....................',
		'.............XXXXX..',
		'............XWXXXXX.',
		'............XXXXXXX.',
		'............XXXXX...',
		'...........XXXX.....',
		'......XXXXXXXXX.....',
		'....XXXXXXXXXXX.....',
		'...XXXXXXXXXXX......',
		'....XXXXXXXX........',
		'......XX.X.XX.......',
		'......XX...XX.......',
		'......XX....XX......',
		'.....XXX.....XX.....',
		'.....XX.......XXX...',
		'....XXXX......XXXX..',
		'....................'
	]
};

const GRID_W = 20;
const GRID_H = 18;

export function zaurFrameSvg(
	frame: ZaurFrame = 'idle',
	color = 'currentColor',
	scale = 2,
	facing: 'left' | 'right' = 'right'
): string {
	const rows = FRAMES[frame];
	const w = GRID_W * scale;
	const h = GRID_H * scale;
	const rects: string[] = [];

	for (let y = 0; y < GRID_H; y++) {
		const row = rows[y] ?? '';
		for (let x = 0; x < GRID_W; x++) {
			if ((row[x] ?? '.') !== 'X') continue;
			const px = facing === 'right' ? x : GRID_W - 1 - x;
			rects.push(
				`<rect x="${px * scale}" y="${y * scale}" width="${scale}" height="${scale}"/>`
			);
		}
	}

	return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" shape-rendering="crispEdges" fill="${color}" aria-hidden="true">${rects.join('')}</svg>`;
}

export function zaurIdleSvg(
	color = 'currentColor',
	scale = 2,
	facing: 'left' | 'right' = 'right'
): string {
	return zaurFrameSvg('idle', color, scale, facing);
}

export const ZAUR_SPRITE_WIDTH = GRID_W;
export const ZAUR_SPRITE_HEIGHT = GRID_H;
