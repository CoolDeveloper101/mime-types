# Mime types
This is a list of common mime types in in typescript for deno. Thanks to [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types) for the mime types.

As specified by MDN -
A media type (also known as a Multipurpose Internet Mail Extensions or MIME type) is a standard that indicates the nature and format of a document, file, or assortment of bytes. It is defined and standardized in IETF's [RFC 6838](https://tools.ietf.org/html/rfc6838).

Basically, a mime type is used by the browser to determine how to display a particular web page.
The [Content-Type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type) entity header is used to specify the mime type.

## Usage

This module provides a [record](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkt) of common mime types.
It also provides a getMimeType function which automatically returns a mime type from a given file name.

Example -
```typescript
import { getMimeType } from 'https://raw.githubusercontent.com/CoolDeveloper101/mime-types/master/mod.ts'

let mime_type = getMimeType('example.json') // Getting the mime type from a given file name. For json files, it is application/json
```
If the file extension is not recognized by the getMimeType method, you can specify if the the file is a text file or a binary file

```typescript
import { getMimeType, FileType } from 'https://raw.githubusercontent.com/CoolDeveloper101/mime-types/master/mod.ts'

let mime_type = getMimeType('example.abcde', FileType.Text) // Since the extension '.abcde' is not recognized by method, it returns the deafult mime type for text files.

// If the extension is not recognized and you haven't specified what file it is, the method throws an error.
// It is always good practice to specify a fallback value.

// Bad
let bad = getMimeType('example.some_random_file_extention') // Throws an exception if the file type is not recognized by the method.

// Good
let good_practice_1 = getMimeType('example.some_random_text_file_extension', FileType.Text) // Returns text/plain if the extension is not recognized.
let good_practice_2 =  getMimeType('example.some_random_binary_file_extension', FileType.Binary) // Returns application/octet-stream if the extension is not recognized.
```
