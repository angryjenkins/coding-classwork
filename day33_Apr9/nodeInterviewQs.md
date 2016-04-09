Node Interview Questions

1) What is Node.js?
2) What is meant by "asynchronous" and "non-blocking"?
3) Name one advantage of using Node over other servers like Apache or Microsoft IIS
4) What is npm?
5) What is the difference between locally installing a node package and globally installing it?
6) What is the difference between a package such as "fs" and one such as "prompt" or the Spotify npm package?
7) What is package.json? What is the benefit of using a package.json?
8) How do you install a package (using npm) so that the package.json "knows" it's part of your project?
9) What command would you use to start a project using node? What items are asked for when running this command?
10) When passing arguments to a node program on the command line, what node object do you use in your script to get the arguments? Where do we "start" looking for the arguments the user passed in?
11) How would you write to a file using node? How would you make sure file you're writing to doesn't get overwritten every time you write to it?
12) How would you read from a file?
13) What is a callback function? Why are callback functions to important in node?
14) Consider the following code snippet:

    var fileData;

    fs.readFile("menu.txt", "utf-8", function(err, readResult){
        fileData=readResult;
    }
    console.log(fileData);

    What will be displayed to the console (assuming the file "menu.txt" is available and readable)?

15) What is "require"? What is it used for in node?
16) When writing a script (or module) which you want to use in another script, how do you tell node which parts of that module should be visible/accessible to the calling script?
17) When you install a package using npm, then look in the node_modules folder, you will often see many more folders than you might expect. Why?
18) Is it possible to read from a file synchronously in node? If possible, is it usually a good idea?
19) What is the difference (if any) between declaring an object like this:

var RockBand = new function(name, numberOfHits){}

Versus this:

function RockBand(name, numberOfHits) {}

20) For this function:

var RockBand = new function(name, numberOfHits){
    this.bandName = name;
    this.hits = numberOfHits;
}

If you create an object like so:

var beatles = new RockBand("Beatles",1000);

What will display the name of the band?
    a) console.log(beatles.name);
    b) console.log(beatles.bandName);
    c) console.log(RockBand.name);
    d) console.log(RockBand.bandName);
    e) You can't display the name of the band outside of the RockBand function.

21) Bonus question! If file top.js requires middle.js, and middle.js requires bottom.js, but top.js does NOT require bottom.js, can top.js access things in bottom.js?
Example from class: "admin.js" and "customer.js" require "menu.js", and "menu.js" requires "item.js". Could you use the Item constructor from "item.js" in "admin.js" or "customer.js"?
