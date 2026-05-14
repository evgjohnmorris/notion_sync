/**
 * Generated Tool: pagesTool_0480
 * Domain: Pages
 * ID: 0480
 */
exports.pagesTool_0480 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0480:', error);
    throw error;
  }
};
