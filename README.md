# greeklish-to-greek
A hackish way to translate greeklish to greek using "Did you mean" services

# test
First include the module
```
var didYouMean = require("./didYouMean")
```
And then, use it passing a _keyword_ greeklish string, _ex: aitima organosis_. The callback will either return the translated version of the keyword, or will simply return the string that was passed. 
```
didYouMean("aitima organosis",function(result){
    //result returns "αιτημα διοργανωσης"
})

didYouMean("με λένε διμιτρι",function(result){
    //result returns "με λένε δημητρη"
})
```
