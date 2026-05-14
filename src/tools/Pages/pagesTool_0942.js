/**
 * Generated Tool: pagesTool_0942
 * Domain: Pages
 * ID: 0942
 */
exports.pagesTool_0942 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0942:', error);
    throw error;
  }
};
