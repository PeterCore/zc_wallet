import React, {useEffect, useState} from 'react';

import {Button, Item, Props, StyledShadowView} from './styles';

const Tag = (prop: Props) => {
  return (
    <Button
      onPress={() => {
        if (prop.enable !== true) {
          return;
        }
        if (prop.onClick) {
          console.log(prop.title);
          prop.onClick(prop.title ? prop.title : '');
        }
      }}
    >
      <StyledShadowView>
        <Item enable={prop.enable}>{`${prop.title}`}</Item>
      </StyledShadowView>
    </Button>
  );
};
export default Tag;
