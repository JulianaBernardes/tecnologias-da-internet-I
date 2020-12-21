function firstFunction(first, second, third) {
    var text;
    text = first + " " + second + " " + third;
    return text;
}
function secondFunction() {
    var result;
    p3 = "na Baixa do Porto";
    result = firstFunction("ISTEC", "TI e Computação"
        , p3);
    alert(result);
}
var var1 = "global"; // global variable
function checkscope1() {
    var1 = "local"; // local variable
    document.write("<b>" + "Local variable " + var1 + "</b>");
}
function checkscope2() {
    document.write("<b>" + "variable " + var1 + " within the function" + "</b>");
}