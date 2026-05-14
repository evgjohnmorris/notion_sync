/**
 * Generated Tool: searchTool_0785
 * Domain: Search
 * ID: 0785
 */
exports.searchTool_0785 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0785:', error);
    throw error;
  }
};
