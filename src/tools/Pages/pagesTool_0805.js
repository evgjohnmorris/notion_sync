/**
 * Generated Tool: pagesTool_0805
 * Domain: Pages
 * ID: 0805
 */
exports.pagesTool_0805 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0805:', error);
    throw error;
  }
};
