/**
 * Generated Tool: searchTool_0755
 * Domain: Search
 * ID: 0755
 */
exports.searchTool_0755 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0755:', error);
    throw error;
  }
};
