<template>
  <div class="row row-cards row-deck">
    <div class="col-12">
      <div class="card">
        <div class="table-responsive">
          <table class="table table-hover table-outline table-vcenter text-nowrap card-table">
            <thead>
              <tr>
                <th>Group</th>
                <!-- <th style="min-width:300px">Usage</th> -->
                <th class="text-center">CPU</th>
                <th class="text-center">Memory</th>
                <th class="text-center">DB Connection</th>
                <th class="text-center">DB Table</th>
                <th class="text-center">All</th>
                <th class="text-center">Deploy Webapps</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="group in groupSort" :key="group.id">

                <td>
                  <div>{{group.username}}</div>
                  <div class="small text-muted">
                  </div>
                </td>

                <!-- <td>
                  <ProgressBar bgColor='yellow' text="CPU" :barNow="group.cpu_usage.toFixed(2) || 0" />
                  <ProgressBar bgColor='blue' text="Memory (MB - max 384)" :barNow="(group.memory_usage / 1048576).toFixed(2) || 0" :barMax="group.memory_limit / 1048576" />
                  <ProgressBar bgColor='red' text="DB Connections (max 100)" :barNow="group.db_conn || 0" />
                  <ProgressBar bgColor='orange' text="DB Tables" :barNow="group.db_table || 0" />
                  <ProgressBar bgColor='green' text="Disk Read" :barNow="(group.blkio.r / 1024).toFixed(2) || 0" />
                  <ProgressBar bgColor='green' text="Disk Write" :barNow="(group.blkio.w / 1024).toFixed(2) || 0" />
                </td> -->

                <td class="text-center">
                  <CircleProgress :percent="(group.cpu_usage / 16).toFixed(0)" :display="(group.cpu_usage / 16).toFixed(2) + '%'"/>
                </td>

                <td class="text-center">
                  <CircleProgress :percent="toPercent(0, group.memory_limit, group.memory_usage)" :display="(group.memory_usage / 1048576).toFixed(2)"/>
                </td>

                <td class="text-center">
                  <CircleProgress :percent="toPercent(0, 250, group.db_conn || 0)" :display="group.db_conn || 0"/>
                </td>

                <td class="text-center">
                  <CircleProgress :percent="group.db_table || 0" :display="group.db_table || 0"/>
                </td>

                <td class="text-center">
                  <ProgressBar bgColor='yellow' text="CPU (6.25% = 100% 1vCore)" :barNow="(group.cpu_usage / 16).toFixed(2) || 0"/>
                  <ProgressBar bgColor='blue' :text="`Memory (MB - max ${(group.memory_limit / 1048576).toFixed(0)})`" :barNow="(group.memory_usage / 1048576).toFixed(2) || 0" :barMax="group.memory_limit / 1048576" />
                  <ProgressBar bgColor='red' text="DB Connections (max 250)" :barNow="group.db_conn || 0" :barMax="250"/>
                  <ProgressBar bgColor='orange' text="DB Tables" :barNow="group.db_table || 0" />
                  <ProgressBar bgColor='green' text="Disk Read" :barNow="(group.blkio.r / 1024).toFixed(2) || 0" />
                  <ProgressBar bgColor='green' text="Disk Write" :barNow="(group.blkio.w / 1024).toFixed(2) || 0" />
                </td>

                <td class="text-center">
                  <div v-if="group.webapps.length === 0" class="small text-muted">No webapp</div>

                  <div v-for="(app, i) in group.webapps" :key="i">
                    <a target="_blank" :href="'https://' + group.username + '.tomcat.it.kmitl.ac.th/' + app">{{ app }}</a>
                  </div>
                </td>
                <!-- <td> -->
                  <!-- {{ group.top.Processes.length || 0 }} -->
                  <!-- <div class="small text-muted" v-for="(proc, index) in group.top.Processes" :key="index">
                    {{proc[10]}}
                  </div> -->
                <!-- </td> -->
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProgressBar from "@/components/items/ProgressBar.vue";
import CircleProgress from "@/components/items/CircleProgress.vue";

// import RadialProgressBar from 'vue-radial-progress'
export default {
  props: ["groupSort"],
  components: {
    ProgressBar,
    CircleProgress
  },
  methods: {
    toPercent (min, max, now) {
      // console.log(min, max, now)
      return (((now - min) * 100) / (max - min)).toFixed(0)
    }
  },
};
</script>

