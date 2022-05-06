import React from "react";
import { getByText, render, fireEvent, getByPlaceholderText } from "@testing-library/react";
import TodoForm from './TodoForm';

describe('<TodoForm />', () => {
    it('has input and a button', () => {
        const { getByPlaceholderText, getByText } = render(<TodoForm />);

        getByPlaceholderText('할 일을 입력하세요'); // input이 출력이 되었는지 확인 하는 조건
        getByText('등록'); // button이 출력 되었는지 확인
    })

    it('changes input', () => {
        const { getByPlaceholderText } = render(<TodoForm />);
        const input = getByPlaceholderText('할 일을 입력하세요');
        fireEvent.change(input, {
            target: {
                value: 'TDD 배우기'
            }
        });
        expect(input).toHaveAttribute('value', 'TDD 배우기');
    })

    it('calls onInsert and clears input', () => {
        const onInsert = jest.fn(); //실체는 없지만 함수로 작동하는 것과 같은효과
        const { getByPlaceholderText, getByText } = render(<TodoForm onInsert={onInsert} />);
        const input = getByPlaceholderText('할 일을 입력하세요');
        const button = getByText('등록');

        fireEvent.change(input, {
            target: {
                value: 'TDD 배우기'
            }
        });
        fireEvent.click(button);
        expect(onInsert).toBeCalledWith('TDD 배우기');
        expect(input).toHaveAttribute('value', '');
    });
})