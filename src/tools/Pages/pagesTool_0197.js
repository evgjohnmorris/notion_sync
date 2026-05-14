/**
 * Generated Tool: pagesTool_0197
 * Domain: Pages
 * ID: 0197
 */
exports.pagesTool_0197 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0197:', error);
    throw error;
  }
};
