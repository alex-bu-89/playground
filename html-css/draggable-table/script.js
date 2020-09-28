function listenerDragStart(e) {
    e.target.classList.add('dragging');
    console.log('---------- listenerDragStart', e.currentTarget);
}

function listenerDragEnd(e) {
    e.target.classList.remove('dragging');
    console.log('---------- listenerDragEnd', e.currentTarget);
}

function listenerDragOver(e) {
    const afterElement = getDragAfterElement(e.clientY);
    const dragging = document.querySelector('.dragging');
    
    // console.log('---------- listenerDragOver', e.clientY);
}

function getDragAfterElement(y) {
    const draggableEls = [...document.querySelectorAll('.draggable:not(.dragging)')];

    draggableEls.reduce((closest, child) => {
        // const box = child.getBoundingClientRect();
        // console.log('----------', box);
    }, { offset: Number.POSITIVE_INFINITY });
}

function main() {
    const rows = document.querySelectorAll('tbody > tr');

    rows.forEach((row) => {
        row.classList.add('draggable');

        row.addEventListener('dragstart', listenerDragStart, false);
        row.addEventListener('dragend', listenerDragEnd, false);
        row.addEventListener('dragover', listenerDragOver, false);
    });
}

main();