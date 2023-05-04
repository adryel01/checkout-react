import './style.css'

export function FormInput({ label , id, type, placeholder, value}: any) {
	
	return (
		<div className='DivForm'>
			<label htmlFor={id}>{label}</label>
			<input id={id} type={type} placeholder={placeholder} value={value} required/>
			{/* {error ? <p className="ErrorInput">{error}</p> : null} */}
		</div>
	)

}