// @flow
import React from 'react';
import { css as emotionCSS } from 'emotion';
import type { CommonProps } from '../types';

type State = {
  /** Whether this is disabled. */
  isDisabled: boolean,
};
type ValueProps = {
  /** The children to be rendered. */
  children: string,
  /* The data of the selected option rendered in the Single Value component. */
  data: any,
  /** Props passed to the wrapping element for the group. */
  innerProps: any,
};
export type SingleValueProps = CommonProps & ValueProps & State;

export const css = ({ isDisabled, theme: { spacing, colors } }: SingleValueProps) => ({
  color: isDisabled ? colors.neutral40 : colors.neutral80,
  marginLeft: spacing.baseUnit / 2,
  marginRight: spacing.baseUnit / 2,
  maxWidth: `calc(100% - ${spacing.baseUnit * 2}px)`,
  overflow: 'hidden',
  position: 'absolute',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  top: '50%',
  transform: 'translateY(-50%)',
  width: '100%'
});

const SingleValue = (props: SingleValueProps) => {
  const { children, className, cx, getStyles, isDisabled, innerProps } = props;
  console.log("mica",props)
  return (
    <div
      className={cx(
        emotionCSS(getStyles('singleValue', props)),
        {
          'single-value': true,
          'single-value--is-disabled': isDisabled
        },
        className
      )}
      {...innerProps}
    >



{selectRenderer(props.data)}

    
    </div>
  );
};
const menuHeaderCol1Style = {
  width: '5em',

};
const currencyStyle = {
   float:'left'

};
export const selectRenderer = (data) => {console.log("lolo",data); return (


    <div style={menuHeaderCol1Style}>{data.label}</div>

)}

export default SingleValue;
