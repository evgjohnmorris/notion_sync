/**
 * Generated Tool: pagesTool_0347
 * Domain: Pages
 * ID: 0347
 */
exports.pagesTool_0347 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0347:', error);
    throw error;
  }
};
