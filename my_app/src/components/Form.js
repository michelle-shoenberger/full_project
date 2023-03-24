import { Form } from "react-bootstrap"


const MyForm = (props) => {
  // pass in an object to create form, with instance to prefill
  // fields - object with type and placeholder
  // followon function
  // works for input and textarea
  const createForm = () => {
    let formFields = []
    for (let field in props.model){
      if (props.model[field] === 'textarea') {
        formFields.push(<textarea name={field} placeholder={field}></textarea>)
      } else {
        formFields.push(<input type={props.model[field]} name={field} placeholder={field} />)
      }
    }
    formFields.push( <button type="submit" className="btn btn-primary">Submit</button>)
    return formFields
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formData = new FormData(e.target)
    props.followOn(formData, props.endpoint)
  };

  return (
    <Form className="d-flex flex-column align-items-center" onSubmit={handleSubmit}>
        {createForm()}
    </Form>
  )
}

export default MyForm;

