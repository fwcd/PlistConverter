const plist = require("simple-plist");
const fs = require("fs");
const handleError = require("./utils").handleError;

const WRITE_OPTIONS = {
	encoding: "utf-8"
};

function readPlist(inputPath, callback) {
	plist.readFile(inputPath, (err, data) => {
		handleError(err);
		callback(data);
	});
}

module.exports.printPlistAsJson = function (inputPath) {
	readPlist(inputPath, data => {
		console.log(JSON.stringify(data, null, 2));
	});
}

module.exports.convertPlistToJson = function (inputPath, outputPath, prettyPrint) {
	readPlist(inputPath, data => {
		const outputJson = prettyPrint
			? JSON.stringify(data, null, 2)
			: JSON.stringify(data)
		fs.writeFile(outputPath, outputJson, WRITE_OPTIONS, handleError);
	});
}

module.exports.convertPlistToXml = function (inputPath, outputPath) {
	readPlist(inputPath, data => {
		plist.writeFile(outputPath, data, WRITE_OPTIONS, handleError);
	});
}

module.exports.convertPlistToBinary = function (inputPath, outputPath) {
	readPlist(inputPath, data => {
		plist.writeBinaryFile(outputPath, data, WRITE_OPTIONS, handleError);
	});
}
