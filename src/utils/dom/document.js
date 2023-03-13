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

export const checkParent = (child) => {
    const editor = document.getElementById("beacon-editor");
    const popover = document.getElementById('popover');
    if (popover) {
        return true;
    }
    if (editor.contains(child))
        return true;
    // if (form.contains(child))
    //     return true;
    return false;
}
