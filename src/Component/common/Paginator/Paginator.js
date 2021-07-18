import React, {useState} from "react";
import s from "./Paginatir.module.scss";

const Paginator = ({currentPage, totalItemsCount, pageSize, onPageChanged, portionSize = 10}) => {

   let pagesCountMatch = totalItemsCount / pageSize

   let pagesCount = Math.ceil(pagesCountMatch)

   let pages = [];
   for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
   }

   let [portionNumber, setPortionNumber] = useState(currentPage / 10)
   let portionCount = Math.ceil(pagesCount / portionSize)
   let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
   let rightPortionPageNumber = portionNumber * portionSize

   return <div>
      <div className={s.page_number_global_container}>
         {portionNumber > 1 &&
         <button className={s.page_portion_changer}
                 onClick={ () => { setPortionNumber(portionNumber - 1) }}>
            prev
         </button>
         }
         <ul className={s.page_number_container}>
            {
               pages.filter(item => item >= leftPortionPageNumber && item <= rightPortionPageNumber).map((item, index) => {
                  return <li key={index} className={currentPage === item && s.selected_page}
                             onClick={() => {
                                onPageChanged(item);
                             }}>
                     {item}
                  </li>
               })
            }
         </ul>
         {portionCount > portionNumber &&
         <button className={s.page_portion_changer}
                 onClick={ () => { setPortionNumber(portionNumber + 1) }}>
            next
         </button>
         }
      </div>
      {/*<div className={s.paginator_input_container}>*/}
      {/*   <input onChange={onPaginatorInputChange} type="text"/>*/}
      {/*</div>*/}
   </div>
}


export default Paginator;