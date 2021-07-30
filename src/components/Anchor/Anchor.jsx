import styles from "./Anchor.module.css";

export const Anchor = ({ href, aside = false,  children, props}) => (
	<a href={href} rel="noopener noreferrer" target={aside ? "_blank" : undefined} class={styles.Anchor} {...props}>
		{children}
	</a>
);

export default Anchor;
