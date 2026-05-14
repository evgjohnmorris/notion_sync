/**
 * Generated Tool: pagesTool_0401
 * Domain: Pages
 * ID: 0401
 */
exports.pagesTool_0401 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0401:', error);
    throw error;
  }
};
