const remInit = (prmWidth, defaWidth) => {
    let key;

    function reRem() {
        let width = document.documentElement.getBoundingClientRect.width;
        if (!defaWidth || prmWidth > defaWidth) {
            defaWidth = 720;
        }

        const rem = width * 100 / prmWidth;
        const rootStyle = `html{font-size:${rem}px !important}`
        const rootRem = document.getElementById('rootRem') || document.createElement('style');
        if (!document.getElementById('rootRem')) {
            document.getElementsByTagName('head')[0].appendChild(rootRem);
            rootRem.id = "rootRem";
        }
        if (rootRem.styleSheet) {
            rootRem.styleSheet.disabled || (rootRem.styleSheet.cssText = rootStyle);
        } else {
            try {
                rootRem.innerHTML = rootStyle;
            } catch (f) {
                rootRem.innerText = rootStyle;
            }
        }
        document.documentElement.style = rem + 'px';
    }
    reRem();
    window.addEventListener("resize", function () {
        clearTimeout(key);
        key = setTimeout(reRem, 300);
    }, false);
    window.addEventListener("pageshow", function (e) {
        if (e.persisted) {
            clearTimeout(key);
            key = setTimeout(reRem, 300);
        }
    }, false);
    if (document.readyState === "complete") {
        document.body.style.fontSize = "16px"
    } else {
        document.addEventListener("DOMContentLoaded", function (e) {
            document.body.style.fontSize = "16px";
        }, false);
    }
}