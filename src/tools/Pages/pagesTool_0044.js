/**
 * Generated Tool: pagesTool_0044
 * Domain: Pages
 * ID: 0044
 */
exports.pagesTool_0044 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0044:', error);
    throw error;
  }
};
