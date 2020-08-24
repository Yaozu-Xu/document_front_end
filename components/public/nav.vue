<template>
  <div class="w-100">
<<<<<<< HEAD
<<<<<<< HEAD
    <b-navbar toggleable="lg" type="dark" class="w-100 bg-info">
      <b-navbar-brand href="#"> Multi </b-navbar-brand>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark" class="nav-position">
=======
    <b-navbar toggleable="lg" type="dark" class="w-100 nav--color">
>>>>>>> 571b903... Feature: Create navigation and siderbar component, also support mobile device.
=======
    <b-navbar
      toggleable="lg"
      type="dark"
      class="w-100 bg-info"
    >
>>>>>>> 5b9cfe0... Refactor: refactor the code by using build-in classes in bootstrap
      <b-navbar-brand href="#">
        Multi
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse" />

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">
<<<<<<< HEAD
<<<<<<< HEAD
            <span class="text-white opacity-4h5"> Code </span>
          </b-nav-item>
          <b-nav-item href="#">
            <span class="text-white opacity-4h5"> Document </span>
            Link
=======
            <span class="nav_items">
=======
            <span class="text-white opacity-4h5">
>>>>>>> 5b9cfe0... Refactor: refactor the code by using build-in classes in bootstrap
              Code
            </span>
>>>>>>> 571b903... Feature: Create navigation and siderbar component, also support mobile device.
          </b-nav-item>
          <b-nav-item href="#">
            <span class="text-white opacity-4h5">
              Document
            </span>
          </b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
<<<<<<< HEAD
<<<<<<< HEAD
          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#"> 简体中文 </b-dropdown-item>
            <b-dropdown-item href="#"> 繁體中文 </b-dropdown-item>
            <b-dropdown-item href="#"> ENGLISH </b-dropdown-item>
            <b-dropdown-item href="#"> JAPANESE </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
        <div class="mb-0 opacity-4h5">
          <a
            href="http://47.102.205.183:51000/gitea/nj-tech-gathering/multi-language-documents-platform-front-end"
            rel="noopener"
            target="_blank"
            class="text-white"
          >
            <svg
              viewBox="0 0 32 32"
              focusable="false"
              role="img"
              style="height: 1rem; width: 1rem"
            >
              <title>GitHub</title>
              <g fill="currentColor">
                <path
                  fill-rule="evenodd"
                  d="M16,0.4c-8.8,0-16,7.2-16,16c0,7.1,4.6,13.1,10.9,15.2 c0.8,0.1,1.1-0.3,1.1-0.8c0-0.4,0-1.4,0-2.7c-4.5,1-5.4-2.1-5.4-2.1c-0.7-1.8-1.8-2.3-1.8-2.3c-1.5-1,0.1-1,0.1-1 c1.6,0.1,2.5,1.6,2.5,1.6c1.4,2.4,3.7,1.7,4.7,1.3c0.1-1,0.6-1.7,1-2.1c-3.6-0.4-7.3-1.8-7.3-7.9c0-1.7,0.6-3.2,1.6-4.3 c-0.2-0.4-0.7-2,0.2-4.2c0,0,1.3-0.4,4.4,1.6c1.3-0.4,2.6-0.5,4-0.5c1.4,0,2.7,0.2,4,0.5C23.1,6.6,24.4,7,24.4,7 c0.9,2.2,0.3,3.8,0.2,4.2c1,1.1,1.6,2.5,1.6,4.3c0,6.1-3.7,7.5-7.3,7.9c0.6,0.5,1.1,1.5,1.1,3c0,2.1,0,3.9,0,4.4 c0,0.4,0.3,0.9,1.1,0.8C27.4,29.5,32,23.5,32,16.4C32,7.6,24.8,0.4,16,0.4z"
                />
              </g>
            </svg>
          </a>
        </div>
=======
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search" />
            <b-button size="sm" class="my-2 my-sm-0" type="submit">
              Search
            </b-button>
          </b-nav-form>

