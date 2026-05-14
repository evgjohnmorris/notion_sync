/**
 * Generated Tool: searchTool_0355
 * Domain: Search
 * ID: 0355
 */
exports.searchTool_0355 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0355:', error);
    throw error;
  }
};
