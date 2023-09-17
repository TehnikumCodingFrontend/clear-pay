import { Incomes } from "../components/ProfileElems/Incomes";
import {
  SCUserInfoBlock,
  SCUserMonitoring,
} from "../components/ProfileElems/ProfileElems.style";
import { Statistics } from "../components/ProfileElems/Statistics";
import { UserBio } from "../components/ProfileElems/UserBio";
import { PageElemsWrapper } from "../theme/globalStyle";

export const ProfilePage = () => {
  return (
    <>
      <h1>Личный кабинет</h1>
      <PageElemsWrapper>
        <SCUserInfoBlock>
          <UserBio />
        </SCUserInfoBlock>
        <SCUserMonitoring>
          <Statistics />
          <Incomes />
        </SCUserMonitoring>
      </PageElemsWrapper>
    </>
  );
};
