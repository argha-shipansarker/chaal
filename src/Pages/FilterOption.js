import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

const FilterOption = (props) => {
    const [startingDate, setStartingDate] = useState("")
    const [endingDate, setEndingDate] = useState("")
    const [type, setType] = useState(null)

    let test = []

    // const {value} = props

    const { allUserInfo } = useSelector(state => state.userData)

    // useEffect(() => {
    //     console.log(allUserInfo)
    // }, [allUserInfo])

    const handleGenerate = () => {

        allUserInfo.map(user => {

            let dateToIdArray = Object.entries(user.calendar.dateToDayId)

            let individualPersonDateId = []

            let mealNumber = 0

            dateToIdArray.map(([key, value]) => {
                if (Date.parse(key) >= Date.parse(startingDate) && Date.parse(key) <= Date.parse(endingDate)) {
                    individualPersonDateId = [...individualPersonDateId, value]
                }
            })

            // test = [...test, {[user.profile.name] : individualPersonDateId}]

            let mealIdToDayIdArray = Object.entries(user.calendar.mealIdToDayId)

            mealIdToDayIdArray.map(([key, value]) => {
                let isPresent = individualPersonDateId.includes(value)
                if (isPresent) {
                    mealNumber = mealNumber + 1
                }
            })

            test = [...test, { [user.profile.name]: mealNumber }]

        })




        console.log(test)

    }

    // useEffect(() => {
    //     console.log(type)
    // }, [type])

    const handleSettingType = (e) => {
        setType(e.target.value)
    }

    return (
        <div>
            <div className='h-16 bg-primaryColor shadow-lg'>

            </div>

            <div className='container mx-auto px-4'>
                <p className='text-center text-primaryColor text-lg font-bold mt-6'>User Analyzer</p>
                <p className='text-center text-xs font-bold text-mutedText mt-1'>Select filters to generate report</p>

                <div className='border-1 border-primaryColor mt-10 px-4 pt-2'>
                    <p className='font-bold text-base text-primaryColor'>Date</p>
                    <hr className='mt-1' />

                    <div className='px-2'>
                        <div className='grid grid-cols-12 mt-2'>
                            <div className='col-span-2'>
                                <p>From</p>
                            </div>
                            <div className='col-span-10'>
                                <input type="date" value={startingDate} onChange={(e) => setStartingDate(e.target.value)} className='border-2 border-primaryColor ml-4' />
                            </div>

                        </div>

                        <div className='grid grid-cols-12 mt-2'>
                            <div className='col-span-2'>
                                <p>To</p>
                            </div>
                            <div className='col-span-10'>
                                <input type="date" value={endingDate} onChange={(e) => setEndingDate(e.target.value)} className='border-2 border-primaryColor ml-4' />
                            </div>

                        </div>
                    </div>

                    <p className='font-bold text-base text-primaryColor mt-4'>Status</p>
                    <hr className='mt-1' />

                    <div className='mt-2 mb-1'>
                        <input type="radio" id="active" name="status" value="Active" className='mr-2' onChange={e => handleSettingType(e)} />
                        <label htmlFor='active'>Active</label>
                    </div>


                    <div className='mb-1'>
                        <input type="radio" id="super-active" name="status" value="SuperActive" className='mr-2' onChange={e => handleSettingType(e)} />
                        <label htmlFor="super-active">Super Active</label>
                    </div>


                    <div className='mb-1'>
                        <input type="radio" id="bored" name="status" value="Bored" className='mr-2' onChange={e => handleSettingType(e)} />
                        <label htmlFor="bored">Bored</label>
                    </div>

                    <div className='flex justify-center mt-4 mb-4'>
                        <button onClick={handleGenerate} className='border-1 px-2 py-1 bg-primaryColor text-white rounded'>Generate</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default FilterOption
