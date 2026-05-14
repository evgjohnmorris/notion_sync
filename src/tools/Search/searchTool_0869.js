/**
 * Generated Tool: searchTool_0869
 * Domain: Search
 * ID: 0869
 */
exports.searchTool_0869 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0869:', error);
    throw error;
  }
};
