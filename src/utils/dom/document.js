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
    if (child.parentElement.id === "popover") {
        return true;
    }
    if (editor.contains(child))
        return true;
    return false;
}
