# PlistConverter
A command line tool that decodes and displays binary/XML [property lists](https://en.wikipedia.org/wiki/Property_list) as JSON.

## Usage
```
usage: index.js [-h] [-o OUTPUT] [-b] [-p] path

Plist Converter

Positional arguments:
  path                  Path to the input (.plist) file

Optional arguments:
  -h, --help            Show this help message and exit.
  -o OUTPUT, --output OUTPUT
                        Path to the output (.json/.xml/.plist) file
  -b, --binary          Encode as a binary plist (instead of using XML)
  -p, --pretty          Pretty-prints the output file if JSON is used
```
