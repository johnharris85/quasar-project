<template>
  <q-page>
    <div class="q-pa-md">
      <EmptyState v-if="!storeEntries.entries.length"/>
      <q-list v-else bordered separator>
        <Entry v-for="entry in storeEntries.entries" :key="entry.id" :entry="entry"/>
      </q-list>
    </div>

    <q-footer class="bg-transparent">
      <Balance />
      <AddEntry />
    </q-footer>

  </q-page>
</template>

<script setup>

import Balance from 'src/components/Entries/Balance.vue'
import AddEntry from 'src/components/Entries/AddEntry.vue';
import Entry from 'src/components/Entries/Entry.vue';
import EmptyState from 'src/components/Entries/EmptyState.vue';
import { userStoreEntries } from 'src/stores/storeEntries';

const storeEntries = userStoreEntries()

</script>
