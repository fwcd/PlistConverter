const ArgumentParser = require("argparse").ArgumentParser;
const plist = require("simple-plist");

function main() {
	const parser = new ArgumentParser({
		addHelp: true,
		description: "Plist Converter"
	});
	parser.addArgument("path", {
		help: "Path to the .plist file"
	});
	
	const args = parser.parseArgs();
	const path = args.path;
	
	plist.readFile(path, function (err, data) {
		if (err) {
			throw err;
		}
		console.log(JSON.stringify(data, null, 2))
	});
}

main();
