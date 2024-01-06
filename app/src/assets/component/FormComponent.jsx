import { useState } from 'react'

function FormComponent() {
  const [formData, setFormData] = useState({
    usuario: "",
    correo: "",
    password: "",
    recordar: "true"
  })

  const [lista, setLista] = useState([{
    usuario: "Cecilia Perdomo",
    correo: "cecilia.perdomo@gmail.com",
    password: "1234",
    recordar: "true"
  }])

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === 'checkbox' ? checked : value;

    console.log(name, value, type, checked)
    console.log(inputValue)

    setFormData({
      ...formData,
      [name]: inputValue,
    });

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLista([...lista, formData])
  };

  const eliminar = (id) => {
    let aux = []

    aux = lista.filter((item, index) => {
      if (index !== id) {
        return item
      }
    })

    setLista(aux)
  }

  return (
    <div>
      <h1>Personal</h1>

      <form className="border border-1" style={{ padding: "20px" }}>
        <div className="row">

          {/* Nombre de usuario */}
          <div className="col mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Nombre de usuario</label>
            <input type="text"
              className="form-control"
              id="exampleInputEmail1" aria-describedby="emailHelp"
              name="usuario" value={formData.usuario} onChange={handleInputChange} />
          </div>

          {/* Correo electronico */}
          <div className="col mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Correo electrónico</label>
            <input type="email" className="form-control" id="exampleInputEmail" aria-describedby="emailHelp"
              name="correo" value={formData.correo} onChange={handleInputChange} />
          </div>

          {/* Password */}
          <div className="col mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
            <input type="password" className="form-control" id="exampleInputPassword1"
              name="password" value={formData.password} onChange={handleInputChange} />
          </div>

          {/* Recordar */}
          <div className="col-1 mb-3 form-check" style={{ marginTop: "40px" }}>
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1"
              name="recordar" value={formData.recordar} onChange={handleInputChange}>Recordar</label>
          </div>
        </div>

        <br />
        {/* Boton para guardar */}
        <div className="row">
          <div className="col">
            <button type="submit" className="btn btn-outline-success float-end" onClick={handleSubmit}>Agregar nuevo empelado</button>
          </div>
        </div>
      </form>

      <br />
      <br />
      <div>
        <table className="table border border-1">
          <thead>
            <tr>
              <th className='col'>Id</th>
              <th className='col'>Usuario</th>
              <th className='col'>Correo</th>
              <th className='col'>Contraseña</th>
              <th className='col'>Recordar</th>
              <th className='col'></th>
            </tr>
          </thead>

          <tbody>
            {lista.map((item, id) => (
              <tr key={id}>
                <td className='align-middle'>{id}</td>
                <td className='align-middle'>{item.usuario}</td>
                <td className='align-middle'>{item.correo}</td>
                <td className='align-middle'>{item.password}</td>
                <td className='align-middle'>{item.recordar}</td>
                <td className='align-middle'><i className='fa fa-trash btn btn-outline-danger' onClick={() => eliminar(id)}></i></td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>
    </div>
  )
}

export default FormComponent