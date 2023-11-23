import React from "react";
import sidebarCss from "./GenreSidebar.module.css";
import GenreTagContainer from "./GenreTagContainer";
const warning = {
  icon: (
    <svg
      width="34"
      height="29"
      viewBox="0 0 34 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="Vector"
        d="M19.4607 1.17524C19.2557 0.818091 18.9601 0.52136 18.6037 0.31501C18.2473 0.108661 17.8428 0 17.4309 0C17.0191 0 16.6146 0.108661 16.2582 0.31501C15.9018 0.52136 15.6062 0.818091 15.4011 1.17524L1.1988 25.3402C0.252252 26.9516 1.38728 29 3.22859 29H31.6312C33.4725 29 34.6096 26.9495 33.661 25.3402L19.4607 1.17524ZM17.4268 8.28781C18.5349 8.28781 19.4027 9.24471 19.2909 10.3487L18.566 17.6124C18.5416 17.8978 18.411 18.1636 18.2001 18.3573C17.9892 18.551 17.7132 18.6585 17.4268 18.6585C17.1404 18.6585 16.8644 18.551 16.6535 18.3573C16.4426 18.1636 16.312 17.8978 16.2876 17.6124L15.5627 10.3487C15.5367 10.0882 15.5655 9.82513 15.6473 9.57645C15.7291 9.32778 15.8621 9.099 16.0377 8.90485C16.2133 8.7107 16.4277 8.55549 16.6669 8.44922C16.9062 8.34294 17.165 8.28796 17.4268 8.28781ZM17.4309 20.7151C17.9803 20.7151 18.5071 20.9333 18.8955 21.3218C19.2839 21.7102 19.5022 22.237 19.5022 22.7863C19.5022 23.3357 19.2839 23.8625 18.8955 24.2509C18.5071 24.6393 17.9803 24.8576 17.4309 24.8576C16.8816 24.8576 16.3548 24.6393 15.9664 24.2509C15.5779 23.8625 15.3597 23.3357 15.3597 22.7863C15.3597 22.237 15.5779 21.7102 15.9664 21.3218C16.3548 20.9333 16.8816 20.7151 17.4309 20.7151Z"
        fill="#FF0000"
      />
    </svg>
  ),
};
const GenreSidebar = () => {
  console.log(warning);
  let selected = false;
  console.log(selected);
  return (
    <div className={sidebarCss.sidebar}>
      <h1 className={sidebarCss.head1}>Super app</h1>
      <h2 className={sidebarCss.head2}>Choose your entertainment category</h2>
      <GenreTagContainer />
      {selected ? (
        <p className={sidebarCss.warning}>
          <span>{warning.icon}</span>{" "}
          <span>Minimum three category required</span>
        </p>
      ) : (
        ""
      )}
    </div>
  );
};

export default GenreSidebar;
