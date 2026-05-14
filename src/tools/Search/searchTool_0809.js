/**
 * Generated Tool: searchTool_0809
 * Domain: Search
 * ID: 0809
 */
exports.searchTool_0809 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0809:', error);
    throw error;
  }
};
