<template>
  <q-layout view="hHh LpR lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
        <div class="absolute-center">
          <q-icon name="account_balance" />
          First Gorilla Financial
        </div>
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="bg-primary"
      :width="250"
      :breakpoint="767"
    >
      <q-list>
        <q-item-label
          header
          class="text-white"
        >
          Nav Links
        </q-item-label>

        <NavLink
          v-for="link in navList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import NavLink from 'src/components/Nav/NavLink.vue'

defineOptions({
  name: 'MainLayout'
})

const navList = [
  {
    title: 'Savings',
    caption: 'quasar.dev',
    icon: 'savings',
    link: '/'
  },
  {
    title: 'Settings',
    caption: 'github.com/quasarframework',
    icon: 'settings',
    link: '/settings'
  }
]

const leftDrawerOpen = ref(false)

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
