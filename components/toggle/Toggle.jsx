import React, { useState } from "react";
import "./ToggleStyles.css";
//  stateless functional component: component nhưng không sử dụng state
// VD: function Toggle1 (){
//   return <div className="toggle"></div>
// }
// ========================================================================
//  stateful functional component:  component có sử dụng state
// VD: function Toggle1 (){
// const [count, setCount] = useState();
//   return <div className="toggle"></div>
// }

function Toggle() {
  // 1 enable state: useState( initialize state)
  // 2 initialize state: giá trị khởi tạo useState(false), có thể bất cứ dữ liệu gì tùy trườn hợp chúng ta sử dụng: boolean, string,array,object,number...
  // 3 reading state
  // 4 updating state
  // const arr = useState(false);
  const [on, setOn]= useState(false);
  const handleToggle= ()=>{
    setOn((on) => {
      return !on;
    })
  }
  return (
    <div>
      <div className={`toggle ${on ? "active" : ""}`} onClick={handleToggle}>
        <div className={`spin ${on ? "active" : ""}`}></div>
        <div className="spinner mt-4">hi</div>
      </div>
    </div>
  );
}
export default Toggle;
