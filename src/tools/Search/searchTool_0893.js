/**
 * Generated Tool: searchTool_0893
 * Domain: Search
 * ID: 0893
 */
exports.searchTool_0893 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0893:', error);
    throw error;
  }
};
