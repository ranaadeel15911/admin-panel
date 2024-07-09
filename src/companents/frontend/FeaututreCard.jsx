import React from 'react'

const FeaututreCard = ({icons,title,des}) => {

  return (
    <div className='flex gap-2 bg-gray-100 px-4 py-2 py-'>
        {icons}
        <div>
            <h2 className='font-medium text-xl'>{title}</h2>
            <p className='text-gray-600'>{des}</p>
        </div>
    </div>
  )
}

export default FeaututreCard