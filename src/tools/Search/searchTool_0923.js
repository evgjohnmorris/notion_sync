/**
 * Generated Tool: searchTool_0923
 * Domain: Search
 * ID: 0923
 */
exports.searchTool_0923 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0923:', error);
    throw error;
  }
};
