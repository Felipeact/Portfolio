import { PaginationItem } from './PaginationItem'

import './styles.scss'

interface PaginationProps {
  currentPage: number;
  lastPage:number
  onPageChange: (page: number) => void
}

const siblingsCount = 1

function generatePagesArray( from: number, to: number) { 
  return [...new Array(to - from)]
  .map((_, index) => {
    return from + index + 1;
  }).filter(page => page > 0)
}

export function Pagination( { currentPage, onPageChange, lastPage }: PaginationProps ) {
  const previousPages = currentPage > 1
    ? generatePagesArray(currentPage -1 - siblingsCount, currentPage - 1)
    : []
  
    const nextPages = currentPage < lastPage
    ? generatePagesArray(currentPage, Math.min(currentPage + siblingsCount, lastPage))
    : []


  return(
    <div className='container container__pagination'>
       <div className='pagination__content'>

        {currentPage > (1 + siblingsCount ) && (
          <>
           <PaginationItem onPageChange={onPageChange}   number={1}/>
           { currentPage > ( 2 + siblingsCount) && <p className='text__pagination'>...</p>}
          </>
        )}

        {previousPages.length > 0 && previousPages.map(page => {
          return <PaginationItem onPageChange={onPageChange}  key={page} number={page}/>
        })}

        <PaginationItem onPageChange={onPageChange}  number={currentPage} isCurrent/>

        {nextPages.length > 0 && nextPages.map(page => {
          return <PaginationItem onPageChange={onPageChange}  key={page} number={page}/>
        })}

        {(currentPage + siblingsCount) < lastPage && (
          <>
           { (currentPage + 1 + siblingsCount) < lastPage && <p className='text__pagination'>...</p>}
           <PaginationItem  onPageChange={onPageChange} number={lastPage}/>
           </>
        )}  
        
      </div>
    </div>
  )
}