=======
>>>>>>> 571b903... Feature: Create navigation and siderbar component, also support mobile device.
          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">
              简体中文
            </b-dropdown-item>
            <b-dropdown-item href="#">
              繁體中文
            </b-dropdown-item>
            <b-dropdown-item href="#">
              ENGLISH
            </b-dropdown-item>
            <b-dropdown-item href="#">
              JAPANESE
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> aa7525d... Feature: Add new component-nav.vue
=======
        <ul class="nav_li">
          <li>
            <a
              href="http://47.102.205.183:51000/gitea/nj-tech-gathering/multi-language-documents-platform-front-end"
              rel="noopener"
              target="_blank"
              class="nav_li_link"
            >
              <svg
                viewBox="0 0 32 32"
                focusable="false"
                role="img"
                class="nav_li_svg"
              ><title>GitHub</title>
                <g fill="currentColor">
                  <path fill-rule="evenodd" d="M16,0.4c-8.8,0-16,7.2-16,16c0,7.1,4.6,13.1,10.9,15.2 c0.8,0.1,1.1-0.3,1.1-0.8c0-0.4,0-1.4,0-2.7c-4.5,1-5.4-2.1-5.4-2.1c-0.7-1.8-1.8-2.3-1.8-2.3c-1.5-1,0.1-1,0.1-1 c1.6,0.1,2.5,1.6,2.5,1.6c1.4,2.4,3.7,1.7,4.7,1.3c0.1-1,0.6-1.7,1-2.1c-3.6-0.4-7.3-1.8-7.3-7.9c0-1.7,0.6-3.2,1.6-4.3 c-0.2-0.4-0.7-2,0.2-4.2c0,0,1.3-0.4,4.4,1.6c1.3-0.4,2.6-0.5,4-0.5c1.4,0,2.7,0.2,4,0.5C23.1,6.6,24.4,7,24.4,7 c0.9,2.2,0.3,3.8,0.2,4.2c1,1.1,1.6,2.5,1.6,4.3c0,6.1-3.7,7.5-7.3,7.9c0.6,0.5,1.1,1.5,1.1,3c0,2.1,0,3.9,0,4.4 c0,0.4,0.3,0.9,1.1,0.8C27.4,29.5,32,23.5,32,16.4C32,7.6,24.8,0.4,16,0.4z" />
                </g>
              </svg>
            </a>
          </li>
        </ul>
>>>>>>> 571b903... Feature: Create navigation and siderbar component, also support mobile device.
=======
        <div class="mb-0 opacity-4h5">
          <a
            href="http://47.102.205.183:51000/gitea/nj-tech-gathering/multi-language-documents-platform-front-end"
            rel="noopener"
            target="_blank"
            class="text-white"
          >
            <svg
              viewBox="0 0 32 32"
              focusable="false"
              role="img"
              style="height:1rem;width:1rem"
            ><title>GitHub</title>
              <g fill="currentColor">
                <path fill-rule="evenodd" d="M16,0.4c-8.8,0-16,7.2-16,16c0,7.1,4.6,13.1,10.9,15.2 c0.8,0.1,1.1-0.3,1.1-0.8c0-0.4,0-1.4,0-2.7c-4.5,1-5.4-2.1-5.4-2.1c-0.7-1.8-1.8-2.3-1.8-2.3c-1.5-1,0.1-1,0.1-1 c1.6,0.1,2.5,1.6,2.5,1.6c1.4,2.4,3.7,1.7,4.7,1.3c0.1-1,0.6-1.7,1-2.1c-3.6-0.4-7.3-1.8-7.3-7.9c0-1.7,0.6-3.2,1.6-4.3 c-0.2-0.4-0.7-2,0.2-4.2c0,0,1.3-0.4,4.4,1.6c1.3-0.4,2.6-0.5,4-0.5c1.4,0,2.7,0.2,4,0.5C23.1,6.6,24.4,7,24.4,7 c0.9,2.2,0.3,3.8,0.2,4.2c1,1.1,1.6,2.5,1.6,4.3c0,6.1-3.7,7.5-7.3,7.9c0.6,0.5,1.1,1.5,1.1,3c0,2.1,0,3.9,0,4.4 c0,0.4,0.3,0.9,1.1,0.8C27.4,29.5,32,23.5,32,16.4C32,7.6,24.8,0.4,16,0.4z" />
              </g>
            </svg>
          </a>
        </div>
>>>>>>> 5b9cfe0... Refactor: refactor the code by using build-in classes in bootstrap
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
<<<<<<< HEAD
export default {};
</script>

<style lang="scss"></style>
=======
export default {

}
</script>

<style lang="scss">
</style>
>>>>>>> aa7525d... Feature: Add new component-nav.vue
