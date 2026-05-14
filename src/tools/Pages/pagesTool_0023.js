/**
 * Generated Tool: pagesTool_0023
 * Domain: Pages
 * ID: 0023
 */
exports.pagesTool_0023 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0023:', error);
    throw error;
  }
};
