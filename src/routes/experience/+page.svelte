<script lang="ts">
  import { onMount } from "svelte";
  import anime from "animejs";
  import SystemDesignAnim from "../../components/SystemDesignAnim.svelte";
  import { P } from "flowbite-svelte";
  import TeamLeadingAnim from "../../components/TeamLeadingAnim.svelte";
  const images = [
    // "/src/assets/illustrations/png/MRBGYVP34BLTPO7FAVIXSUPKJA.jpg",
    // "/src/assets/illustrations/png/1_84wQvgcY-qeS92WYYvJBTA.jpg",
    // "/src/assets/illustrations/png/MRBGYVP34BLTPO7FAVIXSUPKJA-removebg-preview.png",
    "/src/assets/illustrations/svg/undraw_all_the_data_re_hh4w.svg",
    "",
    "",
    "/src/assets/illustrations/svg/undraw_code_thinking_re_gka2.svg",
    "src/assets/illustrations/svg/undraw_file_searching_re_3evy.svg",
  ];
  let currentImgIndex = NaN;
  let pruebaLinea = 0;
  onMount(() => {
    document.querySelectorAll(".experience").forEach((el, i) => {
      el.addEventListener("mouseover", () => {
        if (currentImgIndex != i) {
          currentImgIndex = i;
        }
      });
    });
    anime({
      targets: ".para",
      keyframes: [
        {
          translateY: () => {
            return Math.random() * (10 - 5) + 5;
          },
          // translateX:()=>{
          //   return Math.random() * (10-5) + 5;
          // }
        },
      ],
      duration: 3000,
      loop: true,
      easing: "linear",
      direction: "alternate",
    });
  });
</script>

<div class="projectsContainer grid grid-cols-2 dark:text-white font-sans">
  <div class="p-10">
    <article>
      <h1 class="text-5xl mb-4">
        Colaborator for a Software Development Agency
      </h1>
      <small class="font-railway text-xl"
        >I worked along side a small Software Development Agency to design and
        build tools for a small industrial startup</small
      >
      <div class="experience">
        <h2 class="text-2xl p-1 mb-4">
          Improvement in statistical application for industrial analisys
        </h2>
        <p class="text-base">
          With the initial program of a simple code for data analisys built in
          python with matplotlib, I had the task to integrate this graphs into
          PySide2 and add all the required features, which included: Smooth
          movement, keyboard and mouse interaction and fast update
        </p>
      </div>
      <div class="experience">
        <h2 class="text-2xl p-1 mb-4">Team lead and recruitment advisor</h2>
        <p class="text-base">
          During my time there, I helped design a guide and evaluation to apply
          on future personal. I also was constanly with helping and guiding new
          members to integrate themselve with the team and teaching the ways of
          good software design.
        </p>
      </div>
      <div class="experience">
        <h2 class="text-2xl p-1 mb-4">
          Design and implement from scratch system design for AWS
        </h2>
        <p class="text-base">
          At some point, it was necesary to build a complete new platform for
          users and clients to login and view the results. I was in charge of
          the system design and devops cycle, building solutions that included
          different types of load balacers, edge functions with AWS Lambda,
          Email managing with AWS SES and different types of implementations
          with AWS EC2
        </p>
      </div>
    </article>
    <article class="mb-4">
      <h1 class="text-5xl mb-4">Barates</h1>
      <small class="font-railway text-xl"
        >A website for hotel bookings and room reservations. Sole developer
        during my time working with them and managed to build the platform base
        structure</small
      >
      <div class="experience">
        <h2 class="text-2xl p-1 mb-4">
          Improvement and modification of previous code
        </h2>
        <p class="text-base">
          Given the previous work from another developer, I took where they left
          and made improvement to the platform and introduced better design
          patterns for code quality and faster delivery.
        </p>
      </div>
      <div class="experience">
        <h2 class="text-2xl p-1 mb-4">Creation of Admin Console</h2>
        <p class="text-base">
          Due to the requirements from the business, it was necesary to create a
          platform where employees and authorized personal could manage the
          services the website provided. This console featured a series of
          options where users were able to create, modify and review their plans
          and services
        </p>
      </div>
    </article>
  </div>
  <div class="illustrationContainer">
    {#if currentImgIndex == 2}
      <SystemDesignAnim />
    {:else if currentImgIndex == 1}
    <TeamLeadingAnim />
    {:else if currentImgIndex == null}
      <div></div>
    {:else}
      <div class="fixed illustration">
        {#if currentImgIndex || currentImgIndex==0}
        <img src={images[currentImgIndex]} alt="data" />
        {:else}
        <div></div>
        {/if}
      </div>
    {/if}
  </div>
</div>

<style lang="scss">
  .experience {
    cursor: pointer;
  }
  .illustrationContainer {
    .illustration {
      display: flex;
      justify-content: center;
      top: 50%;
      left: 50%;
      transform: translate(30%,-50%);
      img {
        width: 30vw;
      }
    }
  }
  .img-parallax {
    width: 612px;
    height: 480px;
    overflow: hidden;
    .para {
      border-style: solid;
      border-width: 5px;
      border-radius: 3px;
      border-color: #c7c7c7bb;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  article {
    height: 100vh;
    position: relative;
    .experience {
      position: relative;
      padding-left: 0.7rem;
      padding-bottom: 0.7rem;
      margin-top: 1rem;
      border-left: 1px solid white;
      transition: 1s;
    }
  }
</style>
