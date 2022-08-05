/*
Формат CSS-переменной:
--theme-default-УникальноеИмя # дефолтная переменная
--theme-light-УникальноеИмя   # для "light"
--theme-dark-УникальноеИмя    # для "dark"
--theme-neitral-УникальноеИмя # для "neitral"
*/

export const changeCssVar = (theme) => {
	const root = document.querySelector(':root');

	const cssVar = ['header', 'bgimage'];

	cssVar.forEach((el) => {
		root.style.setProperty(
			`--theme-default-${el}`,
			`var(--theme-${theme}-${el})`
		);
	});
};
