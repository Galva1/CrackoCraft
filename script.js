function openModal() {
    document.getElementById('myModal').style.display = 'flex';
  }

  function closeModal() {
    document.getElementById('myModal').style.display = 'none';
  }

document.getElementById('openModalBtn').addEventListener('click', openModal);
document.getElementById('closeModalBtn').addEventListener('click', closeModal);