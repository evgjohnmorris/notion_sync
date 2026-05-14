/**
 * Generated Tool: pagesTool_0375
 * Domain: Pages
 * ID: 0375
 */
exports.pagesTool_0375 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0375:', error);
    throw error;
  }
};
