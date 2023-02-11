import React, { useState } from "react";
import {IoMdAddCircleOutline} from "react-icons/io";

const IMAGE_TYPES = [
  "Top View", 
  "Bottom View",
  "Right View",
  "Left View",
  "Front View",
  "Back View",
  "Another View",
  "Another View",
  "Another View",
  "Another View",
  "Another View",
]

const ImageUpload = () => {
  const [count, setCount] = useState(6);
  const [images, setImages] = useState([]);
  const [showModal, setShowModal] = useState([]);

  const handleClick = (index) => () => {
    const newShowModal = [...showModal];
    newShowModal[index] = true;
    setShowModal(newShowModal);
    console.log("hello")
  };

  const handleClose = (index) => () => {
    const newShowModal = [...showModal];
    newShowModal[index] = false;
    setShowModal(newShowModal);
  };

  const handleChange = (index) => (event) => {
    const newImages = [...images];
    newImages[index] = URL.createObjectURL(event.target.files[0]);
    setImages(newImages);
    handleClose(index)();
  };

  return (
    <div className="bg-gray-800 min-h-screen flex justify-center items-center">
      <div className="w-11/12 sm:w-10/12 lg:w-7/12 py-12 m-auto bg-gray-900 overflow-x-hidden shadow-md shadow-slate-500 rounded-xl">
        <h3 className="text-white mb-4 pt-10 text-center">PRODUCT DETAILS</h3>

        <div className="w-full justify-center flex p-4">
          <form action="" className="w-full sm:w-8/12 h-max ">
            <div className="flex flex-col gap-y-1.5 sm:flex-row sm:space-x-16 mb-10 h-10">
              <label htmlFor="productid" className=" text-white sm:w-2/12">
                Product ID
              </label>
              <input
                type="text"
                name="Productid"
                id="productid"
                className="w-11/12 sm:w-8/12 bg-black rounded-sm border-gray-800 text-white border"
              />
            </div>

            <div className="flex flex-col gap-y-1.5 sm:flex-row sm:space-x-16  mb-10 h-10">
              <label htmlFor="productname" className=" text-white sm:w-2/12">
                Product Name
              </label>
              <input
                type="text"
                name="Productname"
                id="productname"
                className="w-11/12 sm:w-8/12  bg-black rounded-sm text-white"
              />
            </div>

            <div className="flex flex-col gap-y-1.5 sm:flex-row sm:space-x-16 mb-8 h-10">
              <label htmlFor="varientid" className=" text-white sm:w-2/12">
                Varient ID
              </label>
              <input
                type="text"
                name="varientid"
                id="varientid"
                className="w-11/12 sm:w-8/12 bg-black rounded-sm text-white"
              />
            </div>

            <div className="relative">
              <div className="w-72 sm:w-96 flex gap-4 flex-wrap mx-auto lg:mr-8 xl:mr-20">
                {Array.from({ length: count }).map((_, i) => (
                  <div>
                    <div
                      key={i}
                      className=" bg-black text-slate-300 text-xs rounded-md cursor-pointer"
                      onClick={handleClick(i)}
                    >
                      {images[i] ? (
                        <img
                          className="h-28 bg-white w-28 object-cover"
                          src={images[i]}
                          alt="Uploaded Image"
                        />
                      ) : (
                        <div className="h-28 bg-black/70 text-gray-400 w-28 flex flex-col items-center justify-center">
                          {i < 6 ? (
                            <p>{IMAGE_TYPES[i]}</p>
                          ) : (
                            <>
                              <p>Another Angle</p>
                            </>
                          )}
                        </div>
                      )}
                    </div>

                    {showModal[i] && (
                      <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
                        <div
                          style={{
                            backgroundColor: "white",
                            padding: "20px",
                            borderRadius: "10px",
                          }}
                        >
                          <h2>Upload Image</h2>
                          <label
                            htmlFor="file"
                            className="bg-slate-900 py-60 p-24"
                          >
                            Drag and Drop or Click here to Add Image
                            <input
                              id="file"
                              type="file"
                              onChange={handleChange(i)}
                            />
                          </label>
                          <button onClick={handleClose(i)}>Close</button>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <button
                className=" sm:relative top-2 text-xs font-medium flex text-sky-500"
                onClick={(e) => {
                  e.preventDefault();
                  setCount((count) => count + 1);
                }}
              >
                <IoMdAddCircleOutline size={18} style={{ marginRight: "5" }} />
                ADD MORE IMAGES
              </button>
            </div>
            <div className="flex justify-center">
            <button className="upload mt-7  ">UPLOAD</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ImageUpload;
