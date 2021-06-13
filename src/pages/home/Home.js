import React, { useState } from "react";
import { Card } from "primereact/card";

import "./Home.scss";

const Home = () => {
  const sophieImg = (
    <img
      alt="cutest cat picture"
      src="/images/sophie.jpg"
      onError={(e) =>
        (e.target.src =
          "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
      }
    />
  );
  const georgeImg = (
    <img
      alt="black cat picture"
      src="/images/meNGeorge.jpeg"
      onError={(e) =>
        (e.target.src =
          "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
      }
    />
  );
  const chickensImg = (
    <img
      alt="chickens on a roost"
      src="/images/IMG_8696.jpeg"
      onError={(e) =>
        (e.target.src =
          "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
      }
    />
  );

  return (
    <div className="background-container">
      {/* <div
        style={{
          background: `url('${process.env.PUBLIC_URL}/images/sophFace.JPG')`,
          backgroundRepeat: "no-repeat",
          width: "100vw",
          height: "100vh",
          opacity: "50%",
        }}
      >
      </div> */}
      <div className="table-header">
        <h1>My Animals</h1>
      </div>
      <div className="flex-here">
        <Card
          title="Sophie"
          subTitle="Sophie-Loafy, Soph-Soph, Soap, Muffin, Sophia"
          style={{ width: "25em" }}
          header={sophieImg}
        >
          <p className="p-m-0" style={{ lineHeight: "1.5" }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            sed consequuntur error repudiandae numquam deserunt quisquam
            repellat libero asperiores earum nam nobis, culpa ratione quam
            perferendis esse, cupiditate neque quas!
          </p>
        </Card>
        <Card
          title="George"
          subTitle="Georgie, Jorge, Georgie-Porgie, Buddy, Boy"
          style={{ width: "25em" }}
          header={georgeImg}
        >
          <p className="p-m-0" style={{ lineHeight: "1.5" }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            sed consequuntur error repudiandae numquam deserunt quisquam
            repellat libero asperiores earum nam nobis, culpa ratione quam
            perferendis esse, cupiditate neque quas!
          </p>
        </Card>
        <Card
          title="Nicole Kidman"
          subTitle="Not Pictured: Danica Patrick, Roberta, Amelia Earhart"
          style={{ width: "25em" }}
          header={chickensImg}
        >
          <p className="p-m-0" style={{ lineHeight: "1.5" }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            sed consequuntur error repudiandae numquam deserunt quisquam
            repellat libero asperiores earum nam nobis, culpa ratione quam
            perferendis esse, cupiditate neque quas!
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Home;
