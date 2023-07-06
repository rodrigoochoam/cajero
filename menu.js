const actions = document.querySelector("#actions");


const renderMenu = (nombre) => {
  let menu = `
  <div>
    <h1 class="center">Bienvenido ${nombre}</h1>
    <div class="row">
      <div class="col">
        <a class="btn btn-success" href="#" role="button" onClick="consultar()">Consultar</a>
      </div>
      <div class="col">
        <a class="btn btn-warning" href="#" role="button" onClick="depositar()">Depositar</a>
      </div>
      <div class="col">
        <a class="btn btn-info" href="#" role="button" onClick="retirar()">Retirar</a>
      </div>
      <div class="col">
        <a class="btn btn-danger" href="#" role="button" onClick="salir()">Salir</a>
      </div>
    </div>
  </div>`;

  wrapper.innerHTML = menu;
  document.getElementById("amount-input").classList.remove("d-none");
};

const consultar = () => {
  actions.innerHTML = "";
  actions.innerHTML = `<p>Su saldo es $${selected[0].saldo}</p>`;
};

const depositar = () => {
  let amount = document.querySelector("#amount").value;
  let balance = parseFloat(selected[0].saldo) + parseFloat(amount);
  selected[0].saldo = balance.toFixed(2);
  actions.innerHTML = `Tu nuevo saldo es $${selected[0].saldo}`;
};



const retirar = () => {
  let amount = parseFloat(document.getElementById("amount").value);
  let balance = parseFloat(selected[0].saldo);

  if (amount > balance) {
    document.getElementById("insufficient-funds-alert").classList.remove("d-none");
    return;
  }

  let newBalance = balance - amount;
  selected[0].saldo = newBalance.toFixed(2);

  actions.innerHTML = `Tu nuevo saldo es $${selected[0].saldo}`;

  document.getElementById("amount").value = ""; // Limpiar el campo de monto
  document.getElementById("insufficient-funds-alert").classList.add("d-none"); // Ocultar la alerta de fondos insuficientes
};



/* const retirar = () => {
  let amount = document.querySelector("#amount").value;
  let balance = parseFloat(selected[0].saldo) - parseFloat(amount);
  selected[0].saldo = balance.toFixed(2);
  actions.innerHTML = `Tu nuevo saldo es $${selected[0].saldo}`;
}; */



const salir = () => {
  location.reload();
};
