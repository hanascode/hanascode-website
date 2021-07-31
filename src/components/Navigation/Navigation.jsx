import Anchor from "../Anchor/Anchor.jsx";
import Svg from "../Svg/Svg.jsx";
import styles from "./Navigation.module.css";

export const Navigation = ({ links = [], ...props}) => (
	<nav class={styles.Navigation}>
		{
			links.map(({ logo, title, url }) => (
				<Anchor
					class={styles.Anchor}
					href={url}
					aside={true}
					title={`Hanascode's ${title} profile`}
					key={title}
					{...props}
				>
					<Svg description={`${title}'s logo`} path={logo} title={title}/>
				</Anchor>
			))
		}
	</nav>
);

export default Navigation;