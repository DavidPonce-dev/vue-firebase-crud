<template>
  <div class="row">
    <div class="col-md-12">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Turno</th>
            <th>Jefe</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in Users" :key="user.key">
            <td>{{ user.nombre }}</td>
            <td>{{ user.apellido }}</td>
            <td>{{ user.turno }}</td>
            <td>{{ user.jefe }}</td>
            <td>
              <button
                @click.prevent="deleteUser(user.key)"
                class="btn btn-danger"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { db } from "@/db.js";

export default {
  data() {
    return {
      Users: [],
    };
  },
  created() {
    db.collection("users").onSnapshot((snapshotChange) => {
      this.Users = [];
      snapshotChange.forEach((doc) => {
        this.Users.push({
          key: doc.id,
          nombre: doc.data().nombre,
          apellido: doc.data().apellido,
          turno: doc.data().turno,
          jefe: doc.data().jefe,
        });
      });
    });
  },
  methods: {
    deleteUser(id) {
      if (window.confirm("Do you really want to delete?")) {
        db.collection("users").doc(id).delete()
          .catch((error) => {
            console.error(error);
          }
        );
      }
    },
  },
};
</script>

<style>
.btn-primary {
  margin-right: 12px;
}
</style>