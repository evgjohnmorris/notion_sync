/**
 * Generated Tool: pagesTool_0440
 * Domain: Pages
 * ID: 0440
 */
exports.pagesTool_0440 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0440:', error);
    throw error;
  }
};
