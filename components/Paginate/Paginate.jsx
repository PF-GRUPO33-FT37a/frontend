import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProductsRender } from "@/redux/Slice";

export default function Paginate() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.filterProducts);

  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(9);
  const [renderProducts, setRenderProducts] = useState([]);
  const [pageNumbers, setPageNumbers] = useState([]);

  useEffect(() => {
    if (products && products.length > 0) {
      var indexOfLastProduct = currentPage * productsPerPage;
      var indexOfFirstProduct = indexOfLastProduct - productsPerPage;
      var currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
      setRenderProducts(currentProducts);
      dispatch(getProductsRender(currentProducts));
    }

  }, [products, currentPage, productsPerPage, dispatch]);

  const paginado = (pageNumbers) => {
    setCurrentPage(pageNumbers);
  };

  useEffect(() => {
    const totalPageNumbers = Math.ceil(products.length / productsPerPage);
    const newPageNumbers = Array.from({ length: totalPageNumbers }, (_, index) => index + 1);
    setPageNumbers(newPageNumbers);
    setRenderProducts([]);
    setCurrentPage(1)
  }, [products, productsPerPage]);

  return (
    <nav>
      <ul>
        {pageNumbers.map((number) => (
          <span id={`elemento${number}`} onClick={() => paginado(number)} key={number}>
            {number}
          </span>
        ))}
      </ul>
    </nav>
  );
}