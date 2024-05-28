
document.addEventListener('DOMContentLoaded', (event) => {
    const dropMenu = document.getElementById('dropMenu');
    const clickMenu = document.getElementById('clickMenu');

    document.addEventListener('click', (event) => {
        if (clickMenu.contains(event.target)) {
            dropMenu.classList.toggle('hidden');
            dropMenu.classList.toggle('dropMenu');
        } else {
            if (!dropMenu.classList.contains('hidden')) {
                dropMenu.classList.add('hidden');
            }
        }
    });
});
