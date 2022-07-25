<script setup>
window.onscroll = function () {
  scrollFunction();
  scrollFunctionBTT(); // back to top button
};

function scrollFunction() {
  let intViewportWidth = window.innerWidth;
  if (
    document.body.scrollTop > 30 ||
    (document.documentElement.scrollTop > 30) & (intViewportWidth > 991)
  ) {
    document.getElementById("header").classList.add("topbar-scrolled");
    document.getElementById("header").classList.add("header-scrolled");
  } else if (
    document.body.scrollTop < 30 ||
    (document.documentElement.scrollTop < 30) & (intViewportWidth > 991)
  ) {
    document.getElementById("header").classList.remove("topbar-scrolled");
    document.getElementById("header").classList.remove("header-scrolled");
  }
}
</script>

<template>
  <header id="header" class="fixed-top d-flex align-items-cente">
    <div
      class="container-fluid container-xl d-flex align-items-center justify-content-lg-between"
    >
      <h1 class="logo me-auto me-lg-0">
        <a href="index.html">Restaurantly</a>
      </h1>
      <!-- Uncomment below if you prefer to use an image logo -->
      <!-- <a href="index.html" class="logo me-auto me-lg-0"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->

      <nav id="navbar" class="navbar order-last order-lg-0">
        <ul>
          <li>
            <router-link :to="{name:'Principal'}">

            
              <a class="nav-link scrollto active ">Home</a>

              </router-link>
          </li>
          <li>
            <router-link :to="{name:'Principal', hash:'#destacados'}">
              <a class="nav-link scrollto" >Destacados</a>
              </router-link>
          </li>
          <li>
            <router-link :to="{name:'Principal', hash:'#events'}">
            
            <a class="nav-link scrollto" href="/principal#events">Buscar</a>
            </router-link>
          </li>
          <li>
            <router-link :to="{name:'Principal', hash:'#faq'}">
            
            <a class="nav-link scrollto" href="/principal#faq">Sobre Nosotros</a>
            </router-link>
          </li>
          <li>
            <router-link :to="{name:'Principal', hash:'#events'}">
            
            <a class="nav-link scrollto" href="/principal#events">Equipo</a>
            </router-link>
          </li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>
      <!-- .navbar -->
      <router-link :to="{name:'Principal', hash:'#contact'}">
     
      <a href="/principal#contact" class="book-a-table-btn scrollto d-none d-lg-flex"
        >Contactanos
      </a>
       </router-link>
    </div>
  </header>
  <!-- End Header -->
</template>

<style scoped>

a {
 
  text-decoration: none;
}

a:hover {
  
  text-decoration: none;
}

h1, h2, h3, h4, h5, h6 {
  font-family: "Playfair Display", serif;
}
</style>
