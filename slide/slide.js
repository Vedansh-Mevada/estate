document.getElementById('next-newly').onclick = function(){
    const widthItem = document.querySelector('.item-newly').offsetWidth;
    document.getElementById('formList-newly').scrollLeft += widthItem + 20;
}
document.getElementById('prev-newly').onclick = function(){
    const widthItem = document.querySelector('.item-newly').offsetWidth;
    document.getElementById('formList-newly').scrollLeft -= widthItem + 20;
}