import React from 'react'
import { IoMdAddCircleOutline } from "react-icons/io";
// import Hello from './Hello';
// import PopUp2 from './PopUp2'
function PopUp1() 
{

  const uploadImage=(e)=>{
    e.preventDefault();
    
  }
  return (
    <div className="w-full h-screen  bg-gray-900">
      <h3 className="text-white mb- pt-10 text-center">PRODUCT DETAILS</h3>

      <div className="w-full justify-center a flex p-4">
        <form action="" className=" w-8/12 h-fit ">
          <div className="flex space-x-16 mb-10 h-10">
            <label htmlFor="productid" className=" text-white w-2/12">
              Product ID
            </label>
            <input
              type="text"
              name="Productid"
              id="productid"
              className="w-8/12 bg-black rounded-sm border-gray-800 text-white border"
            />
          </div>

          <div className="flex space-x-16  mb-10 h-10">
            <label htmlFor="productname" className=" text-white w-2/12">
              Product Name
            </label>
            <input
              type="text"
              name="Productname"
              id="productname"
              className="w-8/12  bg-black rounded-sm"
            />
          </div>

          <div className="flex space-x-16 mb-8 h-10">
            <label htmlFor="varientid" className=" text-white w-2/12">
              Varient ID
            </label>
            <input
              type="text"
              name="varientid"
              id="varientid"
              className="w-8/12 bg-black rounded-sm"
            />
          </div>
          <div className="flex space-x-20 mb-8">
            <label htmlFor="image" className=" text-white w-1/4">
              Upload Images
            </label>
            <button className="h-28 w-28 bg-black text-slate-300 text-xs rounded-md" onClick={uploadImage}>
              Front View
            </button>
            <button className="h-28 w-28 bg-black text-slate-300 text-xs rounded-md">
              Top View
            </button>
            <button className="h-28 w-28 bg-black text-slate-300 text-xs rounded-md">
              Bottom View
            </button>
          </div>
          <div className="flex space-x-20  mb-8">
            <label htmlFor="image" className=" text-white w-1/4"></label>
            <button className="h-28 w-28 bg-black text-slate-300 text-xs rounded-md">
              Side View 1
            </button>
            <button className="h-28 w-28 bg-black text-slate-300 text-xs rounded-md">
              Side View 2
            </button>
            <button className="h-28 w-28 bg-black text-slate-300 text-xs rounded-md">
              Side View 3
            </button>
          </div>
          <div className="flex flex-col items-center">
            <button className="text-[10px] font-medium flex text-sky-500 -mt-5 mr-[15rem]">
              <IoMdAddCircleOutline size={18} style={{ marginRight: "5" }} />
              ADD MORE IMAGES
            </button>
            <button className="upload mt-7">UPLOAD</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PopUp1