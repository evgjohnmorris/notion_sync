/**
 * Generated Tool: pagesTool_0982
 * Domain: Pages
 * ID: 0982
 */
exports.pagesTool_0982 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0982:', error);
    throw error;
  }
};
