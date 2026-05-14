/**
 * Generated Tool: pagesTool_0151
 * Domain: Pages
 * ID: 0151
 */
exports.pagesTool_0151 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0151:', error);
    throw error;
  }
};
