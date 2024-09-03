<template>
  <v-parallax>
    <v-container>
      <div class="d-flex align-center justify-center flex-column text-center">
        <div class="text-caption my-5">
          Lfgl Tech
        </div>
        <v-spacer></v-spacer>
        <div class="my-16">
          <h1 class="text-h2 mb-1">
            {{ $t('banner_text.transform_vision') }}
          </h1>
        </div>
        <div>
          <p class="about-us"> {{ $t('banner_text.about_us') }} </p>
        </div>
        <div class="my-10 d-flex">
          <v-btn variant="flat" rounded class="mx-2" color="primary">{{ $t('cta.learn_more') }}</v-btn>
          <v-btn class="mx-2" rounded>{{ $t('cta.view_services') }}</v-btn>
        </div>
      </div>
    </v-container>
  </v-parallax>
</template>

<style scoped>
  .about-us{
    white-space: pre-line;
  }
</style>
