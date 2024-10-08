export const utils = {
  maxCharHeight: 2,
  maxCharAdult: 3,
  verifyNum: /^[0-9]+$/,
  verifyChar: /^[a-zA-Z]+$/,
  timeout: 13000,
  yes: ["yes", "Yes", "Y", "y"],
};

export const minHeight = {
  river: 36,
  pool: 42,
  slide: 48,
  minRideHeight: 36,
};

export const globalPrompt = {
  title: `Wild Waves Aquatic Park`,
  disclaimer: `*Please note: minimun height requirements are enforced at each
      attraction*`,
  ask_user_height: `How tall are you in inches?`,
  ask_user_with_adult: `Are you with an adult?`,
  syntax_error: `Please Follow Instructions : Alphanumeric Characters Only : No Spaces : Please Try Again`,
  river_button: `Fill in information below & click here to purchase a Lazy River ticket`,
  allowedRiverA: `Here is your ticket, enjoy the Relaxing Lazy River!`,
  allowedRiverB: `You are allowed on any ride with an adult, enjoy the Relaxing Lazy River!`,
  deniedRiver: `You must be at least ${minHeight.river} inches tall or with an adult to enjoy the Relaxing Lazy River!`,
  slide_button: `Fill in information below & click here to purchase a Water Slide ticket`,
  allowedSlideA: `Here is your ticket, enjoy the Wild Water Slide!`,
  allowedSlideB: `You are allowed on any ride with an adult, enjoy the Wild Water Slide!`,
  deniedSlide: `You must be at least ${minHeight.slide} inches tall or with an adult to enjoy the Wild Water Slide!`,
  wave_button: `Fill in information below & click here to purchase a Wave Pool ticket`,
  allowedPoolA: `Here is your ticket, enjoy the Wacky Wave Pool!`,
  allowedPoolB: `You are allowed on any ride with an adult, enjoy the Wacky Wave Pool!`,
  deniedPool: `You must be at least ${minHeight.pool} inches tall or with an adult to enjoy the Wacky Wave Pool!`,
  deniedAll: `You must be at least ${minHeight.minRideHeight} inches tall to ride any attration whether with an adult or not!`,
};
