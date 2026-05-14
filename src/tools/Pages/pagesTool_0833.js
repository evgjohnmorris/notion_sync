/**
 * Generated Tool: pagesTool_0833
 * Domain: Pages
 * ID: 0833
 */
exports.pagesTool_0833 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0833:', error);
    throw error;
  }
};
