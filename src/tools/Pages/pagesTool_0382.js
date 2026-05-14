/**
 * Generated Tool: pagesTool_0382
 * Domain: Pages
 * ID: 0382
 */
exports.pagesTool_0382 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0382:', error);
    throw error;
  }
};
