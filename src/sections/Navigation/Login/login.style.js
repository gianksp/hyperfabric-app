import styled from 'styled-components';

const LoginWrap =  styled.div`
margin-right: 25px;
.sign {
    line-height: 34px;
}

.lowpad {
    padding-left: 10px;
}

.usr {
    text-align:right;
}

.nami {
    padding: 0px;
    margin: 0px;
}

.avi {
    border-radius: 50%;
    height: 64px;
    cursor:pointer;
    width: 64px;
    object-fit: cover;
}

.outgo {
    width: 5px;
    color: white;
    margin-top: 8px;
}
.cont {
    position: absolute;
    top:0;
    left:0;
    z-index: 2000;
    height:450px;
    width:400px;
    background-color: darkslateblue !important;
    border-radius:10px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
    box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
    -webkit-background-clip: padding-box;
    -moz-background-clip: padding-box;
    background-clip: padding-box;
    padding:40px !important;
}

.light {

    font-weight:100 !important;
    text-align:center;
}

.button {
    background-color: blueviolet;
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
    text-align: center;
    margin: 0 auto;
    padding: 0px;
    width: 150px;
  }
  
  .button1 {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
  }
  
  .button2:hover {
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
  }

  .cen {
      margin: 0 auto;
      padding: 0px;
  }

  input[type=text], select {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
  
  input[type=submit] {
    width: 100%;
    background-color: #4CAF50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  input[type=submit]:hover {
    background-color: #45a049;
  }
  
  div {
    border-radius: 5px;
  }

  .nopad {
      padding: 22px;
  }

  .imager {
    padding: 20px 10px;
  }

  .nav__button {
      margin-left: 10px;
  }

`

export default LoginWrap;