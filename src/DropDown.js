import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FilledInput from '@material-ui/core/FilledInput';
const DropDown =({open,handleClose,handleOpen,selectedValue='tubingPressure',handleChange,options=['tubingPressure']})=>{
    return (
        <form autoComplete="off">
            <FormControl style={{minWidth:"120px",margin: "40px 0px 40px 200px" }} >
            <InputLabel  htmlFor="filled-age-simple">Select Metric</InputLabel>
                <Select
                    input={<FilledInput name="age" id="filled-age-simple" />}
                    open={open}
                    autoWidth={true}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    value={selectedValue}
                    onChange={handleChange}
                    inputProps={{
                        name: 'Select',
                        id: 'demo-controlled-open-select',
                    }}
                >
                    {options.map((value)=><MenuItem value={value}>{value}</MenuItem>)}

                </Select>
            </FormControl>
        </form>
    );
}

export default DropDown;