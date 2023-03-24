import { useState } from 'react';
import { v4 } from 'uuid';
import {
	StyledInfo,
	StyledInfoContainer,
	StyledList,
	StyledTab,
	TabsContainer
} from './styles';
import styles from './tabs.module.scss';

const tabs = ['Tab 1', 'Tab 2', 'Tab 3'];
const tabsInfo = ['Info 1', 'Info 2', 'Info 3'];

const Tabs = () => {
	const [tabActive, setTabActive] = useState(0);
	return (
		<>
			<h1>Tabs</h1>
			<div className={styles['tabs-container']}>
				<ul className={styles.list}>
					{tabs.map((tab, index) => (
						<li
							key={v4()}
							onClick={() => setTabActive(index)}
							className={`${styles['list-item']} ${
								index === tabActive && styles.active
							} `}
						>
							{tab}
						</li>
					))}
				</ul>
				<div className={styles['info-container']}>
					<p className={styles.info}>{tabsInfo[tabActive]}</p>
				</div>
			</div>
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
