/**
 * Generated Tool: pagesTool_0736
 * Domain: Pages
 * ID: 0736
 */
exports.pagesTool_0736 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0736:', error);
    throw error;
  }
};
