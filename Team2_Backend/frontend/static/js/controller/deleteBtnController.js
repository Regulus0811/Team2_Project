export default function toggleDeleteButtons() {
  const deleteButtons = document.querySelector('#deleteBtn');
  const individualDeleteButtons = document.getElementsByClassName('deleteBtnHidden');

  const createRealDeleteBtnListener = (button) => {
    button.addEventListener('click', async (event) => {
      const postNumber = event.target.dataset.postNumber;
      const response = await fetch(`/posts/${postNumber}`, {
        method: 'DELETE',
      });

      if (response.status === 200) {
        const postTable = document.querySelector('table');
        const postRows = Array.from(postTable.rows);

        const postRowToDelete = postRows.find((row) => {
          const postNumberCell = row.cells[0];
          return postNumberCell.textContent === String(postNumber);
        });

        if (postRowToDelete) {
          postTable.deleteRow(postRowToDelete.rowIndex);
        }
      } else {
        console.error('Failed to delete the post:', response);
      }
    });
  };

  deleteButtons.addEventListener('click', () => {
    Array.from(individualDeleteButtons).forEach((button) => {
      if (button.style.display === 'none') {
        button.style.display = 'inline-block';
        createRealDeleteBtnListener(button);
      } else {
        button.style.display = 'none';
      }
    });
  });
}
