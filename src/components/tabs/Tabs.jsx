import { useState } from 'react';
const tabsInfo = ['Tab 1', 'Tab 2', 'Tab 3'];

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
			{/* {tabActive === 1 && (
				<div>
					<p>TAB 1</p>
				</div>
			)}
			{tabActive === 2 && (
				<div>
					<p>TAB 2</p>
				</div>
			)}
			{tabActive === 3 && (
				<div>
					<p>TAB 3</p>
				</div>
			)} */}
			<div>
				<p>{tabsInfo[tabActive]}</p>
			</div>
		</>
	);
};

export default Tabs;
