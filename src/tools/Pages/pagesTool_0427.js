/**
 * Generated Tool: pagesTool_0427
 * Domain: Pages
 * ID: 0427
 */
exports.pagesTool_0427 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0427:', error);
    throw error;
  }
};
