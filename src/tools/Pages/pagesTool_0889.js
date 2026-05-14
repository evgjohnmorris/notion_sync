/**
 * Generated Tool: pagesTool_0889
 * Domain: Pages
 * ID: 0889
 */
exports.pagesTool_0889 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0889:', error);
    throw error;
  }
};
