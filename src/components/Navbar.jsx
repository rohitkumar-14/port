import React, { useEffect } from "react";
import logo from "../img/logo/po-logo2.1.png";
import { NavLink } from "react-router-dom";
import phone from "../img/icon/ph-phone-1.2.svg"
import email from "../img/icon/po-mail-1.2.svg"
import location from "../img/icon/po-location-1.2.svg"

const Navbar = () => {
  useEffect(() => {
    const mobileNavOpen = document.querySelector(".mobile-nav-icon");
    const mobileSidebar = document.querySelector(".mobile-sidebar");
    const mobileNavClose = document.querySelector(".menu-close");
    const mobileNavLinks = document.querySelectorAll(".mobile-nav a");

    // Open and close mobile sidebar
    const handleOpenSidebar = () => mobileSidebar.classList.add("mobile-menu-active");
    const handleCloseSidebar = () => mobileSidebar.classList.remove("mobile-menu-active");

    mobileNavOpen.addEventListener("click", handleOpenSidebar);
    mobileNavClose.addEventListener("click", handleCloseSidebar);

    // Handle menu links
    mobileNavLinks.forEach((link) => {
      const href = link.getAttribute("href");
      if (href === "#") {
        link.classList.add("hash-nav");
      } else {
        link.classList.remove("hash-nav");
      }
    });

    // Add sub-menu functionality
    const menuItems = document.querySelectorAll(".mobile-nav li ul");
    menuItems.forEach((item) => {
      const parent = item.parentElement;
      parent.classList.add("has-sub");

      const submenuButton = document.createElement("span");
      submenuButton.classList.add("submenu-button");
      submenuButton.innerHTML = "<em></em>";
      parent.insertBefore(submenuButton, item);

      submenuButton.addEventListener("click", () => {
        submenuButton.classList.toggle("submenu-opened");
        const subMenu = submenuButton.nextElementSibling;
        if (subMenu.classList.contains("open-sub")) {
          subMenu.classList.remove("open-sub");
          subMenu.style.display = "none";
        } else {
          subMenu.classList.add("open-sub");
          subMenu.style.display = "block";
        }
      });
    });

    // Handle resize fixes
    const handleResize = () => {
      if (window.innerWidth > 991) {
        menuItems.forEach((item) => {
          item.style.display = "block";
        });
      }
    };
    window.addEventListener("resize", handleResize);

    // Cleanup event listeners on unmount
    return () => {
      mobileNavOpen.removeEventListener("click", handleOpenSidebar);
      mobileNavClose.removeEventListener("click", handleCloseSidebar);
      window.removeEventListener("resize", handleResize);
      menuItems.forEach((item) => {
        const submenuButton = item.previousElementSibling;
        submenuButton && submenuButton.removeEventListener("click", () => {});
      });
    };
  }, []);
  return (
    <>
      <header>
        <div className="po-header-area po-stiky-header-2 d-none d-lg-block stiky">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-3 col-md-6 col-6">
                <div className="po-logo">
                  <NavLink to="/">
                    <img src={logo} alt="" />
                  </NavLink>
                </div>
              </div>
              <div className="col-lg-9">
                <div className="po-header-menu-2 rounded-7 d-none d-lg-block bg-white-10">
                  <div className="po-main-menu po-main-menu-2">
                    <ul>
                      <li>
                        <NavLink to="/">Home</NavLink>
                      </li>
                      <li>
                        <NavLink to="/about">About Us</NavLink>
                      </li>
                      <li>
                        <NavLink to="/journey">Journey </NavLink>
                      </li>
                      <li>
                        <NavLink to="/achievements">Achievements</NavLink>
                      </li>
                      <li>
                        <NavLink to="/controversies">Controversies</NavLink>
                      </li>
                      <li>
                        <NavLink to="/contact">Contact</NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div class="mobile-header mobile-header-2 mobile-header-main d-block d-lg-none">
        <div class="container-fluid">
          <div class="col-12">
            <div class="mobile-header-elements">
              <div class="mobile-logo">
                <NavLink to="/">
                  <img src={logo} alt="" />
                </NavLink>
              </div>
              <div class="mobile-nav-icon">
                <i class="fa-solid fa-bars"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mobile-sidebar d-block d-lg-none">
        <div class="logo-m">
          <NavLink to="/">
            <img src={logo} alt="" />
          </NavLink>
        </div>
        <div class="menu-close">
          <i class="fa-solid fa-xmark"></i>
        </div>
        <div class="mobile-nav">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About Us</NavLink>
            </li>
            <li>
              <NavLink to="journey">Journey</NavLink>
            </li>
            <li>
              <NavLink to="/achievements">Achievements</NavLink>
            </li>
            <li>
              <NavLink to="/controversies">Controversies</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>

          <div class="single-footer-items">
            <h3>Contact Us</h3>

            <div class="contact-box">
              <div class="mob-icon">
                <span>
                  <img src={phone} alt="" />
                </span>
              </div>
              <div class="pera">
                <NavLink to="tel:+880123456789">+880 123 456 789</NavLink>
              </div>
            </div>

            <div class="contact-box">
              <div class="mob-icon">
                <span>
                  <img src={email} alt="" />
                </span>
              </div>
              <div class="pera">
                <NavLink to="mailto:info@mail.com">info@mail.com</NavLink>
              </div>
            </div>

            <div class="contact-box">
              <div class="mob-icon">
                <span>
                  <img src={location} alt="" />
                </span>
              </div>
              <div class="pera">
                <NavLink to="tel:+880123456789">
                  8502 Preston Rd. <br />
                  Inglewoo Maine 98380
                </NavLink>
              </div>
            </div>
          </div>

          <div class="contact-infos">
            <h3>Our Location</h3>
            <ul class="social-icon">
              <li>
                <NavLink to="https://www.facebook.com/share/1XoZhX4UtH/?mibextid=LQQJ4d">
                  <i class="fa-brands fa-facebook-f"></i>
                </NavLink>
              </li>
              <li>
                <NavLink to="https://x.com/sjaiswal_ias?s=21">
                  <i class="fa-brands fa-x-twitter"></i>
                </NavLink>
              </li>
              <li>
                <NavLink to="https://in.linkedin.com/in/sanjeev-jaiswal-i-a-s-426834318">
                  <i class="fa-brands fa-linkedin-in"></i>
                </NavLink>
              </li>
              <li>
                <NavLink to="https://www.instagram.com/sanjeevjaiswalias?igsh=ZTkwbTN2NmZteXI3">
                  <i class="fa-brands fa-instagram"></i>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
