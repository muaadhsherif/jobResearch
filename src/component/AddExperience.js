import React, { useState, useRef } from 'react'
import fieldsData from '../data/fieldsData'
import postionsData from '../data/postionsData'

const AddExperience = () => {
	// ----------------- Hooks --------------------
	const [ experiences, setExperiences ] = useState([])
	const companyContainer = useRef(null)
	const startDate = useRef(null)
	const endDate = useRef(null)
	const postion = useRef(null)
	const workingField = useRef(null)
	// -----------------Handels -------------------
	const handleSubmit = (e) => {
		e.preventDefault()

		// New experience inputs values
		const newCompany = companyContainer.current.value
		const newStartDate = startDate.current.value
		const newEndDate = endDate.current.value
		const newPostion = postion.current.value
		const newWorkingField = workingField.current.value

		const newExprence = [
			...experiences,
			{
				companyName: newCompany,
				startDate: newStartDate,
				endDate: newEndDate,
				postion: newPostion,
				workingField: newWorkingField
			}
		]
		setExperiences(() => newExprence)
		console.log(experiences)
	}
	return (
		<div className='col-xs-5 center-block'>
			<h1>Add Experience</h1>
			<form className='form' onSubmit={handleSubmit}>
				<div className='mb-3'>
					<label htmlFor='companyName'>Company name : </label>
					<input id='companyName' ref={companyContainer} className='form-control' type='text' />
				</div>

				<div className='mb-3'>
					<label className='form-label' htmlFor='startDate'>
						Start date :
					</label>
					<input type='date' ref={startDate} id='startDate' className='form-control' />
				</div>

				<div className='mb-3'>
					<label className='form-label' htmlFor='endDate'>
						End date :
					</label>
					<input type='date' ref={endDate} id='endDate' className='form-control' />
				</div>

				<div className='mb-3'>
					<label className='form-label'>Working Fields :</label>
					<select className='form-select' ref={workingField}>
						<option defaultValue> Fields</option>
						{fieldsData.map((field, index) => {
							return (
								<option key={index} value={field}>
									{field}
								</option>
							)
						})}
						<option value='3'>Three</option>
					</select>
				</div>

				<div className='mb-3'>
					<label className='form-label'>Postion :</label>
					<select className='form-select' ref={postion}>
						<option defaultValue> Postions</option>
						{postionsData.map((postion, index) => {
							return (
								<option key={index} value={postion}>
									{postion}
								</option>
							)
						})}
					</select>
				</div>

				<button type='submit' className='btn btn-primary'>
					Add Experience
				</button>
			</form>
		</div>
	)
}

export default AddExperience
