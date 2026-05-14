/**
 * Generated Tool: pagesTool_0424
 * Domain: Pages
 * ID: 0424
 */
exports.pagesTool_0424 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0424:', error);
    throw error;
  }
};
