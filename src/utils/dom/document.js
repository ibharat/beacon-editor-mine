export const initiateMouseActions = () => {
    document.addEventListener('mouseout', (e) => {
        const { target } = e;
        target.style.outline = 'none';
    });
    document.addEventListener('mouseover', (e) => {
        const { target } = e;
        target.style.outline = '1px solid black';
    });
}
