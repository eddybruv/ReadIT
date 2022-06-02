import React from 'react'
import style from "../../styles/catergories.module.css";
import CatCard from './CatCard';
import categories from './categories'


function Categories() {
  return (
    <section className={`${style.body}`}>
      <h3 className={style.title}>Categories</h3>
      <section className={`row ${style.boxes}`}>
        <section className={`col-xl-4 col-xs-3 ${style.box}`}>
          <CatCard
            title={categories[0].title}
            num={categories[0].available}
            icon={categories[0].icon}
          />
          <CatCard
            title={categories[1].title}
            num={categories[1].available}
            icon={categories[1].icon}
          />
        </section>
        <section className={`col-xl-4 col-xs-3  ${style.box}`}>
          <CatCard
            title={categories[2].title}
            num={categories[2].available}
            icon={categories[2].icon}
          /><CatCard
          title={categories[3].title}
          num={categories[3].available}
          icon={categories[3].icon}
        />
        </section>
        <section className={`col-xl-4 col-md-6 col-xs-3 ${style.box}`}>
          <CatCard
            title={categories[4].title}
            num={categories[4].available}
            icon={categories[4].icon}
          />
          <CatCard
            title={categories[5].title}
            num={categories[5].available}
            icon={categories[5].icon}
          />
        </section>
      </section>
    </section>
  );
}

export default Categories