/**
 * Generated Tool: searchTool_0978
 * Domain: Search
 * ID: 0978
 */
exports.searchTool_0978 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0978:', error);
    throw error;
  }
};
