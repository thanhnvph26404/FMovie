import { DeleteIcon, EditIcon } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const CinemaPage = (props: Props) => {
  const handleDelete = async (id:string | number) => {
    
  }
  return (
    <div>
      <div className="mx-auto mt-1">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-2xl font-semibold leading-6 text-gray-900">Danh sách rạp phim</h1>            
          </div>
          <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
  type="button"
  className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
>
  <Link to="/admin/cinema/add" style={{ textDecoration: 'none', color: 'inherit' }}>Thêm rạp</Link>
</button>

          </div>
        </div>
      </div>

    <div className="mt-6 overflow-hidden rounded-md border shadow">
      <table className="min-w-full border-separate border-spacing-y-2 ">
        <thead className="hidden border-b lg:table-header-group">
          <tr className="">
            <td  className="whitespace-normal py-4 text-sm font-medium text-gray-500 px-1 ">ID</td>
            <td className="whitespace-normal py-4 text-sm font-medium text-gray-500  px-1">Tên Rạp</td>
            <td className="whitespace-normal py-4 text-sm font-medium text-gray-500  px-1">Địa Chỉ</td>
            <td className="whitespace-normal py-4 text-sm font-medium text-gray-500  px-1">Loại Rạp</td>
            <td className="whitespace-normal py-4 text-sm font-medium text-gray-500  px-1">SĐT</td>
            <td className="whitespace-normal py-4 text-sm font-medium text-gray-500  px-1">Hành động</td>
          </tr>
        </thead>

        <tbody className="lg:border-gray-300">
          <tr className="">
            <td  className="whitespace-no-wrap py-2 text-sm font-bold text-gray-900 px-2"> 2
            </td>
            <td className="whitespace-no-wrap hidden py-2 text-sm font-normal text-gray-500  lg:table-cell px-2">Beta Thanh Xuân</td>
            <td className="whitespace-no-wrap hidden py-2 text-sm font-normal text-gray-500  lg:table-cell px-2">Hà Nội</td>
            <td className="whitespace-no-wrap py-2  text-right text-sm text-gray-600 lg:text-left">
            Loại 1
            </td>
            <td className="whitespace-no-wrap hidden py-2 text-sm font-normal text-gray-500  lg:table-cell">
            0999999999
            </td>
            <td className="whitespace-no-wrap hidden py-2 text-sm font-normal text-gray-500  lg:table-cell">
            <div className='flex justify-center items-center gap-1'>
                    <Link to={`/admin/cinema/edit/1`} className="text-indigo-600 hover:text-indigo-900  p-2 mr-5">
                    <EditIcon/>
                    </Link>
                    <div 
                    // onClick={() => handleDelete( item.id )} 
                    className="p-2 text-red-400">
                      <DeleteIcon/>
                    </div>
            </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
    </div>
  )
}

export default CinemaPage