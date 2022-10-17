function getTarget(e){
    if (!e){
        e = window.event;
    }
    returne.target || e,srcElement;
}
function itemDone(e){
    var target, elParent, elGrandparent;
    target= getTarget(e);

if (target.nodeName.toLowerCase()=="a"){
    elListItem = target.parentNode;
    elList = elListItem.parentNode;
    elList.replaceChildren(elListItem);
}
if (target.nodeName.toLowerCase()=="em"){
    elListItem= target.parentNode.parentNode;
    elList = elListItem.parentNode;
    elList.replaceChildren(elListItem);
}
if (e.preventDefault){
    e.preventDefault();
}else {
    e.returnValue = false;
}
}
var el = document.getElementById('shoppongList');
el.addEventListener('click', function (e){
    itemDone(e)
}, false);
