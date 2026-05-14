/**
 * Generated Tool: searchTool_0249
 * Domain: Search
 * ID: 0249
 */
exports.searchTool_0249 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0249:', error);
    throw error;
  }
};
