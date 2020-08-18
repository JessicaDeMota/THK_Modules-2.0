// Create a "close" button and append it to each list item 

var myNodelist = 
    document. getElementsByTagName ("LI");
    var i;
    for (i = 0; i < myNodelist.length; i++)
    {
        var span =
        document.createElement("SPAN");
        var txt =
        document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        myNodelist[i].appendChild(span);
    }

    var close =
        document.getElementsByClassName("close");
        var i;
        for (i = 0; i<close.length; i++)
        {
            close[i].onclick = function ()
            {
                var div  = this.parentElement;
                div.style.display = none;
        }

    var list = document.querySelector('ul');
    list.addEventListner('click',function(ev))
    {
        if (ev.target.tagName === 'Li' )
        {
        ev.target.classList.toggle('checked');
        }
    } , false();

// Create a new list item clicking the "Add" button 
function = newelement()
{
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = 
    document.createTextNode(inputValue);
    li.appendChild(t);
    if (input value === '')
    {
        alert("You must write something!");
    }
    else 
    {
        document.getElementById("my UL").appendChild(li);
    }
        document.getElementById("myInput").value = " ";
    
    var span =
document.createElement("SPAN");
     var txt =
 document.createTextMode("/u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for(i = 0; i < close.length; i++)
    {
        close|i|.onclick = function()
        {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}

//Clearing the list 
    function removeAll()
    {
        var lst =
        document.getElementsByTagName("ul");
        lst[0].innerHTML = " ";
    }