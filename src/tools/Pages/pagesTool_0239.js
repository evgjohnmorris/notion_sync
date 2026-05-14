/**
 * Generated Tool: pagesTool_0239
 * Domain: Pages
 * ID: 0239
 */
exports.pagesTool_0239 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0239:', error);
    throw error;
  }
};
