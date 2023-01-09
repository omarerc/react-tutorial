import React from 'react'

const TableHeader = () => {
  return(
    <thead>
      <tr>
        <th scope='col'>#</th>
        <th scope='col'>Name</th>
        <th scope='col'>Job</th>
        <th scope='col'></th>
      </tr>
    </thead>
  )
}

const TableBody = (props) => {
  const rows = props.characterData.map((row, index) => {
    return(
      <tr key={index}>
        <td>{index}</td>
        <td>{row.name}</td>
        <td>{row.job}</td>
        <td>
          <button 
              type="button"
              className="btn btn-outline-danger"
              onClick={() => props.removeCharacter(index)}>
            Delete
          </button>
        </td>
      </tr>
    )
  })

  return(
    <tbody>{rows}</tbody>
  )
}

const Table = (props) => {
  const { characterData, removeCharacter } = props;

  return(
    <div className='container'>
      <table className='table table-striped table-dark table-hover'>
        <TableHeader/>
        <TableBody characterData={characterData} removeCharacter={removeCharacter} />
      </table>
    </div>
  )

}

export default Table;