const paint = document.querySelector("#paint-cover");
const link = document.querySelector("#screen-header__icons");
const bgm = document.querySelector("#bgmusic-cover");

function paintOnOff() {
    var paintOff = document.querySelector("#paint-cover.hidden");
    if (paintOff !== null) {
        paint.classList.remove(HIDDEN_CLASSNAME);
    } else {
        paint.classList.add(HIDDEN_CLASSNAME);
    }
}

function linkOnOff() {
    var linkOff = document.querySelector("#screen-header__icons.hidden");
    if (linkOff !== null) {
        link.classList.remove(HIDDEN_CLASSNAME);
    } else {
        link.classList.add(HIDDEN_CLASSNAME);
    }
}

function bgmOnOff() {
    var bgmOff = document.querySelector("#bgmusic-cover.hidden");
    if (bgmOff !== null) {
        bgm.classList.remove(HIDDEN_CLASSNAME);
    } else {
        bgm.classList.add(HIDDEN_CLASSNAME);
    }
}
