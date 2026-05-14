/**
 * Generated Tool: pagesTool_0862
 * Domain: Pages
 * ID: 0862
 */
exports.pagesTool_0862 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0862:', error);
    throw error;
  }
};
