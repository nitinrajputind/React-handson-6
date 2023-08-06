import { useContext } from "react"
import StoreData from "./Store"
import { useNavigate } from "react-router-dom"


const AddNewStudent = () => {

  const ContextData = useContext(StoreData)
  console.log(ContextData)

  const navi = useNavigate()

  const newStu = {
    Name : "",
    Age : "",
    Course : "",
    Batch : ""
  }


  const handleChange = (e)=>{
    console.log("onchange")
    newStu[e.target.name] = e.target.value;

  }

  const handleClick =()=>{

    console.log("Hello")
    ContextData.stuName.push(newStu)
    navi("/Students")
  }
  return (
    <div className="form">
     <h1 className="heading">Add New Student</h1>

     <form action="" className="form">

      <div className="Form_Contanier">
        <div className="Form_item">
          <label htmlFor="name">Name :</label>
          <input type="text" id="name" name="Name" placeholder="Enter Your Name" onChange={handleChange}/>
          </div>
          
          <div className="Form_item">
            <label htmlFor="age">Age :</label>
            <input type="text" id="age" name="Age" placeholder="Enter Your Name" onChange={handleChange}/>
            </div>
      </div>

      <div className="Form_Contanier">
        <div className="Form_item">
          <label htmlFor="course">Course :</label>
          <input type="text" id="course" name="Course" placeholder="Enter Your Name" onChange={handleChange}/>
        </div>
        
        <div className="Form_item">
          <label htmlFor="batch">Batch :</label>
          <input type="text" id="batch" name="Batch" placeholder="Enter Your Name" onChange={handleChange}/>
          </div>
      </div>

      <div className="btn">
        <button type="button" onClick={handleClick}>submit</button>
        <button type="button" onClick={()=>navi("/students")}>Cancel</button>
      </div>
      
     </form>
    </div>
  )
}

export default AddNewStudent

