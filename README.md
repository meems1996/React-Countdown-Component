# React Countdown Component
### (In development)

A ReactJS Countdown Component, resizable to the width of its parent element.

## Usage

Clone this repository 

Or install from npm : `npm install react-countdown-component`

```js
import React from 'react';
import CountdownContainer from 'react-countdown-component';

const Component = () => {
    return(
        <div>
            <CountdownContainer 
                targetDate="August 20 2022 23:30:00" 
                inactiveMessage="Countdown over" 
            />
        </div>
    )
}

export default Component;
```