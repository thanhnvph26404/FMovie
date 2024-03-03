import axios from 'axios';
import React, { useEffect, useState } from 'react'

type Props = {}

const CinemaAddPage = (props: Props) => {
  const [form, setForm]=useState();
  const handleChange = (e)=> {
    setForm({
      ...form,
      [e.target.name]: e.target?.value,
    });
  }


  const upLoadData = async ()=>{
    try {
      // const result = await axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
      // .then(res => {
      //   console.log(res);
      //   console.log(res.data);
      // })
    } catch (error) {
      
    }
  }

  useEffect(()=>{
    console.log(form);
    
  },[form])
  return (
    <>
    <div  className="">
  <form  className="relative border border-gray-100 space-y-3 max-w-screen-md mx-auto rounded-md bg-white p-6 shadow-xl ">
  <h1  className="mb-6 text-xl font-semibold lg:text-2xl">Thêm Rạp Phim</h1>

  <div  className="grid gap-3 md:grid-cols-2">
    <div> 
      <label  className=""> Tên Rạp </label>
      <input type="text" placeholder="" 
      name="name"
      onChange={handleChange}
      className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3" />
    </div>
    <div>
      <label  className=""> Phòng Chiếu </label>
      <input type="number"
        name="screeningRooms"
        onChange={handleChange}
      placeholder=""  className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3" />
    </div>
  </div>
  <div>
    <label  className=""> Địa Chỉ </label>
    <input type="text"   name="address" onChange={handleChange} placeholder=""  className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3" />
  </div>
  <div>
    <label  className=""> Mô Tả </label>
    <textarea rows="9"     name="description"   onChange={handleChange} type="text" placeholder=""  className="mt-2 py-1 w-full rounded-md bg-gray-100 px-3" ></textarea>
  </div>

  <div  className="grid gap-3 lg:grid-cols-2">
    <div>
    
      <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Loại rạp</label>
  <select id="countries"   name="cinemaType"
      onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <option selected>Chọn loại rạp</option>
    <option value="US">Loại 1</option>
    <option value="CA">Loại 2</option>
    <option value="FR">Loại 3</option>
    <option value="DE">Loại 4</option>
  </select>
    </div>
    <div>
      <label  className=""> Phone: <span  className="text-sm text-gray-400"></span> </label>
      <input type="text"   name="phoneContact"
      onChange={handleChange} placeholder="+543 5445 0543"  className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3" />
    </div>

    
  </div>
{/* 
  <div  className="checkbox">
    <input type="checkbox" id="chekcbox1" checked="" />
    <label for="checkbox1">I agree to the <a href="#" target="_blank"  className="text-blue-600"> Terms and Conditions </a> </label>
  </div> */}

<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Ảnh</label>
<input   name="image"
      onChange={handleChange} className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" />

  <div>
    <button type="button"  className="mt-5 w-full rounded-md bg-blue-600 p-2 text-center font-semibold text-white">Xác Nhận Thêm</button>
  </div>
</form>

</div>
    </>
  )
}

export default CinemaAddPage