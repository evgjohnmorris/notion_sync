/**
 * Generated Tool: searchTool_0771
 * Domain: Search
 * ID: 0771
 */
exports.searchTool_0771 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0771:', error);
    throw error;
  }
};
