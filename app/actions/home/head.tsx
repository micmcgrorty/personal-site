export function HomeHead() {
	return () => (
		<style>
			{`@keyframes spine-draw { from { transform: scaleY(0); } to { transform: scaleY(1); } }
@media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation: none !important; transition: none !important; } }`}
		</style>
	);
}
