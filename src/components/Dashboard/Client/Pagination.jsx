import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Pagination = ({ page_no, total_pages }) => {
  return (
    <>
      <tfoot>
        <tr>
          <td colSpan={4}>
            <div className="pagination-container">
              <div className="pagination">
                <button>
                  <FiChevronLeft size={20} />
                </button>
                <span>
                  {page_no}/{total_pages}
                </span>
                <button>
                  <FiChevronRight size={20} />
                </button>
              </div>
            </div>
          </td>
        </tr>
      </tfoot>
    </>
  );
};

export default Pagination;
