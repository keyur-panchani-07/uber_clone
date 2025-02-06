import React from 'react'

const LocationSearchPanel = (props) => {

  console.log(props )

  const location=[
    "24B, Near Kapoor's cafe, Vesu, Surat",
    "24B, Near Malhotra's cafe, Vesu, Surat",
    "24B, Near Boom's cafe, Vesu, Surat",
    "24B, Near Rajdarbar's cafe, Vesu, Surat",
  ]

  return (
    <div>
      {
        location.map(function(elem,idx){
          return <div key={idx} onClick={()=>{
            props.setVehiclePanel(true)
            props.setPanelOpen(false)
          }} className='flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl my-3 items-center justify-start'>
          <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full'><i class="ri-map-pin-fill"></i></h2>
          <h4 className='font-medium'>{elem}</h4>
        </div>
        })
      }
    </div>
  )
}

export default LocationSearchPanel
