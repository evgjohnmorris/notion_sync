/**
 * Generated Tool: searchTool_0594
 * Domain: Search
 * ID: 0594
 */
exports.searchTool_0594 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0594:', error);
    throw error;
  }
};
