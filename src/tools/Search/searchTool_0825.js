/**
 * Generated Tool: searchTool_0825
 * Domain: Search
 * ID: 0825
 */
exports.searchTool_0825 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0825:', error);
    throw error;
  }
};
