import styled from 'styled-components';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import 'react-tabs/style/react-tabs.css';


const TabsWrapper = styled(Tabs)``;
const TabItemWrapper = styled(Tab)``;
const TabListWrapper = styled(TabList)``;
const TabPanelWrapper = styled(TabPanel)``;

export {
    TabsWrapper,
    TabListWrapper,
    TabItemWrapper,
    TabPanelWrapper,
}