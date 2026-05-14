/**
 * Generated Tool: searchTool_0480
 * Domain: Search
 * ID: 0480
 */
exports.searchTool_0480 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0480:', error);
    throw error;
  }
};
