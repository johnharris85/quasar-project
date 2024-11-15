import { defineStore } from 'pinia'
import { uid, Notify } from 'quasar'
import { ref, computed } from 'vue'

export const userStoreEntries = defineStore('entries', () => {
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

  const balance = computed(() => {
    return entries.value.reduce((acc, entry) => acc + entry.amount, 0)
  })

  const addEntry = addEntryForm => {
    const newEntry = Object.assign({}, addEntryForm, { id: uid() })
    entries.value.push(newEntry)
    entryFormReset()
    nameRef.value.focus()
  }

  const deleteEntry = entryId => {
    entries.value.splice(getEntryIdxById(entryId), 1)
    Notify.create({ position: 'top', message: 'Entry deleted', color: 'negative' })
  }

const updateEntry = (entryId, updates) => {
  Object.assign(entries.value[getEntryIdxById(entryId)], updates)
}

const getEntryIdxById = entryId => {
  return entries.value.findIndex(entry => entry.id === entryId)
}

  return {
    entries,
    balance,
    addEntry,
    deleteEntry,
    updateEntry
  }
})
