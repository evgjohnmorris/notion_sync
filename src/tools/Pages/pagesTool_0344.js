/**
 * Generated Tool: pagesTool_0344
 * Domain: Pages
 * ID: 0344
 */
exports.pagesTool_0344 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0344:', error);
    throw error;
  }
};
