import React from 'react'
import { FlyingWidgetBox, FlyingWidgetItem1, FlyingWidgetItem2, FlyingWidgetItem3, FlyingWidgetItem4, FlyingWidgetItem4Box } from '../styles/NavbarStyles'

export const FlyingWidget = () => {
  return (
    <FlyingWidgetBox>
        <FlyingWidgetItem1/>
        <FlyingWidgetItem2/>
        <FlyingWidgetItem3/>
        <FlyingWidgetItem4Box>
          <FlyingWidgetItem4/>
        </FlyingWidgetItem4Box>
    </FlyingWidgetBox>
  )
}
