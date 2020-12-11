import React, { FC, useCallback, useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";

import "./mapp.sass";

const ACTIVATION_COUNTDOWN = 60000;
const URL = 'https://cutt.ly/NhOyjQE';

const MApp: FC<{}> = () => {
  const [isLinkShown, setLinkShown] = useState(false);

  useEffect(() => {
    setTimeout(() => setLinkShown(true), ACTIVATION_COUNTDOWN);
  }, []);

  useEffect(() => window.scrollTo(0, document.body.scrollHeight), [isLinkShown]);

  const onButtonClick = useCallback(() => {
    localStorage.setItem('presents-are-closed', "1");
    
    const win = window.open(URL, '_blank');
    win?.focus();

    setTimeout(() => document.location.reload(), 300);
  }, []);

  return (
    <div className="mycolai">
      <div className="background"></div>
      <Container>
        <h1>Дорогий Миколай,</h1>
        <p>
          я не зовсім впевнений, чому саме ти даруєш подарунки таким дітлахам,
          як я, але все ж вирішив написати тобі листа завдяки натякам моєї
          коханої Птиці (напевно, вона щось знає).
        </p>
        <p>
          Отже, певно, ти вже знаєш, я був чемним хлопчиком весь рік, не ображав
          Птицю і годував її, обіймав після сітки та бавив. Давав їй поїлочку та
          підставляв руку, щоб вона поважно на ній сиділа.
        </p>
        <p>
          Ще цього року я доглядав та лікував кота, іноді навіть дозволяв йому
          дурісти вночі та скидувати птичі дрібнички зі столу.
        </p>
        <p>
          Тож, якщо ми вже вирішили, що сумнівів щодо того, чи дарувати
          подарунок немає, перейдемо до самого подарунку. Попри цей текст, ця
          сторінка містить одне посилання, яке з'явиться після 60 секунд
          перебування на сторінці, та зникне одразу після переходу по ньому.
          Адресу посилання неможливо переглянути, поки не перейти за самим
          посиланням. Після переходу посилання разом з цією сторінкою зникне
          назавжди.
        </p>

        {isLinkShown && (
          <div className="d-flex justify-content-center button-wrapper">
            <Button onClick={onButtonClick}>Те саме посилання</Button>
          </div>
        )}
      </Container>
    </div>
  );
};

export default MApp;
