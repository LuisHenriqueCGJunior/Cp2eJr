const btn = document.querySelector(".btn")
const modal = document.querySelector("dialog")
const btnclose = document.querySelector(".closenewscreen")


btn.onclick = function () {
    modal.showModal();
}

btnclose.onclick = function () {
    modal.close();
}