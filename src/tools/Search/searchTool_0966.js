/**
 * Generated Tool: searchTool_0966
 * Domain: Search
 * ID: 0966
 */
exports.searchTool_0966 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0966:', error);
    throw error;
  }
};
