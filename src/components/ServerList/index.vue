<template>
  <div class="container">
      <ServerButton isHome/>
      <div class="separator"></div>
      <ServerButton :mentions="3"/>
      <ServerButton hasNotification/>
      <ServerButton :mentions="17" hasNotification/>
      <ServerButton hasNotification/>
      <ServerButton />
      <ServerButton hasNotification :mentions="2"/>
  </div>
</template>

<script>
import ServerButton from './ServerButton'
export default {
    components: {
        ServerButton
    }
}
</script>

<style scoped lang="scss">
.container{
    grid-area: SL;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--tertiary);
    padding: 11px 0;
    max-height: 100vh;
    overflow-y: scroll;
    &::-webkit-scrollbar {
    display: none;
  }
}
.separator {
    width: 32px;
    border-bottom: solid 2px var(--quaternary);
    margin-bottom: 8px;
}
</style>