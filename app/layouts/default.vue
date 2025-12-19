<template>
  <v-app>
    <v-app-bar>
      <v-toolbar-title>Student Grading System</v-toolbar-title>
      <v-spacer />
      <LogoutButton />
    </v-app-bar>

    <v-main class="pa-4">
      <slot />
    </v-main>
  </v-app>
</template>
