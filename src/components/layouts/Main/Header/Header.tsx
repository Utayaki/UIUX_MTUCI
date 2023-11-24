import Button from "@/components/common/Button/Button";
import React from "react";
import { VscSymbolColor } from "react-icons/vsc";
import * as Style from "./index.styled";

type HeaderProps = {
  switchTheme: () => void;
};
const Header: React.FC<HeaderProps> = (props) => {
  return (
    <Style.Header id="header" style={{ textAlign: "center" }}>
      <Style.Content>
        <Style.Logo>
          <Style.Img src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Gregory_and_watermelon.jpg"></Style.Img>
        </Style.Logo>

        <Style.Name style={{ textAlign: "center" }}>
          {" Big Floppa's Favorite Films Collection"}
        </Style.Name>

        <Style.Buttons>
          <Button
            name={<VscSymbolColor />}
            action={() => props.switchTheme()}
          />
        </Style.Buttons>
      </Style.Content>
    </Style.Header>
  );
};
export default Header;
