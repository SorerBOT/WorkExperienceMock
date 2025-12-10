# WorkExperienceMock
I worked as a Full-Stack developer for 2 years, primarily writing code in C# and JS. Because we worked with a different platform for our version control, the stats were never reflected in my GitHub page which I wanted.

## What are these files?
GitHub's GraphQL API only takes into account the file extensions and file sizes, and so I could simply create two files, one JS file and one C# file, and fill them with garbage using `truncate`. I calculated the size of the files using Unix's `find` on the actual source code, obviously exlucding generated clients, and `node_modules`.
