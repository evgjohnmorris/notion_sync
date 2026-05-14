/**
 * Generated Tool: pagesTool_0786
 * Domain: Pages
 * ID: 0786
 */
exports.pagesTool_0786 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0786:', error);
    throw error;
  }
};
