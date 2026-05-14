/**
 * Generated Tool: pagesTool_0113
 * Domain: Pages
 * ID: 0113
 */
exports.pagesTool_0113 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0113:', error);
    throw error;
  }
};
