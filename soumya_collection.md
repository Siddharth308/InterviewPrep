Topics
=================
Error boundries
Abort controller 
Interceptor axios 
scroll top
Lazy loading suspense syntax 
Read the noteboox specifically at the end 
Debouncing and throttling 
Unit testing 




MicroFrontEnd Architecture
=================================
monolithic app/ microservices  
microFE is similar to micrservice 
its a architecture style where we can divide our frontend app into smaller applications which can be developed, maintained and tested independently. 

Module federation
------------------------
Webpack plugin
configure webpack by specifying the entry file
helps in version matching








0. Execution context: 
===========================
The environment in which the js code runs 
2 types: global level, function level 

*** memory allocation in JS ***
there are 2 type of m/m area in JS
1. heap area
2. stack area

>> in heap area all the complex datatypes like array, objects and functions are there. this is mainly for dynamic m/m allocation 
>> in stack area all the pointer to the object/arr, primitive data types like number, boolean and all are stored 





1. Javascript VS Java
JS is single thread synchronous scripting programming language which can achieve asynchronous nature by using callbacks, promises and async/await. it is used in webapps as front and backend technologies and it can be run directly in browser to manipulate DOM. it need not to be compiled.

Java is a Multi threaded Object Oriented Programming language and uses JVM to run compiled code i.e. bytecode and it can be run on any platform as every platform would have JVM. that's why it is called platform independent. 

2. Event loop
Event loop is like a `Traffic Cop` which manages traffic/code on intersection without blocking the intersection(event queue) or road. it keeps on track of vehicles/code and decides if let them execute or not. it keeps the flow going. 

3. let , const and var 
- `let` is used to declare block-scoped variables that can be reassigned.
- `const` is used to declare block-scoped variables that cannot be reassigned.
- `var` is an older way to declare variables, function-scoped, and can be reassigned; it is hoisted.

4. `type coercion`, meaning it converts the operands to the same type before making the comparison. 
eg. 5 == '5'. it checks the values.

=== checks value with data type. it does not perform coercion.

5. this in JS
For Regular function , 
they have their own `this`. this is determined how the function is called.
so when such function are directly invoked value of `this` will be `WINDOW` Object.
when invoked as object member it will be that object.

function test() {
  console.log(this);  // Outputs the specified object
}

const obj = {};
test.call(obj);


For Arrow function, they inherits value of this from surroundings.

6. Promise in JS.
promise in js is an object that represent state of eventual completion of asyc operation that could be completed or pending or fullfilled.

const promise = (resolve, reject)=>{
  const isFoodReady = true;
  if(isFoodReady)resolve('SUCCESS')
  else {
    reject("FAILURE")
  }
}

//use the promise
promise.then((s)=>{
    console.log(s)
}).catch((error)=>{
    console.log(error)
})

7. Closure in JS.
Closure in JS is like backpack to a function which not only has access to it's own variables but also has access to the function that is carrying it. so innerFunction will have access to outerFunctiion's variable even though outer function finished executing the code.

So it is a function having access to it's parent's scope.
eg.
function outerFunction(str) {
    function innerFunction(ptr) {
      console.log(`Outer function ${str}`);
      console.log(`Inner function ${ptr}`);
    }
  
    return innerFunction;
  }
  
  const closr = outerFunction("I am Outer");
  console.log(closr); // innerFunction body
  
  closr("Inner FUN");
  //Outer function I am Outer
  //Inner function Inner FUN

8. async/await in JS 
it is built on top of promise provides more cleaner way to handle the asynchronous code.
async function fetchData() {
    const promise = await fetch("https://randomuser.me/api/");
  
    if (promise.status === 200) {
      //parsing the JSON data
      const response = await promise.json();
      console.log(response);

    }
  }
  
  fetchData();

9. hoisting in JS.
So before the code is executed  functions and variables are moved on the top of their containing scope during compilation phase, before the code is executed.

10. prototype inheritence 
it's a way to inherit the property or methods from one obj to other via prototype chaining.


11. higher Order functions
functions which takes another functions as a arguments and could return function as value called HOF. eg. map, forEach, reduce etc


12. curring
Currying in JavaScript is a technique where a function with multiple arguments is transformed into a series of functions, each taking a single argument. Instead of providing all the arguments at once, you can call the curried function with one argument at a time.

################################## DOM Manipulations Questions ####################################
1. DOM 
Document Object Model is a tree like structure where each node represents and html element/attr/text on web page or document.

2. innerHTML vs innerText
innerHTML sets HTML contents inside html element including html tags wheares innnerText is to set text inside html elements.

3. create element using JS 
const newElement = document.createElement("div");
document.body.appendChild(newElement);

4. set styles
newElement.style.border = "2px solid red";
newElement.style.backgroundColor = "tomato";

5.  Event delegation
To handle events for child elements through common ancestor takes help of event bubling. so instead of attaching events to multiple childs , just attach single event to parent.

6. Event propagation = 1.capturing + 2.bubbling phase.
capturing = root -> target
bubbling = target -> root


################################## DOM Manipulations Questions Ends################################
################################## HTML Questions Ends################################
1.<!DOCTYPE html>
this is NOT a html. this tell the browser what version of HTML is being used for page. in this case it is HTML5. So that they can interpret the HTML correctly.

2. sementic elements : 
improves SEO, accessibility and overall page structure and for future compatibility. eg. heading, main, nav, footer, section, article etc.

3. SEO
SEO, or Search Engine Optimization, is a set of practices and strategies aimed at improving the visibility and ranking of web page.

4. Percentage%  vs viewport: 
it is relative to containing element or parent but viewport is related to browser's view.

5. em units :
em units are relative to the parent. if no font size is specified on the element, it inherits the font size of its parent.

6. rem units:
The rem unit is always relative to the font size of the root element, which is typically the <html>

7. Normal Script Loading:
when browser encounters the script tag it stops executing the rest of page and downloads the script and executes. after that rest of the page. this makes application slow if the script takes more time to download.

asyc : If you add the async attribute, it tells the browser to download the script asynchronously while continuing to render the page. The script is loaded in the background while the rest of the page continues to load. Once the script is downloaded, it's `executed immediately`. potentially before the entire page has finished loading.

Defer : the script is loaded in the background while the page continues to load. However, the script will only execute after the HTML has been completely parsed.

################################################# CSS #################################
.card-container {
  display: flex;
  gap: 10px;
  overflow-x: auto; /* Enable horizontal scrolling */
}

.card-container {
  display: flex;
  flex-wrap: wrap; /* Allow cards to wrap to the next row */
  gap: 10px;
}
##################################################################
