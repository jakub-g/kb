
    var $ = function (el) {
        return document.getElementById(el)
    }

    function offsetInfo (elm, text) {
        var $0 = elm;
        var info = [];

        var toMeasure = [
            "$0.clientLeft",
            "$0.offsetLeft",
            "$0.getBoundingClientRect().left",
            "$0.getBoundingClientRect().top",
            "$0.offsetParent",
            "$0.offsetParent.clientLeft",
            "$0.offsetParent.offsetLeft"
        ];

        for (var i = 0; i < toMeasure.length; i++) {
            var item = toMeasure[i];
            info.push(item + " = " + eval(item));
        }

        return  "<BR><BR><b>" + text + "</b><BR>" + info.join("<br>\n");;
    }

    function update () {
        var childInfo = $('childInfo');
        var info = [];

        var child = $('child2');
        info.push(offsetInfo(child, "yellowcontainer"));

        var divbox = $('divbox2');
        info.push(offsetInfo(divbox, "blockdiv"));

        var divbox = $('divbox2Inline');
        info.push(offsetInfo(divbox, "inlinediv"));

        childInfo.innerHTML = "<table><tr><td>" + info.join("</td><td>") + "</td></tr></table>";
    }

     var toggle = (function () {
        var opts = [
            'margin-top:30px; margin-left:30px;',
            'position:relative; top:30px; left:30px;'
        ];
        var opt = 0;
        return function () {
            opt = Number(!opt);
            var newCss = opts[opt];
            var elm = $('parent2');
            elm.style.cssText = newCss;
            elm.childNodes[0].textContent = "This redbox's CSS is : " + newCss;
        }
    })();

    function reload () {
        toggle();
        update();
    }

    function onload() {
        window.addEventListener("scroll", update);
        $("container").addEventListener("scroll", update);
    }
