<script>
  // import Particles from 'svelte-particles';
  // import {loadSlim} from 'tsparticles-slim';
  import { onMount } from 'svelte';
  import Navigator from '../components/Navigator.svelte';
  onMount(()=>{
  })
</script>

<div class="heroContainer flex justify-center items-center h-full w-full">
  <div class="background flex justify-center items-center">
    <img src="/src/assets/illustrations/svg/blobanimation.svg" alt="">
  </div>
  <div class="titleContainer dark:text-white text-center flex flex-col justify-center items-center">
    <h1 class="text-8xl md:text-9xl">Juan Curvelo</h1>
    <h3 class="text-3xl md:text-4xl mb-4 ">Software developer</h3>
    <Navigator />
  </div>
</div>

<style lang="scss" scoped>
  .heroContainer{
    // position: absolute;
    // width: 100vw;
    // height: 100vh;
    // overflow: hidden;
    .background{
      position: relative;
      width: 767px;
      height: 767px;
      // background: blue;
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      img{
        object-fit: contain;
        z-index: -1;
        transform: scale(1.5);
        opacity: 0.4;
      }
    }
    .titleContainer{
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%);
      @media (min-width:3000) {
        font-size: 15rem;
      }
      // h1{
      // }
      h3{
        @media (min-width:3000) {
          font-size: 5rem;
        }
      }
    }
    // justify-content: center;
    // al
  }
</style>
