import React, { useState, useRef, useEffect } from 'react'
import fieldsData from '../data/fieldsData'
import positionsData from '../data/positionsData'

const AddExperience = () => {
	// ----------------- Hooks --------------------
	const [ experiences, setExperiences ] = useState([])
	const companyContainer = useRef(null)
	const startDate = useRef(null)
	const endDate = useRef(null)
	const position = useRef(null)
	const workingField = useRef(null)
	// -----------------Handles -------------------
	const handleSubmit = (e) => {
		e.preventDefault()

		// New experience inputs values
		const newCompany = companyContainer.current.value
		const newStartDate = startDate.current.value
		const newEndDate = endDate.current.value
		const newPosition = position.current.value
		const newWorkingField = workingField.current.value

		const newExperience = [
			...experiences,
			{
				companyName: newCompany,
				startDate: newStartDate,
				endDate: newEndDate,
				position: newPosition,
				workingField: newWorkingField
			}
		]
		setExperiences(() => newExperience)
	}

	useEffect(() => {
		if (experiences.length) console.log('experiences')
	})

	return (
		<div className='col-xs-5 center-block'>
			<h1>Add Experience</h1>
			<form className='form' onSubmit={handleSubmit}>
				<div className='mb-3'>
					<label htmlFor='companyName'>Company Name : </label>
					<input type='text' required ref={companyContainer} id='companyName' className='form-control' />
				</div>

				<div className='mb-3'>
					<label className='form-label' htmlFor='startDate'>
						Start Date :
					</label>
					<input type='date' required ref={startDate} id='startDate' className='form-control' />
				</div>

				<div className='mb-3'>
					<label className='form-label' htmlFor='endDate'>
						End Date :
					</label>
					<input type='date' required ref={endDate} id='endDate' className='form-control' />
				</div>

				<div className='mb-3'>
					<label className='form-label'>Working Fields :</label>
					<select required ref={workingField} defaultValue='' className='form-select'>
						<option value=''> Fields</option>
						{fieldsData.map((field, index) => {
							return (
								<option key={index} value={field}>
									{field}
								</option>
							)
						})}
					</select>
				</div>

				<div className='mb-3'>
					<label className='form-label'>Position :</label>
					<select required ref={position} defaultValue='' className='form-select'>
						<option value=''> Positions</option>
						{positionsData.map((position, index) => {
							return (
								<option key={index} value={position}>
									{position}
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
