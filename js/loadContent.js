export function loadContent(url) {
  document.getElementById('spinner').style.display = 'flex';

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text();
    })
    .then(data => {
      console.log('Contenido cargado:', data); 
      document.getElementById('content').innerHTML = data;
      document.getElementById('spinner').style.display = 'none'; 
    })
    .catch(error => {
      console.error('Error cargando el contenido:', error);
      document.getElementById('spinner').style.display = 'none'; 
      document.getElementById('content').innerHTML = 'Hubo un error al cargar el contenido.'; 
    });
}

window.onload = function() {
  loadContent('modulos/sanValentin.html');
};
