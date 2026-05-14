/**
 * Generated Tool: searchTool_0344
 * Domain: Search
 * ID: 0344
 */
exports.searchTool_0344 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0344:', error);
    throw error;
  }
};
