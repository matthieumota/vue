import { describe, it, expect, vi } from 'vitest'

import { mount, flushPromises } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import TodosView from '../views/TodosView.vue'
import router from '@/router'
import { nextTick } from 'vue'

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
    // await flushPromises();
    // await nextTick();
    expect(wrapper.html()).toContain('A (1)')

    await wrapper.find('select').setValue(false)

    expect(wrapper.html()).not.toContain('A (1)')
  })
})
