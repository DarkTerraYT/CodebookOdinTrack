# First Odin program

Odin is a general purpose compiled language designed for high performance, modern computers and data-oriented programming. Unlike many other C inspired languages, odin does not require you to place semicolons at the end of a statement. 
"Odin is designed to be the C alternative for the Joy of Programming"

If at any time during this track you are stuck, you may follow the [odin docs](https://odin-lang.org/docs/overview/). The link provided provides examples for most language features.

Now that the language overview is over we can begin coding.

This template will be the very least you are provided with:

```odin
package main

main :: proc() {
    
}
```

This is the most basic function of the odin programming language. 

All odin files are in a package. This must be the first thing stated on every file ignoring comments. Most applications you write will use the main package name but if you are writing a library it should be the name of that instead. 
To define the package you put `package main` simple as that.

All methods (called procedures in odin) are defined by putting `name :: proc(params) {}`. A procedure is exactly what it's called. When you execute a procedure the code written inside of it will run. The main procedure is our entry point. This means that the CPU will begin reading instructions where the main method is located in memory. You will not have to worry much about this for now.

Before we begin doing anything we will need to import a package. This package is called "core:fmt" To import this package type in `import "core:fmt"` into the space between the package definition and the main procedure.

<details>
<summary>Click here to reveal the solution.</summary>

```odin
package main

import "core:fmt"

main :: proc() {
    fmt.println("Hellope!")
}
```

</details>