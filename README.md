1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelector?
*getElementById : it's selects an element by id
and gets one element;

*getElementByclass : it's selects and element by class it  gets multipul element;

*querySelector : it select id class,tag,attribute. returns the matching first element;

querySelector : it select all elements and returns matching all elements.return Nodelist;
2. How do you create and insert a new element into the DOM?
*first create the element 
let div=document.createlement("div");
*second add content
div.innertext="hello developers";
third insert the dom
document.body.appenChild(div);

3. What is Event Bubbling? And how does it work?
=Event bubbling retrieves the parent node of an element;

4. What is Event Delegation in JavaScript? Why is it useful?
event delegation :handle the events of the children by placing an event listener on the parent element;
=it works multipul buttons. It takes less time

5. What is the difference between preventDefault() and stopPropagation() methods?
*preventDefault()=stops the browser's default behavior;
*stopPropagation() =stops the even from bubbling up to parent element;