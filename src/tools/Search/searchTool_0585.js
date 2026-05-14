/**
 * Generated Tool: searchTool_0585
 * Domain: Search
 * ID: 0585
 */
exports.searchTool_0585 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0585:', error);
    throw error;
  }
};
