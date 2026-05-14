/**
 * Generated Tool: pagesTool_0940
 * Domain: Pages
 * ID: 0940
 */
exports.pagesTool_0940 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0940:', error);
    throw error;
  }
};
