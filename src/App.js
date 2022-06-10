import React from 'react';
import CardComponent from './components/Card';
import DATA from './data.json';

function App()
{
   
//     instead of for loop we will use map
// for(let x=0;x<DATA.length;x++){
//     items.push(<CardComponent textHeading={DATA[x].title} desc={DATA[x].desc} />)
// }




    return <>

   
    <h1 className="headingStyle">How are you</h1>
    {DATA.map((item, index)=> <CardComponent key={index} textHeading={item.title} desc={item.desc} />
)}

    {/* we will use for loop better instaed */}
    {/* <CardComponent textHeading={DATA[0].title} desc={DATA[0].desc} />
    <CardComponent textHeading={DATA[1].title} desc={DATA[1].desc} />
 */}
    </>
}

export default App;