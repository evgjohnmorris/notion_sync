/**
 * Generated Tool: pagesTool_0654
 * Domain: Pages
 * ID: 0654
 */
exports.pagesTool_0654 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0654:', error);
    throw error;
  }
};
