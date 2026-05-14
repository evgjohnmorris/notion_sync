/**
 * Generated Tool: pagesTool_0957
 * Domain: Pages
 * ID: 0957
 */
exports.pagesTool_0957 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0957:', error);
    throw error;
  }
};
