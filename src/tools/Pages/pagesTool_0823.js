/**
 * Generated Tool: pagesTool_0823
 * Domain: Pages
 * ID: 0823
 */
exports.pagesTool_0823 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0823:', error);
    throw error;
  }
};
