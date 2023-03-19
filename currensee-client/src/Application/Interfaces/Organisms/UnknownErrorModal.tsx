import React from 'react'

import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material'

type Props = {
    open: boolean
    onClose: () => void
}

export const UnknownErrorModal = ({ open, onClose }: Props): JSX.Element => {
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>An error has occurred</DialogTitle>
            <DialogContent>
                <Typography variant="body1">Sorry, an unknown error has occurred. Please try again later.</Typography>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Close</Button>
            </DialogActions>
        </Dialog>
    )
}
