/**
 * Generated Tool: pagesTool_0775
 * Domain: Pages
 * ID: 0775
 */
exports.pagesTool_0775 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0775:', error);
    throw error;
  }
};
