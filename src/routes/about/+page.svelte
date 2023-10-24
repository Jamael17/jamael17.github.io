<script lang="ts">
  import { Card } from "flowbite-svelte";
  import { onMount } from "svelte";
/**
 * https://vuejs.org//logo.svg
https://kit.svelte.dev/./favicon.png
https://nextjs.org//favicon.ico
https://getbootstrap.com//docs/5.3/assets/img/favicons/favicon-32x32.png
https://tailwindcss.com/https://laravel.com//favicons/favicon-32x32.png?v=3
 */
  const skills = [
    {
      title: "Fronted",
      imgPath:
        "/illustrations/svg/undraw_laravel_and_vue_-59-tp.svg",
      tools: [
        {
          name:"Vue.js",
          logo:'https://vuejs.org/logo.svg'
        },
        {
          name:"Svelte",
          logo:'https://kit.svelte.dev/favicon.png'
        },
        {
          name:"React",
          logo:'https://es.react.dev/favicon.ico'
        },
        {
          name:"Next.js",
          logo:'https://nextjs.org/favicon.ico'
        },
        {
          name:"Bootstrap",
          logo:'https://getbootstrap.com/docs/5.3/assets/img/favicons/favicon-32x32.png'
        },
        {
          name:"Tailwind",
          logo:'https://tailwindcss.com/favicons/favicon-32x32.png?v=3'
        },
        {
          name:"Laravel",
          logo:'https://laravel.com/img/favicon/favicon-32x32.png'
        },
      ],
    },
    {
      title: "Backed",
      imgPath: "/illustrations/svg/undraw_server_cluster_jwwq.svg",
      tools: [
        {
          name:"Express",
          logo:'https://expressjs.com/images/favicon.png'
        },
       {
        name:"Socket.io",
        logo:'https://socket.io/images/favicon.png'
       },
       {
        name:"MySQL",
        logo:'https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg'
       },
       {
        name:"MongoDB",
        logo:'https://mongodb.com/assets/images/global/favicon.ico'
       },
      ],
    },
    {
      title: "Infrastructure & DevOps",
      imgPath:
        "/illustrations/svg/undraw_container_ship_re_alm4.svg",
      tools: [
        {
          name:"Docker",
          logo:'https://kit.svelte.dev/_app/immutable/assets/svelte-logo.5c5d7d20.svg'
        },
       {
        name:"Git",
        logo:'https://git-scm.com/favicon.ico'
       },
       {
        name:"Nginx",
        logo:'https://www.nginx.com/wp-content/uploads/2019/10/favicon-48x48.ico'
       },
       {
        name:"AWS",
        logo:'https://a0.awsstatic.com/libra-css/images/logos/aws_smile-header-desktop-en-white_59x35.png'
       },
      ],
    },
    {
      title: "Testing",
      imgPath: "/illustrations/svg/undraw_science_re_mnnr.svg",
      tools: [
        {
          name:"Jest",
          logo:'https://jestjs.io/img/favicon/favicon.ico'
        },
       {
        name:"Playwright",
        logo:'https://playwright.dev/img/playwright-logo.svg'
       },
       {
        name:"unittest (Python)",
        logo:'https://www.python.org/static/favicon.ico'
       },
      ],
    },
    {
      title: "Python",
      imgPath: "/illustrations/svg/undraw_data_re_80ws.svg",
      tools: [
        {
          name: "Matplotlib",
          logo: "https://matplotlib.org/_static/favicon.ico",
        },
        {
          name: "Pandas",
          logo: "https://pandas.pydata.org/static/img/favicon.ico",
        },
        {
          name: "Numpy",
          logo: "https://numpy.org/images/favicon.ico",
        },
        {
          name: "PySide2",
          logo: "https://d33sqmjvzgs8hq.cloudfront.net/wp-content/themes/oneqt/assets/images/favicon.ico.gzip",
        },
        {
          name: "PyQt5",
          logo: "https://d33sqmjvzgs8hq.cloudfront.net/wp-content/themes/oneqt/assets/images/favicon.ico.gzip",
        },
        {
          name: "BeautifulSoup",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Bowl-of-steaming-soup.svg/2533px-Bowl-of-steaming-soup.svg.png",
        },
      ],
    },
    {
      title: "Javascript Specific",
      imgPath: "/illustrations/svg/undraw_online_ad_re_ol62.svg",
      tools: [
      {
        name:"Node.js",
        logo:'https://nodejs.org/static/images/favicons/favicon.png'
      },
      {
        name:"Typescript",
        logo:'https://www.typescriptlang.org//favicon-32x32.png'
      },
       {
        name:"P5.js",
        logo:'https://p5js.org/../assets/img/favicon.ico'
       },
       {
        name:"D3.js",
        logo:'https://d3js.org/logo.png'
       },
       {
        name:"Three.js",
        logo:'https://threejs.org/files/favicon_white.ico'
       },
      ],
    },
  ];

  onMount(() => {});
</script>

<div class="aboutPage dark:text-white">
  <h1 class="text-6xl mb-3 mt-3 text-center w-full">About me</h1>
  <section>
    <article class="aboutme grid grid-template-cols-1 grid-template-rows-2">
      <div class="grid md:grid-cols-2 sm:grid-cols-1 gap-2">
        <p class="text-4xl md:p-8 sm:pt-4 font-railway order-last sm:order-first xs:order-last">
          I'm an enthusiast for technology. I always try to learn new things, not only about 
          tech, but also about the world. I have a deep curiosity for how things work, and why 
          those things are the way they are.
        </p>
        <div class="flex justify-center">
          <img src="/illustrations/svg/undraw_trendy_interface_re_xsou.svg" alt="aboutMeIllustration">
        </div>
      </div>
    </article>
  </section>
  <h1 class="text-6xl mb-3 mt-3">Technologies and Tools</h1>
  <h4 class="font-railway text-2xl mb-3">Most of the tools I'm familiar with.</h4>
  <section class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2">
    {#each skills as { title, imgPath, tools }}
    <div class="skillsContainer flex justify-center">
      <Card size="xl" reverse={false} horizontal={true} padding="none">
        <div class="grid xs:grid-cols-1 sm:grid-cols-2 gap-0 p-2">
          <div class="flex justify-center align-center">
            <img src={imgPath} alt="img" class="p-4" />
          </div>
          <div class="w-full p-1">
            <h2 class="text-2xl text-white">{title}</h2>
            <ul class="p-2 md:block grid grid-cols-2">
              {#each tools as { name, logo }}
                <li class="flex p-1 remFilter">
                  <img
                    class="tool-logo mr-2 mb-2"
                    width="24px"
                    height="24px"
                    src={logo}
                    alt="logo"
                  />
                  <!-- <span>
                </span> -->
                  {name}
                </li>
              {/each}
            </ul>
          </div>
        </div>
      </Card>
    </div>
    {/each}
  </section>
</div>

<style lang="scss" scoped>
  @keyframes bg-anim{
    0% {
      background-size: 200%;
    }
    50%{
      background-size: 400%;
    }
    100%{
      background-size: 200%;
    }
  }
  .remFilter{
    cursor: pointer;
    &:hover{
      .tool-logo{
        transition: 900ms;
        filter: grayscale(0%);
      }
    }
  }
  .tool-logo {
    filter: grayscale(100%);
  }
</style>
