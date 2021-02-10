import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Formulário</h1>
<div>
  <table>
  <tr>
    <th>Nome</th>
    <th>Data de Nascimento</th>
  </tr>
  <tr>
    <td id="nm"></td>
    <td id="dt"></td>
  </tr>
  </table>
</div>
</br>
<div>
  <button onclick="show()">Visualizar</button>
</div>
`;
