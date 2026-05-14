/**
 * Generated Tool: searchTool_0182
 * Domain: Search
 * ID: 0182
 */
exports.searchTool_0182 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0182:', error);
    throw error;
  }
};
