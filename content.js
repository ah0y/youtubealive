

showHide();

function showHide() {



    for (var j = 0; j < contents.childNodes.length; j++) {



        //  if (
        //      (
        //      (comment[j].children[0].children[1].children[1].children[0].children[1].children[0] == null ) ||
        //      (comment[j].children[0].children[1].children[1].children[0].children[1].children[0] != null  && comment[j].children[0].children[1].children[1].children[0].children[1].children[0].href == undefined)
        //     )
        //     && contents.childNodes[j].style.display == 'none')



        //     {
        //     contents.childNodes[j].style.display = "block"
        //     console.log(j + comment[j].children[0].children[1].children[1].children[0].children[1].children[0] )

        // }
        // else
        if ((comment[j].children[0].children[1].children[1].children[0].children[1].children[0] == null) || (comment[j].children[0].children[1].children[1].children[0].children[1].children[0]
            != null && comment[j].children[0].children[1].children[1].children[0].children[1].children[0].href == undefined)) {
            comment[j].children[0].children[1].children[1].children[0].children[1].children[0] == null
            contents.removeChild(contents.childNodes[j])
            //console.log(comment[j].children[0].children[1].children[1].children[0].innerText);
        }
        else {
            console.log(j + comment[j].children[0].children[1].children[1].children[0].children[1].children[0])
        }


    }


    var items = document.getElementsByClassName('style-scope ytd-item-section-renderer')

    items = Array.prototype.slice.call(items);

    items = Array.prototype.slice.call(items.slice(4, items.length - 2));

    items.sort(function (a, b) {
        return parseInt(a.children[0].children[0].children[1].children[1].children[0].children[1].children[0].href.split("&t=")[1]) - parseInt(b.children[0].children[0].children[1].children[1].children[0].children[1].children[0].href.split("&t=")[1]);
    });

    for (var i = 0, len = items.length; i < len; i++) {
        var parent = items[i].parentNode;
        var detatchedItem = parent.removeChild(items[i]);
        parent.appendChild(detatchedItem);
    }
}






