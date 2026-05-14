/**
 * Generated Tool: pagesTool_0976
 * Domain: Pages
 * ID: 0976
 */
exports.pagesTool_0976 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0976:', error);
    throw error;
  }
};
