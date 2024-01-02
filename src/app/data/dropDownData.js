import { FaBriefcase,FaHeart } from "react-icons/fa";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
const DropDownData=[
    {
        id:1,
        title:"Services",
        items:[
            {
                id:1,
                icon:FaBriefcase,
                itemsName:"Business"
            },
            {
                id:2,
                icon:FaHeart,
                itemsName:"Business"
            },
            {
                id:3,
                icon:HiOutlineDotsHorizontal,
                itemsName:"Business"
            },
           
        ]
    },
    {
        id:1,
        title:"popular Services",
        items:[
            {
                id:10,
                icon:"",
                itemsName:"Dog and Pet Grooming"
            },
            {
                id:20,
                icon:"",
                itemsName:"Dog Training"
            },
            {
                id:30,
                icon:"",
                itemsName:"Dog walking"
            },
           
        ]
    },

]

export default DropDownData;