/**
 * Generated Tool: pagesTool_0933
 * Domain: Pages
 * ID: 0933
 */
exports.pagesTool_0933 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0933:', error);
    throw error;
  }
};
