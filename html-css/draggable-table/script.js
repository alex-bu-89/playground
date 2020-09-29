function listenerDragStart(e) {
    e.target.classList.add('dragging');
    console.log('---------- listenerDragStart', e.currentTarget);
}

function listenerDragEnd(e) {
    e.target.classList.remove('dragging');
    console.log('---------- listenerDragEnd', e.currentTarget);
}

function listenerDragOver(e) {
    const afterElement = e.currentTarget;
    console.log('----------', e.currentTarget);
    const dragging = document.querySelector('.dragging');
    
    // console.log('---------- listenerDragOver', e.clientY);
}

function getDragAfterElement(y) {
    const draggableEls = [...document.querySelectorAll('.draggable:not(.dragging)')];

    return draggableEls.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;

        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child }
        } else {
            return closest
        }
    }, { offset: Number.POSITIVE_INFINITY }).element;
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