import React from 'react';
import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts'

const SparkLine = ({ id, type, currentColor, data, width, height, color}) => {
  return (
    <SparklineComponent 
    id={id}
    height={height}
    width={width}
    currentColor={currentColor}
    dataSource={data}
    xName="x"
    yName='y'
    border={{ color: currentColor, width: 2}}
    lineWidth={1}
    fill={color}
    valueType="Numeric"
    type={type}
    >
      <Inject services={[SparklineTooltip]} />
    </SparklineComponent>
  )
}

export default SparkLine