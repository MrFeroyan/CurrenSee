import React from 'react'
import { DROPDOWN_WIDTH, INPUT_HEIGHT } from 'src/Application/Constants/styled'
import { CURRENCY_TO_FLAG_MAP, IconType } from 'src/Application/Interfaces/Organisms/TodayRates'
import { Currencies } from 'src/Core/Constants/Currencies'

import { MenuItem, Select, SelectChangeEvent } from '@mui/material'

import { CurrencyMenuItemBody, CurrencyMenuItemIconWrapper, CurrencyMenuItemWrapper } from './styled'

export const CURRENCY_NAME_MAP: Record<Currencies, string> = {
    USD: `USA - U.S Dollar (${Currencies.USD})`,
    EUR: `EU - European Union Currency (${Currencies.EUR})`,
    JPY: `Japan - Japanese Yen (${Currencies.JPY})`,
    GBP: `Great Britain - Great British Pound (${Currencies.GBP})`,
    CHF: `Switzerland - Swiss Franc (${Currencies.CHF})`,
    CAD: `Canada - Canadian Dollar (${Currencies.CAD})`,
    MXN: `Mexico - Mexican Peso (${Currencies.MXN})`,
}

type Props = {
    value: Currencies
    options: Currencies[]
    setValue: (val: Currencies) => void
}

const CurrencyMenuItem = ({ currency, flag: Flag }: { currency: Currencies; flag: IconType }) => {
    return (
        <CurrencyMenuItemWrapper>
            <CurrencyMenuItemIconWrapper>
                <Flag />
            </CurrencyMenuItemIconWrapper>
            <CurrencyMenuItemBody>{CURRENCY_NAME_MAP[currency]}</CurrencyMenuItemBody>
        </CurrencyMenuItemWrapper>
    )
}

export const CurrencyDropdown = ({ value, setValue, options }: Props) => {
    const handleSelectChange = (event: SelectChangeEvent<Currencies>) => {
        const newValue = event.target.value
        setValue(newValue as Currencies)
    }

    return (
        <Select
            sx={{
                width: DROPDOWN_WIDTH,
                height: INPUT_HEIGHT,
            }}
            value={value}
            onChange={handleSelectChange}
            MenuProps={{
                PaperProps: {
                    style: {
                        width: DROPDOWN_WIDTH,
                    },
                },
            }}
            displayEmpty
            renderValue={() => (
                <MenuItem value={value}>
                    <CurrencyMenuItem currency={value} flag={CURRENCY_TO_FLAG_MAP[value]} />
                </MenuItem>
            )}
        >
            {options.map((currency) => (
                <MenuItem key={currency} value={currency}>
                    <CurrencyMenuItem currency={currency} flag={CURRENCY_TO_FLAG_MAP[currency]} />
                </MenuItem>
            ))}
        </Select>
    )
}
