import styles from "./Anchor.module.css";

export const Anchor = ({ href, children, props}) => (
	<a href={href} rel="noopener noreferrer" class={styles.Anchor} {...props}>
		{children}
	</a>
);

export default Anchor;
