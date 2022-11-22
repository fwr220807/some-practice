const pics = document.querySelectorAll('.pic')

const toggleActive = function (dom) {
    return function () {
        pics.forEach(dom => {
            dom.classList.remove('active')
        })

        dom.classList.add('active')
    }

}

for (const pic of pics) {
    pic.addEventListener('click', toggleActive(pic))
}