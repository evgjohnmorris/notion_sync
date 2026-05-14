/**
 * Generated Tool: pagesTool_0954
 * Domain: Pages
 * ID: 0954
 */
exports.pagesTool_0954 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0954:', error);
    throw error;
  }
};
