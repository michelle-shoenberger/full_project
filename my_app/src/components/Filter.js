

const Filter = (props) => {
  // handleChange, placeholder

  return (
    <div className="text-center accent p-2 border border-dark">
      <input type="text" placeholder={props.placeholder} onChange={props.handleChange} />
    </div>
  )
}

export default Filter;