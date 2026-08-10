/** Tutorial step identifiers used in content paths and URLs. */
export const tutorialSteps = ['components', 'assembly', 'wiring', 'testing'] as const;

export type TutorialStep = (typeof tutorialSteps)[number];
