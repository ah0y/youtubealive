if (related.children.length == 3){
    var c = document.getElementById("comments");
    var r = document.getElementById("related");
    document.getElementById("related").appendChild(c);
    related.removeChild(related.children[0]);
    related.removeChild(related.children[0]);
    related.removeChild(related.children[0]);
    related.setAttribute("style"," overflow: auto; white-space: nowrap;")
}

showHide();

function showHide() {
    var done = false;
    while (!done){
         removeComments();
            var k = 0;
            for (var i = 0; i< contents.childNodes.length; i++){
                if (!((comment[i].children[0].children[1].children[1].children[0].children[1].children[0] == null) || (comment[i].children[0].children[1].children[1].children[0].children[1].children[0]
                    != null && comment[i].children[0].children[1].children[1].children[0].children[1].children[0].href == undefined))) {
                        k++;
                    }
                   
                console.log(i + comment[i].children[0].children[1].children[1].children[0].children[1].children[0])
                console.log('i = ', i)

            }
            if (k==contents.childNodes.length){
                done = true
            }

    } 
   


    var items = document.getElementsByClassName('style-scope ytd-item-section-renderer')

    items = Array.prototype.slice.call(items);

    items = Array.prototype.slice.call(items.slice(4, items.length - 2));

    items.sort(sortComments)

    for (var i = 0, len = items.length; i < len; i++) {
        var parent = items[i].parentNode;
        var detatchedItem = parent.removeChild(items[i]);
        parent.appendChild(detatchedItem);
    }

    items.sort(sortComments)

}




function sortComments (a,b) {
    return parseInt(a.children[0].children[0].children[1].children[1].children[0].children[1].children[0].href.split("&t=")[1]) - parseInt(b.children[0].children[0].children[1].children[1].children[0].children[1].children[0].href.split("&t=")[1]);
}

function removeComments(){
    for (var j = 0; j < contents.childNodes.length; j++) {

        if ((comment[j].children[0].children[1].children[1].children[0].children[1].children[0] == null) || (comment[j].children[0].children[1].children[1].children[0].children[1].children[0]
            != null && comment[j].children[0].children[1].children[1].children[0].children[1].children[0].href == undefined)) {
            comment[j].children[0].children[1].children[1].children[0].children[1].children[0] == null
            contents.removeChild(contents.childNodes[j])
            
        }
       


    }
}  




