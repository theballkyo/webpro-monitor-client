<template>
  <div>
    <div class="header collapse d-lg-flex p-0" id="headerMenuCollapse">
      <div class="container">
        <div class="row row align-items-center">
          <div class="col col-lg order-lg-first">
            <ul class="nav nav-tabs border-0 flex-column flex-lg-row">
              <li class="nav-item">
                <router-link active-class="active" class="nav-link" aria-current="true" data-toggle="false" to="/" exact>
                  <i class="fe fe-home"></i> Home</router-link>
              </li>
              <li class="nav-item">
                <router-link active-class="active" class="nav-link" aria-current="true" data-toggle="false" to="/chart">
                  <i class="fe fe-box"></i> Chart</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="page">
      <div class="page-main">
        <div class="my-3 my-md-5">
          <div class="container">
            <div class="page-header">
              <h1 class="page-title">
                Webpro59 Monitoring
              </h1>
            </div>

            <div class="alert alert-icon alert-primary" role="alert">
              <i class="fe fe-bell mr-2" aria-hidden="true"></i> Monitoring uptime
              <a href="https://stats.uptimerobot.com/y9BR7Ip44">https://stats.uptimerobot.com/y9BR7Ip44</a>
            </div>

            <nuxt/>

          </div>
        </div>
      </div>
    </div>
    <footer class="footer">
      <div class="container">
        <div class="row align-items-center flex-row-reverse">
          <div class="col-auto ml-lg-auto">
            <div class="row align-items-center">

            </div>
          </div>
          <div class="col-12 col-lg-auto mt-3 mt-lg-0 text-center">
            Copyright © 2018 Developed by
            <a href="https://github.com/theballkyo">Theballkyo</a>. Theme by
            <a href="https://codecalm.net" target="_blank">codecalm.net</a> All rights reserved. IT@KMITL Version {{ version }}
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      version: '1.0.0 Release'
    }
  }
};
</script>


<style>
@import "@/assets/css/dashboard.css";

</style>
