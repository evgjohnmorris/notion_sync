/**
 * Generated Tool: searchTool_0062
 * Domain: Search
 * ID: 0062
 */
exports.searchTool_0062 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0062:', error);
    throw error;
  }
};
