/**
 * Generated Tool: pagesTool_0139
 * Domain: Pages
 * ID: 0139
 */
exports.pagesTool_0139 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0139:', error);
    throw error;
  }
};
