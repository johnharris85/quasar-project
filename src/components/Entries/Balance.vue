<template>
  <div class="row q-mb-sm q-px-md q-py-sm shadow-up-3">
    <div class="col text-h6" :class="useAmountColorClass(storeEntries.balance)">
      Balance:
    </div>
    <div
      class="col text-h6 text-right"
      :class="useAmountColorClass(storeEntries.balance)"
    >
      {{ useCurrencify(storeEntries.balance) }}
    </div>
  </div>
</template>

<script setup>
import { userStoreEntries } from "src/stores/storeEntries";
import { useCurrencify } from "src/use/useCurrencify";
import { useAmountColorClass } from "src/use/useAmountColorClass";

const storeEntries = userStoreEntries();
</script>
