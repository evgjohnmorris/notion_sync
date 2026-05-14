/**
 * Generated Tool: pagesTool_0665
 * Domain: Pages
 * ID: 0665
 */
exports.pagesTool_0665 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0665:', error);
    throw error;
  }
};
