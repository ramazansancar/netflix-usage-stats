/**
 * Calculate achievements based on viewed items
 * @param {*} viewedItems
 */
function calculateAchievements(viewedItems) {
  initializeAchievementsModel();
  console.log('Calculating achievements...');
  // TODO Calculate actual achievements
  // Achievement 1
  summary.achievements.achievement1.won = summary.seriesCount > 1;

  // Achievement 2
  summary.achievements.achievement2.won = summary.moviesCount > 10000;

  // Achievement 3
  summary.achievements.achievement3.won = summary.episodesCount > 1;

  console.log('Calculated achievements', summary.achievements);
}

/**
 * Show achievements in achievements template
 * @param {*} viewedItems
 */
function showAchievements(viewedItems) {
  console.log('Mostrando logros!', viewedItems);

  for (const achievement of _.keys(summary.achievements)) {
    document.querySelector(`#${achievement} .ns-title`).textContent = summary.achievements[achievement].title;
    document.querySelector(`#${achievement} .ns-description`).textContent =
      summary.achievements[achievement].description;
    if (summary.achievements[achievement].won) {
      document.querySelector(`#${achievement} i`).textContent = 'emoji_events';
    } else {
      document.querySelector(`#${achievement} i`).textContent = 'event_busy';
    }
  }
}

/**
 * Initializes the list of achievements and the title and description for each achievement
 */
function initializeAchievementsModel() {
  console.log('Initializing achievements...');

  summary.achievements = {
    achievement1: {},
    achievement2: {},
    achievement3: {},
  };
  // TODO Add actual achievements

  for (const achievement of _.keys(summary.achievements)) {
    console.log('Achievement:', achievement);
    summary.achievements[achievement].title = chrome.i18n.getMessage(`${achievement}`);
    summary.achievements[achievement].description = chrome.i18n.getMessage(`${achievement}Description`);
    console.log('Summary achievement', summary.achievements);
  }

  console.log('Initialized achievements', summary.achievements);
}
