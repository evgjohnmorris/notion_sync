/**
 * Generated Tool: pagesTool_0326
 * Domain: Pages
 * ID: 0326
 */
exports.pagesTool_0326 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0326:', error);
    throw error;
  }
};
