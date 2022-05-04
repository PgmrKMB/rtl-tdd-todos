import React from "react";
import { getByText, render } from "@testing-library/react";
import TodoForm from './TodoForm'

describe('<TodoForm />', ()=>{
    it('has input and a button', () => {
        const {getByPlaceholderText, getByText}= render(<TodoForm />);

        getByPlaceholderText('할 일을 입력하세요'); // input이 출력이 되었는지 확인 하는 조건
        getByText('등록'); // button이 출력 되었는지 확인

    })
})