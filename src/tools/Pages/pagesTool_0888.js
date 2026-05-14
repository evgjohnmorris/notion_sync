/**
 * Generated Tool: pagesTool_0888
 * Domain: Pages
 * ID: 0888
 */
exports.pagesTool_0888 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0888:', error);
    throw error;
  }
};
