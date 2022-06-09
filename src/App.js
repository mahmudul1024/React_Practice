import React from 'react';
import CardComponent from './components/Card';

function App()
{
    return <>
    <h1 className="headingStyle">How are you</h1>;
    <CardComponent textHeading="this is first heading" desc="This is desc_1"/>
    <CardComponent textHeading="this is second heading" desc="This is desc_2" />

    </>
}

export default App;