function sortWords(words1, descending) {
    cleanSelect()
    var arrayOfStrings = words1.split(" ")
    sortedArray = arrayOfStrings.sort()
    var x = document.getElementById("mySelect");

    if (descending) sortedArray = arrayOfStrings.reverse()

    for (let i = 0; i < sortedArray.length; i++) {
        var option = document.createElement("option");
        option.text = sortedArray[i]
        x.add(option)
    }
}

function sortWords1(words1) {
    cleanSelect()
    sortWords(words1, false)    
}

function sortWords2(words1) {
    cleanSelect()
    sortWords(words1, true)
}

const cleanSelect = () => {
    var select = document.getElementById("mySelect");
    var length = select.options.length;
    for (i = length - 1; i >= 0; i--) {
        select.options[i] = null;
    }
}