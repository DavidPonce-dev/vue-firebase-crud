<template>
  <form class="card" @submit.prevent="addUsuario">
    <div class="form-group row">
      <label class="col-sm-4 col-form-label">Nombre</label>
      <div class="col-sm-8">
        <input
          type="text"
          class="form-control"
          placeholder="Nombre"
          name="nombre"
          v-model="user.nombre"
        />
      </div>
    </div>
    <div class="form-group row">
      <label class="col-sm-4 col-form-label">Apellido</label>
      <div class="col-sm-8">
        <input
          type="text"
          class="form-control"
          placeholder="Apellido"
          name="apellido"
          v-model="user.apellido"
        />
      </div>
    </div>
    <fieldset class="form-group" @change="setTurno">
      <div class="row">
        <legend class="col-form-label col-sm-4 pt-0">Radios</legend>
        <div class="col-sm-8">
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="turno"
              value="1"
              checked
            />
            <label class="form-check-label"> Full time </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="turno"
              value="2"
            />
            <label class="form-check-label"> Part time </label>
          </div>
          <div class="form-check disabled">
            <input
              class="form-check-input"
              type="radio"
              name="turno"
              value="3"
              disabled
            />
            <label class="form-check-label"> Esclavo </label>
          </div>
        </div>
      </div>
    </fieldset>
    <div class="form-group row">
      <div class="col-sm-4">Checkbox</div>
      <div class="col-sm-8">
        <div class="form-check">
          <input class="form-check-input" v-model="user.jefe" type="checkbox" />
          <label class="form-check-label"> Jefe </label>
        </div>
      </div>
    </div>
    <div class="form-group row">
      <div class="col-sm-12">
        <button type="submit" class="btn btn-primary">Registrar</button>
        <div class="alert" style="display: none" ref="alert">
          Usuario registrado!
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import { db } from "@/db.js";
export default {
  data() {
    return {
      user: {
        nombre: "",
        apellido: "",
        turno: "",
        jefe: false,
      },
      timeout: null,
    };
  },
  methods: {
    async addUsuario() {
      try {
        await db.collection("users").add(this.user);
        this.handleAlert(false);

        this.user.name = "";
        this.user.email = "";
        this.user.phone = "";
      } catch (e) {
        this.handleAlert(true);
      }
    },

    handleAlert(error) {
      const $alert = this.$refs.alert;

      $alert.style.display = "block";
      if (!error) {
        $alert.classList.add("alert-success");
        $alert.innerHTML = "Usuario registrado!!"
      } else {
        $alert.classList.add("alert-danger");
        $alert.innerHTML = "Error!"
      }

      if (this.timeout != null) {
        clearTimeout(this.timeout);
      }

      this.timeout = setTimeout(() => {
        $alert.classList.remove("alert-success");
        $alert.classList.remove("alert-danger");
        $alert.style.display = "none";
        this.timeout = null;
      }, 2000);
    },

    setTurno(e) {
      this.user.turno = e.target.value;
    },
  },
};
</script>

<style scoped>
form {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
}
</style>