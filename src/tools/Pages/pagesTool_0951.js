/**
 * Generated Tool: pagesTool_0951
 * Domain: Pages
 * ID: 0951
 */
exports.pagesTool_0951 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0951:', error);
    throw error;
  }
};
