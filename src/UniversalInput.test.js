import React from 'react';
import UniversalInput from './UniversalInput';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Input tests', () => {
    it('Dodano poprawnie komponent inputa', () => {
      const wrapper = shallow(<UniversalInput />);
      expect(wrapper.find('input').exists()).toBe(true);
    });

    it('Poprawnie ustawia typ na text', () => {
      const wrapper = shallow(<UniversalInput inputType={'text'} />);
      expect(wrapper.find('input').prop('type')).toBe('text');
    });

    it('Poprawnie ustawia typ na number', () => {
      const wrapper = shallow(<UniversalInput inputType={'number'} />);
      expect(wrapper.find('input').prop('type')).toBe('number');
    });

    it('Poprawnie ustawia typ na email', () => {
      const wrapper = shallow(<UniversalInput inputType={'email'} />);
      expect(wrapper.find('input').prop('type')).toBe('email');
    });

    it('Poprawnie ustawia domyślny typ na range', () => {
      const wrapper = shallow(<UniversalInput inputType={'email'} />);
      expect(wrapper.find('input').prop('type')).toBe('email');
    });
  });