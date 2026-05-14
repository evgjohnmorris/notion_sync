/**
 * Generated Tool: searchTool_0880
 * Domain: Search
 * ID: 0880
 */
exports.searchTool_0880 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0880:', error);
    throw error;
  }
};
