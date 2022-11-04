//* node_modules
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Container,
  Row,
  Col,
  NavItem,
  Nav,
  NavLink,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";

//* icons
import {
  FacebookIcon,
  OutlinePostOfficeIcon,
  PhoneIcon,
  BriefcaseIcon,
  ThListIcon,
  OutlinePhotoSizeSelectActualIcon,
  RegNewspaperIcon,
  PhoneSquareAltIcon,
  ChevronDownIcon,
  MenuIcon,
} from "../../assets/icons";

//* Style Files
import "./index.scss";
import logo from "../../assets/uploads/logo.png";
//require("/Users/oguzhan/Desktop/ottomar-dogaltas/src/assets/uploads/logo.png")

//*Reducers
import { currentCategory } from "../../app/reducers/categorySlice";

const Header = (props) => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.value);

  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [toggle3, setToggle3] = useState(false);

  return (
    <section className="header">
      <div className="topbar">
        <Container>
          <Row>
            <Col sm="6" md="6" lg="6">
              <div className="topbar-call">
                <ul>
                  <li>
                    <OutlinePostOfficeIcon />
                    info@ottomardogaltas.com.tr - ottomardogaltas@gmail.com
                  </li>
                  <li>
                    <PhoneIcon />{" "}
                    <a href="tel:+90 532 723 54 03 ">
                      {" "}
                      <span>+90 532 723 54 03 </span>{" "}
                    </a>{" "}
                  </li>
                </ul>
              </div>
            </Col>
            <Col sm="6" md="6" lg="6">
              <div className="topbar-social d-flex justify-content-end">
                <ul>
                  <li className="social-facebook">
                    <a href="https://facebook.com/ottomardogaltas">
                      <FacebookIcon />
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="menu">
        <Container>
          <Row>
            <Col
              className="d-flex align-items-center justify-content-between"
              md="12"
              lg="12"
            >
              <Link to="/">
                <img
                  className="menu-logo"
                  src={logo}
                  alt="Ottomar Doğaltaş"
                  width="148px"
                />
              </Link>

              <Nav className="menu-bar">
                <Dropdown
                  nav
                  disabled
                  onMouseEnter={() => setToggle1(true)}
                  onMouseLeave={() => setToggle1(false)}
                  isOpen={toggle1}
                >
                  <DropdownToggle nav>
                    <BriefcaseIcon className="mx-1" />
                    KURUMSAL
                    <ChevronDownIcon />
                  </DropdownToggle>
                  <DropdownMenu>
                    <Link to="/hakkimizda" className="dropdown-item">
                      Hakkımızda
                    </Link>
                    <Link to="/insan-kaynaklari" className="dropdown-item">
                      İnsan Kaynakları
                    </Link>
                  </DropdownMenu>
                </Dropdown>
                <NavItem>
                  <Link to="/hizmetler" className="d-flex align-items-center">
                    <BriefcaseIcon className="mx-1" />
                    HİZMETLER
                  </Link>
                </NavItem>
                <Dropdown
                  nav
                  disabled
                  onMouseEnter={() => setToggle2(true)}
                  onMouseLeave={() => setToggle2(false)}
                  isOpen={toggle2}
                >
                  <DropdownToggle nav>
                    <ThListIcon className="mx-1" />
                    ÜRÜNLER
                    <ChevronDownIcon />
                  </DropdownToggle>
                  <DropdownMenu>
                    {categories.map((c) => {
                      return (
                        <Link
                          to={"/urunler/" + c.categoryLink}
                          key={c.categoryId}
                          className="dropdown-item"
                          onClick={() => {
                            dispatch(currentCategory(c));
                          }}
                        >
                          {c.categoryName}
                        </Link>
                      );
                    })}
                  </DropdownMenu>
                </Dropdown>
                <Dropdown
                  nav
                  disabled
                  onMouseEnter={() => setToggle3(true)}
                  onMouseLeave={() => setToggle3(false)}
                  isOpen={toggle3}
                >
                  <DropdownToggle nav>
                    <OutlinePhotoSizeSelectActualIcon className="mx-1" />
                    GALERİ
                    <ChevronDownIcon />
                  </DropdownToggle>
                  <DropdownMenu>
                    <Link
                      to="/galeri/fotograf-galerisi"
                      className="dropdown-item"
                    >
                      Fotoğraf Galerisi
                    </Link>
                    <Link to="/galeri/video-galerisi" className="dropdown-item">
                      Video Galerisi
                    </Link>
                  </DropdownMenu>
                </Dropdown>

                <NavItem>
                  <Link to="/haberler" className="d-flex align-items-center">
                    <RegNewspaperIcon className="mx-1" />
                    HABERLER
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/iletisim" className="d-flex align-items-center">
                    <PhoneSquareAltIcon className="mx-1" />
                    İLETİŞİM
                  </Link>
                </NavItem>
              </Nav>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export const MobileNav = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <section className="mobile-header">
      <div className="topbar">
        <Container>
          <Row>
            <Col sm="6" md="6" lg="6">
              <div className="topbar-call text-center">
                <ul>
                  <li>
                    <OutlinePostOfficeIcon />
                    info@ottomardogaltas.com.tr - ottomardogaltas@gmail.com
                  </li>
                  <li>
                    <PhoneIcon />{" "}
                    <a href="tel:+90 532 723 54 03 ">
                      {" "}
                      <span>+90 532 723 54 03 </span>{" "}
                    </a>{" "}
                  </li>
                </ul>
              </div>
            </Col>
            <Col sm="6" md="6" lg="6">
              <div className="topbar-social d-flex justify-content-center">
                <ul>
                  <li className="social-facebook">
                    <a href="https://facebook.com/ottomardogaltas">
                      <FacebookIcon />
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="mobile-menu">
        <Container>
          <Row>
            <Col>
              <div class="topnav">
                <Link to="/">
                  <img
                    className="menu-logo"
                    src={logo}
                    alt="Ottomar Doğaltaş"
                    width="120px"
                  />
                </Link>
                <div id="myLinks">
                  <Link to="/hizmetler" className="d-flex align-items-center">
                    <BriefcaseIcon className="mx-1" />
                    HİZMETLER
                  </Link>
                  <Link to="/haberler" className="d-flex align-items-center">
                    <RegNewspaperIcon className="mx-1" />
                    HABERLER
                  </Link>
                  <Link to="/iletisim" className="d-flex align-items-center">
                    <PhoneSquareAltIcon className="mx-1" />
                    İLETİŞİM
                  </Link>
                </div>
                <Link to="">
                  <MenuIcon />
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Header;
