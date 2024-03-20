import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
    <div className="works">
      <Card
        icon={faBriefcase}
        title="Trabalhos"
        body={
          <div className="works-body">
            <div className="work">
              <img
                src="https://cdn.sistemawbuy.com.br/arquivos/dc8d31d9ca625c06cebade3d6ef69d0c/config/32px2-411.png"
                alt="cia do sono"
                className="work-image"
              />
              <div className="work-title">Cia do Sono</div>
              <div className="work-subtitle">Desenvolvedor Full Stack</div>
              <div className="work-duration">2023 - 2024</div>
            </div>

            <div className="work">
              <img
                src="https://www.indeep.com.br/favicon.ico"
                alt="twitter"
                className="work-image"
              />
              <div className="work-title">Indeep</div>
              <div className="work-subtitle">
                Estagiario desenvolvimento web
              </div>
              <div className="work-duration">2021 - 2022</div>
            </div>
          </div>
        }
      />
    </div>
  );
};

export default Works;
