const smoothScroll = e => {
    e.preventDefault();
    const targ = document.getElementById(e.currentTarget.getAttribute('href').split('#')[1]);
    !targ||window.scrollBy({top: targ.getBoundingClientRect().top - 80, left: 0, behavior: 'smooth'});
};
export default smoothScroll;