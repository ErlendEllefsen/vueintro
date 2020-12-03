import { shallowMount } from '@vue/test-utils'                       
import ButtonTest from '../../src/components/ButtonTest.vue'     
import Intro from '../../src/views/Intro.vue'
import Home from '../../src/views/Home.vue' 

describe('Running some tests...', () => {

    it('Check if tester = true on button press', () => {
      const wrapper = shallowMount(ButtonTest)                              
      const button = wrapper.find('#testButton')
      button.trigger('click')           
      expect(wrapper.vm.test).toBe(true);                   
    })
    it('Check if headertext is spelled right', () => {
      const wrapper = shallowMount(Intro)
      const h1 = wrapper.find('#header')
      expect(h1.text()).toContain('Introduksjon')
    })
    it('Check if div in Home.vue has right class', () => {
      const wrapper = shallowMount(Home)
      const d = wrapper.findAll('div').at(0)
      expect(d.classes()).toContain('home')
    })
})