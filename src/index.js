const ArgumentParser = require("argparse").ArgumentParser;
const converter = require("./converter");

function main() {
	const parser = new ArgumentParser({
		addHelp: true,
		description: "Plist Converter"
	});
	parser.addArgument("path", {
		help: "Path to the input (.plist) file"
	});
	parser.addArgument(["-o", "--output"], {
		help: "Path to the output (.json/.xml) file"
	});
	parser.addArgument(["-b", "--binary"], {
		action: "storeTrue",
		help: "Encode as a binary plist (instead of using XML)"
	});
	
	const args = parser.parseArgs();
	const inputPath = args.path;
	const outputPath = args.output;
	
	if (outputPath !== null && outputPath !== undefined) {
		let format;
		
		if (outputPath.endsWith(".json")) {
			format = "JSON";
			converter.convertPlistToJson(inputPath, outputPath);
		} else { // Use plist format
			if (args.binary) {
				format = "binary";
				converter.convertPlistToBinary(inputPath, outputPath);
			} else {
				format = "XML";
				converter.convertPlistToXml(inputPath, outputPath);
			}
		}
		
		console.log("Writing plist as " + format + " to " + outputPath);
	} else {
		converter.printPlistAsJson(inputPath);
	}
}

main();
