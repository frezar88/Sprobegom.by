function showToolBarHeader() {
    let site = document.getElementById('site')
    let header = document.querySelector('header')
    document.addEventListener('scroll', () => {
        let scrolledSite = site.getBoundingClientRect().y
        if (scrolledSite < 0) {
            header.classList.add('show-toolbar')
        } else {
            header.classList.remove('show-toolbar')
        }
       
    })
}
showToolBarHeader()

