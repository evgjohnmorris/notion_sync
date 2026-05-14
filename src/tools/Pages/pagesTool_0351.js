/**
 * Generated Tool: pagesTool_0351
 * Domain: Pages
 * ID: 0351
 */
exports.pagesTool_0351 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0351:', error);
    throw error;
  }
};
