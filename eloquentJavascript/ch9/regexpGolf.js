// car and cat


console.log(/(ca)(t|r)/g.exec("cat and car"))

// pop and prop
console.log(/p?\wop/g.exec("pop and prop"))

// ferret, ferry and ferrari
console.log(/ferr\w+/g.exec(""))

// Any word ending in ious
console.log(/\w+ious/g.exec(""))

// A white space character followed by a perios, comma, colon or semicolon
console.log(/\s(\.|:|,|;)/.exec(" :"))

// a word nore more then 6 characters
console.log(/\b\w{1,6}\b/g.exec(""))

// a word without the letter e or E
console.log(/\b[a-df-z]+\b/g.exec(""))
