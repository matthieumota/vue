import { describe, it, expect, vi } from 'vitest'

import { mount, flushPromises } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import TodosView from '../views/TodosView.vue'
import router from '@/router'
import axios from 'axios'

// Mock axios car la requête réelle ne passera pas dans le test
vi.mock('axios')
axios.get.mockResolvedValue({
  data: [
    { id: 1, name: 'A', done: true },
    { id: 2, name: 'B', done: false }
  ],
});

describe('TodosView', () => {
  it('renders todos', async () => {
    const wrapper = mount(TodosView, {
      global: {
        plugins: [
          router,
          createTestingPinia({
            createSpy: vi.fn,
            stubActions: false,
          })
        ],
      },
    })

    // Permet de résoudre les promesses de manière instantanée (c'est cela qui provoquait l'erreur car dépendant du réseau)
    await flushPromises();

    expect(wrapper.html()).toContain('A (1)')

    await wrapper.find('select').setValue(false)

    expect(wrapper.html()).not.toContain('A (1)')
  })
})
