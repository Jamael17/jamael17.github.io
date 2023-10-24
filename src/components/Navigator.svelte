<script lang="ts">
  import { goto } from "$app/navigation";
  import { onMount } from "svelte";
  import {
    HomeSolid,
    FaceLaughSolid,
    StarSolid,
    UsersSolid,
  } from "flowbite-svelte-icons";
  import { page } from "$app/stores";
  import anime from "animejs";
  import { base } from "$app/paths";
  let links = [
    { text: "Home", url: "/", Icon: HomeSolid },
    { text: "About", url: "/about", Icon: FaceLaughSolid },
    { text: "Experience", url: "/experience", Icon: StarSolid },
    { text: "Contact", url: "/contact", Icon: UsersSolid },
  ];
  let currentUrl = "/";
  function navigateTo(url: string) {
    currentUrl = url || "";
    goto(url);
  }

  function moveNav() {
    anime({
      targets: ".navigator",
      left: "50%",
      begin: () => {
        let nav = document.querySelector("#navigator");
        if (!nav) {
          return;
        }
        nav.className = "navigator flex flex-col";
      },
      duration: 3000,
    });
  }

  onMount(() => {
    const handleLinkClick = (url: string) => {
      return (event: Event) => {
        event.preventDefault();
        navigateTo(url);
      };
    };

    links.forEach((link) => {
      const element = document.getElementById(link.text);
      if (element) {
        element.addEventListener("click", handleLinkClick(link.url));
      }
    });
    if ($page.route.id == "/") {
      anime({
        targets: ".navLinkContainer",
        // opacity:1,
        // translateY:0,
        keyframes: [
          {
            translateY: 100,
            opacity: 0,
          },
          {
            translateY: 80,
            opacity: 1,
          },
        ],
        delay: (el, i) => {
          return i * 200 + 100;
        },
        duration: 1000,
        easing: "linear",
      });
    } else {
      // anime({
      //   targets:'.navLink',
      //   // translateX:0,
      //   keyframes:[
      //     // {
      //     //   translateX:-300,
      //     // },
      //     {
      //       translateX:10
      //     }
      //   ],
      //   delay:(el,i)=>{
      //     return i*100
      //   },
      //   duration:500,
      //   easing:'linear'
      // })
    }
  });
</script>

<div>
  {#if $page.route.id == "/"}
    <nav class="navigator navigator-center grid grid-cols-3 gap-8">
      {#each links as { url, text, Icon }, i}
        {#if url != "/"}
          <div
            class="navLinkContainer flex flex-col justify-center items-center"
          >
            <a id={text} href={url} data-delay={i} class="navLink">
              <div class="navIcon dark:text-white hover:text-black">
                <Icon />
              </div>
            </a>
            <span class="text-center text-2xl sm:text-xl">{text}</span>
          </div>
        {/if}
      {/each}
    </nav>
  {:else}
    <nav
      class="navigator navigator-left flex md:flex-col flex-row w-full justify-around"
    >
      {#each links as { url, text, Icon }, i}
      <div class="navLinkContainerLeft">
        <a id={text} href={base+url} data-delay={i} class="navLink">
          <div class="navIcon dark:md:text-white hover:text-black">
            <Icon />
          </div>
        </a>
        <span class="md:ml-5">{text}</span>
      </div>
      {/each}
    </nav>
  {/if}
</div>

<style lang="scss" scoped>
  .navigator {
    width: 20vw;
    @media (max-width:767px) {
      width: 100%;
    }
    .navLink {
      all: unset;
      width: 35px;
      height: 35px;
      display: flex;
      justify-content: center;
      align-items: center;
      // flex-direction: column;
      border: 0.5px solid white;
      font-size: 3rem;
      border-radius: 50%;
      position: relative;
      transition: all 0.2s ease-in-out;
      // animation-name: oscilator;
      // animation-fill-mode: both;

      // left: 10px;

      // svg{
      // }

      &:hover {
        cursor: pointer;
        // background-color: white;
        // color: black;
        transform: scale(1.1);
        &::before {
          content: "";
          width: 100%;
          height: 100%;
          // background-color: #585858;
          position: absolute;
          top: 0;
          left: 0;
          z-index: -1;
          border-radius: 50%;
        }
        span {
          display: block;
        }
        .navIcon {
          transform: scale(1.1);
          // color: black;
        }
      }
      span {
        color: white;
        // position: absolute;
        left: 1.5rem;
        font-size: 1.5rem;
        display: none;
        @media (max-width: 767px) {
          display: block;
          top: 40px;
          left: -30px;
        }
      }
      @media (max-width: 767px) {
          // display: flex;
          // justify-content: center;
          // align-items: center;
          // flex-direction: column;
          // text-justify: center;
          // top: 40px;
          // left: -30px;
        }
    }
  }
  .navLinkContainer {
    opacity: 0;
    transform: translateY(100px);
  }
  .navLinkContainerLeft {
    display: flex;
    width: 100%;
    color: white;
    span{
      display: none;
      justify-content: center;
      align-items: center;
    }
    @media (max-width:767px) {
      span{
        display: block;
      }
      
    .navLinkSelected{
      outline: 1px solid #2b2b2b60;
      border-radius: 20px;
    }
      color: #2b2b2b;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      
    }
    &:hover{
      @media (max-width:767px) {
        outline: 1px solid #2b2b2b60;
        border-radius: 20px;
      }
    }
    &:not(:last-child) {
        margin-bottom: 20px;
        @media (max-width: 767px) {
          margin-bottom: 0px;
        }
      }
  }
  .navigator-center {
    top: 60%;
    left: Calc(50% - 10rem);
    // width: 100vw;
    display: flex;
    justify-content: space-around;
    @media (min-width:3000px) {
        transform: scale(5);
    }
  }
  .navigator-left {
    position: fixed;
    @media (min-width: 767px) {
      top: Calc(50% - 50px);
    }
    @media (max-width: 767px) {
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      background-color: #f0f0f0;
      border-radius: 16px 16px 0 0;
      padding: 0.3rem 1rem;
    }
    .navLink {
      border:0.5px solid white;
      left: 10px;
      &:hover{
        +span{
          display: flex;
        }
      }
      @media (max-width:767px) {
        border: none;
        left: 0px;
      }
      // background-color: #b8b8b85e;
      // transform: translateX(-300px);

    }
  }
</style>
