import React from "react";
import { BsCart } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Category from "../category/Category";

const Product = ({ isMarriade, data, isLoading }) => {
  let navigate = useNavigate();

  let productItems = data?.map((el) => (
    <div key={el.id} className="product__card">
      <img src={el.url} alt="productImg" />
      <div className="product__content">
        <h3 className="product__content__text" title={el.title}>
          {el.title}
        </h3>
        <div className="product__content__items">
          <ul>
            <li>
              <s>${el.price * 2}</s>
            </li>
            <li>${el.price}</li>
          </ul>
          <button className="product__content__items__item">
            <BsCart />
          </button>
        </div>
      </div>
      <FiHeart className="product__heart" />
    </div>
  ));

  return (
    <div>
      <section className="product">
        <div className="container">
          <div className="home__titles">
            <h1 className="home__titles__title">Популярные товары</h1>
            {isMarriade ? (
              <button
                onClick={() => navigate("/all-products")}
                className="home__titles__btn display__none"
              >
                Все товары <IoIosArrowRoundForward />
              </button>
            ) : (
              <></>
            )}
          </div>
          {isMarriade ? <Category /> : <></>}
          <div className="product__cards">
            {isLoading ? <h2>Loading...</h2> : productItems}
          </div>
          {isMarriade ? (
            <button
              onClick={() => navigate("/all-products")}
              style={{ display: "none" }}
              className="home__titles__btn display__flex width__100 home__btn2"
            >
              Весь товары <IoIosArrowRoundForward />
            </button>
          ) : (
            <></>
          )}
        </div>
      </section>
    </div>
  );
};

export default Product;