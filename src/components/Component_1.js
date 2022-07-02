import React from 'react'




//we know how to send through props
//here we just destructured user=props.user


// Component_1->Component_2->Component_3->Component_4
// componet 1 theke 4 a data pass korte hole sobgula hoye jete
//hoy ,but useContext hook use korle 2 and 3 use korte hobe na
//directly access kora jabe from parent to any child

const Component_1 = () => {


 
return (
    //pass value as object thats why double {}
    //after passing or wrapping it here we can access this value on 
    //each of dependent child directly
    <>
    <div>
    <h1>Welcome to my travelling vlog</h1>
    <div className='block'>
    <h3 className='header'>My sajek tour during summer</h3>
        <small>Author :<span class ="author">mahmudul Hasan</span> </small>
        <p>Sajek valley located at rangmati can amaze you with her cloudy beauty. Find all the detail information about sajek valley tour & cheapest sajek tour.
        Sajek valley located at rangmati can amaze you with her cloudy beauty. Find all the detail information about sajek valley tour & cheapest sajek tour.
        Sajek valley located at rangmati can amaze you with her cloudy beauty. Find all the detail information about sajek valley tour & cheapest sajek tour.
        Sajek valley located at rangmati can amaze you with her cloudy beauty. Find all the detail information about sajek valley tour & cheapest sajek tour.</p>
    </div>
    </div>

    <div>
    <div className='block'>
    <h3 className='header'>My coxbazar tour during summer</h3>
        <small>Author :<span class ="author">Atik Hasan</span> </small>
        <p>Sajek valley located at rangmati can amaze you with her cloudy beauty. Find all the detail information about sajek valley tour & cheapest sajek tour.
        Sajek valley located at rangmati can amaze you with her cloudy beauty. Find all the detail information about sajek valley tour & cheapest sajek tour.
        Sajek valley located at rangmati can amaze you with her cloudy beauty. Find all the detail information about sajek valley tour & cheapest sajek tour.
        Sajek valley located at rangmati can amaze you with her cloudy beauty. Find all the detail information about sajek valley tour & cheapest sajek tour.</p>
    </div>
    </div>

    </>


  )
}

export default Component_1
