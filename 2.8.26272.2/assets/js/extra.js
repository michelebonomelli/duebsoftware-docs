window.onload = function () {

    // Set margin to table caption paragraph
    var x = document.getElementsByClassName("table-caption");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].parentNode.style.margin = "0em";
    }
}