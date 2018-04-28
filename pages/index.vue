<template>
  <div>
    <div class="row row-cards">
      <div class="col-6 col-sm-4 col-lg-2">
        <div class="card">
          <div class="card-body p-3 text-center">
            <div class="h1 m-0">{{ groups.total_db_conn || 0}}</div>
            <div class="text-muted mb-4">Total DB Connection</div>
          </div>
        </div>
      </div>

      <div class="col-6 col-sm-4 col-lg-2">
        <div class="card">
          <div class="card-body p-3 text-center">
            <div class="h1 m-0">{{ groups.total_db_table || 0}}</div>
            <div class="text-muted mb-4">Total DB Table</div>
          </div>
        </div>
      </div>

      <div class="col-6 col-sm-6 col-lg-4">
        <div class="card">
          <div class="card-body p-3 text-center">
            <div class="h1 m-0">{{ groups.last_updated | moment("DD MMMM YYYY hh:mm:ss")}}</div>
            <div class="text-muted mb-4">last updated</div>
          </div>
        </div>
      </div>

    </div>

    <GroupUsageTable :groupSort="groupSort" />

  </div>

</template>
<script>
import GroupUsageTable from "@/components/GroupUsageTable.vue";
import { mapGetters } from "vuex";
import { mapState } from 'vuex';

export default {
  components: {
    GroupUsageTable
  },
  computed: {
    ...mapGetters(["groupSort"]),
    ...mapState(["groups"])
  },
  data() {
    return {
      data: {}
    };
  },
  async mounted() {
    this.$store.dispatch("startFetch");
  }
};
</script>
