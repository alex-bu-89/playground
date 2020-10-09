function listenerDragStart(e) {
    e.target.classList.add('dragging');
}

function listenerDragEnd(e) {
    e.target.classList.remove('dragging');
}

function listenerDragOver(e) {
    e.preventDefault();
    const container = e.currentTarget;
    const afterElement = getDragAfterElement(container, e.clientY);
    const draggingEl = document.querySelector('.dragging');

    if (afterElement == null) {
        container.appendChild(draggingEl);
    } else {
        container.insertBefore(draggingEl, afterElement);
    }
}

function getDragAfterElement(container, y) {
    const draggableEls = [...document.querySelectorAll('.draggable:not(.dragging)')];

    return draggableEls.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;

        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child }
        } else {
            return closest
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
}

function main() {
    const rows = document.querySelectorAll('tbody > tr');
    const containers = document.querySelectorAll('table > tbody');
    
    rows.forEach((row) => {
        row.classList.add('draggable');
        row.addEventListener('dragstart', listenerDragStart, false);
        row.addEventListener('dragend', listenerDragEnd, false);
    });

    containers.forEach((container) => {
        container.addEventListener('dragover', listenerDragOver, false);
    });
}

main();