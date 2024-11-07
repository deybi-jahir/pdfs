
function mostrar(){
    document.getElementById('pdfs').style.display = 'block';
  }
  function ocultar(){
    document.getElementById('pdfs').style.display = 'none';
  }
  function toggleFolder(folderId) {
    const folder = document.getElementById(folderId);
    folder.classList.toggle('hidden');
}