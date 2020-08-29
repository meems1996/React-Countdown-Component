# React Countdown Component
### (In development)

A ReactJS Countdown Component, resizable to the width of its parent element.

## Usage
```js
import React from 'react';
import Countdown from 'react-countdown-component';

const Component = () => {
    return(
        <div>
            <Countdown 
                targetDate="August 20 2022 23:30:00" 
                inactiveMessage="Countdown over" 
            />
        </div>
    )
}

export default Component;
```