const mainDiv = document.getElementById("main");
const start = "<div class=\"textandimage\"><div><p>";
const end0 = "</p></div><img src=\"images/Slide";
const end1 = ".jpg\"></div>";
var textFileRequest = new XMLHttpRequest();
textFileRequest.open("GET", "text.txt");
textFileRequest.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200)    {
        var text = this.responseText;
        text = text.replaceAll("\r\n", "<br>").replaceAll("|\\", "|<br><br>|<br>").replaceAll("\\", "<br>|<br>");
        var html = "";
        var textArray = text.split("<br>|<br>");
        for(var n = 0; n < textArray.length; n++)   {
            html += start + textArray[n] + end0 + (n + 1) + end1;
        }
        //console.log(html);
        mainDiv.innerHTML = html;
    }
};
textFileRequest.send();