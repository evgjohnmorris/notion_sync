/**
 * Generated Tool: pagesTool_0975
 * Domain: Pages
 * ID: 0975
 */
exports.pagesTool_0975 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0975:', error);
    throw error;
  }
};
