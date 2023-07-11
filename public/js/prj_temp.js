const codeBlocks = document.querySelectorAll('.code');

codeBlocks.forEach((codeBlock) => {
    codeBlock.style.position = 'relative';

    let copy = document.createElement('i');
    let md = document.createElement('div');

    copy.classList.add('fa-solid');
    copy.classList.add('fa-copy');
    md.classList.add('hov_copy');

    md.appendChild(copy);

    md.style.position = 'absolute';
    md.style.right = '0.6rem';
    md.style.top = '0.1rem';

    codeBlock.appendChild(md);
});

const copyEl = document.querySelectorAll('.hov_copy');

copyEl.forEach((copyE) => {
    copyE.addEventListener('click', () => {
        const pTag = copyE.parentElement;
        const text = pTag.textContent.trim();

        navigator.clipboard.writeText(text)
            .then(() => {
                console.log('Text copied to clipboard:', text);
            })
            .catch((error) => {
                console.error('Unable to copy text:', error);
            });

        const popup = document.querySelector('.popup');

        popup.style.animation = 'none';
        void popup.offsetWidth
        popup.style.animation = 'popupPrj 1s';
    });
});

