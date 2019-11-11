const libfs = require('fs');
const libpath = require('path');
const svgpath = libpath.join(process.cwd(), 'svg');
const res = ['fa = {}'];

libfs.readdirSync(svgpath).forEach(f => {
	const p = libpath.join(svgpath, f);
	const d = libfs.readFileSync(p).toString('base64');
	res.push(`fa.${f.replace('.svg', '').split('-').join('_').toUpperCase()} = 'data:image/svg+xml;base64,${d}'`);
});

libfs.writeFileSync(libpath.join(process.cwd(), 'font-awesome.js'), res.join('\n'));