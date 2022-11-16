// import React from "react";
// import PropTypes from "prop-types";

// import { ButtonTypes, ButtonSizes, ButtonThemes } from "./buttonTypes";
// import { IconTypes } from "./iconTypes";
// import Icon from "./Icons";

// import "./button.css";

// export default function Button() {
//     const getButtonClasses {
//         const { icon, size, theme, type } = this.props;
//         const buttonClasses = [
//             "button",
//             `button--${size}`,
//             `button--${theme}`,
//             `button--${type}`
//         ];

//         icon && icon !== IconTypes.NONE && buttonClasses.push("button--icon");
//         return getButtonClasses;
//         return buttonClasses.join(" ");
//     };

//     const { disabled, onClickHandler, label, icon } = this.props;
//     return (
//         <div>
//             <button
//                 className={this.getButtonClasses()}
//                 onClick={event => onClickHandler(event.target)}
//                 disabled={disabled}
//             >
//                 {icon && <Icon icon={icon} />}
//                 {label}
//             </button>
//         </div>
//     );
// }

// Button.propTypes = {
//     type: PropTypes.oneOf(Object.values(ButtonTypes)),
//     disabled: PropTypes.bool,
//     onClickHandler: PropTypes.func.isRequired,
//     label: PropTypes.string.isRequired,
//     size: PropTypes.oneOf(Object.values(ButtonSizes)),
//     theme: PropTypes.oneOf(Object.values(ButtonThemes)),
//     icon: PropTypes.oneOf(Object.values(IconTypes))
// };

// Button.defaultProps = {
//     type: ButtonTypes.PRIMARY,
//     onClickHandler: () => console.log("No click handler specified"),
//     label: "",
//     disabled: false,
//     size: ButtonSizes.MEDIUM,
//     theme: ButtonThemes.LIGHT,
//     icon: IconTypes.NONE
// };
