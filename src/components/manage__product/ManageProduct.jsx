import React, { useEffect, useState } from "react";
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import Modul from "../../components/model/Model";
import Swal from "sweetalert2";
import {
  useGetProductsQuery,
  useDeleteProductMutation,
  useUpdateProductMutation,
} from "../../context/api/productApi";
import { useGetCategoryQuery } from "../../context/api/categoryApi";

const ManageProduct = () => {
  const { data } = useGetProductsQuery();
  const [deleteProduct] = useDeleteProductMutation();
  const [modulToggle, setModulToggle] = useState(null);
  const { data: category } = useGetCategoryQuery();
  const [UpdateProduct, { isLoading, isSuccess }] = useUpdateProductMutation();

  const handleDeleteProduct = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: `Do you want to remove ${id} from the cart?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteProduct(id);
        Swal.fire(
          "Deleted!",
          `${id} has been removed from the cart.`,
          "success"
        );
      }
    });
  };

  let productItems = data?.map((el) => (
    <div className="manage__card" key={el.id}>
      <img src={el.url[0]} alt={el.title} />
      <div className="manage__card__content">
        <h2 className="manage__card__content__title" title={el.title}>
          {el.title}
        </h2>
        <div className="manage__card__content__items">
          <span>
            <s>${el.price * 2}</s>
            <h4 className="manage__card__item">${el.price}</h4>
          </span>
          <span>
            <BiEditAlt onClick={() => setModulToggle(el)} />
            <RiDeleteBin6Line onClick={() => handleDeleteProduct(el.id)} />
          </span>
        </div>
      </div>
    </div>
  ));

  useEffect(() => {
    setTimeout(() => {
      if (isSuccess) {
        setModulToggle(null);
      }
    }, [500]);
  }, [isSuccess]);

  const handleUpdateProduct = (e) => {
    e.preventDefault();
    let product = {
      title: modulToggle.title,
      price: modulToggle.price,
      desc: modulToggle.desc,
    };
    UpdateProduct({ id: modulToggle.id, body: product });
  };

  let categoryItems = category?.map((el) => (
    <option key={el.id} value={el.title}>
      {el.title}
    </option>
  ));

  return (
    <div>
      <div className="manage">
        <h1 className="manage__title">Manage product</h1>
        <div className="manage__cards">{productItems}</div>
        {modulToggle ? (
          <Modul data={modulToggle} setModulToggle={setModulToggle}>
            <form onSubmit={handleUpdateProduct} className="manage__form">
              <h1 className="manage__form__title">Edit</h1>
              <div className="manage__form__content">
                <div className="manage__form__inputs">
                  <h2 className="manage__form__inputs__text">Title</h2>
                  <input
                    value={modulToggle?.title}
                    onChange={(e) =>
                      setModulToggle((prev) => ({
                        ...prev,
                        title: e.target.value,
                      }))
                    }
                    className="manage__form__inputs__input"
                    type="text"
                    placeholder="Title"
                  />
                </div>
                <div className="manage__form__inputs">
                  <h2 className="manage__form__inputs__text">Price</h2>
                  <input
                    value={modulToggle?.price}
                    onChange={(e) =>
                      setModulToggle((prev) => ({
                        ...prev,
                        price: e.target.value,
                      }))
                    }
                    className="manage__form__inputs__input"
                    type="number"
                    placeholder="Price"
                  />
                </div>
                <div className="manage__form__inputs">
                  <h2 className="manage__form__inputs__text">Description</h2>
                  <textarea
                    value={modulToggle?.desc}
                    onChange={(e) =>
                      setModulToggle((prev) => ({
                        ...prev,
                        desc: e.target.value,
                      }))
                    }
                    className="manage__form__inputs__input"
                    name="desc"
                    placeholder="Description"
                  ></textarea>
                </div>
                <div className="manage__form__inputs">
                  <h2 className="manage__form__inputs__text">Category</h2>
                  <select
                    value={modulToggle?.category}
                    onChange={(e) =>
                      setModulToggle((prev) => ({
                        ...prev,
                        category: e.target.value,
                      }))
                    }
                    className="manage__form__inputs__input"
                  >
                    {categoryItems}
                  </select>
                </div>
                <div className="manage__form__inputs">
                  <h2 className="manage__form__inputs__text">Image</h2>
                  <textarea
                    value={modulToggle?.url}
                    onChange={(e) =>
                      setModulToggle((prev) => ({
                        ...prev,
                        url: e.target.value,
                      }))
                    }
                    className="manage__form__inputs__input"
                    name="desc"
                    placeholder="Description"
                  ></textarea>
                </div>
              </div>
              <button
                className="manage__form__btn"
                disabled={isLoading ? "Saving..." : ""}
              >
                {isLoading ? "Saving..." : "Save"}
              </button>
            </form>
          </Modul>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default ManageProduct;
