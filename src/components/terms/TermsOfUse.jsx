import * as React from 'react';
import {useDispatch, useSelector} from "react-redux";
import Button from '@mui/material/Button';

import {Box, Checkbox, FormControlLabel, FormGroup, Modal, Stack, Typography} from "@mui/material";
import TermsOfUseBody from "./TermsOfUseBody";
import {agree} from "../../redux/slices/termsOfUseSlice";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    maxHeight: '80%',
    overflow: 'auto',
    p: 4,
}

export function TermsOfUse() {
    const isAgreed = useSelector((state) => state.termsOfUse.agreed)
    const dispatch = useDispatch()

    const [open, setOpen] = React.useState(!isAgreed)
    const [checked, setChecked] = React.useState(false)

    const handleClose = () => {
        if (isAgreed) {
            setOpen(false);
        }
    }
    const handleCheck = (event) => {
        setChecked(event.target.checked);
    };
    const handleClick = () => {
        setOpen(false);
        if (checked) {
            dispatch(agree())
        }
    }


    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <TermsOfUseBody/>
                    <Stack spacing={2}>
                        <FormGroup>
                            <FormControlLabel required checked={checked} onChange={handleCheck} control={<Checkbox/>}
                                              label="Прочитано"/>
                        </FormGroup>
                        <Button disabled={!checked} onClick={handleClick} style={{justifyContent: "left"}}>Соглашаюсь</Button>
                    </Stack>
                </Box>
            </Modal>
        </div>
    )
}
