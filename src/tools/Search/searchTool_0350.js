/**
 * Generated Tool: searchTool_0350
 * Domain: Search
 * ID: 0350
 */
exports.searchTool_0350 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0350:', error);
    throw error;
  }
};
