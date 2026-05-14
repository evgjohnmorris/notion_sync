/**
 * Generated Tool: pagesTool_0426
 * Domain: Pages
 * ID: 0426
 */
exports.pagesTool_0426 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0426:', error);
    throw error;
  }
};
