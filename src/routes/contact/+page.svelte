<script lang="ts">
  import { Label, Input, Textarea, Button } from "flowbite-svelte";
  import anime from "animejs";
  import { onMount } from "svelte";
  let sendButton:HTMLButtonElement;
  const envelopAnim = anime({
      targets:'.envelope',
      translateX:[
        {value:-10,easing:'easeInOutCubic'},
        {value:10,easing:'easeInOutCubic'},
      ],
      // translateY:[
      //   {value:0,easing:'easeInOutCubic'},
      //   {value:-10,easing:'easeInOutCubic'},
      //   {value:0,easing:'easeInOutCubic'},
      // ],
      rotate:[
        {value:-10,easing:'easeInOutCubic'},
        {value:10,easing:'easeInOutCubic'},
      ],
      duration:2000,
      direction:'alternate',
      loop:true,
      // endDelay:200
    })
  onMount(()=>{
    document.querySelector('#wa')?.addEventListener('click',()=>{
      envelopAnim.play();
    })
  })
</script>

<div class="md:grid grid-cols-2 grid-rows-1 gap-4 content-center">
  <div class="imgContainer">
    <img
      src="src/assets/illustrations/svg/custom/custom_envelope.svg"
      alt="mail"
      class="envelope"
    />
  </div>
  <form action="" class="mt-6 md:mt-1">
    <h1 class="text-base dark:text-white mb-12 text-center">
      Let's work together!
    </h1>
    <div class="grid grid-cols-2 gap-4">
      <div class="mb-6">
        <Label for="contactName" class="block mb-2">Name</Label>
        <Input type="text" name="contactName" id="contactName" />
      </div>
      <div class="mb-6">
        <Label for="contactLastName" class="block mb-2">Last Name</Label>
        <Input type="text" name="contactLastName" id="contactLastName" />
      </div>
    </div>
    <div class="mb-6">
      <Label for="contactEmail" class="block mb-2">Email</Label>
      <Input type="email" name="contactEmail" id="contactEmail" />
    </div>
    <div class="mb-6">
      <Label for="contactComment" class="block mb-2">Comment</Label>
      <Textarea name="contactComment" id="contactComment" cols="30" rows="10" />
    </div>
    <div class="mb-12">
      <Button id="wa">Send</Button>
    </div>
  </form>
</div>

<style lang="scss" scoped>
  .imgContainer{
    display: flex;
    justify-content: center;
    align-items: center;
    img{
      width: 15vw

    }
    @media (max-width:500px) {
      img{
        width: 100px;
        margin-bottom: 2rem;
      }
    }
  }
  h1 {
    font-size: 3rem;
  }
</style>
