import { Select, Stack } from '@chakra-ui/react'
import React from 'react'

export default function Test() {
    return (
        <>
            <Select
                style={{
                    paddingTop: '0.3rem',
                    fontSize: '18px',
                    lineHeight: " 27px",
                    color: ' #9A307C',
                }} variant="unstyled" placeholder="คุณกำลังมองหา" color="#9A307C">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
            </Select>
        </>
    )
}
