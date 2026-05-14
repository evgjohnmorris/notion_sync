/**
 * Generated Tool: pagesTool_0923
 * Domain: Pages
 * ID: 0923
 */
exports.pagesTool_0923 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0923:', error);
    throw error;
  }
};
