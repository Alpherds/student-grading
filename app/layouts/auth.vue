<template>
  <v-app>
    <v-main class="d-flex align-center justify-center auth-bg">
      <v-card
        class="auth-card pa-8"
        max-width="420"
        width="100%"
      >
        <!-- LOGO -->
        <div class="text-center mb-6">
          <v-img
            src="/logo.png"
            max-width="200"
            class="mx-auto mb-3"
            contain
          />
          <div class="auth-subtitle">
            Academic Management Portal
          </div>
        </div>

        <slot />
      </v-card>
    </v-main>
  </v-app>
</template>


<style scoped>
.auth-bg {
  background: linear-gradient(135deg, #e3f2fd, #f5f5f5);
}
</style>
