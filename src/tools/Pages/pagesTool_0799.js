/**
 * Generated Tool: pagesTool_0799
 * Domain: Pages
 * ID: 0799
 */
exports.pagesTool_0799 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0799:', error);
    throw error;
  }
};
