//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function () {
    const gridContainer = document.getElementById('grid-container');
    const blockIdInput = document.getElementById('block_id');
    const colorInput = document.getElementById('color_id');
    const changeButton = document.getElementById('change_button');
    const resetButton = document.getElementById('reset_button');

    changeButton.addEventListener('click', changeColor);
    resetButton.addEventListener('click', resetColors);

    function changeColor() {
        const blockId = blockIdInput.value;
        const color = colorInput.value;
        const blockElement = document.getElementById(blockId);

        if (blockElement) {
            blockElement.style.backgroundColor = color;
        }
    }

    function resetColors() {
        const gridItems = document.querySelectorAll('.grid-item');

        gridItems.forEach(item => {
            item.style.backgroundColor = 'transparent';
        });
    }
});
