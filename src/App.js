import React from 'react';
import CardComponent from './components/Card';
import DATA from './data.json';

function App()
{
    let items=[];
for(let x=0;x<DATA.length;x++){
    items.push(<CardComponent textHeading={DATA[x].title} desc={DATA[x].desc} />)
}



    return <>

   
    <h1 className="headingStyle">How are you</h1>
    {items}

    {/* we will use for loop better instaed */}
    {/* <CardComponent textHeading={DATA[0].title} desc={DATA[0].desc} />
    <CardComponent textHeading={DATA[1].title} desc={DATA[1].desc} />
 */}
    </>
}

export default App;