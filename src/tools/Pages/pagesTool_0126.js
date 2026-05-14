/**
 * Generated Tool: pagesTool_0126
 * Domain: Pages
 * ID: 0126
 */
exports.pagesTool_0126 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0126:', error);
    throw error;
  }
};
