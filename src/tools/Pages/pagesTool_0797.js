/**
 * Generated Tool: pagesTool_0797
 * Domain: Pages
 * ID: 0797
 */
exports.pagesTool_0797 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0797:', error);
    throw error;
  }
};
