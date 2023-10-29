import React from "react";
import style from "./Button.module.scss";
class Button extends React.Component <{ text: string, type?: "button" | "submit" | "reset" | undefined}> {
    render(){

        return(
            <button className={style.botao} type={this.props.type}>
                {this.props.text}
            </button>
        )
    }

}
export default Button;