/**
 * Generated Tool: pagesTool_0966
 * Domain: Pages
 * ID: 0966
 */
exports.pagesTool_0966 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0966:', error);
    throw error;
  }
};
