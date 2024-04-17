import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import Timezone from "./timezone.jsx";
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';


const DemoComp = () => {
  const [value, onChange] = useState(new Date());
  console.log(value);

  const formattedDate = value.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  });

  
  

  return (
    <div>
      <div className="lmtWIHO_gkbTeeyuvoJC sbRR6Vj9cBntcZ6P4tOo">
        <div className="_cUP1np9gMvFQrcPftuf OGcBAyJGBej5Gnyi9hGA xahN8AEzyAvQtVj17TPv _Y8HCTxgNkwxXcG_DCXx">
          <div
            data-container="booking-container"
            className="_3efP_GeH5kyBAzqnLzL adpQ3VUeQbmczOdx9ymw _NhHeOwIn1FU09sukys_ w_Mtb2W9166EgOSv9i3M cllbjvXCdYDt9A3te4cz "
          >
            <div
              data-container="side-panel"
              className="WrdpezlzjKu1CoRihaXS Rb2e9IwsOFiKlSQIX7YA _eIcko0LuRzVhqMC1mmy y2BHUjkNYLaMI5GB_dVt"
            >
              <div className="vijtvgyx_9152uGHndeu ij0tkCti5WftuGeyXE84">
                <div
                  data-simplebar="init"
                  className="g4kIX1cEbAUBf5qD2Udt EDtlc0_uFpxiVRZXmgE5 Kp7kkfKOnqzgiL6A7iT9"
                >
                  <div className="simplebar-wrapper" style={{ margin: 0 }}>
                    <div className="simplebar-height-auto-observer-wrapper">
                      <div className="simplebar-height-auto-observer" />
                    </div>
                    <div className="simplebar-mask">
                      <div
                        className="simplebar-offset"
                        style={{ right: 0, bottom: 0 }}
                      >
                        <div
                          tabIndex={0}
                          className="simplebar-content-wrapper"
                          style={{ height: "auto", overflow: "hidden" }}
                        >
                          <div
                            className="simplebar-content"
                            style={{ padding: 0 }}
                          >
                            <div className="Z3zhp7CS7tNsCSX6_KJW KtQUtHvVvyq716gdA29c">
                              <div className="dByP7suNIfCqOSaMcM6_ _CXzNZJcVKGB6oSxcDYf">
                                <img
                                  src="https://d3v0px0pttie1i.cloudfront.net/uploads/team/avatar/244108/bf92ad95.png"
                                  alt="Sales Team"
                                  className="l8_ox8UFJxB3KJMwAXbz _sRvWjppwBLlS1XAiWzQ SQ_Bs3qHy7XHjSu3iTrm nDdZjeb2Zpw_OzgLPGim"
                                />
                                <div
                                  data-component="name"
                                  className="igLUv25CGn1lcV9W4BLo VHgo1Gke8HlB303mVQsG q4cOvvEx6Vd1DIiuVXso GzvVI3Y6rac8lZAKNbGw cj8hJKtajauY7EuaKsh6"
                                >
                                  Sales Team
                                </div>
                                <h1 className="aJYfwRAjpy85vGyjTA_k aNTWZDYqtNuY8Y3A0Rlw nCQmpQ3zRtu1xXb_x8YC lfS31_5Mqhye4NzHzcKh UqnoAE3IPZScZj__n24Z">
                                  KrispCall Demo
                                </h1>
                              </div>
                              <div className="dukviH9w_EuHzTw_qBQt NgoiMCeEYfWcZjlNlAgG AyhFx5OlFGq9yVKxlioJ">
                                <div
                                  data-container="details"
                                  className="_L4TEojXfdzWp8RxMPuB N0L2N94hAAnivlQ6DGit Ko5wAaZye5TiJ64tY67l PO5XPbkuZPY7V9uoHMUx"
                                >
                                  <div className="YAmKI90l5OyINFgGmq9L TuKawS25ZXxJafgZdElP">
                                    <div className="kjPV9BSUqWArFIVxfBTq _7Au4UjgXrnFtkfgdDsM">
                                      <span
                                        aria-hidden="true"
                                        className="srpdbd5 l15h8fme ly3eodl"
                                      >
                                        <svg
                                          data-id="details-item-icon"
                                          viewBox="0 0 10 10"
                                          xmlns="http://www.w3.org/2000/svg"
                                          role="img"
                                        >
                                          <path
                                            d="M.5 5a4.5 4.5 0 1 0 9 0 4.5 4.5 0 1 0-9 0Z"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          />
                                          <path
                                            d="M5 3.269V5l1.759 2.052"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                          />
                                        </svg>
                                      </span>
                                    </div>
                                    30&nbsp;min
                                  </div>
                                </div>
                              </div>
                              <div>
                                <div className="yHJsX7btzZUMOuQu_qbF _QY08ZnTdckO8dGtuWjX rITYjoHV2NF_yl1tR68x rUewQ7gbiLM7fEmxWleS">
                                  <div className="k_tUa2XwT0esKZkWYshM UOUgYFhrylMAqJDUG1Tn">
                                    <p>
                                      Join us for an insightful virtual meeting
                                      in Zoom, where you can:
                                    </p>
                                    <p>
                                      <br />
                                    </p>
                                    <p>
                                      🔍 Explore KrispCall's tailored solutions
                                      for your needs
                                    </p>
                                    <p>
                                      💡 Discuss about customized solution for
                                      your business
                                    </p>
                                    <p>
                                      🗣 Share your requirements and kickstart
                                      your KrispCall journey
                                    </p>
                                    <p>
                                      👥 Train your team on advanced telephony
                                      features
                                    </p>
                                    <p>
                                      🤝 Discover seamless integrations with
                                      your CRM &amp; tools
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="simplebar-placeholder"
                      style={{ width: "auto", height: 533 }}
                    />
                  </div>
                  <div
                    className="simplebar-track simplebar-horizontal"
                    style={{ visibility: "hidden" }}
                  >
                    <div
                      className="simplebar-scrollbar"
                      style={{
                        transform: "translate3d(0px, 0px, 0px)",
                        display: "none",
                      }}
                    />
                  </div>
                  <div
                    className="simplebar-track simplebar-vertical"
                    style={{ visibility: "hidden" }}
                  >
                    <div
                      className="simplebar-scrollbar"
                      style={{
                        transform: "translate3d(0px, 0px, 0px)",
                        display: "none",
                        height: 447,
                      }}
                    />
                  </div>
                </div>
                <div className="Pz2TGUG_nAL6m_qTt_A4 _Y9jfPKOHyKOzqzq0C1V">
                  <button
                    className="uvkj3lh l15h8fme buuwct9 d13adumu soq3ksa f1vsw93b"
                    type="button"
                  >
                    <span className="t1850o97 t7sc041">Cookie settings</span>
                  </button>
                </div>
              </div>
            </div>

            {/* right*/}
            <div className="nX1mqja_7P44IZA6HzKt GggfqbUnbiV8ibOhSGq7 QnoSECjNGJyoVwZeO1Cp">
              <div
                data-component="spotpicker"
                className="oNS9ciVl9HkYl_RNpI17 hx0jWwb5b2ea04pDWimx _BfNOA8QBweO_ToDizhl Nrbbdq548gT3unfkNGu1"
              >
                <h2 className="mcGoFZ2bdw0rWtCmf9EQ xKJJw__HuKqq1YBdsufM LgqhkbVKEnFcwdgjSO8V sVw1FGoSfKwp1_fa_eS4">
                  Select a Date &amp; Time
                </h2>

                {/* /*date and time */}
                <div className="yXXPyAx6ZnQ_1sL07UcY bUOrbFu6ZUwN8paYsknc wyF_fjmXW63y3Lx40e8z R0H8cdJJS564Rkru1FfV">

                  {/* date */}
                  <div className="mx-[1rem] mt-[4rem]">
                    <Calendar
                      value={value}
                      onChange={onChange}
                      defaultView="month"
                    />
                  </div>

                  {/* time */}
                  <div data-component="spotpicker-times" className="aC8yrhG_PZOrITgfQHXI SpxR_eHyXhzaZEVyTY3j HPzBvfnDCLBeVloRNB3F _eVPTQcJjL2Ie6bK0QzT">
                    <h3 data-component="spotpicker-times-subtitle" className="gcP8rxpT2piRvbrS8lm_ AjRlD0Dp_PK95J_obyh1 ml-[1rem]">
                      {formattedDate}
                    </h3>
                    <div data-component="spotpicker-times-list" className="tBQ2sFQryHicoUQYC2a0 M7qTOn_cwtSaHIDllkgI y_GjIhKBuNa__U_12_Cl _JFfGiPduY9jBYmybYgH">
                      <TimeButton startTime="8:45am" />
                      <TimeButton startTime="9:15am" />
                      <TimeButton startTime="9:45am" />
                      <TimeButton startTime="10:15am" />
                      <TimeButton startTime="10:45am" />
                      <TimeButton startTime="11:15am" />
                      <TimeButton startTime="11:45am" />
                      <TimeButton startTime="12:15pm" />
                      <TimeButton startTime="12:45pm" />
                      <TimeButton startTime="1:15pm" />
                      <TimeButton startTime="1:45pm" />
                      <TimeButton startTime="2:15pm" />
                      <TimeButton startTime="2:45pm" />
                      <TimeButton startTime="3:15pm" />
                      <TimeButton startTime="3:45pm" />
                      <TimeButton startTime="4:15pm" />
                      <TimeButton startTime="4:45pm" />
                      <TimeButton startTime="5:15pm" />
                      <TimeButton startTime="5:45pm" />
                      <TimeButton startTime="6:15pm" />
                      <TimeButton startTime="6:45pm" />
                      <TimeButton startTime="7:15pm" />
                      <TimeButton startTime="7:45pm" />
                      <TimeButton startTime="8:15pm" />
                      <TimeButton startTime="8:45pm" />
                      <TimeButton startTime="9:15pm" />
                      <TimeButton startTime="9:45pm" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoComp;


function TimeButton({ startTime }) {
  const navigate = useNavigate();
  const formPage = () => {
    navigate('/bookingform');
  }

  return (
    <div role="listitem" className="JDQjzRj9BZy8YrjLJNgf ngEXwkfAkA9mdBwuiXNq">
      <button
        data-container="time-button"
        data-start-time={startTime}
        className="uvkj3lh TiHRjLF_QTwJrPFR65WG s9RBSAJ2z5_reiWivfqd uoYd30C1K4Sdef0CubtJ tg_cqD7Ia3z_hRQg_eyg"
        type="button"
        onClick={formPage}

      >
        <div className="_nsuUAEh3mYW8eVzjz1b vQ3fZCbPbugeCo9yvAwg _1RK0lQvKxhI8hY5r8Th">
          <div className="j1sPElHG5fkgLNJPo_Q_ BZeqDQO37C9rcYzv8s5n">{startTime}</div>
        </div>
      </button>
    </div>
  );
}