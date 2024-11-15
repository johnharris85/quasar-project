<template>
  <q-slide-item
    @left="onEntrySlideLeft"
    @right="onEntrySlideRight"
    left-color="positive"
    right-color="negative"
  >
    <template v-slot:left>
      <q-icon name="done" />
    </template>
    <template v-slot:right>
      <q-icon name="delete" />
    </template>
    <q-item>
      <q-item-section
        class="text-weight-bold"
        :class="useAmountColorClass(entry.amount)"
      >
        {{ entry.name }}
        <q-popup-edit
          @save="onNameUpdate"
          :model-value="entry.name"
          auto-save
          v-slot="scope"
          anchor="top left"
          :offset="[16, 12]"
          :cover="false"
          buttons
          label-set="Ok"
        >
          <q-input
            v-model="scope.value"
            dense
            autofocus
            @keyup.enter="scope.set"
            input-class="text-weight-bold letter-spacing-none"
          />
        </q-popup-edit>
      </q-item-section>

      <q-item-section
        side
        class="text-weight-bold"
        :class="useAmountColorClass(entry.amount)"
      >
        {{ useCurrencify(entry.amount) }}
        <q-popup-edit
          @save="onAmountUpdate"
          :model-value="entry.amount"
          auto-save
          v-slot="scope"
          anchor="top left"
          :offset="[16, 12]"
          :cover="false"
          buttons
          label-set="Ok"
        >
          <q-input
            v-model.number="scope.value"
            dense
            step="0.01"
            type="number"
            autofocus
            @keyup.enter="scope.set"
            input-class="text-weight-bold letter-spacing-none text-right"
          />
        </q-popup-edit>
      </q-item-section>
    </q-item>
  </q-slide-item>
</template>

<script setup>
import { userStoreEntries } from "src/stores/storeEntries";
import { useCurrencify } from "src/use/useCurrencify";
import { useAmountColorClass } from "src/use/useAmountColorClass";
import { useQuasar } from "quasar";

const $q = useQuasar();

const storeEntries = userStoreEntries();

const props = defineProps({
  entry: {
    type: Object,
    required: true,
  },
});

const onEntrySlideRight = ({ reset }) => {
  $q.dialog({
    title: "Delete Entry",
    message: `
      Delete this entry?
      <div class="q-mt-md text-weight-bold ${useAmountColorClass(
        props.entry.amount
      )}">
        ${props.entry.name} : ${useCurrencify(props.entry.amount)}
      </div>
    `,
    cancel: true,
    persistent: true,
    html: true,
    ok: {
      label: "Delete",
      color: "negative",
      noCaps: true,
    },
    cancel: {
      color: "primary",
      noCaps: true,
    },
  })
    .onOk(() => {
      storeEntries.deleteEntry(props.entry.id);
    })
    .onCancel(() => {
      reset();
    });
};

const onEntrySlideLeft = ({ reset }) => {
  console.log("onEntrySlideLeft");
};

const onNameUpdate = (name) => {
  storeEntries.updateEntry(props.entry.id, { name });
};

const onAmountUpdate = (amount) => {
  storeEntries.updateEntry(props.entry.id, { amount });
};
</script>
