import React, { ChangeEvent, useState } from 'react'
import { INPUT_FONT_SIZE, INPUT_HEIGHT, INPUT_WIDTH } from 'src/Application/Constants/styled'
import { CurrencyDropdown } from 'src/Application/Interfaces/Organisms/CurrencyDropdown'
import { Currencies } from 'src/Core/Constants/Currencies'

import { RateFormWrapper, RateRowItem, RateRowTitle, RateRowWrapper, TextField } from './styled'

type Props = {
    base: Currencies
    setBase: (val: Currencies) => void
    target: Currencies
    setTarget: (val: Currencies) => void
    rate: number
}

const isValidInput = (str: string) => /^[0-9]*(\.[0-9]{0,2})?$/.test(str) && str !== '.' && !(str.length && +str === 0)

export const RateForm = ({ base, target, setBase, setTarget, rate }: Props) => {
    const DEFAULT_VALUE = 1000
    const DEFAULT_BASE_VALUE = DEFAULT_VALUE.toFixed(2)
    const DEFAULT_TARGET_VALUE = (DEFAULT_VALUE * rate).toFixed(2)

    const FROM_TITLE = 'From'
    const TO_TITLE = 'To'

    const [baseValue, setBaseValue] = useState(DEFAULT_BASE_VALUE)
    const [targetValue, setTargetValue] = useState(DEFAULT_TARGET_VALUE)

    const baseOptions = Object.values(Currencies).filter((item) => item !== target)
    const targetOptions = Object.values(Currencies).filter((item) => item !== base)
    const inputProps = { style: { height: INPUT_HEIGHT, fontSize: INPUT_FONT_SIZE } }
    const inputSx = { width: INPUT_WIDTH }

    const handleTargetChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, isBase: boolean) => {
        const value = e.target.value

        if (isValidInput(value)) {
            setBaseValue(isBase ? value : ((1 / rate) * +value).toFixed(2))
            setTargetValue(isBase ? (rate * +value).toFixed(2) : value)
        }
    }

    return (
        <RateFormWrapper container>
            <RateRowTitle>{FROM_TITLE}</RateRowTitle>
            <RateRowWrapper container>
                <RateRowItem item>
                    <TextField
                        type="text"
                        onChange={(e) => handleTargetChange(e, true)}
                        value={baseValue}
                        InputProps={inputProps}
                        sx={inputSx}
                    />
                </RateRowItem>
                <RateRowItem item>
                    <CurrencyDropdown value={base} setValue={setBase} options={baseOptions} />
                </RateRowItem>
            </RateRowWrapper>
            <RateRowTitle>{TO_TITLE}</RateRowTitle>
            <RateRowWrapper container>
                <RateRowItem item>
                    <TextField
                        type="text"
                        value={targetValue}
                        onChange={(e) => handleTargetChange(e, false)}
                        InputProps={inputProps}
                        sx={inputSx}
                    />
                </RateRowItem>
                <RateRowItem item>
                    <CurrencyDropdown value={target} setValue={setTarget} options={targetOptions} />
                </RateRowItem>
            </RateRowWrapper>
        </RateFormWrapper>
    )
}
