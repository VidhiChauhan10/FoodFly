import { TiThSmallOutline } from "react-icons/ti";
import { MdOutlineFreeBreakfast, MdOutlineFoodBank } from "react-icons/md";
import { TbSoup } from "react-icons/tb";
import { CiBowlNoodles } from "react-icons/ci";
import { GiFullPizza, GiHamburger } from "react-icons/gi";

const iconClass = "text-gray-600 text-3xl";

const Categories = [
  {
    id: 1,
    name: "All",
    label: "All 🌈",
    icon: <TiThSmallOutline className={iconClass} />,
  },
  {
    id: 2,
    name: "breakfast",
    label: "Breakfast 🍳",
    icon: <MdOutlineFreeBreakfast className={iconClass} />,
  },
  {
    id: 3,
    name: "soups",
    label: "Soups 🥣",
    icon: <TbSoup className={iconClass} />,
  },
  {
    id: 4,
    name: "pasta",
    label: "Pasta 🍝",
    icon: <CiBowlNoodles className={iconClass} />,
  },
  {
    id: 5,
    name: "main_course",
    label: "Main Course 🍽️",
    icon: <MdOutlineFoodBank className={iconClass} />,
  },
  {
    id: 6,
    name: "pizza",
    label: "Pizza 🍕",
    icon: <GiFullPizza className={iconClass} />,
  },
  {
    id: 7,
    name: "burger",
    label: "Burger 🍔",
    icon: <GiHamburger className={iconClass} />,
  },
];

export default Categories;
