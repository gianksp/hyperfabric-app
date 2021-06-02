import styled from 'styled-components';

const AlertWrapper = styled.div`
    position: relative;
    padding: .75rem 1.25rem;
    margin-bottom: 1rem;
    border: 1px solid transparent;
    border-radius: .25rem;

    &.primary {
        color: #004085;
        background-color: #cce5ff;
        border-color: #b8daff;
      }
    &.secondary {
        color: #383d41;
        background-color: #e2e3e5;
        border-color: #d6d8db;
      }
    &.success {
        color: #155724;
        background-color: #d4edda;
        border-color: #c3e6cb;
      }
    &.info {
        color: #0c5460;
        background-color: #d1ecf1;
        border-color: #bee5eb;
      }
    &.warning {
        color: #856404;
        background-color: #fff3cd;
        border-color: #ffeeba;
      }
    &.danger {
        color: #721c24;
        background-color: #f8d7da;
        border-color: #f5c6cb;
      }
    &.light {
        color: #818182;
        background-color: #fefefe;
        border-color: #fdfdfe;
      }
    &.dark {
        color: #1b1e21;
        background-color: #d6d8d9;
        border-color: #c6c8ca;
      }
      
`

export default AlertWrapper;