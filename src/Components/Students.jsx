import { useContext } from "react"
import StoreData from "./Store"
import { Link, useNavigate } from "react-router-dom"


const Students = () => {
    const contextData = useContext(StoreData)
    console.log(contextData)
     const navi = useNavigate()


  return (
    <>
    <div className="Stu_Contanier">
      <h1>Student Data</h1>
      <button onClick={()=>navi("/AddNewStudent")}>Add New Student</button>
    </div>
    <table className="table">
      <thead>
        <tr>
          <td>Name</td>
          <td>age</td>
          <td>Course</td>
          <td>Batch</td>
          <td>Edit</td>
        </tr>
      </thead>
      <tbody>
        {
          contextData.stuName.map((item,index)=>{
            return(
              <tr key={index}>
                <td>{item.Name}</td>
                <td>{item.Age}</td>
                <td>{item.Course}</td>
                <td>{item.Batch}</td>
                <td><Link to={"/EditStudent"} state = {{data : index}}>Edit</Link></td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
    </>
  )
}

export default Students
