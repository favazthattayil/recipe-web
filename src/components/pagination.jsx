import React, { useState } from 'react';

const Pagination = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 8;

console.log("meak", props.MealDetails)
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = props.imageList.slice(indexOfFirstImage, indexOfLastImage);

  const totalPages = Math.ceil(props.imageList.length / imagesPerPage);

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li key={i} onClick={() => handleClick(i)} className={currentPage === i ? 'active' : null}>
          {i}
        </li>
      );
    }
    return pageNumbers;
  };

  return (
    <div>
      <div className="image-grid">
        {currentImages.map((image) => (
          <img key={image.id} src={image.url} alt={image.alt} />
        ))}
      </div>
      <ul className="pagination">
        {renderPageNumbers()}
      </ul>
    </div>
  );
};

export default Pagination;

