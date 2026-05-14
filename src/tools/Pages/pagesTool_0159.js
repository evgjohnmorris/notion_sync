/**
 * Generated Tool: pagesTool_0159
 * Domain: Pages
 * ID: 0159
 */
exports.pagesTool_0159 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0159:', error);
    throw error;
  }
};
