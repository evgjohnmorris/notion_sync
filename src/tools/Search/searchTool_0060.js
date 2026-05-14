/**
 * Generated Tool: searchTool_0060
 * Domain: Search
 * ID: 0060
 */
exports.searchTool_0060 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0060:', error);
    throw error;
  }
};
