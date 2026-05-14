/**
 * Generated Tool: searchTool_0532
 * Domain: Search
 * ID: 0532
 */
exports.searchTool_0532 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0532:', error);
    throw error;
  }
};
