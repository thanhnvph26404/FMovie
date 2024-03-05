import React from 'react'
import { MdAdd, MdOutlineRemove } from 'react-icons/md'

type Props = {}

const Combo = (props: Props) => {
  const combo = [
    {
        imgCombo:"https://files.betacorp.vn/files/media/images/2023/06/15/sweet-combo-154545-150623-48.png",
        nameCombo:"Sweet Combo 69oz",
        descriptionCombo:"TIẾT KIỆM 46K!!! Gồm: 1 Bắp (69oz) + 2 Nước có gaz (22oz)",

    },
    {
        imgCombo:"https://files.betacorp.vn/files/media/images/2023/06/15/family-combo-154315-150623-37.png",
        nameCombo:"Family Combo 69oz",
        descriptionCombo:"TIẾT KIỆM 95K!!! Gồm: 2 Bắp (69oz) + 4 Nước có gaz (22oz) + 2 Snack Oishi (80g)",

    },
    {
        imgCombo:"https://files.betacorp.vn/files/media/images/2023/06/15/beta-combo-154428-150623-83.png",
        nameCombo:"Beta Combo 69oz",
        descriptionCombo:"TIẾT KIỆM 28K!!! Gồm: 1 Bắp (69oz) + 1 Nước có gaz (22oz)",

    },
    {
        imgCombo:"https://files.betacorp.vn/files/media/images/2023/06/15/combo-see-me-130x130px-12-151911-150623-82.png",
        nameCombo:"Combo See Mê - Phi Hành Gia",
        descriptionCombo:"TIẾT KIỆM 56K!!! Sỡ hữu ngay: 1 Ly Phi Hành Gia kèm nước + 1 Bắp (69oz)",

    },
    {
        imgCombo:"https://files.betacorp.vn/files/media/combopackage/2024/02/15/combo-online-17-093717-150224-13.png",
        nameCombo:"Combo See Mê - Pastel",
        descriptionCombo:"TIẾT KIỆM 56K!!! Sỡ hữu ngay: 1 Cup Pastel 700ml kèm nước + 1 Bắp (69oz)",

    },
]
  return (
   <>
    <table className="w-full">
          <thead className="border-b border-gray-300">
            <tr>
            <th scope="col" className="text-md text-black font-medium px-2 py-2 whitespace-nowrap text-left">
               
              </th>
              <th scope="col" className="text-md text-black font-medium px-2 py-2 whitespace-nowrap text-left">
                Tên combo
              </th>
              <th scope="col" className="text-md text-black font-medium px-2 py-2 whitespace-nowrap text-left">
                Mô tả
              </th>
              <th scope="col" className="text-md text-black font-medium px-2 py-2 whitespace-nowrap text-left">
                Số lượng
              </th>
            </tr>
          </thead>
          <tbody>
            {combo?.map((item)=>{
                return(<>
                     <tr className="border-b-[2px] border-gray-300 py-4">
            <td className="text-md text-black font-thin px-2 py-4 whitespace-nowrap">
              <img className='h-40 w-40' src= {item?.imgCombo} alt="" />
              </td>
              <td className="text-md font-bold text-black  px-2 py-4 whitespace-pre-line text-center">
             {item?.nameCombo}
              </td>
              <td className="text-md text-black font-thin px-2 py-4 whitespace-pre-line text-center">
              {item?.descriptionCombo}
              </td>
              <td className="text-md text-black font-thin px-2 py-4 whitespace-nowrap">
               <div className='flex justify-center items-center space-x-2'>
                <div>0</div>
                <div className='p-1 bg-blue-800 text-white'>
                <MdAdd />
                </div>
                <div className='p-1 bg-blue-800 text-white'>
                <MdOutlineRemove />
                </div>
               </div>
              </td>
            </tr>
                </>)
            })}          
          </tbody>
        </table>
   </>
  )
}

export default Combo