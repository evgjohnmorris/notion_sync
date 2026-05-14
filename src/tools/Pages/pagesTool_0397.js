/**
 * Generated Tool: pagesTool_0397
 * Domain: Pages
 * ID: 0397
 */
exports.pagesTool_0397 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0397:', error);
    throw error;
  }
};
