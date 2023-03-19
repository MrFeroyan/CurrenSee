import React, { SyntheticEvent } from 'react'
import { DashboardHeaderTab, DashboardHeaderTabs } from 'src/Application/Interfaces/Organisms/Dashboard/styled'
import { DashboardState } from 'src/Core/Constants/DashboardState'

import { AppBar } from '@mui/material'

type Props = {
    selected: DashboardState
    setSelected: (value: DashboardState) => void
}

export const DashboardHeader = ({ selected, setSelected }: Props): JSX.Element => {
    const CONVERTER_LABEL = 'Currency converter'
    const HISTORY_LABEL = 'Historical rates'

    const handleTabChange = (event: SyntheticEvent<Element, Event>, newValue: number) => {
        event.preventDefault()
        setSelected(newValue)
    }

    return (
        <AppBar position="static">
            <DashboardHeaderTabs
                value={selected}
                onChange={handleTabChange}
                sx={{
                    '& button': { color: 'white' },
                    '& button.Mui-selected': {
                        backgroundColor: 'white',
                        color: 'primary',
                    },
                }}
            >
                <DashboardHeaderTab label={CONVERTER_LABEL} />
                <DashboardHeaderTab label={HISTORY_LABEL} />
            </DashboardHeaderTabs>
        </AppBar>
    )
}
