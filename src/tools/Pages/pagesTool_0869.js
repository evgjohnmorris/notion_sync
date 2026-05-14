/**
 * Generated Tool: pagesTool_0869
 * Domain: Pages
 * ID: 0869
 */
exports.pagesTool_0869 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0869:', error);
    throw error;
  }
};
