import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import TodosView from '../views/TodosView.vue'

describe('TodosView', () => {
  it('renders todos', () => {
    const wrapper = mount(TodosView)
    expect(wrapper.text()).toContain('Voir les todos')
  })
})
