import { FaUserAlt } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { FaAngleLeft } from "react-icons/fa";
import { GoCommentDiscussion } from "react-icons/go";
import { BiSolidDownArrow } from "react-icons/bi";
import { SiWebmoney } from "react-icons/si";
import contactimgpng from './component/Images/computer-icons-user-profile-login-clip-art-my-account-icon-0d7b7b69bb0d878f3dd93d6752c692e8.png'
import love from './component/Images/love.png'
import commentimg from './component/Images/comment.png'
import eye from './component/Images/eye.png'
import share from './component/Images/share.png'

// importing hooks
import { useState, useEffect } from "react";

export default function SideMenu() {
  // state to control the display of aside bar
  let [showNav, setShowNav] = useState(false);

  // state to control highlighting selected option in asidebar
  let [selectedOption, setSelectedOption] = useState("discussion");

  useEffect(() => {
    // aside will be automatically hide in smaller devices and will only be show when clicked on tray button
    if (window.innerWidth <= 912) {
      setShowNav(false);
    } else {
      setShowNav(true);
    }

    window.addEventListener("resize", () => {
      if (window.innerWidth <= 912) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
    });
  }, [setShowNav]);

  return (
    <aside
      id="mainsidefullnavbar"
      className="flex select-none sm:absolute sm:top-24 sm:bottom-12 sm:z-[100000] xs:bottom-10"
    >
      {showNav && (
        // aside bar
        <nav
          id="fullsidenavbar"
          className="w-72 bg-thematicColor flex flex-col  text-white xs:w-56"
        >
          {/* user tab */}
          <div
            id="mani"
            className="relative h-20 p-2 flex justify-between items-center gap-4 text-xl border-b-2 border-gray-500 cursor-pointer xs:h-16 xs:text-lg"
          >
            <FaUserAlt className="iconcolorchange" />
            <div className="flex-1 flex justify-start items-center" id="whatif">
              Hello, User
            </div>
            <IoNotifications id="iconcolorchange1" className="text-2xl" />
            <div className="absolute right-[11px] top-7 border-4 border-red-500 rounded-full xs:top-5"></div>
          </div>

          {/* discussion tab */}
          <div
            id="messagnav"
            className={`mt-4 p-2 pl-4 pr-4 flex justify-between items-center gap-2 cursor-pointer tall:mt-2 ${
              selectedOption === "discussion" && " bg-blue-950"
            }`}
            onClick={() => setSelectedOption("discussion")}
          >
            <GoCommentDiscussion className="iconcolorchange" />
            <div
              id="discussionfont"
              className="flex-1 flex justify-start items-center"
            >
              Discussion Forum
            </div>
            <BiSolidDownArrow id="iconcolorchange1" className="text-[9px]" />
          </div>

          {/* market stories tab */}
          <div
            id="marketstoriesdiv"
            className={`p-2 pl-4 pr-4 flex justify-between items-center gap-2 cursor-pointer ${
              selectedOption === "stories" && " bg-blue-950"
            }`}
            onClick={() => setSelectedOption("stories")}
          >
            <div id="" className="flex-1 flex justify-start items-center">
              Market Stories
            </div>
          </div>

          {/* sentiment tab */}
          <div
            id="sentiment"
            className={`p-2 pl-10 pr-4 cursor-pointer ${
              selectedOption === "sentiment" && " bg-blue-950"
            }`}
            onClick={() => setSelectedOption("sentiment")}
          >
            Sentiment
          </div>

          {/* market tab */}
          <div
            id="marketlab"
            className={`p-2 pl-10 pr-4 cursor-pointer ${
              selectedOption === "market" && " bg-blue-950"
            }`}
            onClick={() => setSelectedOption("market")}
          >
            Market
          </div>

          {/* sector tab */}
          <div
            id="sectortab"
            className={`p-2 pl-10 pr-4 cursor-pointer ${
              selectedOption === "sector" && " bg-blue-950"
            }`}
            onClick={() => setSelectedOption("sector")}
          >
            Sector
          </div>

          {/* watchlist tab */}
          <div
            id="sectortab"
            className={`p-2 pl-10 pr-4 cursor-pointer ${
              selectedOption === "watchlist" && " bg-blue-950"
            }`}
            onClick={() => setSelectedOption("watchlist")}
          >
            Watchlist
          </div>

          {/* events tab */}
          <div
            id="sectortab"
            className={`p-2 pl-10 pr-4 cursor-pointer ${
              selectedOption === "events" && " bg-blue-950"
            }`}
            onClick={() => setSelectedOption("events")}
          >
            Events
          </div>

          {/* news tab */}
          <div
            id="sectortab"
            className={`p-2 pl-10 pr-4 cursor-pointer ${
              selectedOption === "news" && " bg-blue-950"
            }`}
            onClick={() => setSelectedOption("news")}
          >
            News/Interview
          </div>
        </nav>
      )}

      {/* button to control the show and hide of aside bar */}
      <div id="lastbutton" className="flex items-center">
        <button id="nextbutton"
          className="h-12 w-max bg-thematicColor text-2xl text-white rounded-tr-md rounded-br-md xs:text-lg"
          onClick={() => setShowNav(!showNav)}
        >
          <FaAngleLeft className={`${showNav === false && "rotate-180"}`} />
        </button>
      </div>

      <div className="disscussiondiv">
        <div className="disscussiondiv1">
          <div className="">
            <h2 className="disscusionform">DISSCUSSION FOURM</h2>
          </div>
         
          <div className="buttonbigcontain">
            <div className="buttonsectordiv">
              <button className="sectorbutton">Sector 1</button>
              <button className="sectorbutton1">Sector 2</button>
              <button className="sectorbutton2">Sector 3</button>
              <input
                className="searchinput"
                type="text"
                placeholder="Search here"
              />
            </div>
          </div>
          <div className="infibeambackground">
            <div className="infibeamimgdiv">
            <img id="database64img"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAS0AAACnCAMAAABzYfrWAAABiVBMVEX///8AAADxbCnaLScFBgj//v////3///z8///ZJyDaLSj//f8AAARHR0fx8fHYXVvf39+tra3Q0NC7u7yXl5mOjpDyayeio6IUFBfDxMRbXFvxayz83+DX19cODhH/+fULAABzWknj5OTtkWRNXHPIuakpKSt5eXlsbG3seUWtlof19fU0NDTxZx4AAA3s09RPT0+eq70lAACEhYbOJh/ZHRWJcGSwpJUEACjq+PxsVUpDU2b67uIeAACJn6oxGABxhpzy3ss8PDzvoX7lnpxPLCIAABcfHx/tqYlycnL408AnIiYdFxUVAAAAAB/PwrPR5eoiEQX01rzXaWfHAADwtpvtXynNPz/oTinSNzXyvrzskmncf3rzzszlbjHhjo3AGR7ywarimpnmgVHWYmHQQjzvp4DqsrDmiID239VTPzeAdm/Zz8M5KiUiIC5YSkAuNUI7R1oZJjutvMtZYm6bin4vHA9zY17F0+EvPFNviKF1gYkTFyKlkn4pGxEvNT0jJR2WmqwWISqkYmfoAAAby0lEQVR4nO1dj18TV7a/Q5g7ExJCgCSEH0nGsIS4ISwuoA+NtkbXCATFta6tqK21XRdFrT+q9Mm2u/7l75xzf8ydSagkbN8r7zPfIiQzd+7c+c45537vuXemjEWIECFChAgRIkSIECFChAgRIkSIECFChAgRIkSIECFChAgRIkSIECFChAgRIkSIEOH44D0f4XCbM9e1E7ZrI6AK21G1OYG/ULnNoFii97P8PlCorq/Pr69Xx9LVDG3IrvdYg8t5iGOXISsIDix2MOPazollC7iyqvPrY2OWlYLvZcuye6uBc+4yXpr5UwBiFxqZ07j817/+9bLG7p9K/Zjw7wU1Kw2/J63KOPyZKFo9XokDZD24vbKyauCLq7SLO27pzuPper2ey8FPDn//7YvVuzPM+USlv1+kJFuZKfjTzPbKFjjd1dX4UMxA/G5J7ik9JpYGBnLiz8DAl/FY/KuG+5++iP81KLbSVg0ccawXtrAod++tIFlDQ/BDiK3eQweFCOXs1AeAo2kgahqAv1agQPw+EwVOIBRbDFwxs1zohS2H2dwtfR8fMkxrKBYfKbngoMDlo3pugCxKYfpLLDq08gB2Oj0GyN8HNFvgivl0L7blJmzHAT8cCvhhDLhwOfaMpdNgUyZZA39bQRuMrY4Q0b/dNf120GyBGxZZL2yBdTjuzEo8Foxa5GdgdOxO2LQGvhwS1he/hyV+s0v6DaHZYs1Kpje28Nd9CFqBIP/NLkuQ5TQeYsgKmBZSBYFrJXa3xPkJ9cQCE2xNAG+TPfWJDnuwQtfvk7X6NQpW0KXsSj3kh7kY9QZwQGz16gkN83ahBr9rafmv0MuhDvuO+kMZ4LG/+74B4yDcedn0wtw0WBmoB+2uK6VPu2J5fnl5GVUgq40iJtWOAnwR7Rwf9YHqegwOmS/4hwDGx8q6RqP0aE3XlkH4hdLiMP29NkEbju0KDrsXN3wQjSb+hCWYbYN17QRDFvhhPOYbIUS3TxpX2gJk8VPKIqTljozazpYsH2PwfRw/jBuHEJqj8kBjm6XpqdLXjD7tKH0vajbHRfnjssV54vugLh1CYWq7DpjNRt1kaxoM7UvTZeMrM5+sP20NDiq2koPwuSp3TFiD8uqmoIgEBZRxPESypfckLWtKseUXV2ylaKPV1Kcdp0JEvn8OK584Jlsuu2qaFvV2D5iDYyFQ8R2mFTPZGorf7pmtQWuyG1tB2wqwJXbgh1HNVti2RnEb/CjDVWwty6+SzeOzNfNVLMjW6m1uuy44IqiHEFlgWkFiUfH3whbwZS3YnWxZ1TGBWgdbVhY2jy/hpyXFlrVuFFdVrOsKVR1wLvkV2LSOyxbaD/t6NeyID1wQBhDlG6dzAdvK1XdGUJfp8vDxrhPO9fwaW8kWfpvowta8cUiILWFRC1CopdnKqrKCeajaapXh14JRhzVsaWObgrhXPLZtcb77zUoIX4PoxOQgu14P6FLQ9I0HX8SM7hND1xNKDh6RLataxZuc6oOt9QBbyywArGudITtjfh1W1lJ3BnuLbDF5HLZAT9k2S82EUQKTQ+vanc4FlWn9OuO340O6UyS2viph73lUtpbAAOS19mFbU5qtLAsAeRqnGuf9OqzRYcsalt+S1ph1XE+0u/SoLkp4FxjbCQnT3MOGzWiMZLCFQtbPSndBkK0mW7age8OeL8iWaSwhtjLlcnmsaun+geJWuoAo63MkKfkC5lcz2MrAGakI6Ivh1DHZch23dP1KCHeAK45p5A1K0Rhs1R9hoPs6HjMUF3xCFXFk21pgKQy+Sx1sLY362rV7n5hUBmX0idKSMtLu0P4mfbYyaUtYZg2KThyTLVCf7FE9jEcgVzFogXqYHjCNK3e6hJ5bgi40buj+GKiIX8uiBtmqEEvERVcFMdWFrcEkKY+ir0613JJsNWWAWqbwpdlaZi1RI34pl49pW5xjOsaUn7ncrCOIdB+Z6iGHedMNcdTV1WC6Ymj1AXrvYSq5gy26tkqiqzoF6WofblvDKc1WwLYKUBN5HIamwZpma57NW1YyJRyRSh2HLZtdz4XZ2qU9DqoHky3NI2OJu0G2YvGRo0d5ZGuSghFJoKPYljU/Pj6aaQb11tToBEK4HfZ9CxjGxvKWPFCyNUnfUzQmOiZbrrsbSooO1K+onSFhCqzuKorvrZpswecvnsg9R2OL4pSVCrBlVQukNtNd2NIKQoyLOvvEimY7qUdWgq0UjJfWqUdMH9u2+E5Iq0OvJ/c0HuaCiRrgURqQY38XHIXHYl+VemIrjSpiffKofaJgq6A/hvXWmD9uJL9N+WyhKs2jIzbZsdnaGAixVb+jeLwSzpg+bLhyMjbBdr8IGBeMf75Fqo7MFkZjoR0DeiuRsD/F1kQ3tuaNcaMuL9lCA55sUXKif7Zshydc57Gh1TG/AL0eTulD1NrAGZ6c3DGNY547YpjEaLh0Py5mhzRjoCK6ardD2KoVIWgXB3tSp1mxEc4S8sRECwVIJovILEh5otgi1SIGQMexLXCrR7mcVupA1jQKqgR3QFg4szlfmSKPA8ij8ERS+d/EYwG24veZc0hDurFFKiJ5VLYyoETH5i2RoJFszQt1WrBlp6FyjBPYd5Z9ttiSpQbX/bOFY5vS6fq0Scl0/bFDk2IuqjDKk6rucADUg6vyfph//hZH4qY7fvHgsOmfrmyhjhw8IltGxkYE8FDGBgeQVs0824TB1oSlztM/Ww6lY6antQWBZaGgctF2WOn0AKp4ZXfA4yymu6Qn2i5K1Hggjz8UH2HukTxRFprsgS0dvodtzZafDawN6gGkvA00NlRspYmt9LHYAm+CXm/AnylEP7xCkzw0KTY94JOFH3bRc7k81AYTfLIakFxDQ6tPDo3yZqY5rzabmeElfwwj2eqWaW6p3FUw00yFR/Wxy/g1LepYF/RZIo9T6DvTDHZwpS48UAuqh5eZm+AoTEk9KCbBE0E9oF1JT8PFXcwZCUxADmEuwgUm3Q53LC/rWQyQk/qyyqQuRX5lXOtMgTE8pKAOERgd0xc6YaDGJuF3JqWPTePWgvhLdU6qDync0w9ZcPG7wTwfmNZ1aTvsej2YX9YqzAdnD1aDKwFi8aswSmcnc37xE7Cd2bqpPoGehyVpPJcHcsGpi/r1zuNddjsedMXYSgO8+OSuUvo1bNRzZp4PvO2RXPfg7ARNa7r+sNSZG02wmSBbsdjqfUwLntxlSoejdDoXHNnkHpdkGoEmxQJ296hTHKCc+Do8/ok/OKRbPMngpB7AtAKZvg1SADYvgcAPrHuoP8alSR2VuC6oiABdQ/HvHDDOEznVfyg4dFyoHswQn6vvcAzQYF1m7oF6xtxGZz9HtVCiK7h64h5zu49/ypRgELtqhXS6UPN3pdPpstiqgZTX6JMul1YHlTOZTFb1gWM4nU/VpozDZf65Njq/NLw0P1o+bAh7BGAO/Uog04fSalfo+yCPNEDcQRo7bQtF6l0a/xjm9T0/JI0q5u6FSigHBFJNyrG0qaJwx6Sf70IsyJlZNmZOuk7gl5r+FMgRjurvS6Y86Q04zBsIIpf7O1w8DW3+HuQRYliD49KkcC0udzHRFQsCF910O6ecKZYKdMoU35M4sEtLzS0Fel7uMKfm9ewX5mfMKWq51mHCOH4ZWzEhBkg4GrX8xSM9I8Fnw4sbQFCBCzk2qIcAi9AhXmfdZ1eh9+P8dmiNXAwlaheIeXeraOtL1AM7GC3T6oW0PyJUtjVormw4CltJw7bKRNZgBb9XjtP5bISk1jSltRxwLSeUHiQeMbvQwZdNTxzMdKTo/9H1jDgtv6TnY2hKUTqH3ZJZLhpOLkuFjucTbKl8zVHYShYzdHRmUrJnTdTsWiELQ6Y+6MJZQlyQ+zgX0uqnS5jwoiU1oZVtyCOteaYK3I6RzdfxYNJ5KL4LthvuGGnKHVOlVU2emprR157WiWQJSsQk9azEEdiSU9kC8yrRBXekxvpBAuzHYY9ClAwMPOKYA+TceRxKL6MKM4FPbLCZB0+uCnx79R/xsIq4jY8LhUK9mENGP0vpa8yLS1iWKQPB1phxELJLWdHlI7OVN0xoPZCZ6AcuhqDGw3B6edYBY0jQ5GIo+oMKM20YWCg9GTEf2AgsG6cOkqbLQuvCm+SEVUu5FQZ94Yp2RS1V6MrW6LLsA3pnK+tnXfsEBfLr9elgyp0o4XJSzBSmufosN5f+gWXNjKwa1uSvH/HZonX2biDWp8ERIaqP+3dbJ7QKKtXZna1szVIOdSRPNNgaQy+2qr0sKQ0Cn6JzL0+L8O2TdYUnGI2Hr4fj2cPLoYWSpZHVmHpYg3RpsEekDZjoCppWVkQssCjJDBFHHVVWRxdiq7JQAeQnFVvLIlhPHo2twUE6vFIhf18XnWzffOGaGkaPofj5ZUzHuKgGQJiSXU3rPcijn18mL/7HanDp81AnW0M4XcYDKcoFOSW6ZBkLhMS1N/UmU0EYbOFcIaWnj8SWPJ7YsqcsISrm+wvy+DzmRmCNMnrbdVr3AD2iKfAp2gOPjmILtTub+SYe4qcb4t+yQM9J3pYSF6S6qSkxbVPWjtidrarMOk8Iqo+qt+S4KGMJvipl1hccJ7iQNDdQP92A2I192EZwYVsOVZijOzcO5sJHOqypG1mx0NJd7PaWeK1mp31uxsU8TEb1iNITp6qIqYLBFtEE1z91BL01WBVQo8hUdpC0fLMvdWqHej2Q8ZjWchMOhK3H4Ul+mlyU+SpaWIm5+E+b1hBOl5lRHhdP5lsIf94ilcRVL+ReowZbIb1FbImJ7RBbajHu4XpL8rVs9d83hpbU5KZRUGEHZjuPQquXp3FpkssdNX9ss8ZX8SOYFmVRHxjnpHn3pJ7kkiMZvPjRmpVMKrfx+0R/VkioWRJd6XnFVsHsPLOHKgiFSUF2P7gTSIvmwNs2UFfglFdgQS4a3WwJ5ayOW5zdXw3mZw5nKz5iMz28NOfdk9p+0BWrk4aCNNiyg2yRiphaVmzRuEnNRixZatnyYWyRzOtZpto4Kaalg5z/qu9Q7wXqASfF1D56zHVgI3B4gj1Y+SRRGvF7YsqSiUl8a2FJYFCtOaVEzcKy74jd9VZVETFI0/Nid8tXVgXfcMJsTajQNuWPuHoAdIhX6noCmp5jHZjexSeqobdrPBxQqWcxN42TYsa5IbaNxD/NkjauuyVXpujHTRaqSmfRx8GWkan6FbbEiiO9m5acDI/BgHk8728Nq9OWVR0v23ZtFAnNsJ7AMcGwqxlByYWPk9/Bh/Vx8HfF98NpeviJcjj+8TY+sPFpL5RsxXG6jGlWrEFVk0HdpEjiaB+R6pTQDLGl0hHiyJqc2W9RJFRlhDolVLLEMBZpibI9SggnkXDYrDE/AX1eLrfDHXxRhsN2abMkjCb8N0IVzKwcJcJr48LnG8kTSYdqR6CYI3KC6KFmb2XqLZUN1AdOBTKDBUt0HJToG64ZbMnjl5mwx0HBZx9dIi4kzdXFY/fyPQWz+LwcRnE+W6/j2wtolS58qD/cwBG0GTPvwwA63gNW7zN6vQale/3UJWac5XNdVVNIBjPNki1Ls1UW25Wjlqd00YxqZDjTvK6/VXrOM4MnlnZOBzD7iPQUmBfb3Zn1sTO7cx3npgMDxJmRXvAd4PYMDa2Xh4eHm/68+2hzeHhBuiJ8HPZXP5TxqwQJ/jHYoNe0ZXHvgi/H0hPVpeGp5fFaoGaJJoWp1Hh2anh4KttPTh4crhSELSXkb/SOFfcEv7sFQzkPbmCSLXyLT8JwOkwMdkxzcd7bI8Hc6XgxzgkCRw3qch9gWXIQaBMXPj2YRO28Tpv1NCln4wL6EzvJD0NiJ+AY3NErFjB5F8j52azDh4g/fjTYIhryk/liDQQXL4jy//PdjePy2tCFdbMKLHUU+Oc8sWxFiBAhwv9v8K4fxbdD932qpv8APl3bf+Z8XC5F9jeILVx9Vv+YSONxKRdcSuhosQGDcAcTV/DLDSwYxCer7Q4iQUzYIpOBYo/pk4m/urhsi9DF6tWOXMhb1a+S3hNtEm3FR99VVTY+H0KTvqBabKlh2HG40925IT39FkuuxLs79XMELp3VuAQkDKeIZLPFAep4xw7Xj3lGfUWqUnGg/53pe8ZNISMUsy3vMSe9I24pKRNb7hSlXHG4mEZwHNu4Ef0xxv3W6oUg8gFq5ICLNQ4seMVS4+tVIPhND2qcgDH5atQfGCSYXuNsJ3iALf8k4rsbfquebqZoK4hCaUuoD3VRx3FkeABBzORoDmuUTeZ9jlVt1ylp9YjVwi2wXXotbEneQWhGwqapReU0aONwnCt1JwydSphZQGoTUKFD70gQlRLZqUIhxXw7TkBx5d0wqneZYT1Owhx1A9U0oKCxgAB8dzhwDNxzGkRBs6D+mrApB6tKyPS/U8KXXxGFcD0JVySiRGP6kcg4eeo8pYnzpWyKbpjzbPNjAdzK5TfbL96gDe9tfrwEF/W80jpD15N6vrB5BvY/E/PllY/bnM21P1K26lzrxRrnzzahxgX4d7ANp9ibalvWwYeUNh/OTv1BNgDC1x9bWLKJr4qC3e833xrtc15WfljDtrDsZoUyqJWDfeaM36K5+ueb/0arSb+H+l9k6cmtxnMoVlmojlO4uNmufCwTcXPtyosU3CZOhQ+qfU68Qov+ks9jdsx7sY3tLb1rJz/QrLLzcvAV3Hfnvfd6jfHGZ/n2KxeNfc5qJZG3s96ByKvBcXNWGwo57Jx1A8q+h43t9oHYtecVD5pNz/thzXdczRZ8/qPVxomyResM2tJ574K8keg2e3CqN8TvM8tKttvY0H04m9cSc2v/hjKXtxaLzQXLuoCG1riYL+IkkvUB65jz2ouXcNLTeV9s/dca7r/lLTabW3hFfQDa5Pyl+DZVLs/97P0BGz/n5ds/rdHbl296FjR1bwuuA+7aZ63W4jZGpfP51iKxVfyhTHCJwcXP4ehzHjSKQ3V7W94l+AMB6nzx4zbVdekQtrxr2+Vy4WX7xrbJFnnpj8V2/i01E+oqvyt+Dn9qcDbv2iSdGVzKeVr8IY3EAHXQyj8vZlNlNKB9ZGurBXcYZ7UutpAtDnf4BezYuyXY7JMt/Pjj1g0k/JS3/nxxnyKGc34Qbtgz7ye0GrCtXzy84MZWZUGxJWesia02HCXYwpjQuAiFMXZQ9dDgZ1OX1ARIB1trnG4K3BqDLbjK0vOD5Vsv1gR10ALvv2k7sHBjW81M7nmLGC/42eJrF9m6dgmLbnlniK3KQhJKsnOLTWKLn1+8gFrix6ljsQXn/SdcKJzuVnL/rPW52LW3ldxvXITWuMjWteytVxA0z1nzLz2TLVd4Z9UDaoVtwTY47BKjXOMp7+CNTDDKuBVm6waydXkrGWQLz++9Tj1FEomv0mfe56LrFWwJnPPwJrsc7A22gW0JtuioOe+HZTRp5+W1zC1q2I/JgzfqlvXPFuN7z9uvMBxaP7lzFtwmXEwKhvv2GZCAT/sCW+PnwXycl4uTT8k3zxY3Md39yz4EjzlrcRu3CrZAqwq2bHzx9c+e1cxiDHdclWgMsLV4bc12Us/QEwNsufxH6y07a/1BsfXO+1xc5px3sIyPS7+BL/9cfL2GHe9N79o+sfWhMDb5HqMk2tbrsYs/QfjbejW5JeLWUy/5S3asz7wRsdXe3Gy1vGJyHyM7tKhxC7ye7GJvC3qAfWph47PFN+fA6PYu/lR7Z5FttTcp1Cq2blqv14gtptgS7wlKLV+EUm/LKPS7sVWE02+2FymU8PPFC0y8LhXs/B2Y9U3sN2wcFJBtCba2xJk/QCFiC05401sktjYxyhcvkIWDDaZeQvv+aV3aQ8+B+1/6EfpE60Khr3dvC7YOPM/anCrgEpBbeM73wIoYd5xdbMseHdg604AbBWdu/JyUniieIiFPXNzmp6wPgi2OcSsp2MJmlcbfbxVJTXRna9Hy8r/Q7B6xZeMT77DnpnWwxkrP4WS47k6xxZCFgywu6R5Htqh/821r85fh4aaXf+tSuWvbcIf508XtOWIL+67S5Pqt4rVt1gf8PrFGTT/ntZrN4ef51yJWs8sYQxVbl4DGyZfXtiG2CbZ+EsbiCLZYwztYb98w2aJRAU2J7d3yPqgRWoit5EGaejdqDrCFb/nClQUcXb05XMkTf67JlievltsiboEn4jbqE7Fp5zwRt7awsT+MQW9PtxFCiouPcu0990xV1ytb4iMY9EvSPlZbcQRiZl+z9QFIGW5fcMNswR2b88C24MLzmwG2gIw9CxoO+vslCpSucYvCtGoNeSLBbbwTOrCFVukE2AIWSN/DqGbPgrbCXugT1/w+8ZaFOgvK7bNTg8MioMIhjYvwEaLnWe9VP3Mpuk8U4+fLXvJMOZ0uv/QoiDDqFUXJ0mcgqBrP20CUZkt4YnqNCdsCvd9uBdjCN029K74qo20B2YewdW1N5wX4ee8VPj2WBuU/Z90Yg8+Fn9Fc0IUMtkSfiGkF52Uexh6Jc6i3ZJ9IHcIlUW4f/LkNdAu2SkKcFZ4X+7Ithlo++VYNUs9ZQuRSMMBh8J7n21YSgtkzD84Md476RC9vaHn4jZFGe+IW2RYY/k1rcbG54GGo0APAoJa/tqZXdfHzWwdSpTunPJLn7NQi/LVZF0/EFASHUJsUWh5P+2cSwY7oPuew9Q10O+echZ6Iqi650NwqXtvvgylURvxp5QOj/IHrvNz8QImO9L/yb8gQ9m4dKLaeb8Ll77U/uKzxLzVOpLUrKNVhnLiNA/z3lRc1Fzv0xs+bGSmwClUcmr1N63SCq9nCDec2P66pDp1DBVjlL//6N57wDOXaxjc/pvExURgDKrZ+/qgHei4rY/2bGVe3Evz+GYwvObvZ/rgPGiv/huMAlkJj+hkUzr/tb/23bQsNhFTZ4skSTKgRi1xm6nS6gOEb58W7E13HeLDcJVZclUGFesRj5654WzPHJzBFJ6Kg2XJpslfPW3KzUqYyV+KLP8mm8iWa8Ro+qOmqFK4jnoZUZ0cWlXahIsazoD1C/E9VYHyCmQ2aSZY5OOxsoftwXS3A8ZXDlFzBH4cIVjkFWyZV0PEoj4EFOadXnuoMlZ/fstn5C/pq8ab4yTk3IXNlDqO8EeZpKH2EGT1b/a+D/FbR/Ra80ib4kqBStlijYOSCxX592X2QJbM/IjkmbplOqImMKGNGug7ZpPwJXozt+tk3rnooXK+EB9hmi7giU2MvrdpNd8Ax9lGeFuUmJSK5SJ8h667fNMxyGRdhXL5YpOcnhNUuce9E9Xa/2UB6wJzuuZmAV8lvP5sqfrv0cLBICjoqtc4EqRyfOGBkBMLSlLsEaJIZWcotyiPJtFR2Xt8x/7yU1LZVu/x6ul8u9vEytYmjLpFmVgNwRWp/edOOoSUPflBnCBTwryFUXO0Q12aElQ6rD11r56obffpATcGmHArD4bvs7JepCBEiRIgQIUKECBEiRIgQIUKECBEiRIgQIUKECBEiRIgQIUKECBEiRIgQIUKECBEiRPi/w/8A/ox1lhSp8G0AAAAASUVORK5CYII="
              width="300px"
            />
            <div className="commentlikeall">
            <div className="comment1">
              <img width="25px" src={contactimgpng} alt="" />
              <h4 className="commentallfontfam" >Lorem ipsum</h4>
              <button className="sectorbutton">Sector 1</button>
              </div>
              <div className="comment2" >
                <h4 className="commentallfontfam"  >Lorem ipsum dolor sit amet consectetur adipisicing elit. </h4>

              </div>
              <div className="comment3">
                <div className="comment3subdiv">
                <img width="20px" src={love} alt="" />
                
                <h5 className="commentallfontfam"  >2k</h5></div>
                <div className="comment3subdiv">
                <img width="15px"  src={commentimg} alt="" />
                
                <h5 className="commentallfontfam"  >2k</h5></div>
                <div className="comment3subdiv">
                <img width="20px"  src={eye} alt="" />
                
                <h5 className="commentallfontfam" >2k</h5></div>
                <div className="comment3subdiv">
                <img width="13px"  src={share} alt="" />
                <h5 className="commentallfontfam" >2k</h5></div>
                </div>


              </div>

            </div>
            
            
          </div>
          <div className="secondcommentlike">
          <div className="commentlikeall1">
            <div className="comment12">
              <img width="25px" src={contactimgpng} alt="" />
              <h4 className="commentallfontfam" >Lorem ipsum</h4>
              <button className="sectorbutton">Sector 1</button>
              </div>
              <div className="comment2" >
                <h4 className="commentallfontfam"  >Lorem ipsum dolor sit amet consectetur adipisicing elit. </h4>

              </div>
              <div className="comment3">
                <div className="comment3subdiv">
                <img width="20px" src={love} alt="" />
                
                <h5 className="commentallfontfam"  >2k</h5></div>
                <div className="comment3subdiv">
                <img width="15px"  src={commentimg} alt="" />
                
                <h5 className="commentallfontfam"  >2k</h5></div>
                <div className="comment3subdiv">
                <img width="20px"  src={eye} alt="" />
                
                <h5 className="commentallfontfam" >2k</h5></div>
                <div className="comment3subdiv">
                <img width="13px"  src={share} alt="" />
                <h5 className="commentallfontfam" >2k</h5></div>
                </div>


              </div>
              </div>

        </div>
        <div className="disscussiondiv2">
          <h2 className="disscusionform">MARKET STORIES</h2>
          <div className="imagaefulldiv">
        <div className="imagediv">
            <div className="spandiv">

            
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, officia, repudiandae s nobis </span>
            </div>
        </div>
        <div className="imagediv2">
            <div className="spandiv">
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, officia, repudiandae similique quae </span>
            </div>
        </div>
        </div>
        <div className="imagaefulldiv">
        <div className="imagediv2">
            <div className="spandiv">

            
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, officia, repudiandae s nobis </span>
            </div>
        </div>
        <div className="imagediv">
            <div className="spandiv">
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, officia, repudiandae similique quae </span>
            </div>
        </div>
        </div>
        <div className="imagaefulldiv">
        <div className="imagediv">
            <div className="spandiv">

            
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, officia, repudiandae s nobis </span>
            </div>
        </div>
        <div className="imagediv2">
            <div className="spandiv">
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, officia, repudiandae similique quae </span>
            </div>
        </div>
        </div>
        </div>
      </div>
      <div></div>
    </aside>
  );
}
