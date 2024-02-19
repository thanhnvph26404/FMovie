import React from 'react'
import { NavLink } from 'react-router-dom'

const HeaderWebsite = () => {
  const [ isLogged, setIsLogged ] = React.useState<boolean>(true);
  const Menu =[
    {
      title:"Lịch Chiếu Theo Rạp",
      linkTo:""
    },
    {
      title:"Phim",
      linkTo:""
    },
    {
      title:"Rạp",
      linkTo:""
    },
    {
      title:"Giá Vé",
      linkTo:""
    },
    {
      title:"Tin Mới và Ưu Đãi",
      linkTo:""
    },
    {
      title:"Nhượng Quyền",
      linkTo:""
    },
    {
      title:"Thành Viên",
      linkTo:""
    },
  ]
  return (
    <div className='w-full h-full '>
      <div className='bg-black h-[32px]  w-full flex justify-around items-center'>
        <div></div>
        <div></div>
        <div className='text-white text-[15px]'>
          <span className='mx-1'>Đăng nhập</span>
          <span className='mx-1'>|</span>
          <span className='mx-1'>Đăng ký</span>
        </div>
      </div>
    <div className='bg-white  py-2 shadow-md'>
      <div className='w-full flex justify-center items-center space-x-24'>
        <div>
          <div>
            <img src='https://betacinemas.vn/Assets/Common/logo/logo.png' />
          </div>
        </div>
        <div>
          <div> 
            <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full py-1 px-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option selected>Chọn Rạp</option>
              <option value="US">Mỹ Đình</option>
              <option value="CA">Thanh Xuân</option>
              <option value="FR">Nha Trang</option>
              <option value="DE">Hạ Long</option>
            </select>
          </div>  
        </div>
        <div className=''>
          <div className='md:hidden block'>
            <img  
            onClick={()=>setIsLogged(!isLogged)}
            className='w-8 mr-10' src='https://static.vecteezy.com/system/resources/previews/010/896/688/original/menu-icon-sign-symbol-design-free-png.png' />
                      </div>
        <div className="hidden w-full md:block md:w-auto " id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-4 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 v">
       {Menu?.map((item)=>{
        return (<>
         <li>
          <NavLink to={item?.linkTo} className="block font-bold py-2 uppercase text-md text-white  rounded md:bg-transparent md:text-black md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">{item?.title}</NavLink>
        </li>
        </>)
       })}
      
      </ul>
    </div>
    
        </div>
      </div>
    </div>
    <div className={`${isLogged ? "hidden" : "block"} md:hidden block w-full  md:w-auto `} id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-4 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      {Menu?.map((item)=>{
        return (<>
         <li>
          <NavLink to={item?.linkTo} className="block font-bold py-2 uppercase text-md   rounded md:bg-transparent text-black md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">{item?.title}</NavLink>
        </li>
        </>)
       })}
      </ul>
    </div>
    </div>
  )
}

export default HeaderWebsite