import React,{Component} from 'react';
import Table from 'react-bootstrap/Table'
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';


const DynamicTable=(props)=>{
console.log(props);

 const renderTableHeader=()=>{
    let headers= Object.keys(props.mentors[0]);
    return headers.map((key,index)=>{
      return <th key={index}>{key.toUpperCase()}</th>
    })
  }

  

  const renderTableData=()=>{
    return props.mentors.map((mentor,index)=>{
      const {_id,email,name,subjects,education,experience,company,designation}=mentor;
      return (
        <tr key={_id}  onClick={()=>{props.click(mentor)}}>
          <td>{subjects.join(',')}</td>
          <td>{_id}</td>
          <td>{email}</td>
          <td>{name}</td>
          <td>{experience}</td>
          <td>{education}</td>
          <td>{company}</td>
          <td>{designation}</td>
        <td onClick={($event)=>{props.delete($event,mentor)}}>{<DeleteOutlineOutlinedIcon/>}</td>
        </tr>
      )

    })
   
  }
    return (
  <Table responsive="sm" striped bordered hover variant="dark">
  <thead>
    <tr>
      {renderTableHeader()}
    </tr>
  </thead>
  <tbody>
   {renderTableData()}
  </tbody>
</Table>
    )
}

export default DynamicTable;