/**
 * Generated Tool: pagesTool_0826
 * Domain: Pages
 * ID: 0826
 */
exports.pagesTool_0826 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0826:', error);
    throw error;
  }
};
