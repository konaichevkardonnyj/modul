//onsole.log(document.documentElement);                      //
//console.log(document.head.childNodes);
//console.log(document.body.childNodes);
//console.log(document.body.firstElementChild);
//console.log(document.body.lastChild);
//console.log(document.querySelector('.first').parentNode);
//console.log(document.body.childNodes);
const arr = document.body.childNodes;

for (let node of arr) {
if (node.nodeName == '#text') {
continue;
}
    console.log(node)
}
