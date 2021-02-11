const {attachBody }= require('../utils/dom.js');

function makeBox(width, height, backgroundColor) {

    let localBox  = document.createElement('div');
    localBox.style.width = width+"px"; 
    localBox.style.height = height+"px"; 
    localBox.style.backgroundColor = backgroundColor;
    {attachBody}()
    attachBody(localBox);
    return localBox
}


module.exports.makeBox = makeBox