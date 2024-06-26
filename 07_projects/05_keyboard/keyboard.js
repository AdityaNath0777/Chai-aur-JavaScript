console.log('Project 5');

const insert = document.querySelector('#insert');

window.addEventListener('keydown', (e) => {
  // console.log(e); // KeyboardEvent
  // console.log(e.key);
  // console.log(e.keyCode);

  // console.log(e.code);

  insert.innerHTML = `
  <div class="color" >
  <table>
  <tr>
    <th>Key</th>
    <th>Key Code</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === ' ' ? 'Space' : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>

  </div>
  `;
});
