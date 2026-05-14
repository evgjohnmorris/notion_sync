/**
 * Generated Tool: searchTool_0959
 * Domain: Search
 * ID: 0959
 */
exports.searchTool_0959 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0959:', error);
    throw error;
  }
};
