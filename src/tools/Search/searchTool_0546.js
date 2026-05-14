/**
 * Generated Tool: searchTool_0546
 * Domain: Search
 * ID: 0546
 */
exports.searchTool_0546 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0546:', error);
    throw error;
  }
};
