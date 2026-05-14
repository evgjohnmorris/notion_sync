/**
 * Generated Tool: pagesTool_0464
 * Domain: Pages
 * ID: 0464
 */
exports.pagesTool_0464 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0464:', error);
    throw error;
  }
};
