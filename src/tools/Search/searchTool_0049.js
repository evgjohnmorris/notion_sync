/**
 * Generated Tool: searchTool_0049
 * Domain: Search
 * ID: 0049
 */
exports.searchTool_0049 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0049:', error);
    throw error;
  }
};
