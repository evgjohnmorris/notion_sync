/**
 * Generated Tool: pagesTool_0423
 * Domain: Pages
 * ID: 0423
 */
exports.pagesTool_0423 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0423:', error);
    throw error;
  }
};
