<template>
  <q-page>
    <div class="q-pa-md">
      <q-list bordered separator>
        <q-item v-for="entry in entries" :key="entry.id">
          <q-item-section class="text-weight-bold" :class="useAmountColorClass(entry.amount)">
            {{ entry.name }}
          </q-item-section>

          <q-item-section side class="text-weight-bold" :class="useAmountColorClass(entry.amount)">
            {{ useCurrencify(entry.amount) }}
          </q-item-section>
        </q-item>
      </q-list>
    </div>

    <q-footer>
      <div class="row q-pa-sm q-col-gutter-sm">
        <div class="col">
          <q-input placeholder="Name" bg-color="white" outlined dense/>
        </div>
        <div class="col">
          <q-input step="0.01" type="number" input-class="text-right" placeholder="Amount" bg-color="white" outlined dense/>
        </div>
        <div class="col col-auto">
          <q-btn color="primary" icon="add" round />
        </div>
      </div>
    </q-footer>

  </q-page>
</template>

<script setup>

import { ref } from 'vue'
import { useCurrencify } from 'src/use/useCurrencify'
import { useAmountColorClass } from 'src/use/useAmountColorClass';

const entries = ref([
  {
    id: 'id1',
    name: 'Salary',
    amount: 4999.99
  },
  {
    id: 'id2',
    name: 'Groceries',
    amount: -129.34
  },
  {
    id: 'id3',
    name: 'Interest',
    amount: 0.98
  },
  {
    id: 'id4',
    name: 'Netflix',
    amount: -12.78
  },
  {
    id: 'id5',
    name: 'Unknown',
    amount: 0
  },
])

</script>
