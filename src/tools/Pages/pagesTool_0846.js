/**
 * Generated Tool: pagesTool_0846
 * Domain: Pages
 * ID: 0846
 */
exports.pagesTool_0846 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0846:', error);
    throw error;
  }
};
