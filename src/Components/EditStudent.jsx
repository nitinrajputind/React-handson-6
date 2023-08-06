import { useContext } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import StoreData from "./Store"


const EditStudent = () => {
  const navi = useNavigate()
  const ContextData = useContext(StoreData)
  console.log(ContextData)

  const IndexValue = useLocation().state.data
  console.log(IndexValue)

  const updateObject = {
    Name : ContextData.stuName[IndexValue].Name,
    Age : ContextData.stuName[IndexValue].Age,
    Course : ContextData.stuName[IndexValue].Course,
    Batch : ContextData.stuName[IndexValue].Batch
  }

  const handleChange=(e)=>{
    updateObject[e.target.name] = e.target.value
  }

  const handleClick =()=>{
    ContextData.stuName[IndexValue] = updateObject;
    navi("/students")
  }

  return (
    <div className="form">
      <h1 className="heading">Edit New student</h1>
      <form action="" className="form">
      <div className="Form_Contanier">
      <div className="Form_item">
      <label htmlFor="">Name</label>
      <input type="text" id="name" name="Name" placeholder={ContextData.stuName[IndexValue].Name} onChange={handleChange}/>
      </div>

      <div className="Form_item">
      <label htmlFor="">Age</label>
      <input type="text" id="age" name="Age" placeholder={ContextData.stuName[IndexValue].Age} onChange={handleChange}/>
      </div>

      </div>

      <div className="Form_Contanier">
      <div className="Form_item">
      <label htmlFor="">Course</label>
      <input type="text" id="course" name="Course" placeholder={ContextData.stuName[IndexValue].Course} onChange={handleChange}/>
      </div>

      <div className="Form_item">
      <label htmlFor="">Batch</label>
      <input type="text" id="batch" name="Batch" placeholder={ContextData.stuName[IndexValue].Batch} onChange={handleChange}/>
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

export default EditStudent
