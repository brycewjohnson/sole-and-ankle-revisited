import React from 'react';
import styled from 'styled-components/macro';

import { MEDIA_QUERIES } from '../../constants';

import Breadcrumbs from '../Breadcrumbs';
import Select from '../Select';
import Spacer from '../Spacer';
import ShoeSidebar from '../ShoeSidebar';
import ShoeGrid from '../ShoeGrid';

const ShoeIndex = ({ sortId, setSortId }) => {
  return (
    <Wrapper>
      <MainColumn>
        <Header>
          <Title>Running</Title>
          <Select
            label="Sort"
            value={sortId}
            onChange={(ev) => setSortId(ev.target.value)}
          >
            <option value="newest">Newest Releases</option>
            <option value="price">Price</option>
          </Select>
        </Header>
        <Spacer size={32} />
        <ShoeGrid />
      </MainColumn>
      <LeftColumn>
        <Breadcrumbs>
          <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href="/sale/shoes">
            Shoes
          </Breadcrumbs.Crumb>
        </Breadcrumbs>

        <StyledShoeSidebar />
      </LeftColumn>
    </Wrapper>
  );
};

const StyledShoeSidebar = styled(ShoeSidebar)`
  margin-top: 40px;
  @media (${MEDIA_QUERIES.tabletAndUnder}) {
    display: none;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: baseline;
  gap: 32px;

  @media (${MEDIA_QUERIES.tabletAndUnder}) {
    flex-direction: column-reverse;
    gap: 0px;
  }
`;

const LeftColumn = styled.div`
  flex-basis: 248px;

  @media (${MEDIA_QUERIES.tabletAndUnder}) {
    flex-basis: 0;
  }
`;

const MainColumn = styled.div`
  flex: 1;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (${MEDIA_QUERIES.phoneAndUnder}) {
    label {
      display: none;
    }
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: var(--weight-medium);
`;

export default ShoeIndex;
