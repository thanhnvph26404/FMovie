import { Link } from "react-router-dom"
import EditIcon from "../../../assets/icon/EditIcon"
import DeleteIcon from "../../../assets/icon/DeleteIcon"


const MovieTypeListPage = () => {

  const data = [
    { id: 2,name: 'Hành động'},
    // More people...
  ]
  const tHead = [
    'STT', 'Tên danh mục', ''
  ]
  const handleDelete = async (id:string | number) => {
    
  }
  return (
    <div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-2xl font-semibold leading-6 text-gray-900">Danh sách danh mục phim</h1>            
          </div>
          <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
            <button
              type="button"
              className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Thêm danh mục
            </button>
          </div>
        </div>
      </div>
      <div className="mt-8 flow-root overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <table className="w-full text-left ">
            <thead className="bg-white">
              <tr className="border-t border-b">
                {tHead.map((item, index) => (
                  <th key={index} scope="col" className=" py-3 px-3 text-left text-base font-semibold text-gray-900">
                  {item}
                  
                </th>
                ))}
                
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index} className="border-b">
                  <td className="py-2 px-3 text-base font-medium text-gray-900">
                    {index + 1}
                   
                  </td>
                  <td className="hidden px-3 py-2 text-base text-gray-500 sm:table-cell">{item.name}</td>
                  <td className="relative py-2 pl-3 text-right text-base font-medium flex">
                    <Link to={`/admin/movie-type/edit/${item.id}`} className="text-indigo-600 hover:text-indigo-900  p-2 mr-5">
                    <EditIcon/>
                    </Link>
                    <div onClick={() => handleDelete( item.id )} className="p-2 text-red-400">
                      <DeleteIcon/>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default MovieTypeListPage