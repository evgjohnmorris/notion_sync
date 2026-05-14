/**
 * Generated Tool: pagesTool_0184
 * Domain: Pages
 * ID: 0184
 */
exports.pagesTool_0184 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0184:', error);
    throw error;
  }
};
