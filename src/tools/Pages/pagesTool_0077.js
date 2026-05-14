/**
 * Generated Tool: pagesTool_0077
 * Domain: Pages
 * ID: 0077
 */
exports.pagesTool_0077 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0077:', error);
    throw error;
  }
};
