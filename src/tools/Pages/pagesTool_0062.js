/**
 * Generated Tool: pagesTool_0062
 * Domain: Pages
 * ID: 0062
 */
exports.pagesTool_0062 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0062:', error);
    throw error;
  }
};
