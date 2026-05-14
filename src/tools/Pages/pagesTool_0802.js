/**
 * Generated Tool: pagesTool_0802
 * Domain: Pages
 * ID: 0802
 */
exports.pagesTool_0802 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0802:', error);
    throw error;
  }
};
