/**
 * Generated Tool: pagesTool_0428
 * Domain: Pages
 * ID: 0428
 */
exports.pagesTool_0428 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0428:', error);
    throw error;
  }
};
