 


const stringName="this is test one";
const date= new Date(); //obect created of type Date 
//which will be later used to access the Date methods
//by calling its object date
const currYear=date.getFullYear();
const currMonth=date.getMonth();
const currDay=date.getDay();


function CardComponent(props)
{
  const {textHeading, desc}=props;
  
 

  return  <div className="card">
  <h2 className="cardheading">{textHeading}</h2>
  <p className="descrip">how is going o : {desc} </p>
  <p className="cardFooter">here will print current year : {currDay +"-"+currMonth +"-"+currYear}</p>
   </div>
  
}

export default CardComponent;