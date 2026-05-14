/**
 * Generated Tool: searchTool_0884
 * Domain: Search
 * ID: 0884
 */
exports.searchTool_0884 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0884:', error);
    throw error;
  }
};
