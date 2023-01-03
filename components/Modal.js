import { useState } from "react";
import { database } from "../utils/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { uuid } from "uuidv4";

const Modal = ({ isOpened, open }) => {
  const [posterTitle, setTitle] = useState("");
  const [posterDesc, setDesc] = useState("");
  const [posterPrice, setPrice] = useState(0);

  const dbInstance = collection(database, "products");

  const addPoster = (title, desc, price) => {
    addDoc(dbInstance, {
      title: title,
      desc: desc,
      price: price,
    }).then((res) => {
      return true;
    });
  };

  const savePoster = (e) => {
    e.preventDefault();
    if (addPoster(posterTitle, posterDesc, posterPrice)) {
      open(!isOpened);
    }
  };

  return (
    <>
      {isOpened && (
        <div className="w-full h-[90vh] fixed bottom-0 text-white bg-black">
          <div className="w-full h-full relative  flex flex-col px-4 py-2">
            <div className="relative w-full h-10">
              <h1
                className="text-xl uppercase absolute right-0 cursor-pointer"
                onClick={() => open(!isOpened)}
              >
                close
              </h1>
            </div>
            <div className="w-full flex-1 flex gap-4">
              <div className="form flex-1 flex flex-col justify-between">
                <div className="w-full">
                  <h1 className="text-2xl">Add New Product</h1>
                </div>
                <div className="w-full">
                  <div className="w-full border-b border-[#333] mb-8 overflow-hidden">
                    <input
                      className="appearance-none outline-none bg-transparent text-2xl w-full"
                      placeholder="Title"
                      onChange={(e) => setTitle(e.target.value)}
                      required
                    />
                  </div>
                  <div className="w-full border-b border-[#333] mb-8 overflow-hidden">
                    <textarea
                      className="appearance-none outline-none resize-none bg-transparent text-2xl w-full"
                      placeholder="Description"
                      maxLength={250}
                      onChange={(e) => setDesc(e.target.value)}
                      required
                    />
                  </div>
                  <div className="w-full border-b flex items-center border-[#333] mb-8 overflow-hidden">
                    <h1 className="text-2xl mr-4 text-[#333]">$</h1>
                    <input
                      className="appearance-none outline-none bg-transparent text-2xl w-full"
                      placeholder=""
                      type="number"
                      onChange={(e) => setPrice(e.target.value)}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gray-600 px-4 py-2 rounded-full hover:text-gray-600 hover:bg-white"
                    onClick={savePoster}
                  >
                    <h1 className="text-xl">+ Add</h1>
                  </button>
                </div>
              </div>
              <div className="w-1/2 bg-white"></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
