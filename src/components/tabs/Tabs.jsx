import { useState } from 'react';
import { v4 } from 'uuid';
import {
	StyledInfo,
	StyledInfoContainer,
	StyledList,
	StyledTab,
	TabsContainer
} from './styles';
const tabs = ['Tab 1', 'Tab 2', 'Tab 3'];
const tabsInfo = ['Info 1', 'Info 2', 'Info 3'];

const Tabs = () => {
	const [tabActive, setTabActive] = useState(0);
	return (
		<>
			<div>
				<span
					className={tabActive === 0 ? 'active' : ''}
					onClick={() => setTabActive(0)}
				>
					Tab 1
				</span>
				<span
					className={tabActive === 1 ? 'active' : ''}
					onClick={() => setTabActive(1)}
				>
					Tab 2
				</span>
				<span
					className={tabActive === 2 ? 'active' : ''}
					onClick={() => setTabActive(2)}
				>
					Tab 3
				</span>
			</div>
			{tabActive === 0 && (
				<div>
					<p>TAB 1</p>
				</div>
			)}
			{tabActive === 1 && (
				<div>
					<p>TAB 2</p>
				</div>
			)}
			{tabActive === 2 && (
				<div>
					<p>TAB 3</p>
				</div>
			)}
			<TabsContainer>
				<StyledList>
					{tabs.map((tab, index) => (
						<StyledTab
							key={v4()}
							onClick={() => setTabActive(index)}
							active={index === tabActive}
						>
							{tab}
						</StyledTab>
					))}
				</StyledList>
				<StyledInfoContainer>
					<StyledInfo>{tabsInfo[tabActive]}</StyledInfo>
				</StyledInfoContainer>
			</TabsContainer>
		</>
	);
};

export default Tabs;
