showHide();

function showHide() {
    


for (var j = 0; j < contents.childNodes.length; j++) {


   
     if (
         (
         (comment[j].children[0].children[1].children[1].children[0].children[1].children[0] == null ) ||
         (comment[j].children[0].children[1].children[1].children[0].children[1].children[0] != null  && comment[j].children[0].children[1].children[1].children[0].children[1].children[0].href == undefined)
        )
        && contents.childNodes[j].style.display == 'none')
    
        
        
        {
        contents.childNodes[j].style.display = "block"
        console.log(j + comment[j].children[0].children[1].children[1].children[0].children[1].children[0] )
        
    }
    else
     if ((comment[j].children[0].children[1].children[1].children[0].children[1].children[0] == null) || (comment[j].children[0].children[1].children[1].children[0].children[1].children[0] 
        != null  && comment[j].children[0].children[1].children[1].children[0].children[1].children[0].href == undefined))
    { contents.childNodes[j].style.display = 'none'
 //console.log(comment[j].children[0].children[1].children[1].children[0].innerText);
    }
    else {
        console.log(j + comment[j].children[0].children[1].children[1].children[0].children[1].children[0] )
    }
    
}
}
