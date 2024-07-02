import React, { useEffect } from "react";

const Garant = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <section className="garant">
        <div className="container">
          <div className="garant__style">
            <h1 className="garant__style__title h1">Гарантии</h1>
            <div className="garant__style__content">
              <h2 className="garant__text h2">
                Обмен и возврат по желанию покупателя
              </h2>
              <p className="garant__par h3">
                Все товары в магазине «NornLight» имеют гарантию. Она заявляется
                производителем и имеет определенный срок действия на различные
                группы товаров. Если ваше изделие вышло из строя в
                течение гарантийного срока вы можете обратиться к нам и получить
                бесплатный ремонт. Для этого нужно:
                <br />
                <ul>
                  <li>
                    Предоставить чек, накладную или сообщить почту или номер
                    телефона, указанные при оформлении заказа.
                  </li>
                  <li>
                    Привезти товар к нам на склад или отправить его транспортной
                    компанией.
                  </li>
                  <li>
                    После товар отправляется на экспертизу и ремонт. Если ремонт
                    невозможен, мы обменяем изделие на аналогичное либо вернем
                    деньги за покупку.
                  </li>
                </ul>
                Обращаем внимание, что «А-Свет» не является сервисным центром, а
                выполняет роль посредника между клиентом и поставщиком. <br />
                Поэтому сроки проведения ремонта могут отличаться для товаров
                различных брендов.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Garant;
