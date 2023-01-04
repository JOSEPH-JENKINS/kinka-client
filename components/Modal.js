import { useEffect, useState } from "react";
import { database } from "../utils/firebaseConfig";
import { collection, addDoc, doc, updateDoc } from "firebase/firestore";

const Modal = ({ isOpened, open, data, active }) => {
  const [posterTitle, setTitle] = useState("");
  const [posterDesc, setDesc] = useState("");
  const [posterPrice, setPrice] = useState(0);
  const [posterImage, setImage] = useState(0);

  const dbInstance = collection(database, "products");

  useEffect(() => {
    if (active) setTitle(posterTitle);
  }, [active, posterTitle]);

  const addPoster = (title, desc, price, image) => {
    addDoc(dbInstance, {
      title: title,
      desc: desc,
      price: price,
      image: image,
    }).then((res) => {
      return true;
    });
  };

  const savePoster = (e) => {
    e.preventDefault();
    if (addPoster(posterTitle, posterDesc, posterPrice, posterImage)) {
      open(!isOpened);
    }
  };

  const editPoster = (e) => {
    e.preventDefault();
    updateDoc(doc(database, "products", `${active[0].id}`), {
      title: posterTitle,
      desc: posterDesc,
      price: posterPrice,
      image: posterImage,
    });
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
                    {active ? (
                      <input
                        className="appearance-none outline-none bg-transparent text-2xl w-full"
                        placeholder="Title"
                        defaultValue={active[0].title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                      />
                    ) : (
                      <input
                        className="appearance-none outline-none bg-transparent text-2xl w-full"
                        placeholder="Title"
                        onChange={(e) => setTitle(e.target.value)}
                        required
                      />
                    )}
                  </div>
                  <div className="w-full border-b border-[#333] mb-8 overflow-hidden">
                    {active ? (
                      <input
                        className="appearance-none outline-none bg-transparent text-2xl w-full"
                        placeholder="Image Link"
                        defaultValue={active[0].image}
                        type="url"
                        onChange={(e) => setImage(e.target.value)}
                        required
                      />
                    ) : (
                      <input
                        className="appearance-none outline-none bg-transparent text-2xl w-full"
                        placeholder="Image Link"
                        type="url"
                        onChange={(e) => setImage(e.target.value)}
                        required
                      />
                    )}
                  </div>
                  <div className="w-full border-b border-[#333] mb-8 overflow-hidden">
                    {active ? (
                      <textarea
                        className="appearance-none outline-none resize-none bg-transparent text-2xl w-full"
                        placeholder="Description"
                        maxLength={250}
                        defaultValue={active[0].desc}
                        onChange={(e) => setDesc(e.target.value)}
                        required
                      />
                    ) : (
                      <textarea
                        className="appearance-none outline-none resize-none bg-transparent text-2xl w-full"
                        placeholder="Description"
                        maxLength={250}
                        onChange={(e) => setDesc(e.target.value)}
                        required
                      />
                    )}
                  </div>
                  <div className="w-full border-b flex items-center border-[#333] mb-8 overflow-hidden">
                    <h1 className="text-2xl mr-4 text-[#333]">$</h1>
                    {active ? (
                      <input
                        className="appearance-none outline-none bg-transparent text-2xl w-full"
                        placeholder=""
                        type="number"
                        defaultValue={active[0].price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                      />
                    ) : (
                      <input
                        className="appearance-none outline-none bg-transparent text-2xl w-full"
                        placeholder=""
                        type="number"
                        onChange={(e) => setPrice(e.target.value)}
                        required
                      />
                    )}
                  </div>
                  {active ? (
                    <button
                      type="submit"
                      className="w-full bg-gray-600 px-4 py-2 rounded-full hover:text-gray-600 hover:bg-white"
                      onClick={editPoster}
                    >
                      <h1 className="text-xl">+ Edit</h1>
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="w-full bg-gray-600 px-4 py-2 rounded-full hover:text-gray-600 hover:bg-white"
                      onClick={savePoster}
                    >
                      <h1 className="text-xl">+ Add</h1>
                    </button>
                  )}
                </div>
              </div>
              <div className="w-1/2"></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
