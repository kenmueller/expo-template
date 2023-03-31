if (!process.env.EAS_PROJECT_ID) throw new Error('Missing EAS_PROJECT_ID')

module.exports = ({ config }) => ({
	...config,
	updates: {
		url: `https://u.expo.dev/${process.env.EAS_PROJECT_ID}`
	},
	extra: {
		eas: { projectId: process.env.EAS_PROJECT_ID }
	}
})
