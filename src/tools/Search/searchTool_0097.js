/**
 * Generated Tool: searchTool_0097
 * Domain: Search
 * ID: 0097
 */
exports.searchTool_0097 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0097:', error);
    throw error;
  }
};
