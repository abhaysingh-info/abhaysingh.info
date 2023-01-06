const animationClasses = [
	{
		targetClass: 'top-animation',
		animationClass: 'top-to-initial',
	},
	{
		targetClass: 'bottom-animation',
		animationClass: 'bottom-to-initial',
	},
	{
		targetClass: 'left-animation',
		animationClass: 'left-to-initial',
	},
	{
		targetClass: 'right-animation',
		animationClass: 'right-to-initial',
	},
	{
		targetClass: 'zoom-in-animation',
		animationClass: 'zoom-in',
	},
	{
		targetClass: 'zoom-out-animation',
		animationClass: 'zoom-out',
	},
]

const entriesExecutor = async (entries: any) => {
	entries.forEach((entry: any) => {
		const element = entry.target

		for (let animation of animationClasses) {
			if (element.classList.contains(animation.targetClass)) {
				if (entry.isIntersecting) {
					element.classList.add(animation.animationClass)
					return // if we added the class, exit the function
				}
				// element.classList.remove(animation.animationClass)
				return // if we added the class, exit the function
			}
		}
	})
}

export const CustomIntersectionObserver = () =>
	new IntersectionObserver(
		(entries) => {
			entriesExecutor(entries)
		},
		{ threshold: 0 },
	)
