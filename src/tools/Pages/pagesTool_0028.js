/**
 * Generated Tool: pagesTool_0028
 * Domain: Pages
 * ID: 0028
 */
exports.pagesTool_0028 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0028:', error);
    throw error;
  }
};
