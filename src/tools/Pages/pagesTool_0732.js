/**
 * Generated Tool: pagesTool_0732
 * Domain: Pages
 * ID: 0732
 */
exports.pagesTool_0732 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0732:', error);
    throw error;
  }
};
