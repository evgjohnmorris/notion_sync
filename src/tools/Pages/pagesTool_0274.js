/**
 * Generated Tool: pagesTool_0274
 * Domain: Pages
 * ID: 0274
 */
exports.pagesTool_0274 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0274:', error);
    throw error;
  }
};
