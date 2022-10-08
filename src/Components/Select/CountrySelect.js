import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
/** @jsxRuntime classic /
 /* @jsx jsx */
 /** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';
import * as colors from '../../Constants/Colors/Colors';
import {Countries} from '../../Constants/CountryList/Countries';


const formControlFrame = css`
  position: relative;
  width: 46%;
  margin-bottom: 45px;
  @media (max-width: 768px) {
    width: 100%
  }
`

const autoCompleteStyle = (error) =>  css`
  position: relative;
  width: 104%;
  height: 41px;
  .css-1q60rmi-MuiAutocomplete-endAdornment {
    position: absolute;
    right: 0;
  }
  button{
    padding: 2px !important;
  }
  & .MuiOutlinedInput-notchedOutline {
    border-width: 1px;
    border-color: ${error? colors.redMaterial: colors.inputBorderBottom} !important;
    height: 50px;
    border-radius: 3px !important;
  },
    &:hover .MuiOutlinedInput-notchedOutline {
      border-width: 1px;
      border-color: ${colors.inputBorderBottom} !important;
      height: 50px;
      border-radius: 3px !important;
    },
    &.Mui-focused .MuiOutlinedInput-notchedOutline {
      border-width: 1px;
      border-color: ${colors.inputBorderBottom} !important;
      height: 50px;
      border-radius: 3px !important;
    }
  
  @media (max-width: 768px) {
    width: 100%
  }`

const menuItem = css `
  color: ${colors.inputTextColor};
  font-size: 18px;`

const inputLabelStyle = (error) => css `
  position: absolute;
  color: ${error ? colors.redMaterial: colors.inputTextColor};
  font-size: 12px;
  top: -18px;
  font-weight: 900;`
const requiredSign = (error) =>  css `
  margin-left: 3px;
  font-size: 15px;
  color: ${error ? colors.redMaterial: colors.inputTextColor};
  position: relative;
  top: 2px;`

const errorText = css `
  position: absolute;
  color: ${colors.redMaterial};
  font-size: 11px;
  font-weight: 900;
  top: 48px;`


const CountrySelect = ({ label, required, onChangeCountry, error }) => {

    const onTagsChange = (event, values) => {
        onChangeCountry(values.label)
    }
    return(
        <div css={formControlFrame}>
          <label css={inputLabelStyle(error)} htmlFor={`${label}ID`}>{label}
            {
                required?
                    <span css={requiredSign(error)}>*</span>: null
            } :</label>
          <Autocomplete
            css={autoCompleteStyle(error)}
            options={Countries}
            autoHighlight
            onChange={onTagsChange}
            getOptionLabel={(option) => option.label}
            renderOption={(props, option) => (
              <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props} css={menuItem}>
                <img
                  loading="lazy"
                  width="20"
                  src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                  srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                  alt=""
                />
                {option.label} ({option.code}) +{option.phone}
              </Box>
            )}
            renderInput={(params) => (
              <TextField
                placeholder='Country Name...'
                {...params}
                inputProps={{
                  ...params.inputProps,
                  autoComplete: 'new-password', // disable autocomplete and autofill
                }}
              />
            )}
          />
          {
              error !== ''? <span css={errorText}>{error}</span>: null
          }
        </div>
    )
}

export default CountrySelect;




