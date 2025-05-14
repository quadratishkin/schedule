import "./MainPage.scss";
import First from "../../images/image3.png";
import Second from "../../images/image4.png";

export const MainPage = () => {
  return (
    <section className="mainPage">
      <h2 className="mainPage__text">
        Всем привет, это тестовая версия расписания для сайта Челябинского
        Государственного Университета
      </h2>
      <div className="mainPage__img-block">
        <img
          className="mainPage__img mainPage__img--first"
          src={First}
          alt="Первое изображение ЧелГУ"
        />
        <img
          className="mainPage__img mainPage__img--second"
          src={Second}
          alt="Второе изображение ЧелГУ"
        />
      </div>
    </section>
  );
};
