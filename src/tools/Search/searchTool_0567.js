/**
 * Generated Tool: searchTool_0567
 * Domain: Search
 * ID: 0567
 */
exports.searchTool_0567 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0567:', error);
    throw error;
  }
};
