import styled from 'styled-components';


import BreadcrumbBG from 'assets/images/blog/breadcrumb/blog-breadcrumb.jpg';

const PageHeaderWrapper = styled.div`
        position: relative;
        overflow: hidden;
        z-index:1;
        margin-bottom: 130px;
        background: url(${BreadcrumbBG}) no-repeat;
        &::before{
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background: rgb(200,56,231);
            background: linear-gradient( 0deg,rgba(200,56,231,1) 0%,rgba(31,42,213,1) 100% );
            content: "";
            opacity: .65;
        }
        .page-header {
            text-align: center;
            padding: 272px 0px 220px;
            position: relative;
            z-index: 99;
            h1{
                font-size: 110px;
                line-height: 160px;
                margin: 0 0 10px 0;
            }

        .breadcrumbs {
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 24px;
            color: ${props => props.theme.white};
            a {
                color: inherit;

                &:hover{
                    opacity: .8;
                }
            } 
            a+a {
                margin: 0 15px 0px 7px;
            }
            h4 {
                margin:0 7px;
                opacity: .7;
            }
            &.page {
                a {
                   font-weight: 600;
                }
                span {
                    margin: 0 7px;
                }
                span+span{
                    margin-left: 0;
                    transform: translateY(5px);
                }
            }


        } 
    }
    @media only screen and (max-width: 480px) {
       .page-header{
            padding: 160px 0px 100px;
            h1{
                font-size: 30px;
                line-height: 44px;
            }
       }
    }
`

export default PageHeaderWrapper;