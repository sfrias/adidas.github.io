<template>
  <header class="header">
    <nav class="header__container">
      <div class="header__main">
        <div class="header__left">
          <nuxt-link :to="localePath('index')"
              class="header__brand link"
              exact-active-class="">
            <span class="header__logo yarn-logo adidas"></span>
            <span class="header__headline">{{ $t('meta.title') }}</span>
          </nuxt-link>
        </div>
        <div class="header__right">
          <nuxt-link :to="localePath('contributing')" class="btn btn--blue">
            {{ $t('links.contributing') }}
          </nuxt-link>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'headerbar'
};
</script>
