import countries from "../data/Countries";


const   Modal = ({ children, isOpen, onClose }) => {
  const handleClose = () => {
    onClose && onClose();
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0  p-20 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white w-96 p-4 rounded-lg relative">
            <span
              className="absolute top-2 right-2 w-8 cursor-pointer text-gray-500"
              onClick={handleClose}
            >
              &times;
            </span>
               <div className="flex flex-col gap-12 pt-12">
                <h2 className="text-center">Choose a Country</h2>
                <div className="flex flex-col gap-2 justify-center items-center">
                    {
                        countries.map(country=>{
                            return(
                                <span>{country}</span>
                            )
                           
                        })
                    }
                
            </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
