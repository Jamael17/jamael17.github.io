<script lang="ts">
  import * as d3 from "d3";
  import { onMount } from "svelte";
  import anime from "animejs";
  onMount(() => {
    // Images
    anime({
      targets:'img',
      keyframes:[
        {
          translateY:5,
          opacity:0.1
        },
        {
          translateY:0,
          opacity:1
        },
      ],
      delay:(el,i)=>{
        return i*100
      },
      duration:1000,
      easing:'linear'
    })
    // Lines
    anime({
      targets: ".pc-to-loadbalancer",
      scaleX: 80,
      duration: 1000,
      easing: "cubicBezier(.7,.57,.4,1.04)",
    });
    anime({
      targets: ".loadbalancer-to-server-1",
      scaleX:130,
      duration:1000,
      easing:"cubicBezier(.7,.57,.4,1.04)"
    })
    anime({
      targets: ".loadbalancer-to-server-2",
      scaleX:85,
      duration:1000,
      easing:"cubicBezier(.7,.57,.4,1.04)"
    })
    anime({
      targets: ".loadbalancer-to-server-3",
      scaleX:150,
      duration:1000,
      easing:"cubicBezier(.7,.57,.4,1.04)"
    })
    anime({
      targets: ".server-to-database-1",
      scaleX:80,
      duration:1000,
      easing:"cubicBezier(.7,.57,.4,1.04)"
    })
    anime({
      targets: ".server-to-database-2",
      scaleX:80,
      duration:1000,
      easing:"cubicBezier(.7,.57,.4,1.04)"
    })
    anime({
      targets: ".server-to-database-3",
      scaleX:80,
      duration:1000,
      easing:"cubicBezier(.7,.57,.4,1.04)"
    })
  });
</script>

<div class="sistem-design-anim flex items-center justify-around">
  <div class="line pc-to-loadbalancer" />
  <div class="line loadbalancer-to-server-1" />
  <div class="line loadbalancer-to-server-2" />
  <div class="line loadbalancer-to-server-3" />
  <div class="line server-to-database-1" />
  <div class="line server-to-database-2" />
  <div class="line server-to-database-3" />
  <img
    src="/src/assets/illustrations/svg/desktop-computer-svgrepo-com.svg"
    width="80"
    alt="server"
    class="pc"
  />
  <img
    src="/src/assets/illustrations/png/load-balancer-icon-18.png"
    width="80"
    alt="loadbalancer"
    class="loadbalancer"
  />
  <div class="flex flex-col">
    <img
      src="/src/assets/illustrations/svg/server.svg"
      alt="server"
      width="80"
      class="server mt-4"
    />
    <img
      src="/src/assets/illustrations/svg/server.svg"
      alt="server"
      width="80"
      class="server mt-4"
    />
    <img
      src="/src/assets/illustrations/svg/server.svg"
      alt="server"
      width="80"
      class="server mt-4"
    />
  </div>
  <div class="flex flex-col">
    <img
      src="/src/assets/illustrations/png/4996138.png"
      alt="database"
      width="80"
      class="server"
    />
    <img
      src="/src/assets/illustrations/png/4996138.png"
      alt="database"
      width="80"
      class="server"
    />
  </div>
</div>

<style lang="scss">
  .sistem-design-anim {
    position: fixed;
    width: 600px;
    height: 400px;
    margin-left: 5rem;
    margin-top: 10rem;
    // outline: 1px solid #ffffff5d;
    .line {
      position: absolute;
      width: 1px;
      height: 1px;
      transform-origin: bottom left;
      background-color: white;
      z-index: -1;
    }
    .pc-to-loadbalancer {
      left: 120px;
    }
    .loadbalancer-to-server-1 {
      transform-origin: top right;
      width: 1px;
      left: 230px;
      bottom: 210px;
      border-top: 1px solid white;
      rotate: 139deg;
    }
    .loadbalancer-to-server-2 {
      transform-origin: top left;
      width: 1px;
      left: 240px;
      // bottom: 210px;
      border-top: 1px solid white;
      // rotate: 139deg;
    }
    .loadbalancer-to-server-3 {
      transform-origin: top left;
      width: 1px;
      left: 230px;
      bottom: 200px;
      border-top: 1px solid white;
      rotate: 49deg;
    }
    .server-to-database-1 {
      transform-origin: top left;
      width: 1px;
      left: 420px;
      bottom: 300px;
      border-top: 1px solid white;
      rotate: 30deg;
    }
    .server-to-database-2 {
      transform-origin: top left;
      width: 1px;
      left: 420px;
      bottom: 200px;
      border-top: 1px solid white;
      rotate: 30deg;
    }
    .server-to-database-3 {
      transform-origin: top left;
      width: 1px;
      left: 490px;
      bottom: 130px;
      border-top: 1px solid white;
      rotate: 150deg;
    }
    img {
      filter: invert(69%) sepia(65%) saturate(397%) hue-rotate(152deg)
        brightness(98%) contrast(90%);
      position: relative;
      object-fit: cover;
      opacity: 0.1;
      transform: translateY(5px);
    }
  }
</style>
