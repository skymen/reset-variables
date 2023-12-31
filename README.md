<img src="./examples/cover.png" width="150" /><br>
# Reset Variable <br>
Reset any event variable to its initial value <br>
<br>
Author: skymen <br>
<sub>Made using [c3ide2-framework](https://github.com/ConstructFund/c3ide2-framework) </sub><br>

## Table of Contents
- [Usage](#usage)
- [Examples Files](#examples-files)
- [Properties](#properties)
- [Actions](#actions)
- [Conditions](#conditions)
- [Expressions](#expressions)
---
## Usage
To build the addon, run the following commands:

```
npm i
node ./build.js
```

To run the dev server, run

```
npm i
node ./dev.js
```

The build uses the pluginConfig file to generate everything else.
The main files you may want to look at would be instance.js and scriptInterface.js

## Examples Files

---
## Properties
| Property Name | Description | Type |
| --- | --- | --- |


---
## Actions
| Action | Description | Params
| --- | --- | --- |
| Reset Variable | Reset a variable to its initial value | Variable Name             *(eventvar)* <br> |
| Reset Global Variable By Name | Reset a global variable to its initial value | Variable Name             *(string)* <br> |
| Reset Boolean Variable | Reset a boolean variable to its initial value | Variable Name             *(eventvarbool)* <br> |
| Reset Local Variable By Name | Reset a local variable to its initial value | Variable Name             *(string)* <br> |
| Reset All Local Variables | Reset all local variables to their initial values |  |
| Reset All Global Variables | Reset all global variables to their initial values |  |


---
## Conditions
| Condition | Description | Params
| --- | --- | --- |


---
## Expressions
| Expression | Description | Return Type | Params
| --- | --- | --- | --- |
