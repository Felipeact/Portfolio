
import './styles.scss'

interface PaginationItemProps {
  number: number;
  isCurrent?: boolean;
  onPageChange: (page: number ) => void;
}

export function PaginationItem( {isCurrent = false , number, onPageChange }: PaginationItemProps){
  return isCurrent ? (
    <button className='pagination__button'>
        {number}
      </button>
  ) : (
    <button className='pagination__button' onClick={() => onPageChange(number)}
    >
      {number}
    </button>
  )
}