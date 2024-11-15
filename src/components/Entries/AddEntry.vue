<template>
  <q-form
    class="row q-px-sm q-pb-sm q-col-gutter-sm bg-primary"
    @submit="addEntryFormSubmit"
  >
    <div class="col">
      <q-input
        ref="nameRef"
        v-model="addEntryForm.name"
        placeholder="Name"
        bg-color="white"
        outlined
        dense
      />
    </div>
    <div class="col">
      <q-input
        v-model.number="addEntryForm.amount"
        step="0.01"
        type="number"
        input-class="text-right"
        placeholder="Amount"
        bg-color="white"
        outlined
        dense
      />
    </div>
    <div class="col col-auto">
      <q-btn color="primary" icon="add" type="submit" round />
    </div>
  </q-form>
</template>

<script setup>
import { ref, reactive } from "vue";
import { userStoreEntries } from "src/stores/storeEntries";

const storeEntries = userStoreEntries();

const nameRef = ref(null);

const addEntryFormDefault = {
  name: "",
  amount: 0,
};

const addEntryForm = reactive({
  ...addEntryFormDefault,
});

const entryFormReset = () => {
  Object.assign(addEntryForm, addEntryFormDefault);
  nameRef.value.focus();
};

const addEntryFormSubmit = () => {
  storeEntries.addEntry(addEntryForm);
  entryFormReset();
};
</script>
