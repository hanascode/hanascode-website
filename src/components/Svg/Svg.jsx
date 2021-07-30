import styles from "./Svg.module.css";

export const Svg = ({ path= "", ...props }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 64 64"
		width="64pt"
		height="64pt"
		class={styles.SVG}
		{...props}
	>
		<defs>
			<clipPath id="_clipPath_FKx7hiv3dTxVnC3CffI68i7UlaH4l75p">
				<rect width="64" height="64"/>
			</clipPath>
		</defs>
		<g clip-path="url(#_clipPath_FKx7hiv3dTxVnC3CffI68i7UlaH4l75p)">
			<path d={path} fill-rule="evenodd" class={styles.Path} />
		</g>
	</svg>
);

export default Svg;