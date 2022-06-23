
var container = document.createElement('div');
let counter = 0
document.body.append(container);
console.log('hello')
for (var i = 0; i < 81; i++) {
  
    var div = document.createElement('div');
    counter ++;
    div.style.width = '10%'
    div.style.float = 'left'
    div.style.paddingBottom = '10%'
    div.style.border = '1px solid black'
    div.style.background = (counter %2 ===0 ?
        'red': 'black')
    

    container.append(div);
 console.log(typeof(div));
}


    
console.log(typeof(container));