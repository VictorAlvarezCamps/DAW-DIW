    function onLoad() {
        document.addEventListener("ionChange", setStyle);
        setStyle();
        metodoGenerico();
    }
    function setStyle() {
        document.querySelectorAll("ion-content ion-button").forEach(function(b) {
            b.expand = "block";
            b.strong = "true";
            b.fill = document.getElementById("type").value;
            b.size = document.getElementById("size").value;
        });
    }
    function setResult(value) {
        document.getElementById("result").innerHTML = value;
    }
    function getResult() {
        return(document.getElementById("result").innerHTML);
    }
    function add(key) {
        var result = getResult();
        if (result!="0" || isNaN(key)) setResult(result + key);
        else setResult(key);
    }
    function calc() {
        var result = eval(getResult());
        setResult(result);
    }
    function del() {
        setResult(0);
    }
    function metodoGenerico(){
        let buttons = document.querySelectorAll("ion-button");
        
        buttons.forEach(b => {
            
            //Numeros
            if(b.dataset.num == 0)b.addEventListener("click",function() {add("0")});
            if(b.dataset.num == 1)b.addEventListener("click",function() {add("1")});
            if(b.dataset.num == 2)b.addEventListener("click",function() {add("2")});
            if(b.dataset.num == 3)b.addEventListener("click",function() {add("3")});
            if(b.dataset.num == 4)b.addEventListener("click",function() {add("4")});
            if(b.dataset.num == 5)b.addEventListener("click",function() {add("5")});
            if(b.dataset.num == 6)b.addEventListener("click",function() {add("6")});
            if(b.dataset.num == 7)b.addEventListener("click",function() {add("7")});
            if(b.dataset.num == 8)b.addEventListener("click",function() {add("8")});
            if(b.dataset.num == 9)b.addEventListener("click",function() {add("9")});

            //Signos
            if(b.dataset.signo == "+")b.addEventListener("click",function() {add("+")});
            if(b.dataset.signo == "-")b.addEventListener("click",function() {add("-")});
            if(b.dataset.signo == "*")b.addEventListener("click",function() {add("*")});
            if(b.dataset.signo == "/")b.addEventListener("click",function() {add("/")});
            if(b.dataset.signo == ".")b.addEventListener("click",function() {add(".")});

            
        });
    }
