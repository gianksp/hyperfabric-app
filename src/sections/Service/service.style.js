import styled from 'styled-components';


const ServiceSectionWrapper = styled.div`

    padding: 99px 0 100px 0;

    .service-item-wrapper{
        padding: 25px 32px;
        border-radius: 10px;
        background-color: #2B1867;

        .service-item {
            padding: 15px 0;
            border-radius: 8px;
            transition: all 0.3s ease-in;
            &:hover{
                background: #280D57;
            }
            img {
                height: 80px;
                margin-bottom: 20px;
            }

            h3 {
                font-size: 20px;
                font-weight: 500;
                margin: 0 0 14px 0;
            }
        }

        p {
            margin: 0;
        }
    }
    @media only screen and (max-width: 768px) { 
        .service-item{
            margin-bottom: 30px;
        }
        .service-item-wrapper{
            padding: 45px 32px 25px 32px;
        }
    }
    @media only screen and (max-width: 480px) { 
        padding: 55px 0 50px 0;
    }
`

export default ServiceSectionWrapper;