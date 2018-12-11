Behold... ArrayEditor.

ArrayEditor bears many similarities to PublicArray (see the npm package @writetome51/public-array 
and repository github.com/writetome51/PublicArray).  All its method names are nearly identical.
But there's a couple of crucial differences.  Most of ArrayEditor's methods return the class instance, 
making the methods chainable.  So you can write statements like this:

editor.remove_allOf('nuts').insert_multiple(['jelly','donut'], 2).append_single('frosting').export();

ArrayEditor has only 4 public properties, 'content', 'get', 'getConverted', and 'getAndRemove', which 
have methods/properties identical to those of the classes PublicArrayContent, PublicArrayGetter, 
PublicArrayGetterConverter, and PublicArrayGetterRemover, respectively.  For example:

let length = editor.content.length // returns array length
let firstFiveItems = editor.get.head(5);
let sum = editor.getConverted.toOne(getSum);
let innerFourItems = editor.getAndRemove.adjacent(startingPosition, 4);

Aside from those 4 properties, ArrayEditor has chainable methods, and all of them match the 
methods of PublicArray (well, almost match).  These examples illustrate the differences:  
Where PublicArray has the method  PublicArray.filter.byType() ,  ArrayEditor has the method 
ArrayEditor.filter_byType() .  Where PublicArray has the method PublicArray.append.many() , 
ArrayEditor has the method ArrayEditor.append_many() .  Where PublicArray has the method 
PublicArray.insert.one() , ArrayEditor has the method ArrayEditor.insert_one() .  Hopefully you 
see the pattern.  In PublicArray, the method actually belongs to a property of PublicArray.  In 
ArrayEditor, the dot that comes after the PublicArray property is replaced with an underscore.
That's where the differences end.  The signature of the ArrayEditor method matches its 
corresponding PublicArray method.

One more thing:  ArrayEditor's methods are defined during runtime using a tool called MethodGenerator.  
So when you're calling these methods, a linting tool like TSLint will tell you these methods don't exist.  
Because, well, they technically don't until runtime.  In these cases, ignore TSLint.  Everything will be fine.



