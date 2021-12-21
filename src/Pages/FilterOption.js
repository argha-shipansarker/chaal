import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux'

const FilterOption = (props) => {
    const [startingDate, setStartingDate] = useState("")
    const [endingDate, setEndingDate] = useState("")

    let test = []

    // const {value} = props

    const {allUserInfo} = useSelector(state => state.userData)

    useEffect(() => {
        console.log(allUserInfo)
    }, [allUserInfo])

    const handleGenerate = () => {

        allUserInfo.map(user => {
            
            let dateToIdArray = Object.entries(user.calendar.dateToDayId)

            let individualPersonDateId = []

            let mealNumber = 0

            dateToIdArray.map(([key, value]) => {
                if(Date.parse(key) >= Date.parse(startingDate) && Date.parse(key) <= Date.parse(endingDate)){
                    individualPersonDateId = [...individualPersonDateId, value]
                }
            })

            // test = [...test, {[user.profile.name] : individualPersonDateId}]

            let mealIdToDayIdArray = Object.entries(user.calendar.mealIdToDayId)

            mealIdToDayIdArray.map(([key, value]) => {
                let isPresent = individualPersonDateId.includes(value)
                if(isPresent){
                    mealNumber = mealNumber+1
                }
            })

            test = [...test, {[user.profile.name] : mealNumber}]

        })

        
        console.log(test)

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
                    <hr className='mt-1'/>

                    <div className='px-2'>
                    <div className='grid grid-cols-12 mt-2'>
                        <div className='col-span-2'>
                            <p>From</p>
                        </div>
                        <div className='col-span-10'>
                            <input type="date" value={startingDate} onChange={(e) => setStartingDate(e.target.value)} className='border-2 border-primaryColor ml-4'/>
                        </div>
                        
                    </div>

                    <div className='grid grid-cols-12 mt-2'>
                        <div className='col-span-2'>
                            <p>To</p>
                        </div>
                        <div className='col-span-10'>
                            <input type="date" value={endingDate} onChange={(e) => setEndingDate(e.target.value)} className='border-2 border-primaryColor ml-4'/>
                        </div>
                        
                    </div>
                    </div>

                    <p className='font-bold text-base text-primaryColor mt-4'>Status</p>
                    <hr className='mt-1'/>

                    <input type="radio" id="status" name="status" value="Active" />
                    <label for="status">Active</label>

                    <br/>

                    <input type="radio" id="status" name="status" value="SuperAcive" />
                    <label for="status">Super Acive</label>



                </div>
                <button onClick={handleGenerate}>Submit</button>
            </div>
        </div>
    )
}

export default FilterOption
