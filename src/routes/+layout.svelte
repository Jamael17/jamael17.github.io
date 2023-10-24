<script lang="ts">
  import { page } from "$app/stores";
  import { GithubSolid,LinkedinSolid } from "flowbite-svelte-icons";
  import "../app.postcss";
  import Navigator from "../components/Navigator.svelte";
  import { fade, fly } from "svelte/transition";

  export let data;
</script>

<div class="app">
  <div class="glare"></div>
  <div class="githubIcons grid grid-cols-2 gap-4 p-4">
    <a class="dark:text-white" href="https://github.com/jcurvelo" target="_blank">
      <div class="hover:dark:text-primary-500 opacity-75 hover:opacity-100">
        <GithubSolid size="lg" />
      </div>
    </a>
    <a class="dark:text-white" href="http://www.linkedin.com/in/juancurvelo" target="_blank">
      <div class="hover:dark:text-primary-500 opacity-75 hover:opacity-100">
        <LinkedinSolid size="lg" />
      </div>
    </a>
  </div>
  <main class="p-8 ml-4 mr-4">
    {#key data.url}
    <div in:fade={{ duration: 300, delay: 300}} out:fade={{ duration: 300 }}>
      <slot />
    </div>
    {/key}
  </main>
  {#if $page.route.id != '/'}
    <Navigator />
  {/if}
</div>

<style lang="scss">
  .githubIcons{
    position: absolute;
    right: 0;
  }
  .glare{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    // background-image: radial-gradient(#ffffff34,#ffffff00);
    animation-name: bg-anim;
    animation-duration: 1000;
    animation-fill-mode: both;
    animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
    animation-iteration-count: infinite;
    // animation
    @keyframes bg-anim {
      from{
        background-image: radial-gradient(#ffffff34,#ffffff00);
      }
      to{
        background-image: radial-gradient(#ffffff1a,#ffffff00);
      }
    }
  }
</style>
