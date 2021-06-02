import styled from 'styled-components';

const NavigationWrap =  styled.header`
    background: ${props => props.theme.NavBG};
    position: fixed;
    width: 100%;
    z-index: 9999;
    top: 0;
    transition: all 0.3s ease 0s;
    border-bottom: 1px solid transparent;
  .navbar-wrap{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #6A598E;
  }
  .mobile-menu-icon {
    display: none;
    color: #1D316C;
    font-size: 24px;
  }
  .nav__button{
    width: 170px;
    height: 60px;
    background: ${props => props.theme.white};
    border-radius: 5px;
    font-size: 18px;
    color: ${props => props.theme.linkColor};
    transition: all 0.3s ease-in;
    &:hover,
    &:focus{
      outline: none;
      border: none;
      background: linear-gradient( 93deg,rgba(196,56,231,1) 0%,rgba(122,49,222,1) 52%,rgba(37,42,213,1) 100% );
      color: ${props => props.theme.white};
    }
  }
  /*Drop down style*/ 
  .dropdown{
    background: #fff;
    visibility: hidden;
    opacity: 0;
    min-width: 200px;
    border: 1px solid #f5f5f5;
    position: absolute;
    margin-top: 1rem;
    left: 20px;
    padding: 15px 0px;
    display: none;
    box-shadow: 0px 30px 70px 0px rgba(137,139,142,0.15);
    -webkit-transform: translateY(20px);
    -ms-transform: translateY(20px);
    transform: translateY(20px);
    transition: all 0.3s ease-in-out;
  }
  ul li:hover > ul,
  ul li ul:hover {
    opacity: 1;
    visibility: visible;
    -webkit-transform: translateY(0px);
    -ms-transform: translateY(0px);
    transform: translateY(0px);
    display: block;
  }
  
  nav {
    ul {
      margin: 0;
      padding: 0;
      list-style: none;
      display: flex;
      align-items: center;
    }
    li{
        position: relative;
        padding: 28px 0px 28px 40px;
        .dropdown{
          li{
            padding: 0;
            a{
              color: #1D316C;
              display: block;
              padding: 5px 15px;
              &:hover{
                color: ${props => props.theme.menuHoverColor ? props.theme.menuHoverColor : '#1F2AD5'} !important;
              }
              &:before{
                content: none;
              }
            }
          }
        }
      
      a, .nav-active{
        position: relative;
        color: #fff;
        font-size: 15px;
        transition: 450ms all;
        padding-bottom: 5px;
        cursor: pointer;
        &:before{
          content: '';
          position: absolute;
          left : 0;
          bottom:0;
          width: 20px;
          height: 1px;
          opacity: 0;
          background: ${props => props.theme.menuHoverColor ? props.theme.menuHoverColor : '#1F2AD5'};
          transition: 450ms all;
        }
        &:hover{
          color: ${props => props.theme.menuHoverColor ? props.theme.menuHoverColor : '#1F2AD5'};
          &:before{
            opacity: 1;
          }
        }
      }
    }
  }
  .logo{
    margin-top: 8px;
    transition: all 0.8s cubic-bezier(0.3, 0.8, 0.2, 1) 0s;
    img{
      width: 135px;
    }
  }
  &.scrolled{ 
    box-shadow: rgba(0, 0, 0, 0.05) 0px 10px 30px;
    background: #290E59;
    border-color: ${props => props.theme.NavBGSolid};
    .navbar-wrap{
      border-color: transparent
    }
    .logo{
        width: 100px;
    } 
    .nav{
      li{
        padding: 14px 0px 14px 40px;
        a{ 
          &:hover{
            color: ${props => props.theme.menuHoverColor ? props.theme.menuHoverColor : '#1F2AD5'};
          }
        }
      }
      li{
        .dropdown{
          li{
            padding: 0;
          }
        }
      }
    }
  }


  @media only screen and (max-width: 912px) {
    height: auto;
    min-height: 50px;
    padding: 15px 20px;
    background: #290E59;
    &.scrolled{
        padding: 8px 20px;
        border-color: transparent;
        .nav .collapsed {
          li{
            padding: 0;
            a{
              padding: 8px 10px;
              display: block;
            }
          }
          li+li{
            padding-left: 0;
          }
        } 
    }
    .has-dropdown{
      a{
        position: relative;
        &:before{
          content: '';
          
        }
      }
    }
    .dropdown{
      position: relative;
      left: 0;
      margin-top: 0;
      box-shadow: none;
    }
    .navbar-wrap{
        border-color: transparent;
        display: block;
        position: relative;
    }
    .logo {
      width: 100%;
      display: block;
      margin: 7px 0 0 0;
      img{width: 110px;}
    }
    .mobile-menu-icon {
      display: inline-block;
      position: absolute;
      top: 8px;
      right: 3px;
      cursor: pointer;
    }
    .nav{
        width: 100%;
        .mobile-menu-icon{
          color: white;
        }
      .collapsed {
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        transition: 450ms all ease-in-out;
        overflow: hidden;
        max-height: 0;

        &.is-expanded {
          padding-top: 15px;
          overflow-y: auto;
          max-height: 250px; /* approximate max height */
        }
        li {
          padding: 0;
          margin: 0px 0px;
          width: 100%;
          .dropdown{
            li{
              a{
                color: #1D316C;
              }
            }
          }
          a{
            padding: 8px 10px;
            display: block;
            color: white;
            &:before{
              content: none;
            }
          }
        }
      }
    }
  }

`

export default NavigationWrap;