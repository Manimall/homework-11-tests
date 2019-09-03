// Компонент Counter - простой счётчик
// Напишите для него тесты.
// Убедитесь, что вы протестировали всю функциональнось.
// Также проверьте что компонент рендерится верно, используя Snapshot тест.

// * Задание со звёздочкой - выполнять не обязательно

// Вынесите логику в хук и протестируйте его

import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from  'enzyme';
import { Counter } from './Counter';

describe(`Counter`, () => {
	describe(`Component render correctly`, () => {
		it(`renders correctly`, () => {
			const tree = renderer.create(<Counter />).toJSON();
			expect(tree).toMatchSnapshot();
		});
	});

	describe(`Counter correctly`, () => {
		const wrapper = shallow(<Counter />);
		const incBtn = wrapper.find(`.t-btn-inc`);
		const decBtn = wrapper.find(`.t-btn-dec`);
		// const counter = wrapper.find(`.t-count`); // this doesn't not works

		it(`increment correct value`, () => {
			expect(wrapper.find(`.t-count`).text()).toEqual(`0`);
			incBtn.simulate(`click`);
			expect(wrapper.find(`.t-count`).text()).toEqual(`1`);
		});

		it(`decrement correctly`, () => {
			expect(wrapper.find(`.t-count`).text()).toEqual(`1`);
			decBtn.simulate(`click`);
			expect(wrapper.find(`.t-count`).text()).toEqual(`0`);
		});

	});
});
