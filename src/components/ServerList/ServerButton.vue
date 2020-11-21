<template>
  <div 
    class="server__button"
    :class="{'server__button-hasNotification': hasNotification, 'server__button-isHome': isHome}">

  </div>
</template>

<script>
export default {
    props: {
        selected: Boolean,
        isHome: Boolean,
        hasNotification: Boolean,
        mention: Number
    }
}
</script>

<style scopped lang="scss">
.server__button {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  margin-bottom: 8px;
  background-color: var(--primary);
  cursor: pointer;
  position: relative;
  border-radius: 50%;
  transition: 0.2s;

  &.active,
  &:hover {
      border-radius: 16px;
      background-color: var(--discord);
  }
}

.server__button-isHome {
    background-color: var(--rocketseat);
    &:active,
    &:hover {
        border-radius: 16px;
        background-color: var(--rocketseat);
    }
}

.server__button-hasNotification {
    &::before {
        content: "";
        width: 9px;
        height: 9px;
        background-color: white;
        position: absolute;
        left: -17px;
        top: calc(50% - 4.5px);
        border-radius: 50%;
        display: block;

    }
}
</style>
