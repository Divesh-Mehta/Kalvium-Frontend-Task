import {MdOutlineDoneOutline} from 'react-icons/md'

const Success = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-[#C4EFDD] bg-[url(../src/assets/background.svg)] bg-no-repeat h-[100vh] bg-bottom bg-contain">

           <div className='-mt-32 flex flex-col justify-center items-center gap-2 w-[25vw] py-10 bg-blue-500 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-gray-100"'>
                <MdOutlineDoneOutline className='text-6xl text-green-600'/>
                <label className='text-lg font-bold'>Marked Successfuly</label>
            </div> 

    </div>
  )
}

export default Success